/*
S = 1 + 1/2 + 1/3 + 1/4 + 1/5 +…+1/N
*/

var getTotal = function (n) {
  if (n === 1) {
    return 1;
  }

  return 1 / n + getTotal(n - 1);
};

var n = 10;
console.log(getTotal(n));
