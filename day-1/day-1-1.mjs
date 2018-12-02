// https://adventofcode.com/2018/day/1
// Part 1
import input from "./input.mjs";

const positiveDeviation = input
  .filter(el => el.includes("+"))
  .map(el => parseInt(el.slice(1)))
  .reduce((accumulator, currentValue) => accumulator + currentValue);

const negativeDeviation = input
  .filter(el => el.includes("-"))
  .map(el => parseInt(el.slice(1)))
  .reduce((accumulator, currentValue) => accumulator + currentValue);

const frequency = 0 + positiveDeviation - negativeDeviation;

console.log(frequency);
// 433
