const fs = require('fs');

let content = fs.readFileSync('src/data/kisahNabi.ts', 'utf8');

// Nuh
content = content.replace(
  /Mereka malah mengejek, menghina, dan menyakiti Nabi Nuh. Bahkan istri dan anaknya yang bernama Kan'an pun ikut menentangnya. Karena kaumnya terus membandel, Allah memerintahkan Nabi Nuh untuk membuat sebuah bahtera \(kapal\) yang sangat besar di atas bukit.\n\nMembuat kapal di atas bukit membuat orang-orang semakin kuat mengejek Nabi Nuh, dan menganggapnya gila. Namun, Nabi Nuh tetap bersabar dan terus menyelesaikan kapal tersebut bersama pengikutnya yang setia./g,
  "Mereka malah mengejek dan menghina Nabi Nuh. Bahkan istri dan anaknya yang bernama Kan'an pun ikut menentangnya. Karena kaumnya tetap membangkang, Allah memerintahkan Nabi Nuh untuk membuat sebuah bahtera (kapal) yang sangat besar di atas bukit.\n\nMembuat kapal di atas bukit membuat orang-orang semakin sering mengejek Nabi Nuh karena dianggap tidak masuk akal. Namun, Nabi Nuh tetap bersabar dan terus menyelesaikan pembuatan kapal tersebut bersama pengikutnya yang setia."
);

// Hud
content = content.replace(
  /Nabi Hud AS diutus kepada Kaum 'Aad, sebuah suku yang memiliki tubuh sangat besar, kuat, dan bertubuh raksasa.*?\n*?Namun sayangnya, Kaum 'Aad sangat sombong.*?Wahai kaumku, sembahlah Allah. Janganlah kamu menyembah patung yang tidak memberi manfaat."/gs,
  `Nabi Hud AS diutus kepada Kaum 'Aad, sebuah suku yang memiliki fisik sangat kuat. Mereka sangat kaya, ahli membuat bangunan-bangunan tinggi yang megah, dan memiliki ladang yang subur.
Namun sayangnya, Kaum 'Aad sangat sombong. Mereka merasa tidak ada yang bisa mengalahkan mereka. Mereka melupakan Allah dan menyembah berhala yang mereka buat sendiri. Nabi Hud pun berdakwah kepada mereka, "Wahai kaumku, sembahlah Allah. Janganlah kalian menyembah patung yang tidak bisa memberikan manfaat."`
);

content = content.replace(
  "Ternyata, awan hitam itu adalah angin topan yang sangat dahsyat dan dingin. Angin itu berhembus sangat kencang selama tujuh malam dan delapan hari terus-menerus, menghancurkan bangunan kokoh mereka dan menerbangkan Kaum 'Aad seperti daun kering. Hanya Nabi Hud dan orang beriman yang diselamatkan oleh Allah.",
  "Ternyata, awan hitam itu adalah angin topan yang sangat dahsyat dan dingin. Angin itu berhembus sangat kencang selama tujuh malam delapan hari terus-menerus, menghancurkan bangunan kokoh mereka. Atas izin Allah, hanya Nabi Hud dan orang-orang beriman yang diselamatkan."
);

// Saleh
content = content.replace(
  /Nabi Saleh AS diutus kepada Kaum Tsamud.*?Hanya Nabi Saleh dan pengikutnya yang selamat./gs,
  `Nabi Saleh AS diutus kepada Kaum Tsamud, kaum yang memahat gunung batu menjadi rumah dan bangunan megah. Mereka hidup makmur dan berkecukupan, namun mereka sombong dan menyembah berhala.
Nabi Saleh mengajak mereka menyembah Allah. Sebagian orang beriman, namun para pembesar yang sombong menolak. "Jika kamu benar seorang Nabi, keluarkanlah seekor unta betina dari batu karang itu," tantang mereka.

Nabi Saleh berdoa kepada Allah. Atas kebesaran Allah, batu karang itu terbelah dan keluarlah seekor unta betina yang sangat bagus. Ini adalah mukjizat yang nyata. Nabi Saleh berpesan agar mereka membiarkan unta itu makan bebas, dan jangan sekali-kali menyakitinya.

Air susu dari unta itu begitu melimpah sehingga cukup untuk seluruh kota. Meski begitu, para pembesar kaum Tsamud tetap ingkar. Kesombongan karena tidak ingin mengikuti ajaran nabi membuat mereka menyusun rencana jahat. Sekelompok pemuda akhirnya menyembelih unta mukjizat tersebut saat malam hari.

Nabi Saleh sangat sedih dan memperingatkan bahwa hukuman Allah akan turun dalam tiga hari berwujud suara petir luar biasa keras. Tiga hari kemudian, datanglah suara guntur yang sangat menggelegar dari langit. Hanya Nabi Saleh dan pengikutnya yang berhasil diselamatkan Allah.`
);

