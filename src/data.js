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

universal(vars.xlData, vars.cols1, vars.classic, "ЛДСП 16", 536);
universal(vars.xlData, vars.cols2, vars.classic, "ЛДСП 16", 578);
universal(vars.xlData, vars.cols3, vars.classic, "ЛДСП 16", 641);

universal(vars.xlData, vars.cols1, vars.premium, "ЛДСП 16", 586);
universal(vars.xlData, vars.cols2, vars.premium, "ЛДСП 16", 670);
universal(vars.xlData, vars.cols3, vars.premium, "ЛДСП 16", 734);

universal(vars.xlData, vars.cols1, vars.lux, "ЛДСП 16", 640);
universal(vars.xlData, vars.cols2, vars.lux, "ЛДСП 16", 731);
universal(vars.xlData, vars.cols3, vars.lux, "ЛДСП 16", 791);

universal(vars.xlData, vars.cols1, vars.classic, "ЛДСП 18", 564);
universal(vars.xlData, vars.cols2, vars.classic, "ЛДСП 18", 604);
universal(vars.xlData, vars.cols3, vars.classic, "ЛДСП 18", 669);

universal(vars.xlData, vars.cols1, vars.premium, "ЛДСП 18", 612);
universal(vars.xlData, vars.cols2, vars.premium, "ЛДСП 18", 698);
universal(vars.xlData, vars.cols3, vars.premium, "ЛДСП 18", 761);

universal(vars.xlData, vars.cols1, vars.lux, "ЛДСП 18", 664);
universal(vars.xlData, vars.cols2, vars.lux, "ЛДСП 18", 758);
universal(vars.xlData, vars.cols3, vars.lux, "ЛДСП 18", 818);

universal(vars.xlData, vars.cols1, vars.classic, "ЛДСП 22", 633);
universal(vars.xlData, vars.cols2, vars.classic, "ЛДСП 22", 675);
universal(vars.xlData, vars.cols3, vars.classic, "ЛДСП 22", 738);

universal(vars.xlData, vars.cols1, vars.premium, "ЛДСП 22", 727);
universal(vars.xlData, vars.cols2, vars.premium, "ЛДСП 22", 769);
universal(vars.xlData, vars.cols3, vars.premium, "ЛДСП 22", 832);

universal(vars.xlData, vars.cols1, vars.lux, "ЛДСП 22", 758);
universal(vars.xlData, vars.cols2, vars.lux, "ЛДСП 22", 856);
universal(vars.xlData, vars.cols3, vars.lux, "ЛДСП 22", 920);

universal(vars.xlData, vars.cols1, vars.classic, "ЛДСП 26", 722);
universal(vars.xlData, vars.cols2, vars.classic, "ЛДСП 26", 790);
universal(vars.xlData, vars.cols3, vars.classic, "ЛДСП 26", 859);

universal(vars.xlData, vars.cols1, vars.premium, "ЛДСП 26", 793);
universal(vars.xlData, vars.cols2, vars.premium, "ЛДСП 26", 862);
universal(vars.xlData, vars.cols3, vars.premium, "ЛДСП 26", 929);

universal(vars.xlData, vars.cols1, vars.lux, "ЛДСП 26", 819);
universal(vars.xlData, vars.cols2, vars.lux, "ЛДСП 26", 922);
universal(vars.xlData, vars.cols3, vars.lux, "ЛДСП 26", 1019);
export default data;
