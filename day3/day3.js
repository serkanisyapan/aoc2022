import { data } from "./day3input.js";
import { scoreData } from "./day3input.js";

const findMatch = (stringOne, stringTwo) => {
  let matchCharacter = "";
  for (let char in stringOne) {
    if (stringTwo.includes(stringOne[char])) {
      matchCharacter = `${stringOne[char]}`;
    }
  }
  return matchCharacter;
};

let totalRuckSack = 0;
for (let rucksack of data) {
  const [first, second] = [
    rucksack.slice(0, rucksack.length / 2),
    rucksack.slice(rucksack.length / 2),
  ];
  let character = findMatch(first, second);
  totalRuckSack += scoreData[character];
}