// Ibrahim
content = content.replace(
  /Nabi Ibrahim AS lahir di zaman Raja Namrud yang sangat kejam dan sombong.*?membuktikan kebesaran Allah./gs,
  `Nabi Ibrahim AS lahir di zaman Raja Namrud yang sangat lalim dan sombong. Saat itu, masyarakat suka membuat berhala patung-patung untuk disembah. Sejak kecil, Nabi Ibrahim sudah menggunakan akalnya untuk mencari Tuhan yang sejati. 
Beliau mengamati benda-benda langit, hingga Allah memberinya petunjuk kebenaran. Nabi Ibrahim pun berdakwah, namun karena kaumnya menolak, ia membuat sebuah rencana untuk menyadarkan mereka.

Suatu hari, saat orang-orang pergi ke luar kota, Nabi Ibrahim menghancurkan semua berhala kecil yang ada di tempat ibadah dan hanya menyisakan berhala paling besar dengan meletakkan kapak di lehernya. 

"Apakah kamu yang menghancurkan berhala kami?" tanya Raja Namrud ketika mereka pulang. Nabi Ibrahim menjawab dengan tegas, "Tanyakan saja pada patung besar yang membawa kapak itu." Mereka sadar bahwa patung tak bisa bicara, namun kesombongan menghalangi mereka beriman.

Raja Namrud memerintahkan agar Nabi Ibrahim dihukum dengan dibakar di dalam api unggun raksasa. Namun Allah memerintahkan api agar menjadi dingin dan menyelamatkannya. Saat api padam, Nabi Ibrahim berjalan keluar tanpa terluka sedikitpun, membuktikan kebesaran Allah.`
);

// Ismail
content = content.replace(
  /Nabi Ismail AS adalah putra pertama dari Nabi Ibrahim AS.*?Mekkah, hanya berbekal sedikit makanan dan air sungai/gs,
  `Nabi Ismail AS adalah putra pertama dari Nabi Ibrahim AS dan Siti Hajar. Saat masih bayi, Allah menguji keimanan Nabi Ibrahim untuk sementara meninggalkan istri dan bayinya pada sebuah padang pasir kering di Kota Mekkah, membawa bekal air dan kurma yang terbatas`
);

content = content.replace(
  /Saat bekal habis, bayi Ismail menangis karena kehausan. Ibunya berlari-lari dari bukit Safa ke bukit Marwah sebanyak 7 kali mencari air, tapi tak ada. Lalu, dari hentakan kaki bayi Ismail \(ataupun dari sayap Malaikat Jibril dalam riwayat lain\), memancarlah air yang tak pernah kering hingga kini, yang disebut sumur Zamzam./gs,
  `Saat bekal habis, bayi Ismail menangis karena kehausan. Ibunya berlari-lari kecil dari Bukit Safa ke Bukit Marwah sebanyak 7 kali untuk mencari mata air, tapi tidak menemukannya. Lalu atas kehendak Allah, dari arah kaki bayi Ismail memancarlah air jernih yang tak pernah kering hingga kini, yang dinaamkan Air Zamzam.`
);

content = content.replace(
  /Nabi Ibrahim bermimpi bahwa Allah memerintahkannya untuk menyembelih putra kesayangannya itu sebagai ujian/gs,
  `Nabi Ibrahim bermimpi bahwa Allah mengujinya dengan perintah untuk mempersembahkan putra kesayangannya itu`
);

content = content.replace(
  /Saat parang tajam diletakkan di leher Ismail, Allah seketika mengganti tubuh Nabi Ismail dengan seekor domba jantan yang besar dari surga./gs,
  `Saat perintah itu baru hendak dilaksanakan, Allah seketika mengganti Nabi Ismail dengan seekor domba sembelihan yang besar sebagai balasan atas ketabahan mereka berdua.`
);

// Ishaq
content = content.replace(
  /Nabi Ishaq AS merupakan anak kedua dari Nabi Ibrahim AS.*?Seperti putra beliau yang bernama Ya'qub AS./gs,
  `Nabi Ishaq AS adalah putra dari Nabi Ibrahim AS dan istrinya, Siti Sarah. Diceritakan dalam Al-Qur'an bahwa Siti Sarah sebelumnya tidak bisa memiliki anak dan juga sudah mencapai usia yang sangat tua.
Namun, ketika Malaikat Allah datang membawa kabar akan lahirnya scorang anak darinya, ia sangat tekejut dan tak menyangka. Para Malaikat berkata, "Demikianlah Tuhanmu berfirman, sungguh Dialah Yang Maha Bijaksana lagi Maha Mengetahui."

Kelahiran Nabi Ishaq sungguh membawa kebahagiaan luar biasa. Beliau tumbuh menjadi pemimpin yang berilmu tinggi, saleh, dan taat beribadah. Nabi Ishaq kemudian melanjutkan tugas ayahnya untuk berdakwah di daerah Syam (Palestina).

Beliau selalu mengajak kaumnya untuk menyembah Allah SWT, menunaikan shalat dan berbuat kebaikan. Dari garis keturunan Nabi Ishaq inilah kelak akan lahir banyak nabi dan rasul Bani Israil, salah satunya adalah putra beliau yang bernama Ya'qub AS.`
);

// Ya'qub
content = content.replace(
  /Beliau memiliki dua belas orang anak laki-laki, salah satunya adalah Nabi Yusuf AS.\n.*?mengatakan Yusuf dimakan serigala./gs,
  `Beliau memiliki dua belas orang anak laki-laki, salah satunya adalah Nabi Yusuf AS.
Nabi Ya'qub sangat menyayangi Nabi Yusuf dan adiknya yang bernama Benyamin. Hal itu membuat kakak-kakaknya merasa cemburu. Mereka pun bersekongkol membuang Nabi Yusuf ke dasar sumur tua, dan berbohong kepada Nabi Ya'qub dengan menunjukkan baju yang dilumuri darah palsu lalu mengatakan bahwa Yusuf telah dimakan serigala.`
);

