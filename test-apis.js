const test = async () => {
  try {
    const res = await fetch('https://equran.id/api/doa');
    const data = await res.json();
    console.log("DOA API:", Object.keys(data));
    if (Array.isArray(data)) console.log("DOA is arr");
    else console.log(data);
  } catch(e) { console.error("DOA", e.message); }
}
test();
