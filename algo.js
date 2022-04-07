// a=5
// b=

function main(a, b ) {
  console.log(`a: ${a}, b: ${b}`);
let temp = a;
a = b;
b = temp;
console.log(`a: ${a}, b: ${b}`);
  return 0;
}

main(2, 5)
main(6, 1)
main(7, 2)
main(4, 3)
