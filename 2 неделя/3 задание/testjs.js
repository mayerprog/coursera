var phoneBook = {}; 
command = 'ADD Ivan 555-10-01,555-10-03';
var arrCommand = command.split(' ');
var name = arrCommand[1];
var numbers = arrCommand[2].split(','); 

if (arrCommand[0] === 'ADD')
return addNumberOrContact();

function addNumberOrContact (name, numbers) 
    if (!phoneBook.hasOwnProperty(name)) {
        phoneBook[name] = numbers;
}
    


console.log(Object.values(phoneBook));