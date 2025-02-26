import XLSX from "xlsx";

const PriceLuxWorkbook = XLSX.readFile("./src/price/LDSP_Price_Lux.xlsx");
const PriceLuxSheet_name = PriceLuxWorkbook.SheetNames;
const PriceLuxXlData = XLSX.utils.sheet_to_json(PriceLuxWorkbook.Sheets[PriceLuxSheet_name[0]]);

const PriceClassicWorkbook = XLSX.readFile("./src/price/LDSP_Price_Classic.xlsx");
const PriceClassicSheet_name = PriceClassicWorkbook.SheetNames;
const PriceClassicXlData = XLSX.utils.sheet_to_json(
  PriceClassicWorkbook.Sheets[PriceClassicSheet_name[0]]
);

const PricePremiumWorkbook = XLSX.readFile("./src/price/LDSP_Price_Premium.xlsx");
const PricePremiumSheet_name = PricePremiumWorkbook.SheetNames;
const PricePremiumXlData = XLSX.utils.sheet_to_json(
  PricePremiumWorkbook.Sheets[PricePremiumSheet_name[0]]
);

const SubCategoryWorkbook = XLSX.readFile("./src/price/LDSP_Groups_Designation.xlsx");
const SubCategorySheet_name = SubCategoryWorkbook.SheetNames;
const SubCategoryXlData = XLSX.utils.sheet_to_json(
  SubCategoryWorkbook.Sheets[SubCategorySheet_name[0]]
);
const MaterialWorkbook = XLSX.readFile("./src/price/LDSP_Groups_Name.xlsx");
const MaterialSheet_name = MaterialWorkbook.SheetNames;
const MaterialXlData = XLSX.utils.sheet_to_json(MaterialWorkbook.Sheets[MaterialSheet_name[0]]);

const DecorLuxWorkbook = XLSX.readFile("./src/price/LDSP_Decors_Lux.xlsx");
const DecorLuxSheet_name = DecorLuxWorkbook.SheetNames;
const DecorLuxXlData = XLSX.utils.sheet_to_json(DecorLuxWorkbook.Sheets[DecorLuxSheet_name[0]]);

const DecorPremiumWorkbook = XLSX.readFile("./src/price/LDSP_Decors_Premium.xlsx");
const DecorPremiumSheet_name = DecorPremiumWorkbook.SheetNames;
const DecorPremiumXlData = XLSX.utils.sheet_to_json(
  DecorPremiumWorkbook.Sheets[DecorPremiumSheet_name[0]]
);

const DecorClassicWorkbook = XLSX.readFile("./src/price/LDSP_Decors_Classic.xlsx");
const DecorClassicSheet_name = DecorClassicWorkbook.SheetNames;
const DecorClassicXlData = XLSX.utils.sheet_to_json(
  DecorClassicWorkbook.Sheets[DecorClassicSheet_name[0]]
);

let subCategoryFirst = [];
let subCategorySecond = [];
let subCategoryThird = [];

let classicMaterial = [];
let premiumMaterial = [];
let luxMaterial = [];

let luxFullName = [];
let premiumFullName = [];
let classicFullName = [];

SubCategoryXlData.forEach((element) => {
  element[1] == undefined || subCategoryFirst.push(element[1]);

  element[2] == undefined || subCategorySecond.push(element[2]);

  element[3] == undefined || subCategoryThird.push(element[3]);
});
MaterialXlData.forEach((element) => {
  element["Премиум"] == undefined || premiumMaterial.push(element["Премиум"]);

  element["Люкс"] == undefined || luxMaterial.push(element["Люкс"]);

  element["Классика"] == undefined || classicMaterial.push(element["Классика"]);
});

