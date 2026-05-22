# Audit Konten Islam MadinGembira

Tanggal audit: 2026-05-22

> Catatan penting: audit ini adalah pemeriksaan awal berbasis perbandingan dengan rujukan umum Al-Qur'an, hadis populer/sahih yang dikenal, dan literatur edukasi Islam. Ini bukan fatwa. Untuk rilis edukasi anak, hasil akhir tetap perlu divalidasi ustadz/ustadzah/guru ngaji.

## Ringkasan Status

| Area | Status | Catatan utama |
|---|---|---|
| Doa Harian | Perlu kurasi | Data diambil dari API eksternal, belum ada status hadis per doa di dataset lokal. |
| Kisah Nabi | Banyak perlu koreksi | Ada beberapa kesalahan fakta dan banyak detail populer yang perlu diberi label riwayat populer. |
| Tajwid | Cukup sebagai dasar, perlu istilah baku | Beberapa istilah kurang baku/terlalu lokal; materi belum lengkap. |
| Juz Amma | Perlu pengamanan sumber | Bergantung API eksternal dan memakai `dangerouslySetInnerHTML`. |
| Iqro | Perlu revisi besar | Data Iqro generated/random, belum bisa disebut mengikuti metode Iqro standar. |

## Prioritas Koreksi Cepat

1. `src/data/kisahNabi.ts`: perbaiki kesalahan Nabi Yusuf bertemu ayahnya yang disebut "mendiang"; Nabi Ya'qub masih hidup saat bertemu Nabi Yusuf.
2. `src/data/kisahNabi.ts`: koreksi lokasi Nabi Ismail dari Palestina/Syam menjadi Makkah sebagai konteks utama kisah Hajar, Zamzam, dan Ka'bah.
3. `src/data/kisahNabi.ts`: koreksi lokasi dakwah Nabi Luth; bukan Babilonia/Irak, tetapi wilayah kaum Sodom sekitar Laut Mati/Palestina-Yordania menurut tradisi umum.
4. `src/data/kisahNabi.ts`: ganti "Samiri penyihir" menjadi "Samiri, orang yang menyesatkan Bani Israil".
5. `src/data/kisahNabi.ts`: jangan memastikan yang diserupakan saat penyaliban Nabi Isa adalah Yudas; Al-Qur'an hanya menyebut "diserupakan bagi mereka".
6. `src/data/kisahNabi.ts`: ubah "buah Khuldi" menjadi "buah/pohon terlarang" atau beri catatan bahwa Khuldi adalah istilah populer.
7. `src/data/iqroData.ts`: jangan klaim sebagai Iqro standar jika data masih random/generatif.
8. `src/pages/TajwidPage.tsx` dan `src/pages/JuzAmmaPage.tsx`: ganti istilah `Mad Wajib / Sorong` menjadi istilah lebih baku, misalnya `Mad Wajib Muttashil / Mad Jaiz Munfashil` jika memang itu maksudnya.

## Audit Doa Harian

### Sumber dan Cara App Mengambil Data

- Doa diambil dari `https://equran.id/api/doa` pada:
  - `src/pages/DoaPage.tsx`
  - `src/pages/InteractiveZonePage.tsx`
- Filter doa ramah anak memakai:
  - `KID_FRIENDLY_KEYWORDS`
  - `EXCLUDED_KEYWORDS`
  - `ALWAYS_ALLOWED_IDS`
  - `EXCLUDED_IDS`
- App menampilkan field API seperti nama, Arab, transliterasi, arti, dan keterangan.

### Temuan

| Temuan | Status | Penjelasan |
|---|---|---|
| Doa bersumber API eksternal | Perlu perhatian | Materi agama inti sebaiknya tidak sepenuhnya bergantung pada API yang bisa berubah. |
| Belum ada dataset lokal terverifikasi | Perlu koreksi | Sulit memastikan setiap doa shahih/hasan/dhaif tanpa data lokal berisi sumber dan status. |
| Belum ada status hadis per doa | Perlu koreksi | UI belum menampilkan apakah doa berasal dari Al-Qur'an, hadis sahih, hasan, atau doa populer. |
| Ada koreksi typo `Nabil Ibrahim` ke `Nabi Ibrahim` | Indikasi perlu kurasi | Ini menunjukkan sumber API bisa punya typo sehingga perlu kurasi manual. |
| Keterangan doa cukup panjang untuk anak | Perlu UX review | Beberapa keterangan berisi penjelasan panjang dan istilah dewasa; perlu disederhanakan untuk anak. |

