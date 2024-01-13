//5)if user enters the "Shubham ranjane" only print "shubham r" and write a funtion for that

let string=(str)=>{
    let spit_string=str.trim().split(" ");
    let word1=spit_string[0];
    let word2=spit_string[1]
    console.log(word1,word2.charAt(0));
}
string("shubham ranjane");

