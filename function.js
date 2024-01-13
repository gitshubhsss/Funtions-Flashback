let count = 0;
let myfun = (msg) => {
  console.log(msg);
};
for (i = 0; i < 5; i++) {
  count++;
  myfun(`this message has been called ${count} times`);
}
