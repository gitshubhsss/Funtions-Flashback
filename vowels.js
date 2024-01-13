// create a funtion using the "Arrow funtions" that takes a string as an argument & returns the numbers of vowels in the string
vowel_count = 0;
let vowels = (str) => {
  for (let char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      vowel_count++;
    }
  }
  console.log(vowel_count);
};
vowels("ApanaCollage");
