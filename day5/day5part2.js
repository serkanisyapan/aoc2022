import { data } from "./day5input.js";

let startPosition = [
  ["Q", "F", "M", "R", "L", "W", "C", "V"],
  ["D", "Q", "L"],
  ["P", "S", "R", "G", "W", "C", "N", "B"],
  ["L", "C", "D", "H", "B", "Q", "G"],
  ["V", "G", "L", "F", "Z", "S"],
  ["D", "G", "N", "P"],
  ["D", "Z", "P", "V", "F", "C", "W"],
  ["C", "P", "D", "M", "S"],
  ["Z", "N", "W", "T", "V", "M", "P", "C"],
];

for (let crates of data) {
  const splitCrates = crates.split(" ");
  const quantity = parseInt(splitCrates[1]);
  const from = parseInt(splitCrates[3]) - 1;
  const to = parseInt(splitCrates[5]) - 1;
  let newArray = [];
  for (let i = 0; i < quantity; i++) {
    newArray.push(startPosition[from].pop());
  }
  let reverseArray = newArray.reverse();
  startPosition[to] = [...startPosition[to], ...reverseArray];
  console.log(newArray.reverse());
  console.log(startPosition);
}

for (let lastIndex of startPosition) {
  console.log(lastIndex[lastIndex.length - 1]);
}

// TCGLQSLPW
