// Встроенный в Node.JS модуль для проверок
var assert = require('assert');
// Подключаем свою функцию
var phoneBook = require('./index (1).js');

// Добавляем телефоны контакту Ivan
phoneBook('ADD Ivan 555-10-01,555-10-03');
phoneBook('ADD Ivan 555-10-02');

// Проверка работы функции SHOW
assert.deepEqual(
    // Получаем содержимое телефонной книги
    phoneBook('SHOW'),
    [
        'Ivan: 555-10-01, 555-10-03, 555-10-02'
    ],
    'В телефонной книге: "Ivan: 555-10-01, 555-10-03, 555-10-02"'
);

// Проверка работы функции REMOVE_PHONE
assert.equal(
    // Удаляем телефон 555-10-03
    phoneBook('REMOVE_PHONE 555-10-03'),
    true,
    'Телефон 555-10-03 успешно удален'
);
// Добавляем новый контакт
phoneBook('ADD Alex 555-20-01');

// Проверка работы функции SHOW
assert.deepEqual(
    // Получаем содержимое телефонной книги
    phoneBook('SHOW'),
    [
        'Alex: 555-20-01',
        'Ivan: 555-10-01, 555-10-02'
    ],
    'В телефонной книге: "Alex: 555-20-01", "Ivan: 555-10-01, 555-10-02"'
);

// Удаляем телефон
phoneBook('REMOVE_PHONE 555-20-01');

// Проверка работы функции SHOW
assert.deepEqual(
    // Получаем содержимое телефонной книги
    phoneBook('SHOW'),
    [
        'Ivan: 555-10-01, 555-10-02'
    ],
    'В телефонной книге: "Ivan: 555-10-01, 555-10-02"'
);

phoneBook('ADD Ivan 666');
phoneBook('REMOVE_PHONE 666');

phoneBook('ADD Mairy_Sailus 8789-8487-6886,444888,78-7-648');
phoneBook('REMOVE_PHONE 8789-8487-6886');
phoneBook('REMOVE_PHONE 444888');
phoneBook('REMOVE_PHONE 78-7-648');




assert.deepEqual(
    // Получаем содержимое телефонной книги
    phoneBook('SHOW'),
    [
        'Ivan: 555-10-01, 555-10-02'
    ],
    'В телефонной книге: "Ivan: 555-10-01, 555-10-02"'
);

console.info('OK!');
