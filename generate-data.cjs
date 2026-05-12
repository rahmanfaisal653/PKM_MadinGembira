const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public', 'data');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// 1. Generate Iqro Data
const iqroData = [];
let idCounter = 1;
const letters = ['ا', 'ب', 'ت', 'ث', 'ج', 'ح', 'خ', 'د', 'ذ', 'ر', 'ز', 'س', 'ش', 'ص', 'ض', 'ط', 'ظ', 'ع', 'غ', 'ف', 'ق', 'ك', 'ل', 'م', 'ن', 'ه', 'و', 'ي'];

const fatha = '\u064E';
const kasra = '\u0650';
const damma = '\u064F';

for (let jilid = 1; jilid <= 6; jilid++) {
  for (let halaman = 1; halaman <= 10; halaman++) {
    // Generate some random arabic text
    let content = [];
    for (let r = 0; r < 5; r++) {
      let row = '';
      for (let c = 0; c < 4; c++) {
        let char = letters[Math.floor(Math.random() * letters.length)];
        if (jilid === 1) char += fatha;
        else if (jilid === 2) char += (Math.random() > 0.5 ? fatha : kasra);
        else char += (Math.random() > 0.33 ? fatha : (Math.random() > 0.5 ? kasra : damma));
        row += char + ' ';
      }
      content.push(row);
    }
    
    iqroData.push({
      id: idCounter++,
      jilid: jilid.toString(),
      halaman,
      content
    });
  }
}

fs.writeFileSync(path.join(publicDir, 'iqro.json'), JSON.stringify({
  status: 'success',
  data: iqroData
}, null, 2));


// 2. Generate Kisah Nabi Data
const nabiList = [
  { name: "Adam", thn_kelahiran: "Sebelum Masehi", usia: "930", tmp: "Diturunkan di Bumi (India/Arab)", description: "Nabi Adam as adalah manusia pertama yang diciptakan Allah SWT dari tanah. Beliau hidup di surga bersama Hawa, namun karena melanggar larangan Allah memakan buah Khuldi akibat godaan iblis, mereka diturunkan ke bumi. Nabi Adam memohon ampunan Allah dan diterima taubatnya." },
  { name: "Idris", thn_kelahiran: "Sebelum Masehi", usia: "865", tmp: "Irak Kuno", description: "Nabi Idris as adalah manusia pertama yang bisa membaca dan menulis. Beliau juga dikenal pandai menjahit pakaian dan menunggang kuda. Beliau adalah nabi yang sangat tekun beribadah." },
  { name: "Nuh", thn_kelahiran: "Sebelum Masehi", usia: "950", tmp: "Mesopotamia", description: "Nabi Nuh as berdakwah selama 950 tahun namun hanya sedikit umatnya yang beriman. Beliau diperintahkan Allah membuat bahtera besar untuk menyelamatkan orang-orang beriman dan hewan-hewan dari banjir bandang dahsyat yang menenggelamkan kaum kafir, termasuk anak istrinya sendiri." },
  { name: "Ibrahim", thn_kelahiran: "Sebelum Masehi", usia: "175", tmp: "Babilonia", description: "Nabi Ibrahim as dikenal sebagai Bapak Para Nabi. Beliau membangun Ka'bah bersama putranya, Ismail. Kisah beliau mencari Tuhan, menghancurkan berhala kaumnya, dibakar oleh Raja Namrud, dan diperintahkan menyembelih Ismail adalah kisah keteladanan terbesar dalam tauhid." },
  { name: "Musa", thn_kelahiran: "Sebelum Masehi", usia: "120", tmp: "Mesir", description: "Nabi Musa as diutus untuk membebaskan Bani Israil dari kekejaman Firaun di Mesir. Memiliki mukjizat membelah laut merah dengan tongkatnya dan menerima kitab Taurat di Bukit Sinai." },
  { name: "Daud", thn_kelahiran: "Sebelum Masehi", usia: "100", tmp: "Palestina", description: "Nabi Daud as memiliki mukjizat suara yang sangat merdu dan mampu melunakkan besi dengan tangannya. Beliau mengalahkan jalut (Goliath) dan menerima kitab Zabur." },
  { name: "Sulaiman", thn_kelahiran: "Sebelum Masehi", usia: "53", tmp: "Palestina", description: "Nabi Sulaiman as adalah raja agung yang dikaruniai kemampuan memahami bahasa binatang dan dapat memerintah bangsa jin. Kerajaannya sangat luas dan makmur." },
  { name: "Isa", thn_kelahiran: "1 Masehi", usia: "33 (Diangkat ke surga)", tmp: "Palestina", description: "Nabi Isa as lahir dari rahim Maryam tanpa ayah. Mukjizatnya antara lain dapat berbicara saat masih bayi, menyembuhkan orang buta, dan menghidupkan orang mati seizin Allah. Beliau menerima kitab Injil." },
  { name: "Muhammad", thn_kelahiran: "571 Masehi", usia: "63", tmp: "Makkah", description: "Nabi Muhammad SAW adalah penutup para nabi (Khatamun Nabiyyin). Beliau menerima wahyu terbesar yaitu Al-Qur'an melalui malaikat Jibril dan membawa risalah Islam sebagai rahmatan lil 'alamin." }
];

fs.writeFileSync(path.join(publicDir, 'kisahnabi.json'), JSON.stringify(nabiList, null, 2));

console.log("Local API data generated at public/data/");
