export interface IqroItem {
  id: number;
  jilid: string;
  halaman: number;
  content: string;
}

const hij_order = ['أ','ب','ت','ث','ج','ح','خ','د','ذ','ر','ز','س','ش','ص','ض','ط','ظ','ع','غ','ف','ق','ك','ل','م','ن','و','ه','ي'];

function generateIqroData(): IqroItem[] {
  const data: IqroItem[] = [];
  
  let seed = 123456;
  const rand = () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };
  const getRand = (arr: string[]) => arr[Math.floor(rand() * arr.length)];
  
  let id = 1;

  // Level 2: 2-3 huruf bersambung, harakat fathah (1 baris 3 kata)
  const wordsLvl2 = [
    'بَتَ', 'تَبَ', 'جَحَ', 'حَجَ', 'خَدَ', 'دَخَ', 'بَرَ', 'رَبَ', 'زَسَ', 'سَزَ', 
    'كَتَبَ', 'جَعَلَ', 'فَعَلَ', 'وَلَدَ', 'خَلَقَ', 'نَصَرَ', 'بَلَغَ', 'ذَهَبَ', 'رَزَقَ', 'سَجَدَ',
    'شَكَرَ', 'صَبَرَ', 'طَلَبَ', 'ظَلَمَ', 'غَفَرَ', 'قَتَلَ', 'صَدَقَ', 'لَعِبَ', 'دَخَلَ', 'خَرَجَ'
  ];

  // Level 3: 3-4 huruf, ada kasrah/dhammah, sukun, tasydid ringan (1 baris 3 kata)
  const wordsLvl3 = [
    'يَكْتُبُ', 'يَذْهَبُ', 'يَلْعَبُ', 'يَقْرَأُ', 'مُسْلِمٌ', 'مُؤْمِنٌ', 'مُحَمَّدٌ', 'مَسْجِدٌ', 
    'كِتَابٌ', 'قُرْآنٌ', 'رَحْمَنٌ', 'رَحِيمٌ', 'عَابِدٌ', 'حَامِدٌ', 'سَاجِدٌ', 'رَاكِعٌ',
    'يَدْخُلُ', 'يَخْرُجُ', 'مَكْتُوبٌ', 'مَعْلُومٌ', 'مَشْهُودٌ', 'تَنْزِيلٌ', 'تَرْتِيلٌ', 'تَجْوِيدٌ'
  ];

  // Level 4: Potongan ayat Al-Quran (1 baris 1 potongan)
  const ayatLvl4 = [
    "عَمَّ يَتَسَاءَلُونَ", "عَنِ النَّبَإِ الْعَظِيمِ", "الَّذِي هُمْ فِيهِ مُخْتَلِفُونَ", "كَلَّا سَيَعْلَمُونَ",
    "ثُمَّ كَلَّا سَيَعْلَمُونَ", "أَلَمْ نَجْعَلِ الْأَرْضَ مِهَادًا", "وَالْجِبَالَ أَوْتَادًا", "وَخَلَقْنَاكُمْ أَزْوَاجًا",
    "وَجَعَلْنَا نَوْمَكُمْ سُبَاتًا", "وَجَعَلْنَا اللَّيْلَ لِبَاسًا", "وَجَعَلْنَا النَّهَارَ مَعَاشًا",
    "وَبَنَيْنَا فَوْقَكُمْ سَبْعًا شِدَادًا", "وَجَعَلْنَا سِرَاجًا وَهَّاجًا", "أَلْهَاكُمُ التَّكَاثُرُ",
    "حَتَّىٰ زُرْتُمُ الْمَقَابِرَ", "كَلَّا سَوْفَ تَعْلَمُونَ", "وَالْعَصْرِ", "إِنَّ الْإِنسَانَ لَفِي خُسْرٍ",
    "تَبَّتْ يَدَا أَبِي لَهَبٍ وَتَبَّ", "مَا أَغْنَىٰ عَنْهُ مَالُهُ وَمَا كَسَبَ", "سَيَصْلَىٰ نَارًا ذَاتَ لَهَبٍ"
  ];

  // Level 5: Ayat pendek Al-Quran (1 baris 1 ayat utuh)
  const ayatLvl5 = [
    "قُلْ هُوَ اللَّهُ أَحَدٌ", "اللَّهُ الصَّمَدُ", "لَمْ يَلِدْ وَلَمْ يُولَدْ", "وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ",
    "قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ", "مِن شَرِّ مَا خَلَقَ", "وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ", 
    "وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ", "وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ", "إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ",
    "فَصَلِّ لِرَبِّكَ وَانْحَرْ", "إِنَّ شَانِئَكَ هُوَ الْأَبْتَرُ", "وَالتِّينِ وَالزَّيْتُونِ", "وَطُورِ سِينِينَ",
    "وَهَٰذَا الْبَلَدِ الْأَمِينِ", "لَقَدْ خَلَقْنَا الْإِنسَانَ فِي أَحْسَنِ تَقْوِيمٍ", "ثُمَّ رَدَدْنَاهُ أَسْفَلَ سَافِلِينَ"
  ];

  // Level 6: Ayat agak panjang, (1 baris 2 ayat potongan panjang)
  const ayatLvl6 = [
    "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ",
    "لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ",
    "لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ",
    "مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ ۚ",
    "يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ",
    "وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ",
    "وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ",
    "وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ",
    "لَا إِكْرَاهَ فِي الدِّينِ ۖ قَد تَّبَيَّنَ الرُّشْدُ مِنَ الْغَيِّ ۚ",
    "فَمَن يَكْفُرْ بِالطَّاغُوتِ وَيُؤْمِن بِاللَّهِ",
    "فَقَدِ اسْتَمْسَكَ بِالْعُرْوَةِ الْوُثْقَىٰ لَا انفِصَامَ لَهَا ۗ",
    "وَاللَّهُ سَمِيعٌ عَلِيمٌ",
    "اللَّهُ وَلِيُّ الَّذِينَ آمَنُوا يُخْرِجُهُم مِّنَ الظُّلُمَاتِ",
    "إِلَى النُّورِ ۖ وَالَّذِينَ كَفَرُوا أَوْلِيَاؤُهُمُ الطَّاغُوتُ",
    "يُخْرِجُونَهُم مِّنَ النُّورِ إِلَى الظُّلُمَاتِ ۗ",
    "أُولَٰئِكَ أَصْحَابُ النَّارِ ۖ هُمْ فِيهَا خَالِدُونَ"
  ];

  // Helper to shuffle arrays
  const shuffleArrs = (arr: string[]) => {
    let cloned = [...arr];
    for (let i = cloned.length - 1; i > 0; i--) {
      const idx = Math.floor(rand() * (i + 1));
      [cloned[i], cloned[idx]] = [cloned[idx], cloned[i]];
    }
    return cloned;
  };

  let poolLvl2: string[] = [];
  let poolLvl3: string[] = [];
  let poolLvl4: string[] = [];
  let poolLvl5: string[] = [];
  let poolLvl6: string[] = [];

  const getFromPool = (poolRef: { current: string[] }, source: string[]) => {
    if (poolRef.current.length === 0) {
      poolRef.current = shuffleArrs(source);
    }
    return poolRef.current.pop()!;
  };

  for (let j = 1; j <= 6; j++) {
    for (let p = 1; p <= 20; p++) {
      let content = '';
      
      let availableLetters = hij_order;
      if (j === 1) {
        // Pengenalan huruf bertahap untuk Iqro 1.
        const lettersCount = Math.min(hij_order.length, 2 + Math.floor((p - 1) * 1.4));
        availableLetters = hij_order.slice(0, lettersCount);
      }

      // Refresh pools per page if we want NO repetition WITHIN a page (or just let it run globally resiliently)
      // Actually, maintaining global pool ensures no repetition across pages until pool exhausts.
      let pagePools = {
        poolLvl2: { current: poolLvl2 },
        poolLvl3: { current: poolLvl3 },
        poolLvl4: { current: poolLvl4 },
        poolLvl5: { current: poolLvl5 },
        poolLvl6: { current: poolLvl6 },
      };

      for (let rows = 0; rows < 7; rows++) {
        let rowText = [];
        
        let itemsPerRow = 2;
        if (j === 1) itemsPerRow = 5;
        else if (j === 2 || j === 3) itemsPerRow = 4;
        
        for (let words = 0; words < itemsPerRow; words++) {
          let wordText = '';

          if (j === 1) { 
            // Level 1: Huruf tunggal berharakat fathah
            wordText = getRand(availableLetters) + '\u064E';
          } else if (j === 2) { 
            // Level 2: Kata 2-3 huruf fathah
            wordText = getFromPool(pagePools.poolLvl2, wordsLvl2);
          } else if (j === 3) { 
            // Level 3: Kata 3-4 huruf dengan sukun/tasydid
            wordText = getFromPool(pagePools.poolLvl3, wordsLvl3);
          } else if (j === 4) { 
            // Level 4: Potongan ayat
            wordText = getFromPool(pagePools.poolLvl4, ayatLvl4);
          } else if (j === 5) { 
            // Level 5: Ayat pendek
            wordText = getFromPool(pagePools.poolLvl5, ayatLvl5);
          } else if (j === 6) { 
            // Level 6: Ayat lengkap panjang
            wordText = getFromPool(pagePools.poolLvl6, ayatLvl6);
          }
          
          rowText.push(wordText);
        }
        content += rowText.join('      ') + '\n\n';
      }
      data.push({ id: id++, jilid: String(j), halaman: p, content: content.trim() });
    }
  }

  return data;
}

export const IQRO_DATA = generateIqroData();
