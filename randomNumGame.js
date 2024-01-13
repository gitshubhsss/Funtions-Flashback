// create a game where you start with any random game number . ask the user to keep guessing the number until the user enters corect value;

let user_num = parseInt(prompt("Enter a number"));
let num = 7;
while (user_num != num) {
  user_num = prompt("Enter a correct number");
}
alert(`you have gussed the right number` + num);
