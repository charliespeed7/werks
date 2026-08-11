"""Show queue progress by phase."""
from pathlib import Path
from collections import Counter
import yaml

root = Path(__file__).resolve().parents[1]
data = yaml.safe_load((root / "manifest.yaml").read_text())
items = data["generation_order"]

labels = {1: "Phase 1  MVP-blocking", 2: "Phase 2  ship and sell", 3: "Phase 3  deferred"}
for phase in (1, 2, 3):
    group = [i for i in items if i.get("phase") == phase]
    if not group:
        continue
    counts = Counter(i["status"] for i in group)
    done = counts["approved"]
    print(f"\n{labels[phase]}  —  {done}/{len(group)} approved")
    for s in data["status_values"]:
        if counts[s]:
            print(f"    {s:>9}: {counts[s]}")

total = len(items)
approved = sum(1 for i in items if i["status"] == "approved")
print(f"\nOverall: {approved}/{total} approved")
