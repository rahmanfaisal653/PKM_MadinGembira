const doFetch = async () => {
  const urls = [
    'https://raw.githubusercontent.com/Zhirrr/Islamic-Rest-Api/master/data/kisahnabi.json',
    'https://raw.githubusercontent.com/Bhinneka/25-Apis/master/Nabi.json',
    'https://raw.githubusercontent.com/lakuapik/al-quran-api/master/api/kisahnabi.json',
    'https://raw.githubusercontent.com/sutanlab/mutiara-api/master/data/kisah-nabi.json',
    'https://raw.githubusercontent.com/Zhirrr/islamic-rest-api-indonesian/refs/heads/master/data/kisahnabi.json',
    'https://raw.githubusercontent.com/Zhirrr/My-Qurany/master/data/kisah-nabi.json'
  ];
  for (const url of urls) {
    try {
      const res = await fetch(url);
      console.log(url, res.status);
    } catch(e) {}
  }
};
doFetch();
