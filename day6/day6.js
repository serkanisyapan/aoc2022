import { word } from "./day6input.js";

for (let i = 0; i < word.length - 4; i++) {
  const allChars = word.slice(i, i + 4);
  const array = [...new Set(allChars)];
  if (array.length === 4) {
    console.log(i + 4);
  }
}
