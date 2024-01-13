let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let filter_arr = (value) => {
  return value % 2 == 0;
};
let even_arr = arr.filter(filter_arr);
console.log(even_arr);
