// Take a number n as input from user . create an array of numbers from 1 to n use reduce method to calculate sum of all elements in the array use reduce method to calculate the product fo all numbers in the array

let input_num = 5;
let arr = [];
for (let i = 1; i <= input_num; i++) {
  arr[i - 1] = i;
}
let sum = arr.reduce(
  (calc_sum = (prev, curr) => {
    return prev + curr;
  })
);
console.log(`Sum of all elements is ${sum}`);

let avg = arr.reduce(
  (calc_product = (prev, curr) => {
    return prev * curr;
  })
);
console.log(`Average of all elements is ${avg}`);
