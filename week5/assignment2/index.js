function vowelCount(word) {
  let result = word.match(/[aeiou]/gi);
  let count = result.length;
  let vowelCountMap = new Map();
  for (i = 0; i < count; i++) {
    vowelCountMap.set(i + 1, result[i]);
  }
  console.log(vowelCountMap);
  return vowelCountMap;
}

vowelCount("TEST");
