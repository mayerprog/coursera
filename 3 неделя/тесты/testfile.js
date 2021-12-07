/**
 * @param {String} date
 * @returns {Object}
 */
var commandYears = 'years';
var commandMonths = 'months';
var commandDays = 'days';
var commandHours = 'hours'
var commandMinutes = 'minutes';
var commandArrays = [commandYears, commandMonths, commandDays, commandHours, commandMinutes];

var sumPlus = '+';
var subtractionMinus = '-';
module.exports = function (date) 
{
    let objectWithDate = {
        newDate: new Date(date),
        add: function (value, command) {
            if (isValidArgument (value, command)) {
                comparisonFunction(value, command, this.newDate, sumPlus)
            } else throw new TypeError();
            return this;
        },
        subtract: function (value, command) {
            if (isValidArgument (value, command)) {
                comparisonFunction(value, command, this.newDate, subtractionMinus)
            } else throw new TypeError();
            return this;
        },
    };
    Object.defineProperties(objectWithDate,
    {
        years: {
            get: function () {
                return this.newDate.getFullYear(); 
            //this.newDate почему-то у меня работает только если значение свойств передаю через геттеры
            //а если делать objectWithDate.newDate (тогда можно без геттеров), почему-то значения не изменялись(точно уже не помню, что было)
            },
        },
        months: {
            get: function () {
                return correctDate(this.newDate.getMonth() + 1);
            }, //нумерация месяцев начинается с нуля для первого месяца в году.
        },
        days: {
            get: function () {
                return correctDate(this.newDate.getDate());
            },
        },
        hours: { 
            get: function () {
                return correctDate(this.newDate.getHours());
            },
        },
        minutes: { 
            get: function () {
                return correctDate(this.newDate.getMinutes());
            },
        },
        value: {
            get: function () {
                return this.years + '-' + this.months + '-' + this.days + " " + this.hours + ":" + this.minutes; 
                // что интересно, если делать return this.newDate, то возвращается дата не только в неправильном формате 2014-12-31T21:00:00.000Z,
                // но и почему-то вычитается по -1 из года, дня и месяца и -3 из часа
                //нужно для того, чтобы результат передавался в правильном формате
            }
        }
    })
return objectWithDate;
}
function comparisonFunction(value, action, currentDate, operationSign) {
    if (action === commandYears && operationSign === sumPlus) {
        var changeYears = addThisShit (value, currentDate.getFullYear());
        return currentDate.setFullYear(changeYears);
    }
    else if (action === commandYears && operationSign === subtractionMinus) {
        var changeYears = subtractThisShit (value, currentDate.getFullYear());
        return currentDate.setFullYear(changeYears);
    }

    if (action === commandMonths && operationSign === sumPlus) {
        var changeMonths = addThisShit (value, currentDate.getMonth());
        return currentDate.setMonth(changeMonths);
    }
    else if (action === commandMonths && operationSign === subtractionMinus) {
        var changeMonths = subtractThisShit (value, currentDate.getMonth());
        return currentDate.setMonth(changeMonths);
    }

    if (action === commandDays && operationSign === sumPlus) {
        var changeDays = addThisShit (value, currentDate.getDate());
        return currentDate.setDate(changeDays);
    }
    else if (action === commandDays && operationSign === subtractionMinus) {
        var changeDays = subtractThisShit (value, currentDate.getDate());
        return currentDate.setDate(changeDays);
    }

    if (action === commandHours && operationSign === sumPlus) {
        var changeHours = addThisShit (value, currentDate.getHours());
        return currentDate.setHours(changeHours);
    }
    else if (action === commandHours && operationSign === subtractionMinus) {
        var changeHours = subtractThisShit (value, currentDate.getHours());
        return currentDate.setHours(changeHours);
    }

    if (action === commandMinutes && operationSign === sumPlus) {
        var changeMinutes = addThisShit (value, currentDate.getMinutes());
        return currentDate.setMinutes(changeMinutes);
    }
    else if (action === commandMinutes && operationSign === subtractionMinus) {
        var changeMinutes = subtractThisShit (value, currentDate.getMinutes());
        return currentDate.setMinutes(changeMinutes);
    }
}

function correctDate(value) {
    if (value < 10)
    return '0' + value;
    else return value;
};

function isValidArgument (value, command) {
    if ((commandArrays.includes(command)) && (value > 0)) {
    return true;
    }
};

function addThisShit (value, time) {
    return time + value;
};

function subtractThisShit (value, time) {
    return time - value;
}