// Yusuf
content = content.replace(
  /Pedagang menemukan Yusuf, membawanya ke Mesir, dan ia dijual sebagai budak. Ia tumbuh menjadi pemuda yang saleh dan cerdas di rumah seorang menteri Mesir. Namun, istri menteri tersebut menyukai Yusuf dan karena Yusuf menjaga kesuciannya, ia malah difitnah dan dipenjara./gs,
  `Beberapa pedagang kemudian menemukan Yusuf di dalam sumur, membawanya ke Mesir, dan ia pun dirawat di rumah seorang menteri. Ia tumbuh menjadi pemuda yang saleh, jujur, dan sangat cerdas. Namun, karena ujian sebuah fitnah yang tidak dilakukannya, Nabi Yusuf akhirnya harus rela dipenjara walau ia sama sekali tak bersalah.`
);
content = content.replace(
  /Bendahara negara yang mengatur persediaan bahan pokok/gs,
  `Menteri keuangan negara yang cerdas mengatur seluruh persediaan bahan gandum dan logistik`
);
content = content.replace(
  /Bertahun-tahun kemudian di masa kering, saudara-saudara Yusuf yang dulu membuangnya datang jauh-jauh meminta bantuan bahan makanan, tanpa menyadari itu adalah Yusuf./gs,
  `Bertahun-tahun kemudian pada masa kekeringan melanda negeri sekitar, saudara-saudara Yusuf yang dulu pernah membuangnya datang jauh-jauh meminta bantuan pasokan gandum, tanpa menyadari bahwa menteri Mesir yang baik hati itu adalah Yusuf.`
);

// Ayyub
content = content.replace(
  /Iblis merasa cemburu dengan kesalehan Ayyub, lalu atas izin Allah, menurunkan ujian untuk menguji imannya.*?lalu atas izin Allah, menurunkan ujian untuk menguji imannya. Mula-mula, seluruh harta dan peternakannya hangus terbakar dan dirampok musuh. Kemudian, atap rumahnya roboh menimpa semua anak-anaknya hingga meninggal dunia./gs, // Wait, there's no duplicate in the original text. Let's just do exact replace.
  ""
);

content = content.replace(
  /Mula-mula, seluruh harta dan peternakannya hangus terbakar dan dirampok musuh. Kemudian, atap rumahnya roboh menimpa semua anak-anaknya hingga meninggal dunia./g,
  `Mula-mula, seluruh harta pertanian dan hewan ternaknya hancur tanpa sisa, disusul dengan duka wafatnya putra-putrinya karena sebuah peristiwa yang amat berat bagi siapapun.`
);

content = content.replace(
  /Iblis merasa cemburu dengan kesalehan Ayyub.*?semua itu memang milik Allah./gs,
  `Ujian dari Allah datang untuk menguji keimanannya yang kuat. Mula-mula, seluruh harta pertanian dan hewan ternaknya hancur tanpa sisa, disusul dengan ujian duka kepergian putra putrinya tercinta. Namun dalam kesedihan luar biasa itu, Nabi Ayyub selalu tetap bersujud dan berkata bahwa semua titipan dunia memang milik Allah semata.`
);

content = content.replace(
  /Setelah berlalu, Allah memberi ujian rasa sakit yang sangat parah di tubuh Nabi Ayyub. Penyakit kulit yang belum pernah diderita manusia manapun menimpanya hingga dijauhi oleh semua temannya. Beliau menderita penyakit ini selama bertahun-tahun \(ada yang menyebutkan 18 tahun\)./gs,
  `Setelahnya, Allah memberikan ujian rasa sakit parah diderita di sekujur kulit dan tubuh Nabi Ayyub. Penyakit ini membuat beliau terbaring lemah dijauhi oleh orang sekitar, dan berlangsung bertahun-tahun lamanya.`
);

content = content.replace(
  /Hanya istri setianya yang terus menemaninya. Saat dirasa sangat lelah tak tertolong.*karena kesabarannya./gs,
  `Hanya sang istri yang setia serta iman tauhidnya yang terus menemani Ayyub dalam sakitnya. Hingga di saat beliau memohon pada Allah dengan selembut-lembut doa. Allah pun seketika memerintahkan Ayyub menghentakkan kakinya ke muka bumi. Langsung memancarlah sejuknya mata air penawar untuk ia gunakan.
Atas kuasa Allah seketika Nabi Ayyub sembuh sehat bugar seperti sedia kala. Tak lama Allah juga memulihkan harta panen dengan kelimpahan dan menggantinya dengan kemuliaan yang lebih mulia atas kesabarannya menanggung ujian berat tersebut.`
);

// Musa
content = content.replace(
  /Nabi Musa AS diutus membebaskan Bani Israil di Mesir.*?umat durhakanya./gs,
  `Nabi Musa AS diutus oleh Allah untuk menyelamatkan Bani Israil di Mesir dari kezaliman. Saat itu Mesir dikuasai Raja Firaun yang sangat kejam. Karena ketakutannya kehilangan takhta kekuasaan, ia tega bertindak zalim kepada umat Bani Israil.
Sejak bayi Musa diselamatkan atas kehendak Allah ketika mengapung di Sungai Nil, di mana keranjang bayi Musa ditemukan oleh Asiyah (istri Firaun), kemudian beliau didik dengan aman hingga ia bertumbuh dewasa.

Ketika Nabi Musa diutus kembali untuk berdakwah kepadanya, Firaun dengan sombong masih menolak dan mengaku dirinya sendiri sebagai Tuhan yang tak terkalahkan. Atas kebesaran Allah, Nabi Musa diberi mukjizat tongkat yang dapat berubah menjadi ular besar dan memakan tipuan ularnya penyihir kerajaan.

Firaun dan para jamaahnya menolak kebenaran itu. Allah lalu menegur Mesir dengan berbagai azab seperti gagal panen musim, hujan batu es, hingga belalang. Namun Firaun yang kejam masih mengingkari dan justru mengejar Musa ketika memimpin hijrah Bani Israil pergi melarikan diri ke pesisir.
Atas perintah Allah, tongkat Nabi Musa dipukulkan sehingga akhirnya terbelahlah perairan lautan Merah dan menjadi daratan menyeberang mereka. Akan tetapi saat tentaranya Firaun ikut-ikutan menyusul masuk di tengah belahan laut, maka perairan lautan merapat kembali dengan sangat derasnya, menenggelamkan semua kesombongan si penguasa lalim beserta pengikut-pengikutnya.`
);

