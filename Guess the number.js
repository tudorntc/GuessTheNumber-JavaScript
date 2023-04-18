const number = 100; //max number
const randomNumber = Math.floor(Math.random() * number);

i = 0;
let choice = prompt();
while (i < 10) {
   if (choice > randomNumber) {
      console.log("The number is higher!");
      console.log("Try again");
      choice = prompt();
   }
   else if (choice < randomNumber) {
       console.log("The number is lower!");
       console.log("Try again");
       choice = prompt();
   }
   else if (choice === randomNumber) {
       console.log("Well done");
   }
   i++;
}
if (choice !== randomNumber){
   console.log("You needed more than 10 tries. Game over! Try again.");
}
