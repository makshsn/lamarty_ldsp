import * as vars from "./variables.js";
const data = [];
function universal(xlData, cols1, classification, thickness, price) {
  for (let indexName = 0; indexName < xlData.length; indexName++) {
    if (
      xlData[indexName].Name.toLowerCase().includes(thickness.toLowerCase())
    ) {
      for (let indexColl = 0; indexColl < cols1.length; indexColl++) {
        /*       console.log(
          xlData[indexName].Name.split("2750*1830")[1]
            .split(" ")[2]
            .toLowerCase()
        ); */
        for (
          let indexClass = 0;
          indexClass < classification.length;
          indexClass++
        ) {
          if (
            xlData[indexName].Name.split("2750*1830")[1]
              .split(" ")[1]
              .toLowerCase() == cols1[indexColl].toLowerCase() &&
            (
              xlData[indexName].Name.split("2750*1830")[1].split(" ")[2] +
              " " +
              xlData[indexName].Name.split("2750*1830")[1].split(" ")[3] +
              " " +
              xlData[indexName].Name.split("2750*1830")[1].split(" ")[4]
            )
              .toLowerCase()
              .includes(classification[indexClass].toLowerCase())
          ) {
            //console.log(cols1[indexColl].toLowerCase());
            data.push({ name: xlData[indexName].Name, price: price });
            //console.log(xlData[indexName].Name);
          }
        }
      }
    }
  }
}
/* console.log(
  "ЛДСП 10 Ст1 Р2 Е0,5 2750*1830 U белоснежный"
    .split("2750*1830")[1]
    .split(" ")[2] +
    " " +
    "ЛДСП 10 Ст1 Р2 Е0,5 2750*1830 U белоснежный"
      .split("2750*1830")[1]
      .split(" ")[3]
); */

universal(vars.xlData, vars.cols1, vars.classic, "ЛДСП 10", 491);
universal(vars.xlData, vars.cols2, vars.classic, "ЛДСП 10", 552);
universal(vars.xlData, vars.cols3, vars.classic, "ЛДСП 10", 623);

universal(vars.xlData, vars.cols1, vars.premium, "ЛДСП 10", 551);
universal(vars.xlData, vars.cols2, vars.premium, "ЛДСП 10", 657);
universal(vars.xlData, vars.cols3, vars.premium, "ЛДСП 10", 728);

universal(vars.xlData, vars.cols1, vars.lux, "ЛДСП 10", 591);
universal(vars.xlData, vars.cols2, vars.lux, "ЛДСП 10", 755);
universal(vars.xlData, vars.cols3, vars.lux, "ЛДСП 10", 826);

export default data;