// Harun
content = content.replace(
  /Musa kemudian berdoa kepada Allah agar saudaranya.*?mengkoreksi perbuatan menyimpang tersebut./gs,
  `Nabi Musa kemudian berdoa kepada Allah agar saudaranya yang bernama Harun, diangkat rasul membantu dirinya. Nabi Harun memiliki tutur kata yang lebih fasih dan dapat menjelaskan hal-hal dengan tenang agar pesannya mudah dimengerti khalayak luas. Maka Allah mengabulkan menjadikan Harun sebagai rasul pendamping.

Nabi Harun selalu mendampingi perjuangan Musa meyakinkan keagungan Allah di Mesir. Bahkan setelah bangsa Israel sukses keluar bebas dari Mesir, ketika Musa diutus menjemput perintah agama di Bukit Tursina, Nabi Harunlah yang setia diberi tugas membimbing umat yang menanti.

Dalam masa absennya tersebut, tiba-tiba muncul seseorang penyihir yang tidak beriman bernama Samiri. Dirinya nekat membuat ukiran patung bongkahan Lembu Emas (Sapi), lalu mulai menghasut dan menyebarkan kesesatan baru menyembah patung dewa tersebut agar umat tersesat kembali.
Melihat kepanikan kekacauan tersebut. Nabi Harun mengingatkan kaumnya mati-matian secara tegas namun hanya sebagian umat mau kembali ke Allah. Hingga disaat Nabi Musa telah sampai rombongannya kembali barulah ketegasan mereka berdua segera membasmi kemusyrikan dan mengusir jauh sosok penyebar benih tersebut kembali.`
);

// Zulkifli
content = content.replace(
  /Nabi Zulkifli AS, yang nama aslinya Basyar, adalah putra kandung Nabi Ayyub As.*?raja tua merestui sepenuhnya./gs,
  `Nabi Zulkifli AS yang memiliki nama asli Basyar, adalah putra dari Nabi Ayyub As. Pada suatu masa pemimpin negeri tempatnya menetap, mengumumkan perihal mencari calon sosok teladan penerus tampuk kepemimpinan hakim umat, dengan syarat menguji kedisiplinan tingkat sangat keras:
Syaratnya itu adalah sanggup puasa terus bersabar tiap siang harinya, kemudian teguh sanggup mengamalkan Qiyam/ibadah saat malam hari rutin, serta pantang dan sanggup menahan segala emosi amarah bagaimanapun saat memutuskan dan menangani persoalan sidang harian orang-orang.

Tidak semua pemuka saat itu merespons kesiapan memenuhinya, hanya Basyar seorang saja yang bangkit perlahan menyetujui seluruh tes keimanan yang berat tersebut. Berkat hal itu dirinya dipanggil bergelar "Zulkifli" (orang yang sungguh memegang janji keteguhannya).

Disaat mengabdi memenuhi kewajibannya tersebut, berulang kali Iblis mencobanya gagal dengan menyamar rupa-rupa berlagak mendatangi dengan alasan rewel atau sangat menyebalkan persis ketika jam istirahat Zulkifli yang sangat keletihan, namun Zulkifli pantang menampilkan sedikit pun rona kemarahan di raut mukanya. Keteguhan akhlak tinggi Nabi Zulkifli itulah membuat kaum yang diawasi beliau berhidayah damai di ridhoi oleh tuhan dengan luar biasanya.`
);

// Daud
content = content.replace(
  /Nabi Daud AS pada saat remaja merupakan prajurit tentara di bawah wewenang.*?kekuatan pertempuran./gs,
  `Nabi Daud AS pada masa remajanya, pernah ikut dalam pertahanan prajurit tentara yang di komandoi Raja Thalut yang beriman. Ketika itu pasukan Thalut sedang memutar akal dalam menghadapi gempuran penguasa penjajah zholim dengan berbadan tinggi menakutkan penuh pakai pakaian perang kebal senjata. Namanya Raja Jalut (Goliath).
Ketika umat putus asa ketakutan tak terpikir ada secuil daya bisa menembus perisainya, maju sang pemuda cerdas nan pemberani mengandalkan ketapel pelontar batu kecilnya. Atas pertolongan dari iman dan lindungan Allah SWT, dengan hanya kerikil lesatan pelantingannya itu langsung menembus ke kepala yang menjatuhkan si penguasa penjajah besar kesombongan secara langsung di tempat.

Allah mengkaruniakan banyak berlipat tanda mukjizat baginya. Terkenal ia sangat merdu melantunkan bacaan hikmah kitab Zabur pada waktu tersebut sampai burung serta pepohonan pun terbawa diam membalas zikir padanya di setiap fajar menyingsing tiba harinya.

Pada hal kekuatan lain jari dua tangan Nabi Daud juga bisa bisa selembut kain dalam membengkokkan logam baja besi tanpa memanaskan api terlebih dahulu dengan alat-alat pandai tempa berat. Nabi daud menjadi pemimpin luar biasa sukses dalam hal pelindung merakit zirah pengamanan umat dari peperangan orang jahat sehingga pergerakan negeri kaum jadi kuat tentram sejahtera.`
);