### Rekomendasi Doa

Buat dataset lokal, misalnya `src/data/doaHarian.ts`, dengan struktur:

```ts
{
  id: 'sebelum-tidur',
  title: 'Doa Sebelum Tidur',
  arabic: '...',
  latin: '...',
  meaning: '...',
  category: 'Tidur & Bangun',
  source: 'HR. Bukhari',
  status: 'sahih',
  auditNote: 'Cocok untuk anak dan umum diajarkan.'
}
```

Untuk doa yang lazim dipakai, cek ulang minimal melalui rujukan seperti Hisnul Muslim, Sahih Bukhari/Muslim, Abu Dawud, Tirmidzi, atau buku doa anak yang sudah ditashih.

## Audit Kisah Nabi

### Status Umum

Kisah nabi di `src/data/kisahNabi.ts` secara tema sudah Islami dan mencakup 25 nabi. Namun ada tiga jenis masalah:

1. Kesalahan fakta yang perlu segera dikoreksi.
2. Detail populer/Israiliyyat yang tidak eksplisit di Al-Qur'an/hadis sahih.
3. Redaksi yang terlalu memastikan hal yang diperselisihkan atau tidak disebut dalil.

### Temuan Detail

| Nabi/Topik | Lokasi file | Status | Temuan | Rekomendasi |
|---|---:|---|---|---|
| Adam | `src/data/kisahNabi.ts` | Perlu koreksi ringan | Disebut malaikat dan jin diperintah sujud. Al-Qur'an menyebut malaikat diperintah sujud; Iblis menolak dan ia dari golongan jin. | Tulis: Allah memerintahkan para malaikat untuk sujud; Iblis menolak karena sombong. |
| Adam | `src/data/kisahNabi.ts` | Perlu kehati-hatian | "Buah Khuldi" adalah istilah populer; Al-Qur'an menyebut pohon terlarang, dan kata khuldi muncul sebagai bujukan setan. | Ganti menjadi "buah/pohon terlarang". Rujukan: QS 2:35, QS 7:19-22, QS 20:120. |
| Idris | `src/data/kisahNabi.ts` | Riwayat populer | Manusia pertama membaca/menulis, menjahit, astronomi, matematika tidak eksplisit dalam Al-Qur'an/hadis sahih. | Beri label "menurut sebagian riwayat" atau sederhanakan ke sifat saleh dan diangkat derajatnya. QS 19:56-57. |
| Idris | `src/data/kisahNabi.ts` | Riwayat populer | Idris melihat surga perlu sumber kuat. | Hapus atau beri label riwayat populer. |
| Nuh | `src/data/kisahNabi.ts` | Perlu presisi | 950 tahun sebagai masa dakwah; QS 29:14 menyebut tinggal di tengah kaum 950 tahun. | Ganti menjadi "tinggal/berdakwah sangat lama, disebut 950 tahun di tengah kaumnya". |
| Nuh | `src/data/kisahNabi.ts` | Riwayat populer | Nama anak Nuh "Kan'an" tidak disebut dalam Al-Qur'an. | Tulis "salah seorang putranya". QS 11:42-43. |
| Hud | `src/data/kisahNabi.ts` | Perlu label | Kekeringan 3 tahun adalah detail populer. | Fokus pada azab angin kencang/dingin 7 malam 8 hari. QS 69:6-7. |
| Saleh | `src/data/kisahNabi.ts` | Perlu label | Unta keluar dari batu adalah detail populer; Al-Qur'an menyebut unta Allah sebagai tanda. | Tulis sebagai mukjizat unta betina, tanpa memastikan keluar dari batu. QS 11:64. |
| Ibrahim | `src/data/kisahNabi.ts` | Perlu label sejarah | Lahir di Ur/Babilonia adalah rekonstruksi sejarah, bukan ayat. | Boleh sebagai info sejarah, bukan klaim dalil agama. |
| Luth | `src/data/kisahNabi.ts` | Perlu koreksi | Lokasi dakwah ditulis Babilonia/Irak; kisah kaum Luth terkait Sodom sekitar Laut Mati/Palestina-Yordania menurut tradisi umum. | Ganti lokasi menjadi wilayah Sodom/Laut Mati. QS 11:77-83. |
| Luth | `src/data/kisahNabi.ts` | Perlu presisi | Malaikat disebut dua; Al-Qur'an tidak memastikan jumlah. | Tulis "beberapa malaikat/para utusan". |
| Ismail | `src/data/kisahNabi.ts` | Perlu koreksi | `tmp` Ismail ditulis Palestina/Syam. Kisah utama Ismail adalah Makkah. | Ganti ke Makkah. Rujukan QS 14:37, QS 2:127. |
| Ismail | `src/data/kisahNabi.ts` | Perlu catatan | Al-Qur'an tidak menyebut nama anak yang disembelih secara eksplisit, meski pendapat masyhur adalah Ismail. | Boleh memakai Ismail, tambahkan redaksi hati-hati bila ingin akademis. QS 37:102. |
| Ishaq | `src/data/kisahNabi.ts` | Riwayat populer | Usia Sarah sekitar 90 tahun tidak disebut Al-Qur'an. | Tulis "sudah tua". QS 11:71-73. |
| Yusuf | `src/data/kisahNabi.ts` | Salah/fatal | Teks menyebut Yusuf bersatu kembali dengan "mendiang ayahnya"; Ya'qub masih hidup. | Wajib ganti: Yusuf bertemu kembali dengan ayah dan keluarganya di Mesir. QS 12:99-100. |
| Ayyub | `src/data/kisahNabi.ts` | Perlu adab | Penyakit kulit parah dan dijauhi masyarakat bisa merendahkan martabat nabi. | Tulis "ditimpa penyakit berat" tanpa detail menjijikkan. QS 21:83-84. |
| Syu'aib | `src/data/kisahNabi.ts` | Perlu koreksi | Madyan dan Ashab al-Aykah tercampur; azab juga tercampur. | Pisahkan: Madyan terkait gempa/suara keras; Ashab al-Aykah terkait azab hari naungan. QS 7:91, QS 11:94, QS 26:189. |
| Musa | `src/data/kisahNabi.ts` | Perlu koreksi | Hujan batu es bukan azab Fir'aun yang disebut Al-Qur'an. | Gunakan banjir, belalang, kutu, katak, darah. QS 7:133. |
| Harun/Samiri | `src/data/kisahNabi.ts` | Perlu koreksi | Samiri disebut penyihir. | Ganti: Samiri menyesatkan Bani Israil dengan patung anak sapi. QS 20:85-97. |
| Zulkifli | `src/data/kisahNabi.ts` | Riwayat populer/lemah | Zulkifli sebagai Basyar putra Ayyub tidak kuat. | Tulis yang pasti: termasuk orang sabar dan saleh. QS 21:85-86, QS 38:48. |
| Daud | `src/data/kisahNabi.ts` | Perlu koreksi ringan | Disebut pepohonan bertasbih bersama Daud; ayat menyebut gunung dan burung. | Ganti menjadi gunung-gunung dan burung-burung. QS 34:10, QS 38:18-19. |
| Sulaiman | `src/data/kisahNabi.ts` | Perlu presisi | Pemindahan singgasana Balqis dikaitkan dengan Ifrit/berkedip kurang tepat. | QS 27:39-40: Ifrit menawarkan sebelum Sulaiman berdiri; orang berilmu dari Kitab membawa sebelum mata berkedip. |
| Ilyasa | `src/data/kisahNabi.ts` | Riwayat populer | Detail sakit dan sembuh karena doa Ilyas tidak ada dalam Al-Qur'an. | Hapus atau beri label riwayat populer. |
| Yunus | `src/data/kisahNabi.ts` | Perlu presisi | Durasi tiga hari di perut ikan tidak disebut Al-Qur'an; "ikan paus/mamalia" terlalu spesifik. | Gunakan "ikan besar" dan tanpa durasi pasti. QS 21:87, QS 37:142. |
| Zakariya | `src/data/kisahNabi.ts` | Perlu presisi | Maryam disebut keponakan; Al-Qur'an menegaskan Zakariya mengasuh/menanggung Maryam. | Tulis "Zakariya menjadi pengasuh Maryam". QS 3:37. |
| Yahya | `src/data/kisahNabi.ts` | Riwayat sejarah | Kisah dieksekusi karena menentang raja adalah riwayat sejarah/Israiliyyat, bukan ayat. | Beri label "menurut sebagian riwayat sejarah" atau sederhanakan. |
| Isa | `src/data/kisahNabi.ts` | Perlu redaksi akidah | "Firman ruh langsung dari Allah" bisa ambigu. | Gunakan redaksi Qur'ani: Isa adalah kalimat dari Allah yang disampaikan kepada Maryam dan ruh dari-Nya, bukan ketuhanan. QS 4:171. |
| Isa | `src/data/kisahNabi.ts` | Perlu koreksi | Mukjizat perlu selalu dikaitkan dengan "dengan izin Allah". | Tambahkan frasa itu pada semua mukjizat. QS 3:49, QS 5:110. |
| Isa | `src/data/kisahNabi.ts` | Perlu kehati-hatian | Yang diserupakan saat penyaliban dipastikan Yudas. | Jangan pastikan nama; Al-Qur'an hanya menyebut diserupakan. QS 4:157-158. |
| Muhammad | `src/data/kisahNabi.ts` | Perlu koreksi redaksi | "setelah masa kiamat berakhir" keliru; risalah Nabi berlaku sampai hari kiamat. | Ganti menjadi "hingga hari kiamat". QS 33:40, QS 21:107. |
| Isra Mi'raj | `src/data/kisahNabi.ts` | Sensitif akidah | "bertatap hadap penciptanya" terlalu memastikan masalah yang diperselisihkan. | Tulis: Nabi menerima perintah shalat dalam peristiwa Isra Mi'raj. QS 17:1; QS 53:13-18; hadis Bukhari-Muslim. |

