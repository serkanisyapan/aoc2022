import { data } from "./day2input.js";

let userScore = 0;
const scoreTable = {
  rock: 1,
  paper: 2,
  scissors: 3,
  draw: 3,
  win: 6,
};

// for (let choices of data) {
//   const [elf, user] = choices.split(" ");
//   if (user === "X") userScore += scoreTable.rock;
//   if (user === "Y") userScore += scoreTable.paper;
//   if (user === "Z") userScore += scoreTable.scissors;
//   if (
//     (elf === "A" && user === "X") ||
//     (elf === "B" && user === "Y") ||
//     (elf === "C" && user === "Z")
//   ) {
//     userScore += scoreTable.draw;
//   }
//   if (
//     (elf === "A" && user === "Y") ||
//     (elf === "B" && user === "Z") ||
//     (elf === "C" && user === "X")
//   ) {
//     userScore += scoreTable.win;
//   }
// }

for (let choices of data) {
  const [elf, user] = choices.split(" ");
  if (user === "X") {
    if (elf === "A") userScore += scoreTable.scissors;
    if (elf === "B") userScore += scoreTable.rock;
    if (elf === "C") userScore += scoreTable.paper;
  }
  if (user === "Y") {
    if (elf === "A") userScore += scoreTable.rock;
    if (elf === "B") userScore += scoreTable.paper;
    if (elf === "C") userScore += scoreTable.scissors;
    userScore += scoreTable.draw;
  }
  if (user === "Z") {
    if (elf === "A") userScore += scoreTable.paper;
    if (elf === "B") userScore += scoreTable.scissors;
    if (elf === "C") userScore += scoreTable.rock;
    userScore += scoreTable.win;
  }
}
console.log(userScore);
