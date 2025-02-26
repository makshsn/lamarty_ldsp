import xlsx from "xlsx";
import path from "path";
import data from "./data.js";
let date = new Date();
const exportExcel = (data) => {
  const workBook = xlsx.utils.book_new();
  const workSheetData = [...data];
  const workSheet = xlsx.utils.aoa_to_sheet(workSheetData);
  xlsx.utils.book_append_sheet(workBook, workSheet, "list");
  xlsx.writeFile(
    workBook,
    path.resolve(
      `./outputFiles/for_1C_lamarty(${date.getDate()}.${
        date.getMonth() + 1
      }.${date.getFullYear()}.${date.getHours()};${date.getMinutes()}).xlsx`
    )
  );
};

const exportDataToExcel = (exportData) => {
  const data = exportData.map((exportedData) => {
    return [
      "",
      "ЛДСП " +
        exportedData.Thickness +
        " Ст1 P2 Е0,5 2750*1830 " +
        exportedData.Subcategory +
        " " +
        exportedData.Name,
      "м2",
      Math.round((exportedData.Price / (2.75 * 1.83)) * 100) / 100,
      Math.round((exportedData.Price / (2.75 * 1.83)) * 1.3 * 100) / 100,
      Math.round((exportedData.Price / (2.75 * 1.83)) * 1.3 * 100) / 100,
      Math.round((exportedData.Price / (2.75 * 1.83)) * 1.3 * 1.78 * 100) / 100,
      exportedData.Texture,
    ];
  });
  exportExcel(data);
};

exportDataToExcel(data);
// ЛДСП 16 Ст1 P2 Е0,5 2750*1830 P белоснежный
