import XLSX from "xlsx";
const workbook = XLSX.readFile("./src/price/LDSP.xlsx");
const sheet_name = workbook.SheetNames;
const xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name[0]]);

const cols1 = `L,R,A,F,K,O,T,P,V,А,К,О,Т,Р`.split(",");
const cols2 = `D,N,G,US`.split(",");
const cols3 = `N*,D*,U`.split(",");
const classicTemp = `•	аликанте
•	арабика N*
•	бамбук
•	белоснежный  
•	белый
•	бетон пайн белый
•	бетон пайн экзотик
•	бук бавария светлый
•	бук натур
•	венге соренто
•	венге темный
•	вишня оксфорд
•	вулканический серый
•	выбеленное дерево
•	вяз швейцарский
•	дуб вотан	•	дуб дымчатый
•	дуб молочный
•	дуб сонома
•	имбирь 01
•	интра D*
•	калипсо
•	каньон ледяной
•	каньон песчаный
•	капучино
•	кремовый 01
•	ноче гварнери
•	ноче мария луиза
•	ноче экко
•	ольха светлая	•	пальмира
•	серый 7810
•	сканди
•	супер белый 
•	эльбрус 
•	черный D*
•	черный N*
•	ясень
•	ясень борнхольм
•	ясень светлый
•	ясень темный
`.split("•	");
let classic = [];
for (let index = 0; index < classicTemp.length; index++) {
  if (classicTemp[index].length > 1) {
    classic.push(classicTemp[index].replace("\n", "").replace("\t", ""));
  }
}
console.log(cols1);
console.log(cols2);
console.log(cols3);
console.log(classic);
export { xlData, cols1, cols2, cols3, classic };
