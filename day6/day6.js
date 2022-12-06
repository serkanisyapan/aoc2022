import { word } from "./day6input.js";

for (let i = 0; i < word.length - 4; i++) {
  const one = word[i];
  const two = word[i + 1];
  const three = word[i + 2];
  const four = word[i + 3];
  if (
    one !== two &&
    one !== three &&
    one !== four &&
    two !== three &&
    two !== four &&
    three !== four
  ) {
    console.log(i + 4);
  }
}
