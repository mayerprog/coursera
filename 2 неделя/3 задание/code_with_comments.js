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
        addNumberOrContact(name, joined_numbers);
    }
    else if (arrCommand[0] == 'REMOVE_PHONE')
    {
        phone = arrCommand[1];
        if (removeNumberOrContact(phone) == 1)
            return 1;
        return 0;
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

function removeNumberOrContact(phone) {
    var splitValue;

    for (var contact in phoneBook) {
        if (phoneBook[contact] === phone) {
            delete phoneBook[contact]
                return 1;
        }
        else {
            if (phoneBook[contact].indexOf(', ') != -1)
            {
                splitValue = phoneBook[contact].split(', ')
                for (var i = 0; i < splitValue.length; i++) {
                    if (splitValue[i] === phone) {
                        splitValue.splice(i, 1);
                        if (splitValue[1])
                            phoneBook[contact] = splitValue.join(', ');
                        else
                            phoneBook[contact] = split1Value
                    return 1;
                }
            }
        }
    }
    return 0;
}




// function removeNumberOrContact(phone) {
//     for (var contact in phoneBook)
//     {
//         if (one_number_in_contact(phone, contact) == 1) {
//             return 1;
//         }
//         if (many_numbers_in_contact(phone, contact) == 1) {
//             return 1;
//         } 
//     }
//     return (0);
// }

// function one_number_in_contact(phone, contact) {

//     if (phoneBook[contact] === phone) {
//         delete phoneBook[contact]
//             return 1;
//     }
//     return 0;
// }
// function many_numbers_in_contact(phone, contact){
//     var splitValue;

//     splitValue = phoneBook[contact].split(', ')
//     if (splitValue[1]) {
//         for (var i = 0; i < splitValue.length; i++) {
//             if (splitValue[i] === phone) {
//                 splitValue.splice(i, 1);
//                 if (!splitValue[1])
//                     phoneBook[contact] = splitValue;
//                 else
//                     phoneBook[contact] = splitValue.join(', ');
//                 return 1;
//             }
//         }
//     }
// }



//   for (var contact in phoneBook)
//     {
//         if (phoneBook[contact].indexOf(phone + ', ') != -1)
//         {
//             phoneBook[contact] = phoneBook[contact].replace(phone + ', ', "");
//             return 1;
//         }
//         else if (phoneBook[contact].indexOf(phone) != -1)
//         {
//             phoneBook[contact] = phoneBook[contact].replace(phone, "");
//             removeContact(contact);
//             return 1;
//         }
//     }
//     return (0);
    
//     function removeContact(contact)
//     {
//         if (phoneBook[contact] == "")
//             delete phoneBook[contact];
//     }









// for (var contact in phoneBook)
// contactSplit = phoneBook[contact].split(', ');
// console.log(contactSplit);

// for (var i = 0; i < contactSplit.length; i++)
// {
// if (contactSplit[i].indexOf(phone) != -1)
// resultOfRemove = contactSplit.splice(i, 1);
// console.log(resultOfRemove);