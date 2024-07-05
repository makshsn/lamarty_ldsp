import * as vars from "./variables.js";
const data = [];
function universal(values, xlData) {
  for (const value of values) {
    if (xlData[0].edIzm != undefined) {
      for (let index = 0; index < xlData.length; index++) {
        if (xlData[index][value] != 0 && xlData[index][value] != undefined) {
          data.push({
            id: xlData[index].name,
            edIzm: value,
            price: xlData[index][value],
          });
        }
      }
    } else {
      for (let index = 1; index < xlData.length; index++) {
        if (xlData[index][value] != 0 && xlData[index][value] != undefined) {
          data.push({
            id: xlData[index].name,
            edIzm: xlData[0][value],
            price: xlData[index][value],
          });
        }
      }
    }
  }
}
universal(vars.cols, vars.xlData);
export default data;
