/**
 * @param {Number} hours
 * @param {Number} minutes
 * @param {Number} interval
 * @returns {String}
 */
module.exports = function(hours, minutes, interval) {
  if (hours >= 0 && hours <= 23 && minutes >= 0 && minutes <= 59) {
    var newMinutes = (minutes + interval) % 60;
    var newHours = (hours + Math.floor((minutes + interval) / 60)) % 24;
    if (newHours < 10) {
      newHours = '0' + newHours;
    }
    if (newMinutes < 10) {
      newMinutes = '0' + newMinutes;
    }
    return newHours + ':' + newMinutes
  }
}