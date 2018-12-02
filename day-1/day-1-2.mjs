// https://adventofcode.com/2018/day/1
// Part 2
import input from "./input.mjs";

const formattedInput = input.map(el => parseInt(el));
let frequencies = [];
const checkFreq = freq => frequencies.filter(el => el === freq).length === 2;

const calibrate = (input, initialValue) => {
  const init = input.reduce((accumulator, currentValue) => {
    const val = accumulator + currentValue;
    frequencies.push(val);
    if (checkFreq(val)) {
      console.log(val);
    }
    return val;
  }, initialValue);

  return calibrate(formattedInput, init);
};

calibrate(formattedInput, 0);
// 256
