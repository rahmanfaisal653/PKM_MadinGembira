import fitz
import os

pdf_path = "/home/muhammadfaisalrahman/Ko+Lab Project/PKM/madingembira/iqro_1-6.pdf"
out_dir = "/home/muhammadfaisalrahman/Ko+Lab Project/PKM/madingembira/iqro_pages_png"
os.makedirs(out_dir, exist_ok=True)

doc = fitz.open(pdf_path)

# Render selected pages: covers, first content pages of each jilid
# Based on typical Iqro structure:
# Jilid 1: ~pages 1-32, Jilid 2: ~33-64, Jilid 3: ~65-96
# Jilid 4: ~97-128, Jilid 5: ~129-160, Jilid 6: ~161-200
# We'll render pages 1-10, 33-36, 65-68, 97-100, 129-132, 161-164, 198-200
pages_to_render = list(range(1, 11)) + list(range(33, 37)) + list(range(65, 69)) + \
                  list(range(97, 101)) + list(range(129, 133)) + list(range(161, 165)) + \
                  list(range(198, 201))

for pg_num in pages_to_render:
    if pg_num > len(doc):
        continue
    page = doc[pg_num - 1]
    mat = fitz.Matrix(2.0, 2.0)  # 2x zoom for clarity
    pix = page.get_pixmap(matrix=mat)
    out_path = os.path.join(out_dir, f"page_{pg_num:03d}.png")
    pix.save(out_path)
    print(f"Saved page {pg_num} -> {out_path}")

doc.close()
print("Done.")
