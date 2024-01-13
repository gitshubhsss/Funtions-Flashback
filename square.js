// for a given array of numbers ,print the square of each value using forEach loop
// arr=[1,2,3,4,5]

let arr = [1, 2, 3, 4, 5];
arr.forEach(
  (squareArr = (value) => {
    console.log(value * value);
  })
);