// Sulaiman
content = content.replace(
  /Nabi Sulaiman AS merupakan Anak langsung dari Nabi Daud AS.*?waktu di sana./gs,
  `Nabi Sulaiman AS merupakan Anak langsung pewaris ilmu Nabi Daud AS dan terkenal menjadi sosok raja sangat agung dan bersyukur dengan kelimpahan nikmat fasilitasnya tak tertandingi sebelum maupun sesudah eranya oleh di muka bumi yang Allah tetapkan.
Semua makhluk aneh bahkan golongan bala jin paling terkuat yang sangat tak tersentuh tangan saja telah diperintahkan ilahi supaya taat ikut arahan pembangunannya secara super kilat untuk negara, dari pembangunan bendungan irigasi tambang sampai perikanan perairan serta patung indah.

Bukan itu doang, Allah pahamkan pada otaknya pemahaman menangkap suara-suara makna segala jenis bintang-binatang maupun burung sampai semut. Contoh dirinya sempat menghindari injak rombongan sekumpulan barisan semut lewat ketika kereta kencana berjalan yang disambut gembira semut di area itu dan berinteraksi juga perintah penugasan jelajah kepada utusan seekor si burung unik "Hud-Hud" untuk memantau keadaan area kerajaan tetangga perairan benua pinggir secara lapor cepat canggih tiada tara.

Satu cerita seru disaat nabi Sulaiman mendapatkan laporan soal Ratu Balqis (Sang Ratu menyembah dewa Tuhan Matahari) dengan mahkota bertabur indahnya kemilau tapi melenceng rutenya menyembah mahluk. Segera dinasehati agar tak buang energi dan Nabi Sulaiman memperlihatkan kuasa tuhan saat meminta Ifrit pemindah ahli supaya memindahkan mega-struktur berat mahkota Ratu kedalam istananya cuma selama matanya sang raja hanya perlu di berkedip 1 detik saja. Sungguh Ratu tersebut mematung dan lekas percaya mengakui kekuasaan mutlak tauhid Ilah SWT karena takjib hingga sang Ratu beserta rakyat mengabdi turut percaya iman islam ajaran Nabi Sulaiman secara sepenuhnya.`
);

// Ilyas
content = content.replace(
  /Nabi Ilyas AS adalah rasul yang diutus melanjutkan menyiarkan nilai taurat.*?terus menerus./gs,
  `Nabi Ilyas AS adalah rasul umat pada wilayah Syam yang diutus memperbaiki kembali penyimpangan yang semakin mendominasi dilakukan kaumnya waktu tersebut. Mereka asyik mempersekutukan Allah lewat berhala sembahan besar yang dimanakan "Baal".
Dakwah Nabi Ilyas menyeru secara hikmah dan tak kenal bosan mengingatkan menyadarkan kembali secara bertahap bahwa pencipta langit tidak berbentuk patung yang tidak bernilai. Namun mereka tak kunjung sadar malah selalu beringas keras pendirian dalam penolakan terhadap ajarannya termasuk merencanakan perbuatan mencelakainya. Akibatnya Nabi Ilyas terpaksa sering lari ke dalam pedalaman gua hingga teriknya panas menghindari kejaran para serdadu penguasa tanpa bekal, yang ditemani murid pelanjutnya: Ilyasa.

Lalu kemudian turun sebuah penderitaan berat ke desa sebagai cobaan ketabahan mereka. Akibat menentang tuhan secara ekstrem dengan waktu yang panjang, di angkat semua curah hujan tahunan tanah kota yang menjadikan gagal masa sumur bertani sangat menyiksa kehidupan perekonomian kemakmuran tempat itu. Sayangnya, kaum yang sempat berterima kasih kembali berubah ingkar maksiat sehingga balasan ujian tak kenal usai masih menaungi negeri peribadah berhala tersebut yang penuh pelajaran kelam.`
);

// Ilyasa
content = content.replace(
  /Nabi Ilyasa AS \(Elisha\), diamanahkan ketika masa remajanya.*?kirim turun lagi./gs,
  `Nabi Ilyasa AS merupakan pelanjut risalah. Saat sewaktu dirinya belia dan mengalami sakit kronis keras yang melanda raga sendirinya saat tak ada harapan ia akhirnya bisa sembuh dikarenakan di tolong oleh tulus ikhlas munajat doa perlindungan dari sosok panutannya yakni Nabi Ilyas yang tulus dikala sedang mengungsi bersama. Atas kesembuhannya beliau jadi murid pendamping sangat giat teguh mendalami syariat Allah berbekal petunjuknya kemanapun dakwah menyusuri jalanan mendampingi guru tuanya itu sampai tuntas tugas nabi Ilyas dalam umurnya.

Ketika Nabi Ilyasa kemudian dinaikan bertugas sendiri menjadi nabi selanjutnya, perlahan mulai banyak bermunculan kelakuan umatnya Bani Israil beringsut mengikuti tata cara iman berbuat banyak benar perbuatannya. Karakter dirinya yang sabar dan pemaaf dengan wibawa mendengarkan segala kesusahan rakyat menentramkan kemaslahatan rakyat secara cepat di ridai berkah pencipta.
Disisi tangan nabi ini pulalah kondisi daerah yang sedang dalam damai tenteram kuat penjagaan dan pertahanan ekonomi sangat solid karena terjamin pertolongan tak kenal henti dari sang penguasa alam ilahi.`
);

