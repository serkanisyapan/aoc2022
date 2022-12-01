import { data } from "./input.js";
let calorieCount = 0;
let maxCalorie = 0;
let calorieArray = [];
for (let calories of data) {
  if (calories === "") {
    calorieCount = 0;
  } else {
    let calorieNumber = parseInt(calories);
    calorieCount += calorieNumber;
    calorieArray.push(calorieCount);
  }
}
let sortArray = calorieArray.sort((a, b) => b - a);
console.log(sortArray[0] + sortArray[1] + sortArray[2]);
