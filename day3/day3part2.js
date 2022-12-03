import { data } from "./day3input.js";
import { scoreData } from "./day3input.js";

const findMatch = (stringOne, stringTwo, stringThree) => {
  let matchCharacter = "";
  for (let char in stringOne) {
    if (
      stringTwo.includes(stringOne[char]) &&
      stringThree.includes(stringOne[char])
    ) {
      matchCharacter = `${stringOne[char]}`;
    }
  }
  return matchCharacter;
};

let arrayofThrees = [];
let array = [];
for (let i = 0; i < data.length; i += 3) {
  array.push(data[i]);
  array.push(data[i + 1]);
  array.push(data[i + 2]);
  arrayofThrees.push(array);
  array = [];
}

let totalRuckSack = 0;
for (let threes of arrayofThrees) {
  const [stringOne, stringTwo, stringThree] = threes;
  let character = findMatch(stringOne, stringTwo, stringThree);
  totalRuckSack += scoreData[character];
}
console.log(totalRuckSack);
