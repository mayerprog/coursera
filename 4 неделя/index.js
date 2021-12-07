/**
 * @param {Array} collection
 * @params {Function[]} – Функции для запроса
 * @returns {Array}
 */
function query(collection) {
  var argsArrayCopy = [].slice.call(arguments);
  var arrCollection = arguments[0];
  var counter = 0;
  for (var i = 1; i < argsArrayCopy.length; i++) { 
    if (argsArrayCopy[i].name == 'filterIn') {
      arrCollection = argsArrayCopy[i].action(arrCollection);
      counter += 1;
    }
  }
  for (var i = 1; i < argsArrayCopy.length; i++) {
    if (argsArrayCopy[i].name == 'select')
      arrCollection = argsArrayCopy[i].action(arrCollection);
  }
  console.log(counter);

  return arrCollection;
}

/**
 * @params {String[]}
 */
function select() {
  var argsArrayCopy = [].slice.call(arguments); 
  return {
    name: 'select',
    action: function(inputCollArr) {
      var outputCollArr = [];
      inputCollArr.forEach(function (inputCollArrItem) {
        var objectToOutputCollArr = {};
          for (let i = 0; i < argsArrayCopy.length; i++) {
            for (key in inputCollArrItem) {
              if (argsArrayCopy[i] === key) {
              objectToOutputCollArr[argsArrayCopy[i]] = inputCollArrItem[argsArrayCopy[i]];
              }
            }
          }
        outputCollArr.push(objectToOutputCollArr);
      });
        return outputCollArr;
    }
  }
}

/**
 * @param {String} property – Свойство для фильтрации
 * @param {Array} values – Массив разрешённых значений
 */
function filterIn(property, values) {
  var argsArrayCopy = [].slice.call(arguments);//копируем и превращаем в массив аргументы, которые пришли в filterIn (ключ в виде строки и свойство в виде массива)
  return {
    name: 'filterIn',
    action: function (inputCollArr) {
      var outputCollArr = [];
      inputCollArr.forEach(function (inputCollArrItem) { //итерация по коллекции
        var checkArgs = false; // на случай если никакого значения не пришло
        for (var i = 0; i < argsArrayCopy.length; i = i + 2) { //итерация по объекту filterIn
          var keyName = argsArrayCopy[i];
          var keyValues = argsArrayCopy[i + 1];
          checkArgs = keyValues.some(function(keyValue) {
            return inputCollArrItem[keyName] === keyValue;
          });
          if (!checkArgs) {
            break;
          }
        }
        if (checkArgs) {
          outputCollArr.push(inputCollArrItem)
        }
      });
      return outputCollArr;
    }
  }
}

module.exports = {
    query: query,
    select: select,
    filterIn: filterIn
};

// for (i = 0; i < keyValues.length; i++) { //итерация по свойству ключа объекта filterIn
  //           if ((inputCollArrItem[keyName] !== keyValues[i]) && (inputCollArrItem[keyName] !== keyValues[i + 1])) {
  //             break;
  //           }
  //         }
  //      }
  //      if ((inputCollArrItem[keyName] === keyValues[i]) || (inputCollArrItem[keyName] === keyValues[i + 1])) {
  //       outputCollArr.push(inputCollArrItem);
  //      }
  //   });
  // console.log(outputCollArr);