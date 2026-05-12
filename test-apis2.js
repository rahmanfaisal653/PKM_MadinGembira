const test = async () => {
  const urls = [
    'https://raw.githubusercontent.com/Zhirrr/islamic-rest-api-indonesian/master/data/kisahnabi.json',
    'https://raw.githubusercontent.com/Bhinneka/25-Apis/master/Nabi.json',
    'https://raw.githubusercontent.com/lakuapik/al-quran-api/master/api/kisahnabi.json'
  ];
  for (const url of urls) {
    try {
      const res = await fetch(url);
      console.log(url, res.status);
    } catch(e) {}
  }
}
test();
