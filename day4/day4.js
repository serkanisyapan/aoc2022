import { data } from "./day4input.js";

let totalContainer = 0;
for (let pairs of data) {
  const [firstPair, secondPair] = pairs.split(",");
  let firstPairSplit = firstPair.split("-");
  let secondPairSplit = secondPair.split("-");
  for (let i = 0; i < firstPairSplit.length; i += 2) {
    let s1 = parseInt(firstPairSplit[i]);
    let e1 = parseInt(firstPairSplit[i + 1]);
    let s2 = parseInt(secondPairSplit[i]);
    let e2 = parseInt(secondPairSplit[i + 1]);
    if (s1 <= s2 && e2 <= e1) {
      totalContainer += 1;
    } else if (s2 <= s1 && e1 <= e2) {
      totalContainer += 1;
    }
  }
}
console.log(totalContainer);
