import { data } from "./day2input.js";

let userScore = 0;
const scoreTable = {
  rock: 1,
  paper: 2,
  scissors: 3,
  draw: 3,
  win: 6,
};

const { rock, paper, scissors, draw, win } = scoreTable;

// for (let choices of data) {
//   const [elf, user] = choices.split(" ");
//   if (user === "X") userScore += rock;
//   if (user === "Y") userScore += paper;
//   if (user === "Z") userScore += scissors;
//   if (
//     (elf === "A" && user === "X") ||
//     (elf === "B" && user === "Y") ||
//     (elf === "C" && user === "Z")
//   ) {
//     userScore += draw;
//   }
//   if (
//     (elf === "A" && user === "Y") ||
//     (elf === "B" && user === "Z") ||
//     (elf === "C" && user === "X")
//   ) {
//     userScore += win;
//   }
// }

for (let choices of data) {
  const [elf, user] = choices.split(" ");
  if (user === "X") {
    if (elf === "A") userScore += scissors;
    if (elf === "B") userScore += rock;
    if (elf === "C") userScore += paper;
  }
  if (user === "Y") {
    if (elf === "A") userScore += rock;
    if (elf === "B") userScore += paper;
    if (elf === "C") userScore += scissors;
    userScore += draw;
  }
  if (user === "Z") {
    if (elf === "A") userScore += paper;
    if (elf === "B") userScore += scissors;
    if (elf === "C") userScore += rock;
    userScore += win;
  }
}
console.log(userScore);
