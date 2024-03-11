const XLSX = require("xlsx");
async function handleFile(e) {
  const file = e.target.files[0];
  const data = await file.arrayBuffer();
  /* data is an ArrayBuffer */
  const workbook = XLSX.read(data);

  /* DO SOMETHING WITH workbook HERE */
}
document.getElementById("xlf").addEventListener("change", handleFile, false);
