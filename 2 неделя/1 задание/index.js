/**
 * @param {String} tweet
 * @returns {String[]}
 */
 
module.exports = function (tweet)
{
  var words = tweet.split(' ');
  var hashtagResult = [];

  hashtagResult = words.filter(thisIsFunction);

  for (i = 0; i < hashtagResult.length; i++)
  {
    var hashtag = hashtagResult[i];
    hashtagResult[i] = hashtag.slice(1);
  }
  return hashtagResult;
}
function thisIsFunction(word)
{
    if (word[0] == '#')
        return word;
}