const hasDuplicate = (arr) => {
  let setArr = new Set(arr);
  arr.length == setArr.size
    ? console.log("no duplicates")
    : console.log("has duplicates");
};

hasDuplicate([1, 5, -1, 4]);
hasDuplicate([1, 5, -1, 1]);
