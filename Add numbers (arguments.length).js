function add (n) {
var sum = 0;

for (var i = 0; i<arguments.length; i++){
sum+=arguments[i];
}
  return sum;
}

\*Simple mission:

add() gets anywhere between 0 and 100 arguments (Integers) and returns their sum.

Examples
add() = 0
add(2) = 2
add(1, 1) = 2
add(1, 2, 3) = 6
add(-3, -2, -1, 1, 2, 3, 4) = 4
*\