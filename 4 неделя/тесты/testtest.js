/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */


let items = [["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]];
let ruleKey = "color";
let ruleValue = "silver";
let countMatches = function (items, ruleKey, ruleValue) {
  let result = [];
  for (let i = 0; i < items.length; i++) {
    // итерируемся по массиву
    let arrayPrototype = {
      // создаем объект для присваивания прототипированных ключей к элементам массивов массива
      type: items[i][0],
      color: items[i][1],
      name: items[i][2],
    };
    for (let key in arrayPrototype) { // если if не выполняется вообще, то ничего не возвращается, поэтому брейк ставить не обязательно
      if ((ruleKey == key && ruleValue == arrayPrototype[key]))
        {
        result.push(items[i])
        break; // цикл прекращается, когда выполняется if
      }
    }
  }
  return result.length;
};

console.log(countMatches(items, ruleKey, ruleValue));
