import { concatenation } from "./concatenation";

const button = document.querySelector("button")!;
const input = document.querySelector("input")!;

if (button && input) {
  button.addEventListener("click", () => {
    concatenation(input.value, "hello!");
  });
}

// function add(num1: number, num2: number) {
//   return num1 + num2;
// }

// add(1, 1);

// let total: number = 100;
// let name: string = "Bob";
// let isActive: boolean = false;