## Audit Tajwid

### Temuan

| Materi | Status | Catatan |
|---|---|---|
| Ghunnah | Aman secara dasar | Definisi dengung 2 harakat pada nun/mim tasydid sesuai pembelajaran dasar. |
| Qalqalah | Perlu perbaikan istilah | Huruf `ط` disebut "Tha"; untuk anak Indonesia bisa membingungkan dengan `ث`. Gunakan `Tho/Tha tebal (ط)` atau tampilkan huruf Arab saja. |
| Ikhfa | Aman secara dasar | Definisi umum benar, tetapi belum menyebut huruf-hurufnya. |
| Iqlab | Aman, perlu kejelasan latin | Konsep benar; transliterasi contoh sebaiknya dijelaskan sebagai cara baca, bukan teks asli. |
| Mad Thabii | Perlu ejaan baku | Ejaan umum: `Mad Thabi'i` atau `Mad Tabi'i`. |
| Mad Wajib / Sorong | Perlu koreksi | "Sorong" istilah lokal; gunakan istilah baku atau beri catatan lokal. |
| Idgham | Aman secara dasar | Baik untuk pengantar, tetapi belum memecah bighunnah/bilaghunnah. |
| Tidak Dibaca | Perlu detail | Konsep ada, tapi sebaiknya dikaitkan dengan contoh hukum yang jelas seperti alif lam syamsiyah. |

