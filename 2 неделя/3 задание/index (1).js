// Телефонная книга
var phoneBook = {};

/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */
module.exports = function (command) {
    var arrCommand;
    var name;
    var numbers;
    var joined_numbers;
    var resultShow;
    var phone;

    //ADD Ivan 555-10-01,555-10-03

    arrCommand = command.split(' ');
    if (arrCommand[0] == 'ADD')
    {
        name = arrCommand[1];
        numbers = arrCommand[2].split(',');

        joined_numbers = numbers[0];
        for (var i = 1; i < numbers.length; i++)
            joined_numbers += ', ' + numbers[i];
        return addNumberOrContact(name, joined_numbers);
    }
    else if (arrCommand[0] == 'REMOVE_PHONE')
    {
        phone = arrCommand[1];
        return removeNumberOrContact(phone)
    }
    if (arrCommand == 'SHOW')
    {
        resultShow = [];
        for (var contact in phoneBook)
            resultShow.push(contact + ': ' + phoneBook[contact]);
        resultShow.sort();
        return resultShow;
    }
};

function addNumberOrContact (name, joined_numbers) {
    if (!phoneBook.hasOwnProperty(name))
        phoneBook[name] = joined_numbers;
    else
        phoneBook[name] = phoneBook[name] + ', ' + joined_numbers;
}

function removeNumberOrContact(phone) 
{
    var splitValue;

    for (var contact in phoneBook)
    {
        if (phoneBook[contact] === phone)
        {
            delete phoneBook[contact]
                return 1;
        }
        else
        {
            if (phoneBook[contact].indexOf(', ') != -1 &&
            phoneBook[contact].indexOf(phone) != -1)
            {
                splitValue = phoneBook[contact].split(', ')
                for (var i = 0; i < splitValue.length; i++)
                {
                    if (splitValue[i] === phone)
                    {
                        splitValue.splice(i, 1);
                        if (splitValue[1])
                            phoneBook[contact] = splitValue.join(', ');
                        else
                            phoneBook[contact] = splitValue[0];
                        return 1;
                    }
                }
            }
        }
    }
    return 0;   
}