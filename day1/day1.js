import { data } from "./input.js";
let calorieCount = 0;
let maxCalorie = 0;
for (let calories of data) {
  if (calories === "") {
    calorieCount = 0;
  } else {
    let calorieNumber = parseInt(calories);
    calorieCount += calorieNumber;
  }

  if (calorieCount > maxCalorie) {
    maxCalorie = calorieCount;
  }
}
console.log(maxCalorie);