// Yunus
content = content.replace(
  /Nabi Yunus AS diperintah untuk berdakwah pada kelompok besar warga Nineveh.*?menyesal./gs,
  `Nabi Yunus AS diutus Allah kepada kaum di kota besar wilayah Nineveh yang tenggelam di dosa kesombongan tanpa mengingat hakikat sang pembuat dunia dan menyembah dewa. Saat ia memperingatkan tentang balasan dari kemungkaran, tak peduli bertahun tahun mereka sama sekali terus angkuh dan mengolok-olok utusan tersebut tanpa ampunan tak kenal lelah merendahkannya di pojok mana pun kota berada. Kecewa dengan penerimaan sekeras batu tersebut sang nabi pergi mengambil jarak menjauh tergesa dari penduduk tanpa menunggu aba-aba wahyu diperkenankan Ilahi lalu pergi putus asa keluar kota dan bermaksud pindah dakwah sejauh pelayaran menaiki kapal lautan yang sedang lepas jangkar bersiap perjalanan rute pesisir padat penumpang.

Terjadilah sebuah topan ganas mendadak menderu saat laju perahu berjalan. Sadar perahu sesak akan segera karam membebani tonase bila di biarkan, diadakan kesepakatan pelemparan penumpang supaya tak seisi orang disana mati. Setelah nama terpilih lewat lotre di luar, Nabi Yunus tersingkir ikhlas langsung rela lompat ke tengah amukan perairan kencang ombak agar seluruh rakyat muatan bahtera perahunya selamat semua di tempat kejadian laut gulita badai bergemuruh tuhan mendatangkannya sesosok mamalia monster penguasa perairan samudra alias Ikan Paus maha besar menangkap dalam kegelapan namun di amanati Allah untuk sekedar "Menampungnya" secara utuh tak boleh gigi paus merusaknya segores tulang raga pun.

Tiga pengap hari malam pergerakan dasar samudera, di kesendirian sangat gulita di rongga rahim mahluk besar yang tertutup mati ia memecah kepasrahan bertobat kejatuhan tangis tasbih (Lailaha illa-anta, Subhanaka Inni Kuntu Min-adzalimin). Mendengar ucapan tulus kesalehan luar biasanya, paus secara langsung mengeluarkan (memuntahkan) ia kembali ke pesisir laut bersih. Ajaibnya selepas dari itu, sekembalinya sadar Yunus ke desa asalnya di dapati masyarakat besar penuh ratusan ribu orang disana telah nangis massal berbondong mencari utusan menyesal seutuhnya dan kembali memeluk penuh pertaubatan syariat sang pencipta Allah swt pada haru yang agung menyambut kembali sang nabinya.`
);

// Zakariya
content = content.replace(
  /Nabi Zakariya AS, adalah wali utusan rasul pembimbing masyarakat dan sekaligus ahli pemegang urusan yang rajin mengelola pemeliharan tempat sakral tempat ibadah Masjidil Aqsa \(Baitul Maqdis\) tempat suci dari turun temurun. Beliau sosok kakek berusia terlampau sanggat tua & memiliki permaisuri di usia renta sangat uzur dan kemandulan mutlak, yang keduanya tak punya karunia harapan anak\.\nSuatu ketika beliau memelihara & menghidupi puteri baik dari almarhum keponakannya, yaitu sosok perawan \(Siti Maryam Ibunda Isa\). Saat Zakariya menjaga tiap masuk berkunjung tengok diruangan kamarnya \(Mihrab\) ia amat takjub mendapati makanan surga musiman segar terus tersedia penuh disana langsung lewat tangan malaikat di luar musim alam karena kepasrahannya Maryam\.\n\nMelihat iman keajaiban Allah tersebut, malam hari lalu mengeluhkan doa penuh pilunya yang menyayat berharap tuhan karuniai pula ke kakek ini buat perawat masa generasi muda penerus Baitul Aqsa esok. Dan ajaibnya di kabarkan Malaikat tuhan bahwa walau sang istri dan dirinya ringkih layu sangat senja tak berguna dimata logis kesehatan dunia bakal di titipi akan lahirnya putra dari rahim tua itu dengan bernama unik yaitu "Bocah Yahya", sebagai wujud Maha Kuasa dari yang tidak ada menjadi kenyataan terwujud./gs,
  `Nabi Zakariya AS adalah nabi utusan bagi Bani Israil dan tokoh agama yang menjaga tempat ibadah suci Masjidil Aqsa (Baitul Maqdis). Beliau sangat taat dan rajin beribadah. Bersama sang istri yang usianya sudah sangat senja, mereka terus diuji oleh Allah tidak kunjung dikaruniai seorang anak dan ahli medis mana pun sudah menyatakan sudah tidak mungkin (mandul). Meskipun begitu sebagai seseorang taat beriman, Nabi Zakariya tak pernah patah harapan mendoakan keturunan penerusnya menjaga amanat suci tempat Baitul Aqsa itu kelak bagi pelanjut agama disitu.

Semenjak ia juga kebagian kewajiban membesarkan seorang titipan anak keluarga kerabatnya bernama "Maryam" binti Imran (Ibunda Nabi Isa nantinya) sewaktu mengasuhnya dalam ruang khusus sembahyang mihrab, Nabi Zakariya selalu dibuat kaget oleh kuasa Allah melalui Maryam. Karena ketika ia mengantar kebutuhan air makanan selalu saja didalam ruangan Maryam banyak ditemukannya buah-buahan dan rizqi langka makanan turun tanpa di beri tahu asal-usul manusia pun. Inilah keistimewaan balasan mutlak Allah pada orang wanita yang sholeha tekun menjaga izzahnya penuh ibadahnya tiap waktu kepada Rabbnya.

Dikuatkan lewat peristiwa ketauhidan ajaib tersebut, menangislah penuh bermunazat lirih beliau panjang berdoa karena tergetar dan yakin karunia Tuhannya tidak terbatas ilmu logika kesehatan dunia yang fana ini. Sungguhlah ajaib karunia segera mendatang saat para utusan malaikat menjawab janji dan membawa kabar terpercaya akan dilahirkannya anak suci dikasih nama "Yahya" dengan kemampuannya menuntun masa cerah dengan kasih sayangnya bagi masyarakat di usia senja kebahagiaan mereka membesarkannya berkat usaha doa pantang nyerah itu.`
);

