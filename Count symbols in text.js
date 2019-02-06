var instancesOfN = function ( string, letter ) {

var count = 0;

for ( var i = 0; i< string.length; i++){
  if (string.charAt(i) == letter)
  {
  count+=1;
  }}
  if (count > 0){
  return count;
  }
  else
  return "sorry no matches found"
  
  }
  