DecorLuxXlData.forEach((element) => {
  if (element[10] != undefined) {
    let slpited = element[10].split(",");
    for (let n = 0; n < slpited.length; n++) {
      luxFullName.push({
        Name: element["Люкс"],
        Thickness: 10,
        Subcategory: slpited[n],
        Category: "Люкс",
      });
    }
  }
  if (element[16] != undefined) {
    let slpited = element[16].split(",");
    for (let n = 0; n < slpited.length; n++) {
      luxFullName.push({
        Name: element["Люкс"],
        Thickness: 16,
        Subcategory: slpited[n],
        Category: "Люкс",
      });
    }
  }
  if (element[22] != undefined) {
    let slpited = element[22].split(",");
    for (let n = 0; n < slpited.length; n++) {
      luxFullName.push({
        Name: element["Люкс"],
        Thickness: 22,
        Subcategory: slpited[n],
        Category: "Люкс",
      });
    }
  }
  if (element[26] != undefined) {
    let slpited = element[26].split(",");
    for (let n = 0; n < slpited.length; n++) {
      luxFullName.push({
        Name: element["Люкс"],
        Thickness: 26,
        Subcategory: slpited[n],
        Category: "Люкс",
      });
    }
  }
});

DecorPremiumXlData.forEach((element) => {
  if (element[10] != undefined) {
    let slpited = element[10].split(",");
    for (let n = 0; n < slpited.length; n++) {
      premiumFullName.push({
        Name: element["Премиум"],
        Thickness: 10,
        Subcategory: slpited[n],
        Category: "Премиум",
      });
    }
  }
  if (element[16] != undefined) {
    let slpited = element[16].split(",");
    for (let n = 0; n < slpited.length; n++) {
      premiumFullName.push({
        Name: element["Премиум"],
        Thickness: 16,
        Subcategory: slpited[n],
        Category: "Премиум",
      });
    }
  }
  if (element[18] != undefined) {
    let slpited = element[18].split(",");
    for (let n = 0; n < slpited.length; n++) {
      premiumFullName.push({
        Name: element["Премиум"],
        Thickness: 18,
        Subcategory: slpited[n],
        Category: "Премиум",
      });
    }
  }
  if (element[22] != undefined) {
    let slpited = element[22].split(",");
    for (let n = 0; n < slpited.length; n++) {
      premiumFullName.push({
        Name: element["Премиум"],
        Thickness: 22,
        Subcategory: slpited[n],
        Category: "Премиум",
      });
    }
  }
  if (element[26] != undefined) {
    let slpited = element[26].split(",");
    for (let n = 0; n < slpited.length; n++) {
      premiumFullName.push({
        Name: element["Премиум"],
        Thickness: 26,
        Subcategory: slpited[n],
        Category: "Премиум",
      });
    }
  }
});

DecorClassicXlData.forEach((element) => {
  if (element[10] != undefined) {
    let slpited = element[10].split(",");
    for (let n = 0; n < slpited.length; n++) {
      classicFullName.push({
        Name: element["Классика"],
        Thickness: 10,
        Subcategory: slpited[n],
        Category: "Классика",
      });
    }
  }
  if (element[16] != undefined) {
    let slpited = element[16].split(",");
    for (let n = 0; n < slpited.length; n++) {
      classicFullName.push({
        Name: element["Классика"],
        Thickness: 16,
        Subcategory: slpited[n],
        Category: "Классика",
      });
    }
  }
  if (element[18] != undefined) {
    let slpited = element[18].split(",");
    for (let n = 0; n < slpited.length; n++) {
      classicFullName.push({
        Name: element["Классика"],
        Thickness: 18,
        Subcategory: slpited[n],
        Category: "Классика",
      });
    }
  }
  if (element[22] != undefined) {
    let slpited = element[22].split(",");
    for (let n = 0; n < slpited.length; n++) {
      classicFullName.push({
        Name: element["Классика"],
        Thickness: 22,
        Subcategory: slpited[n],
        Category: "Классика",
      });
    }
  }
  if (element[26] != undefined) {
    let slpited = element[26].split(",");
    for (let n = 0; n < slpited.length; n++) {
      classicFullName.push({
        Name: element["Классика"],
        Thickness: 26,
        Subcategory: slpited[n],
        Category: "Классика",
      });
    }
  }
});
export {
  SubCategoryXlData,
  MaterialXlData,
  subCategoryFirst,
  subCategorySecond,
  subCategoryThird,
  classicMaterial,
  premiumMaterial,
  luxMaterial,
  luxFullName,
  premiumFullName,
  classicFullName,
  PriceLuxXlData,
  PriceClassicXlData,
  PricePremiumXlData,
};
