function saysomething(phrase){
  console.log("You Said ," + phrase)
}
function getPhraseLength(phrase){
  var l = phrase.length;
  return l;
}
var thislength = getPhraseLength("This is a slightly longer sentence han the usual one")
console.log(thislength)
