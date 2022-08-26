let cp, sp, buyDay, sellDay;
let profit = sp - cp;

function maxProfit(array) {
  for (let i = 0; i < array.length; i++) {
    cp = Math.min(...array);
    buyDay = array.indexOf(cp);
  }
  if (buyDay != array.length - 1) {
    let newArray = array.splice(buyDay + 1);
    for (let j = buyDay + 1; j < newArray.length; j++) {
      console.log(newArray);
      sp = Math.max(...newArray);
      sellDay = newArray.indexOf(sp);
    }
    profit = sp - cp;
    return profit <= 0 ? 0 : profit;
  }
  return 0;
}

let prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices));
let prices2 = [7, 6, 4, 3, 1];
console.log(maxProfit(prices2));
