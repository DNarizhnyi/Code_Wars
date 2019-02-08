palindrome = function(str) {
/* Separate by symbol and change into massive
by split(''), then use method reverse()
and put all the symbols in a string by method join('')
*/
var strReverse=str.split('').reverse().join(''); 

/*"racecar" and "RaCecaR" is not the same for a machine. But technicly it is still palindrome.
So we can use either str.toLowerCase or str.toUpperCase
*/

if (str.toLowerCase() == strReverse.toLowerCase()){
return true;
} else {
return false;
}
}