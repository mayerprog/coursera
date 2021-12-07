var newHashtags = [];
/**
 * @param {String[]} hashtags
 * @returns {String}
 */
module.exports = function (hashtags) {

newHashtags = hashtags.map(function(s) {
    return s.toLowerCase();
});

var uniqHashtags = newHashtags.filter(functionForFun);

var hashtagsToString = uniqHashtags.join(', ');
return hashtagsToString;
};

function functionForFun(item, index) {
    
    if (index === newHashtags.indexOf(item))
    return item;
}


