import xlsx from "xlsx";
import path from "path";
import data from "./data.js";
const exportExcel = (data) => {
  const workBook = xlsx.utils.book_new();
  const workSheetData = [...data];
  const workSheet = xlsx.utils.aoa_to_sheet(workSheetData);
  xlsx.utils.book_append_sheet(workBook, workSheet, "list");
  xlsx.writeFile(workBook, path.resolve(`./outputFiles/excel-from-js.xlsx`));
};

const exportUsersToExcel = (users) => {
  const data = users.map((user) => {
    return [
      "",
      user.name,
      "м2",
      Math.ceil(user.price),
      Math.ceil((user.price / 10) * 1.3) * 10,
      Math.ceil((user.price / 10) * 1.3) * 10,
      Math.ceil((user.price / 10) * 1.3) * 1.78 * 10,
    ];
  });
  exportExcel(data);
};

exportUsersToExcel(data);
