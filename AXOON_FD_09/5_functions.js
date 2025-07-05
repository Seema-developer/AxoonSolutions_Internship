function isEven(num) {
  return num % 2 === 0 ? "Even" : "Odd";
}
console.log(isEven(4));

function factorial(n) {
  let result = 1;
  for(let i = 1; i <= n; i++) result *= i;
  return result;
}
console.log(factorial(5));

function greet(name) {
  return "Hello, " + name + "!";
}
console.log(greet("Seema"));
