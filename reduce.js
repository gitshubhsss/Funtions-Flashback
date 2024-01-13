//calculate the some of each element from the array

let arr = [1, 2, 400, 4587, 5];
let max = arr.reduce(
  (find_max = (prev, curr) => {
    return prev > curr ? prev : curr;
  })
);
console.log(max);
