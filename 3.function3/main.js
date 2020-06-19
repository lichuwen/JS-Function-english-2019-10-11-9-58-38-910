function alphabetSort(message){
  var str="";
  var len = message.length
  var arr = new Array(6)
  var str_arr = []
  for (var i = 0; i < len; i++) {
    arr[i] = message[i]
  }
  str_arr = arr.sort()
  for (var i = 0; i < len; i++) {
    str += str_arr[i]
  }
  console.log(str)
}
alphabetSort('hello'); // should return 'ehllo'
