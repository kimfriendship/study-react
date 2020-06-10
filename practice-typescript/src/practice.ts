let count = 0;
count += 1;

const message: string = "hello world";
const done: boolean = true;

const numbers: number[] = [1, 2, 3, 4];
const messages: string[] = ["hello", "world"];

messages.push("!");

let mightBeUndefined: string | undefined = undefined;
let nullableNumber: number | null = null;
let color: "yellow" | "green" | "red" = "green";
color = "red";

function sum(x: number, y: number): number {
  return x + y;
}

const resultSum = sum(1, 2);

function sumArray(numbers: number[]): number {
  return numbers.reduce((acc, current) => acc + current, 0);
}

const resultSumArray = sumArray([1, 2, 3, 4, 5]);
console.log(resultSumArray);

function returnNothing(): void {
  console.log("return nothing");
}

function returnStringOrNumber(): string | number {
  return "string or number";
}
