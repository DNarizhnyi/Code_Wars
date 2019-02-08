function isABeforeM(arr){
 var a,b;
 
 for (var i = 0; i< arr.length; i++){
   if (arr[i] == 'a'){
   a = i;
   
 } else if (arr[i] =='m'){
 b = i;
 }}
 
 if (a>b){
 
 return false;
 
 } else
 
 return true;

}


// \*Write a function that accepts an array of randomized letters "a" to "z" and returns true if the letter "a" is before the letter "m" in the array, and returns false if the letter "m" is before the letter "a".

// Letters in the provided array will only be downcase and there will only be one instance of a letter in the array, resulting in an array that is 26 elements long.

// Example:
// randoArray = "q a z w s x e d c r f v t g b y h n u j m i k o l p".split(' ')
// aBeforeM(randoArray) // => true

// randoArray2 = "p o l i k u j m y h n t g b r f v e d c w s x q a z".split(' ')
// aBeforeM(randoArray2) // => false
// *\



// \*
// function isABeforeM(a){
  // return a.indexOf('a')<a.indexOf('m')
// }
// *\