### Rekomendasi Tajwid

- Ubah judul halaman menjadi "Belajar Tajwid Dasar" jika materi tetap ringkas.
- Tambahkan catatan bahwa materi ini pengantar, bukan pengganti talaqqi/guru.
- Samakan warna dan istilah antara halaman Tajwid dan Juz Amma.
- Jika untuk anak Madin, boleh pertahankan istilah lokal, tapi beri padanan istilah baku.

## Audit Juz Amma

### Temuan

| Temuan | Status | Penjelasan |
|---|---|---|
| Surah 78-114 | Aman | Ini benar sebagai Juz Amma/Juz 30. |
| API Quranhub | Perlu perhatian | Bergantung internet/API eksternal. |
| `dangerouslySetInnerHTML` | Risiko teknis | Data HTML dari API perlu disanitize atau dirender sebagai React node. |
| Mapping warna tajwid | Perlu audit lanjutan | Kode tajwid dari API disederhanakan; perlu pastikan semua kode terpetakan benar. |
| Tidak ada teks lokal | Perlu peningkatan | Untuk aplikasi anak, sebaiknya Juz Amma lokal/cache agar stabil. |

## Audit Iqro

### Temuan

| Temuan | Status | Penjelasan |
|---|---|---|
| Data generated/random | Bermasalah untuk klaim Iqro | `src/data/iqroData.ts` menghasilkan halaman secara programatis, bukan dataset Iqro standar. |
| Progress jilid belum standar | Perlu revisi | Urutan belajar tidak tampak mengikuti metode Iqro resmi. |
| Jilid 2 mengandung kasrah | Perlu koreksi | Ada contoh seperti `لَعِبَ` padahal level dikomentari sebagai fathah. |
| Potongan ayat untuk jilid 4-6 | Perlu kurikulum | Bisa baik, tapi terlalu melompat jika tanpa susunan bertahap. |
| Huruf `ء`, `ا`, `أ` tidak konsisten | Perlu standardisasi | `constants.ts` memakai `ا` dan `ء`, sedangkan generator memakai `أ`. |

