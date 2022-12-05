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
  for (let i = 0; i < quantity; i++) {
    startPosition[to].push(startPosition[from].pop());
  }
}

for (let lastIndex of startPosition) {
  console.log(lastIndex[lastIndex.length - 1]);
}
