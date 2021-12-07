var dateRegexp = /(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2})/;

dateStr = '2016-04-03 01:05';
var match = dateStr.match(dateRegexp);
// При создании даты, нужно учесть, что нумерация месяцев начинается с нуля
var date = new Date(match[1], match[2] - 1, match[3], match[4], match[5]);

console.log(match)