// Yahya
content = content.replace(
  /Nabi Yahya AS terlahir ajaib yang lahir dikala kondisi biologi orang tuanya tak mungkin bisa, Nabi Zakariya As. Nabi yang cerdas dan hafal utuh dalam hal detail seluruh hukum bacaan taurat saat di usiakan remaja dini. Tak heran beliau dititipkan jiwa belas kasih penuh bijaksana dan tangisan tulus bila ingat hari kiamat dan dosa sesama. Nabi Yahya merupakan penentang yang sangat tegas & pembela agama bila soal moral berzina pergaulan manusia menyimpang\.\nPuncak kisahnya yakni pada ujian tegangan kuat ketika sang Raja penguasa Israel yang kejam ketika itu berniat jahat karena rasa tertarik nafsu gila pada keponakannya tersendiri yang sungguh haram sesuai kitab nasab, ingin menjadikanya di kawinkan buat jadi Istri sah Ratu yang jelas terlarang sangat nista secara murni pedoman suci maupun moral normal mana pun\.\n\nYahya muda segera melarang tegakkan haram & mencegah tidak pandang pangkat statusnya raja lalim siapapun dan lantangkan penokan larangan keras tak boleh perbuat gila kawin pada saudara sendiri tak manusiawi ini yang sontak murkanya membuat beliau ditangkap di eksekusi sampai gugur Syahid dan pengorbanannya membulatkan tekad tak mau menjual urusan larangan haram-halal agamanya di ganti tahta\/uang kemewahan maupun mati sekalipun./gs,
  `Nabi Yahya AS terlahir atas jawaban dari Doa luar biasa ayahanda nabi Zakaria pada Allah yang dikabulkan dengan mukjizat keajaiban ketika ibu bapanya mencapai usia renta senja. Karena ketekunan orang tuannya mengajari agama pada si jiwa pemuda remaja Yahya saat ia cepat sekali menghafalkan, faham dengan seluruh detail pedomana agama syariat hukum dalam Taurat sampai jadi pendakwah tersohor dan disegani masyarakat atas ketaqwaan akhlak sopan, sabar dengan hewan dan manusia hingga jiwa penolongnya terhadap penderitaan sesama. Beliau di samping karakternya lembut juga salah satu hakim pendakwah kuat tak tergoda suap sogokan serta sangat lugas berani menasehati soal pentingnya moral hukum hal kebaikan dan menjaga kewarasan menghindari penyelewengan yang saat itu gemar dilakukan rakyat dan pejabat saat itu yang banyak berbuat menyimpang.

Hingga puncak perjuangan dari dakwah menuntun arah kebenarannya mengantarkan Sang Nabi Yahya pada sebuah peristiwanya dengan pembesar penguasa Raja lalim masa itu berniat dan bersiap akan memperistri ponakan gadisnya sendiri secara sah negara namun menyalahi kodrat aturan agama dan nurani sosial di buku mana pun di halalkan saat itu. 
Dengan kekuatan iman ketegasanya dan tanpa gemetar berhadapan penjagal beliau menolak meresmikan hukum pengakuan ini demi tidak kompromi membelokan isi kewajiban larangan suci perihal urusan tuhan bagaimanapun juga, menunjukan tauladan kepasrahan iman yang lebih besar tidak takut konsekuensi kehilangan posisi apapun terhadap aturan yang paling haq diturunkan dari perintah yang diatas segalanya bagi pelurus ke jalan lurus ilahiah selamanya walau dihukum sangat menyiksanya sekalipun.`
);

