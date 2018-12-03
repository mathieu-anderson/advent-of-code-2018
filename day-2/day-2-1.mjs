import input from "./input.mjs";

let double = 0;
let triple = 0;

const getCount = (data, search) =>
  data.reduce((n, val) => {
    return n + (val === search);
  }, 0);

const getLetterCounts = input => {
  return input.map(id => {
    const idArray = id.split("");
    return idArray.map(letter => {
      const result = {
        letter,
        count: getCount(idArray, letter)
      };
      return result;
    });
  });
};

const getChecksum = letterCounts => {
  letterCounts.map(idLetters => {
    idLetters = idLetters.filter((el, index, self) => {
      // remove duplicate objects
      return (
        index ===
        self.findIndex(t => t.letter === el.letter && t.count === el.count)
      );
    });

    if (idLetters.some(el => el.count === 2)) {
      double++;
    }
    if (idLetters.some(el => el.count === 3)) {
      triple++;
    }
  });
  return double * triple;
};

console.log(getChecksum(getLetterCounts(input)));
