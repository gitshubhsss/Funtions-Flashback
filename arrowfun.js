//make a arrow funtion for multiplication table of the given number

let num = 5;

let multi = (num) => {
  let sum = 0;
  for (let i = 1; i <= 10; i++) {
    sum = num * i;
    console.log(`${num} * ${i} = ${sum}`);
  }
};
multi(num);
