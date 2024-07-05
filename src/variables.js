import XLSX from "xlsx";
const workbook = XLSX.readFile("./src/price/price.xlsx");
const sheet_name = workbook.SheetNames;

const cols = `0,4/19	0,8/19	2/19	0,4/30	2/30	0,8/35	2/35	2/45  `.split("\t");

const xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name[0]]);
console.log(cols);
export { cols, xlData };
