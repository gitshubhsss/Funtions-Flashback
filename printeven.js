//print all the even numbers till 100;
let count = 0;
for (let i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    console.log(i);
    count++;
  }
}
console.log(count);
