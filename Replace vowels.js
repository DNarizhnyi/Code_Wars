function replaceVogals(str) {
var re = /[aeiou]/g;
  return str.replace(re, '?');
}