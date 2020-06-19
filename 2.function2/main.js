function palindrome(message){
  var str = "";
  for(var i=message.length-1; i>=0; i--){
  	str += message[i];
  }
  if(str == message){
  	return true;
  }
  else{
	return false;
  }
}
document.write(palindrome('hello')); // should return false
document.write(palindrome('abcba')); // should return true
