import { word } from "./day6input.js";

for (let i = 0; i < word.length - 14; i++) {
  const allChars = word.slice(i, i + 14);
  const array = [...new Set(allChars)];
  if (array.length === 14) {
    console.log(i + 14);
  }
}
