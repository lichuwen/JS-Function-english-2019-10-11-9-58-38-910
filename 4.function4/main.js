function countWords(message){
  var str = message.split(' ')
  return str.length
}
var ans = countWords('Good morning, I love JavaScript.'); // should return 5
console.log(ans)
