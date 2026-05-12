const test = async () => {
  const urls = [
    'https://equran.id/api/kisahnabi',
    'https://api.myquran.com/v2/kisahnabi',
    'https://api.myquran.com/v2/nabi',
    'https://api-nabil.vercel.app/nabi',
    'https://islamic-api-zhirrr.vercel.app/api/kisahnabi',
    'https://raw.githubusercontent.com/Zhirrr/Islamic-Rest-Api/master/data/kisahnabi.json',
    'https://raw.githubusercontent.com/Zhirrr/Islamic-Rest-Api-Indonesian/master/data/kisahnabi.json'
  ];
  for (const url of urls) {
    try {
      const res = await fetch(url);
      console.log(url, res.status);
    } catch(e) { console.error(url, e.message); }
  }
}
test();
