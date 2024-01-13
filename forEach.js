let arr = ["shubham", "pavan", "sanket bhagat", "ashish"];

arr.forEach(
  (print_names = (value, index, arry) => {
    //here the meaning of value means value at each index
    console.log(value.toUpperCase(), index, arry);
  })
);
