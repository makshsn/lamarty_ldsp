import * as vars from "./variables.js";
const data = [];
function universal(xlData, cols1, cols2, cols3, classic) {
  for (let indexName = 0; indexName < xlData.length; indexName++) {
    if (
      xlData[indexName].Name.toLowerCase().includes("ЛДСП 10".toLowerCase())
    ) {
      for (let indexColl = 0; indexColl < cols1.length; indexColl++) {
        /*   console.log(
          xlData[indexName].Name.split("2750*1830")[1]
            .split(" ")[2]
            .toLowerCase()
        ); */ for (
          let indexClass = 0;
          indexClass < classic.length;
          indexClass++
        ) {
          if (
            xlData[indexName].Name.split("2750*1830")[1]
              .split(" ")[1]
              .toLowerCase()
              .includes(cols1[indexColl].toLowerCase()) &&
            (
              xlData[indexName].Name.split("2750*1830")[1].split(" ")[2] +
              " " +
              xlData[indexName].Name.split("2750*1830")[1].split(" ")[3]
            )
              .toLowerCase()
              .includes(classic[indexClass])
          ) {
            //console.log(cols1[indexColl].toLowerCase());
            data.push({ name: xlData[indexName].Name, price: 491 });
            //console.log(data);
          }
        }
      }
    }
  }
}
/* console.log(
  "ЛДСП 22 Ст1 P2 Е0,5 2750*1830 T Береза нордик"
    .split("2750*1830")[1]
    .split(" ")[2] +
    " " +
    "ЛДСП 22 Ст1 P2 Е0,5 2750*1830 T Береза нордик"
      .split("2750*1830")[1]
      .split(" ")[3]
); */

universal(vars.xlData, vars.cols1, vars.cols2, vars.cols3, vars.classic);

export default data;
