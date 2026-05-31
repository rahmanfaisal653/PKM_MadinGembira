import fitz  # pymupdf
import json

pdf_path = "/home/muhammadfaisalrahman/Ko+Lab Project/PKM/madingembira/iqro_1-6.pdf"
doc = fitz.open(pdf_path)

total_pages = len(doc)
print(f"Total pages: {total_pages}")
print("="*60)

# Extract text from every page, store results
results = {}
for i in range(total_pages):
    page = doc[i]
    text = page.get_text("text").strip()
    results[i+1] = text

doc.close()

# Print all pages with content
for pg, text in results.items():
    print(f"\n--- PAGE {pg} ---")
    if text:
        print(repr(text[:500]))
    else:
        print("[NO TEXT - image only]")

# Save full results
with open("/home/muhammadfaisalrahman/Ko+Lab Project/PKM/madingembira/iqro_text_dump.json", "w", encoding="utf-8") as f:
    json.dump(results, f, ensure_ascii=False, indent=2)

print("\n\nSaved to iqro_text_dump.json")
