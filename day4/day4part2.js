import { data } from "./day4input.js";

let totalOverlap = 0;
for (let pairs of data) {
  const [firstPair, secondPair] = pairs.split(",");
  let [s1, e1] = firstPair.split("-");
  let [s2, e2] = secondPair.split("-");
  s1 = parseInt(s1);
  s2 = parseInt(s2);
  e1 = parseInt(e1);
  e2 = parseInt(e2);
  if (!(e1 < s2 || s1 > e2)) totalOverlap += 1;
}

console.log(totalOverlap);
