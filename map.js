let arr = [1, 2, 3, 4, 5];
let newArr = arr.map(
  (squareNum = (value) => {
    return value * value;
  })
);
console.log(newArr);
