"""Return the next document eligible for generation.

Eligible means: status is `queued`, phase is not 3, and every entry in
depends_on has status `approved`. Without the dependency check the loop will
happily generate the API spec before the vision exists.
"""
from pathlib import Path
import yaml

root = Path(__file__).resolve().parents[1]
data = yaml.safe_load((root / "manifest.yaml").read_text())
items = data["generation_order"]
status = {i["path"]: i["status"] for i in items}

blocked = []
for item in items:
    if item["status"] != "queued" or item.get("phase") == 3:
        continue
    missing = [d for d in item.get("depends_on", []) if status.get(d) != "approved"]
    if missing:
        blocked.append((item["path"], missing))
        continue
    print(item["path"])
    if item.get("note"):
        print(f"  note: {' '.join(item['note'].split())}")
    break
else:
    if blocked:
        print("Nothing eligible. The queue is dependency-blocked:\n")
        for path, missing in blocked[:5]:
            print(f"  {path}")
            for m in missing:
                print(f"    waiting on {m} ({status.get(m, 'unknown')})")
        print("\nApprove an upstream document to unblock.")
    else:
        print("No queued documents remain.")
