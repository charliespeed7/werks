"""Set a document's status in manifest.yaml.

The manifest is edited as text, not round-tripped through yaml.safe_dump.
safe_dump would strip every comment in the file, including the phase
definitions and the section headers that explain what the queue means, and
would reflow the block-scalar `note:` fields. Only the single `status:` line
belonging to the target entry is rewritten; every other byte is preserved.

The manifest is still parsed for validation, which is read-only and safe.
"""
from pathlib import Path
import re
import sys
import yaml

if len(sys.argv) != 3:
    raise SystemExit("Usage: python scripts/set_status.py <path> <status>")

target, status = sys.argv[1], sys.argv[2]
root = Path(__file__).resolve().parents[1]
manifest_path = root / "manifest.yaml"
text = manifest_path.read_text()
data = yaml.safe_load(text)

if status not in data["status_values"]:
    valid = ", ".join(data["status_values"])
    raise SystemExit(f"Invalid status: {status!r}\nValid values: {valid}")

if not any(item["path"] == target for item in data["generation_order"]):
    raise SystemExit(f"Path not found in manifest: {target}")

lines = text.splitlines(keepends=True)

# Find the entry. Anchoring on `- path:` at column zero means a path appearing
# inside a depends_on list can never be matched by mistake.
start = next(
    (
        i
        for i, line in enumerate(lines)
        if re.match(rf"^- path:\s+{re.escape(target)}\s*$", line)
    ),
    None,
)
if start is None:
    raise SystemExit(
        f"{target} parses as a manifest entry but its `- path:` line could not "
        f"be located as text. The manifest formatting may have changed."
    )

# The entry ends at the next unindented line: the next `- path:`, a section
# comment, or a top-level key such as `status_values:`.
end = next(
    (
        j
        for j in range(start + 1, len(lines))
        if lines[j].strip() and not lines[j].startswith((" ", "\t"))
    ),
    len(lines),
)

for j in range(start, end):
    match = re.match(r"^(\s+status:[ \t]*)(\S+)([ \t]*\r?\n?)$", lines[j])
    if match:
        indent, old, trailing = match.groups()
        if old == status:
            print(f"{target}: already {status}, unchanged")
            break
        lines[j] = f"{indent}{status}{trailing}"
        manifest_path.write_text("".join(lines))
        print(f"{target}: {old} -> {status}")
        break
else:
    raise SystemExit(f"No status line found for entry: {target}")
