// 1)for a given array with marks of student -> [85,97,44,37,76,60] find the average marks of the entire class
let arr = [85, 97, 44, 37, 76, 60];
let sum = 0;
let avg_marks = (arr) => {
  for (let i in arr) {
    sum = sum + arr[i];
  }
  console.log(sum / arr.length);
};
avg_marks(arr);
