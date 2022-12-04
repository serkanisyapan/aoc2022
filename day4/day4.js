import { data } from "./day4input.js";

let totalContainer = 0;
for (let pairs of data) {
  const [firstPair, secondPair] = pairs.split(",");
  let [l1, r1] = firstPair.split("-");
  let [l2, r2] = secondPair.split("-");
  l1 = parseInt(l1);
  l2 = parseInt(l2);
  r1 = parseInt(r1);
  r2 = parseInt(r2);
  if (l1 <= l2 && r2 <= r1) {
    totalContainer += 1;
  } else if (l2 <= l1 && r1 <= r2) {
    totalContainer += 1;
  }
}

console.log(totalContainer);
