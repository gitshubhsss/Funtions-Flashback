// we are given array of marks of students .Filter out the markss of student that scored 90+
let marks = [85, 91, 78, 98, 100, 42, 95, 93, 35];

let newMarks = marks.filter(
  (filter_marks = (value) => {
    return value > 90;
  })
);
console.log(newMarks);
