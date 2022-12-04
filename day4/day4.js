import { data } from "./day4input.js";

let totalContainer = 0;
for (let pairs of data) {
  const [firstPair, secondPair] = pairs.split(",");
  let firstPairSplit = firstPair.split("-");
  let secondPairSplit = secondPair.split("-");
  for (let i = 0; i < firstPairSplit.length; i += 2) {
    let l1 = parseInt(firstPairSplit[i]);
    let r1 = parseInt(firstPairSplit[i + 1]);
    let l2 = parseInt(secondPairSplit[i]);
    let r2 = parseInt(secondPairSplit[i + 1]);
    if (l1 <= l2 && r2 <= r1) {
      totalContainer += 1;
    } else if (l2 <= l1 && r1 <= r2) {
      totalContainer += 1;
    }
  }
}
console.log(totalContainer);
