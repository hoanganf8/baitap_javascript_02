//Viết hàm kiểm tra số nguyên tố

var isPrime = function (n) {
  if (n % 1 !== 0 || n <= 1) {
    return false;
  }

  for (var i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
};

var number = 10;

if (isPrime(number)) {
  console.log(`Là số nguyên tố`);
} else {
  console.log(`Không phải số nguyên tố`);
}