### Rekomendasi Iqro

- Jika ingin aman secara konten, ubah label dari "Belajar Iqro" menjadi "Latihan Membaca Hijaiyah" sampai dataset benar-benar mengikuti metode Iqro.
- Susun ulang data manual per jilid/halaman dengan guru ngaji.
- Jangan pakai random generator untuk materi hafalan/bacaan pokok.
- Standarkan transliterasi huruf untuk anak Indonesia: Alif, Ba, Ta, Tsa, Jim, Ha, Kho, Dal, Dzal, Ra, Zai, Sin, Syin, Shod, Dhod, Tho, Zho, 'Ain, Ghain, Fa, Qof, Kaf, Lam, Mim, Nun, Wau, Ha, Hamzah, Ya.

## Rujukan Ayat Utama untuk Validasi Kisah Nabi

- Adam: QS Al-Baqarah 2:30-37, QS Al-A'raf 7:11-27, QS Taha 20:115-123.
- Idris: QS Maryam 19:56-57, QS Al-Anbiya 21:85-86.
- Nuh: QS Hud 11:25-49, QS Nuh 71:1-28, QS Al-'Ankabut 29:14.
- Hud: QS Al-A'raf 7:65-72, QS Hud 11:50-60, QS Al-Haqqah 69:6-8.
- Saleh: QS Hud 11:61-68, QS Al-A'raf 7:73-79, QS Asy-Syams 91:11-15.
- Ibrahim: QS Al-Anbiya 21:51-70, QS As-Saffat 37:83-113, QS Al-Baqarah 2:124-132.
- Luth: QS Hud 11:77-83, QS Al-Hijr 15:61-77, QS Al-A'raf 7:80-84.
- Ismail: QS Ibrahim 14:37, QS As-Saffat 37:100-107, QS Al-Baqarah 2:125-129.
- Ishaq, Ya'qub, Yusuf: QS Hud 11:71-73, QS Yusuf 12:1-101.
- Ayyub: QS Al-Anbiya 21:83-84, QS Sad 38:41-44.
- Syu'aib: QS Hud 11:84-95, QS Al-A'raf 7:85-93, QS Asy-Syu'ara 26:176-191.
- Musa dan Harun: QS Taha 20:9-98, QS Al-A'raf 7:103-156, QS Al-Qasas 28:3-46.
- Zulkifli: QS Al-Anbiya 21:85-86, QS Sad 38:48.
- Daud dan Sulaiman: QS Al-Baqarah 2:246-251, QS Saba' 34:10-14, QS An-Naml 27:15-44.
- Ilyas dan Ilyasa: QS As-Saffat 37:123-132, QS Al-An'am 6:86, QS Sad 38:48.
- Yunus: QS Al-Anbiya 21:87-88, QS As-Saffat 37:139-148, QS Yunus 10:98.
- Zakariya, Yahya, Isa: QS Ali 'Imran 3:37-59, QS Maryam 19:2-36, QS An-Nisa 4:157-171, QS Al-Ma'idah 5:110.
- Muhammad: QS Al-Ahzab 33:40, QS Al-Anbiya 21:107, QS Al-Isra 17:1, QS Al-Hijr 15:9.

## Rencana Perbaikan Bertahap

### Tahap 1 - Koreksi Kesalahan Jelas

- Perbaiki kisah Yusuf/Ya'qub.
- Perbaiki lokasi Ismail dan Luth.
- Perbaiki redaksi Samiri, Isa, Isra Mi'raj, dan buah Khuldi.
- Perbaiki typo kecil seperti `scorang`, `dimanakan`.

### Tahap 2 - Labelisasi Sumber

- Tambahkan field `sources` pada setiap kisah nabi.
- Tambahkan field `status` untuk detail: `quran`, `hadis-sahih`, `riwayat-populer`, `perlu-verifikasi`.
- Tampilkan catatan sumber ringkas di UI.

### Tahap 3 - Kurasi Doa

- Buat dataset doa lokal dengan status hadis.
- Kurangi ketergantungan penuh pada API.
- Tampilkan sumber dan status validitas.

### Tahap 4 - Revisi Iqro/Tajwid

- Ganti generator Iqro dengan dataset kurikulum valid.
- Standarkan istilah tajwid.
- Tambahkan catatan belajar dengan guru.

### Tahap 5 - Validasi Guru Agama

- Minta ustadz/ustadzah meninjau final draft.
- Tandai semua materi yang sudah disetujui.
- Simpan hasil validasi sebagai dokumen pendamping project.