// Isa
content = content.replace(
  /Nabi Isa AS ialah Putera tunggal dari perawan mulia Siti Maryam.*?si sosok pengkhianat bernama Yudas tersebut./gs,
  `Nabi Isa AS adalah manusia suci yang dititiskan lahir dengan sangat sempurna ajaib tanpa proses perantara sesosok kehamilan ayah biologis dunia seperti normal yang lainnya di alam semesta. Semacam peristiwa kehamilan ajaib pertama dari perawan ahli ibadah mulia yang paling dimuliakan yakni manusia hebat bernama Siti Maryam. Begitu heboh orang ramai gempar menyaksikan perempuan mengendong orok tanpa menikah yang menuding sanggah dosa haram luar biasa ke ibunya dan hendak melukai kesucian reputasinya di kaum Bani israil dikala itu.
Mukjzat langsung menjawab keras mematahkan para tudingan saat bayi mungil balita didalam gendongan ibundanya itu dengan langsung berbicara di nalar bukan bahasa bayi akan tetapi menjawab kalimat petuah kebijaksanaan tauhid yang mengklaim melindungi ibu sucianya serentak seluruh tokoh pun gentar tunduk percaya disitu bahwa bayi adalah janji kebesaran tuhan untuk orang terpilih yang ditakdirkan-Nya jadi sebuah panutan pelurus yang disebut mukzijat ruhullah firman suci Allah untuk kedepanya.

Didalam perjalannya Nabi Isa mendapatkan kitab agung penyempurna masa itu dinamain Injil sebagai penerang panduan yang mengedepankan ajaran permaaf, cinta damai dan membersihkan kesewenangan harta riba pejabat Yahudi masa itu dengan seruan ikhlas membuang keduniawian, Beliau diback-up dikelilingi orang pengikut sejati garda terdepan yakni murid "Hawariyyun". Bersama mereka juga masyarakat Yahudi saat itu menantangnya untuk membalik keadaan agar bisa takjub dengan kehebatanya berhadapan penyhir. Lalu Nabi isa mengejutkan mahluk sekeliling ketika beliau atas ijin dan campur tangan ke maha besaran Allah bisa memulihkan segera orang menderita hilang mata buta menjadi melihat, serta sanggup mengusap menghidupkan kembali roh yang telah lenyap pergi di kembalikan bernafas jantungnya ke jasad kembali. Serta burung yang terbuat tangan bahan tanah semata bisa mengepakan mahluk bernyawa sungguhan terbang saat ditiup mulia darinya waktu tu. Sungguh bukti yang mutlak bagi kuasa Ilahi namun lagi-lagi hanya dianggap sihir semata bagi yang menentang membenci dakwah tauhid nabi Isa.

Segala daya fitnah kemudian dialamatkan pada keselamatan beliau dari petinggi bani pendustanya yang dihasut dengan kebohongan meracuni perihal stabilitas ke para raja Romawi penjajah ketika tersebut untuk menyerahkan hukum hukuman tersadis mati kepada Isa dengan pemakuan di salib eksekusi. Sayangnya, rencana dzalim dan penjebakan prajurit gagal di waktu akhir krusial karena rencana tuhan paling indah, bukan sang utusan-Nya yang jadi korban tiang melainkan tuhan dengan mudah merubah dan memanipulasi seratus persen detail wujud paras dan fisik wajah murid yg telah berkhianat bernama Yudas di rupakan sebagai Nabi Isa dimata mereka para algojo. Sementara Nabi Isa sendiri langsung diselamatkan suci dengan diangkat utuh raga badannya pada perlindungan suci semesta langit atas perlindungan penjagaan rabb ilahiah secara sempurna di atas alam peradaban ini.`
);

// Muhammad SAW
content = content.replace(
  /Nabi Muhammad SAW tiada lain Nabi dan sekalian Rasul terakhir pengunci nabi "Khotamul Anbiya".*?sebagai bacaan tuntunan hidup jutaan muslim hari ini./gs,
  `Nabi Muhammad SAW tiada lain Nabi dan sekalian Rasul terakhir pengunci ajaran penyempurna "Khotamul Anbiya". Membawakan syariat cahaya dari era terburuk kelam moral dan buta tauhid menjadi sangat terang dengan akhlak islam perdamaian dan tatanan kesejahteraan penuh kelogisan ibadah sampai ditutup pada kiamat era terakhir tidak ada lagi rasul setelah masa beliau wafat nanti. Terkenal sebagai rasul paling dimuliakan sangat sabar dan penuh sifat rahmat permaaf kepada segenap mahluk sekalian alam semesta, bahkan sifat amanah tulus integritas sebelum di masa kenabian remajanya pada pedagang membuat lawan takjub menyanjung beliau pantas mendapat title "Al-Amin" tak dapat tercela oleh fitnah manapun karakternya waktu itu. Masa panggilannya menyiarkan tauhid menahan siksaan hebat hujatan bertahun dipenuhi caci fisik bahkan perang membela diri disekitar wilayah Jazirah tapi Nabi melayani pemaaf pengajaran sabar dan penuh siasat kecerdasan diplomat perdamaian merambat meruntuhkan kebathilan menjadi islam yang suci di penjuru Mekkah murni.

Di perjalanannya disisi mukijzat Allah swt, sangat banyak hal ajaib menyertai keseharian perjalanan dari awan menutungi ke manapun ia berjalan, jari telapak yang pernah memancarkan keluar deras seperti kucuran teko air menghidangkan para hausnya pasukanya dari perang kelelahan, dan belahan penunjukan jari bulan di angkasa. Bahkan pada pencapaian terhebat diluar konsep kecepatan semesta malam saat beliau diutus Isra Mi'raj pada waktu sesingkat memejam dalam sepi durasi ia didorong mampu jalan menunggangi Buraq seketika mendarat beribadah lewatin Palestina dan menerobos langit-langit terbang melewati semesta ujung menuju sang ilahi puncak arasy di ruang tanpa waktu dan waktu guna memperoleh firman kebahagian syariat perintah Shalat Fardhu kelima waktu tiap perhari untuk menenangkan kehidupan ummat berisalam diseluruh lapisan belahan masyarakat manapun dengan singkat cerita langsung tiba ke raga wujud kasur tidur nya ketika tubuh fisiknya pada kembali pada subuh seakan tanpa melampau waktu wajar di otak mahluk.

Peninggalan terbaik nabi adalah kalamullah mukzijat abadi bagi kemurnian terjaga tiada cacat modifikasinya yaitu di berikanya warisan kalam sumber dari sucinya ayat kitab Al-Qur'an. Sumber pedoman tata kelola sastra sempurna ilmu alam penciptaan, pengobatan hati, kisah terhebat lalu serta masa di depan aturan kehidupan sosial yang menentramkan petunjuk pada surga abadi sampai selamanya sebagai hidayah warisan bacaan mulia bagi hati yang mempercayainya mutlak di muka bumi ini sampai habis masa akhirnya dunia kelak di tutup Sang Khaliq.`
);

fs.writeFileSync('src/data/kisahNabi.ts', content, 'utf8');
