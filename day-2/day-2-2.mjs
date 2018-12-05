import input from "./input.mjs";
import difference from "lodash/difference";

// const input = ["abcde", "fghij", "klmno", "pqrst", "fguij", "axcye", "wvxyz"];

const idArrays = input.map(id => id.split(""));

const diffs = [];

idArrays.forEach((id, index, self) => {
  self.forEach((selfId, selfIndex) => {
    if (index === selfIndex) {
      return;
    }
    diffs.push({
      id,
      selfId,
      letterDiff: difference(id, selfId),
      selfLetterDiff: difference(selfId, id)
    });
  });
});

// console.log(diffs);

const diffOfOne = diffs.filter(
  el => el.letterDiff.length === 1 && el.selfLetterDiff.length === 1
);

// console.log(diffOfOne);

const diffOfOneWithIndex = diffOfOne
  .map(el => {
    return {
      ...el,
      index: el.id.indexOf(el.letterDiff[0]),
      selfIndex: el.selfId.indexOf(el.selfLetterDiff[0])
    };
  })
  .filter(el => {
    return el.index === el.selfIndex;
  })[0];

diffOfOneWithIndex.id.splice(diffOfOneWithIndex.index, 1);

const result = diffOfOneWithIndex.id.join("");

console.log(result);
