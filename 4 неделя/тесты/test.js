/**
 * @param {Array} collection
 * @params {Function[]} – Функции для запроса
 * @returns {Array}
 */

/**
 * @params {String[]}
 */

/**
 * @param {String} property – Свойство для фильтрации
 * @param {Array} values – Массив разрешённых значений
 */

function query(collection) {
  var argsArray = [].slice.call(arguments); //копируем аргументы, которые пришли в query и превращаем их в массив
  var inputOriginalCollection = arguments[0]; //коллекция
  var resultCopy; // конечный результат, тут скорее всего понадобится проставить копию коллекции, т.к. при передаче только коллекции, вернется ее копия
// первый цикл всегда будет с filterIn, т.к. сначала нужно отфильтровать, а потом всё остальное
  for (i = 1; i < argsArray.length; i++) { 
      if (argsArray[i].name == 'filterIn') {
        resultCopy = argsArray[i].action(inputOriginalCollection);
      }
  }
// argsArray[i] - мы таким образом обращаемся к объекту select или filterIn, так можно обратиться к ключам этих объектов
  for (i = 1; i < argsArray.length; i++) {
      if (argsArray[i].name == 'select') {
        resultCopy = argsArray[i].action(resultCopy);
      }
  }
  console.log(resultCopy)
  return resultCopy;
}
function select() { //функция, которая возвращает объект с именем select и методом
  var argsArraySelect = [].slice.call(arguments); //копируем и превращаем в массив аргументы, которые пришли в select 
  return {
      name: 'select',
      action: function (inputArr) {
          var outputArr = []; //создаем пустой массив, в который положим результат
          inputArr.forEach(function (inputArrItem) { //перебор коллекции
              var outputObject = {}; 
              argsArraySelect.forEach(function (argsArraySelectItem) { //перебор массива аргументов, пришедших в select
                  outputObject[argsArraySelectItem] = inputArrItem[argsArraySelectItem];
              });
              outputArr.push(outputObject);
          });
          return outputArr;
      }
  }
}

function filterIn(property, values) { //функция, которая возвращает объект с именем filterIn и методом
  var argsArrayFilterIn = [].slice.call(arguments); //копируем и превращаем в массив аргументы, которые пришли в filterIn (ключ в виде строки и массив со свойствами этого ключа)
  return {
      name: 'filterIn',
      action: function (inputArr) {
          outputArr = [] //пустой массив, в который мы засунем необходимые значения
          inputArr.forEach(function (inputArrItem) { //перебор коллекции
              var searchCheck = false; // на случай, если никакого значения вообще не пришло!!!
              for (i = 0; i < argsArrayFilterIn.length; i = i + 2) {
                  var keyName = argsArrayFilterIn[i];
                  var keyValues = argsArrayFilterIn[i + 1];
                  var filterOp = function (value) { return value == inputArrItem[keyName] }
                  searchCheck = keyValues.some(filterOp);

                  if (!searchCheck) {
                      break;
                  }
                }
                if (searchCheck) {
                  outputArr.push(inputArrItem)
              }
          });
          return outputArr;
      }
  } 
}

module.exports = {
  query: query,
  select: select,
  filterIn: filterIn
};

