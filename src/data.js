import * as vars from "./variables.js";
const tempData = [];
const data = [];
const Adata = [];
function universal(obj) {
  obj.forEach((element) => {
    if (element.Category == "Классика") {
      tempData.push({
        Name: element.Name,
        Thickness: element.Thickness,
        Subcategory: element.Subcategory,
        Category: "Классика",
      });
    }
    if (element.Category == "Премиум") {
      tempData.push({
        Name: element.Name,
        Thickness: element.Thickness,
        Subcategory: element.Subcategory,
        Category: "Премиум",
      });
    }
    if (element.Category == "Люкс") {
      tempData.push({
        Name: element.Name,
        Thickness: element.Thickness,
        Subcategory: element.Subcategory,
        Category: "Люкс",
      });
    }
  });
}
universal(vars.luxFullName);
universal(vars.premiumFullName);
universal(vars.classicFullName);

tempData.forEach((element) => {
  vars.subCategoryFirst.forEach((selement) => {
    if (selement == element.Subcategory) {
      data.push({
        Name: element.Name,
        Thickness: element.Thickness,
        Subcategory: element.Subcategory,
        SubcategoryNumber: "First",
        Category: element.Category,
      });
    }
  });
  vars.subCategorySecond.forEach((selement) => {
    if (selement == element.Subcategory) {
      data.push({
        Name: element.Name,
        Thickness: element.Thickness,
        Subcategory: element.Subcategory,
        SubcategoryNumber: "Second",
        Category: element.Category,
      });
    }
  });
  vars.subCategoryThird.forEach((selement) => {
    if (selement == element.Subcategory) {
      data.push({
        Name: element.Name,
        Thickness: element.Thickness,
        Subcategory: element.Subcategory,
        SubcategoryNumber: "Third",
        Category: element.Category,
      });
    }
  });
});

function PriceForming(arr1, arr2, cat) {
  for (let index = 0; index < arr1.length; index++) {
    for (let i = 0; i < arr2.length; i++) {
      if (arr1[index].Thickness == arr2[i].Thickness && cat == arr1[index].Category) {
        Adata.push({
          Name: arr1[index].Name,
          Thickness: arr1[index].Thickness,
          Subcategory: arr1[index].Subcategory,
          Price: arr2[i][arr1[index].SubcategoryNumber],
          Category: arr1[index].Category,
          Texture: arr1[index].Name,
        });
      }
    }
  }
}
PriceForming(data, vars.PriceLuxXlData, "Люкс");
PriceForming(data, vars.PriceClassicXlData, "Классика");
PriceForming(data, vars.PricePremiumXlData, "Премиум");
//console.log(vars.PriceLuxXlData[0]["Thickness"]);
console.log(vars.PriceLuxXlData);
export default Adata;
