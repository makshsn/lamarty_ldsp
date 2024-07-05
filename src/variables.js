import XLSX from "xlsx";
const workbook = XLSX.readFile("./src/price/LDSP.xlsx");
const sheet_name = workbook.SheetNames;
const xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name[0]]);

const cols1 = `L,R,A,F,K,O,T,P,V,А,К,О,Т,Р`.split(",");
const cols2 = `D,N,G,US`.split(",");
const cols3 = `N*,D*,U`.split(",");
const classicTemp = `•	аликанте
•	арабика
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
•	интра
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
•	черный
•	черный
•	ясень
•	ясень борнхольм
•	ясень светлый
•	ясень темный
`.split("•	");
const premiumTemp = `•	айконик
•	айронвуд
•	альберо
•	альфа
•	алюминий
•	АУРА
•	белый кристалл
•	береза мраморная
•	береза нордик
•	блэквуд
•	бохо
•	винтаж
•	вишня гамильтон
•	гамбия
•	графит
•	дельмар
•	дуб галиано
•	дуб кальяри
•	дуб марсала
•	ДУО
•	карум
•	кейптаун	•	клауд
•	клио 
•	КРАФТ
•	КЭНДИ
•	лайм •	либерти 
•	ЛИЛО
•	манго
•	маренго 
•	МУЗА
•	муссон 
•	намибия
•	небула
•	НЕЙРО
•	ноче мондиале
•	орех мармара
•	орех неаполь
•	ориноко 
•	орион
•	помпеи 
•	ПЛЭЙН
•	рамбла
•	РЕЙН
•	руанда 
•	рускеала 	•	сепия
•	серый камень
•	слэйт •	соната
•	сосна санторини
•	СОУЛ
•	софт 
•	терраццо 
•	титан
•	трансильвания
•	тэффи
•	фантом
•	Феникс
•	флай
•	Фламинго
•	флекс
•	фреска
•	ФРОСТ
•	хаки
•	хронос
•	ХЮГГЕ
•	цемент
•	чили
•	этно
`.split("•	");
const luxTemp = `•	аметист
•	графика
•	гринери
•	дуб солсбери
•	ирис
•	коралл
•	магма
•	малави
•	одиссея 
•	парма
•	розовый жемчуг
•	розовый кварц
•	серенити
•	скала
•	солнечный
•	терра 
•	элит баттл рок
`.split("•	");
let classic = [];
let premium = [];
let lux = [];
for (let index = 0; index < classicTemp.length; index++) {
  if (classicTemp[index].length > 1) {
    classic.push(classicTemp[index].replace("\n", "").replace("\t", ""));
  }
}
for (let index = 0; index < premiumTemp.length; index++) {
  if (premiumTemp[index].length > 1) {
    premium.push(premiumTemp[index].replace("\n", "").replace("\t", ""));
  }
}
for (let index = 0; index < luxTemp.length; index++) {
  if (luxTemp[index].length > 1) {
    lux.push(luxTemp[index].replace("\n", "").replace("\t", ""));
  }
}

console.log(classic);
export { xlData, cols1, cols2, cols3, classic, premium, lux };
