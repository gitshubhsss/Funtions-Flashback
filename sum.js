let num1 = parseInt(prompt("Enter a number"));
let num2 = parseInt(prompt("Enter another number"));
let sum = (num1, num2) => {
  let res = num1 + num2;
  alert(`${num1} + ${num2} = ${res}`);
};
sum(num1, num2);
