import fetch from 'node-fetch';
fetch('https://equran.id/api/doa')
  .then(res => res.json())
  .then(data => {
    const KID_FRIENDLY_KEYWORDS = [
      'tidur', 'makan', 'kamar mandi', 'wudhu', 'pakaian', 
      'orang tua', 'ilmu', 'belajar', 'kendaraan', 'hujan',
      'baju', 'bangun'
    ];
    const EXCLUDED_KEYWORDS = [
      'istri', 'suami', 'jenazah', 'mati', 'kematian', 
      'syirik', 'hutang', 'harta', 'pasar', 'zina', 'bersetubuh', 'cerai', 'marah', 'hilal', 'buah', 'istikhzaroh', 'haji', 'umrah', 'qadha',
      'ziarah', 'naik kendaraan', 'nuh', 'tubuh', 'melepas', 'meletakkan', 'tergelincir'
    ];
    const ALWAYS_ALLOWED_IDS = [1, 2, 6, 7, 8, 9, 10, 11, 12, 15, 51, 66, 68, 95];
    const EXCLUDED_IDS = [4, 14, 34, 48, 67];

    const mapped = (data.data || []).filter(item => {
      const nama = item.nama.toLowerCase();
      const grup = item.grup.toLowerCase();
      if (EXCLUDED_IDS.includes(item.id)) return false;
      if (ALWAYS_ALLOWED_IDS.includes(item.id)) return true;
      if (EXCLUDED_KEYWORDS.some(kw => nama.includes(kw) || grup.includes(kw))) return false;
      return KID_FRIENDLY_KEYWORDS.some(kw => nama.includes(kw) || grup.includes(kw));
    });
    console.log(mapped.length);
  }).catch(e => console.error(e));
