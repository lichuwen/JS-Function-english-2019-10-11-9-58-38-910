function reverseString(message){
  	var str = "";
  	for(var i=message.length-1; i>=0; i--){
  		str += message[i];
  	}
  	document.write(str)
}
reverseString('hello'); // should return 'olleh'
