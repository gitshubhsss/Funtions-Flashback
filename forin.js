let student = {
  sname: "shubham ranajne",
  roll: 4044,
  class: "Fy msc computer science",
  isPass: true,
};

for (let keys in student) {
  console.log("key = ", keys, "&", "value = ", student[keys]);
}
