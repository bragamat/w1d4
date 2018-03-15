var words = ["ground", "control", "to", "major", "tom"];
var wordsLengths = words.map(i => {
  return i.length;
});
var wordsUpper = words.map(i => upperCase(i));
var wordReverse = words.map(i =>  {
  var wordI = i.split("");
  return wordI.reverse().join('');
});
function upperCase(word) {
  return word.toUpperCase();
}

function wordLengths(word) {
  // return i.length;
}
console.log(wordsLengths);
console.log(wordsUpper);
console.log(wordReverse);