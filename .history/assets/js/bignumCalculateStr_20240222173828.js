const compareStr = (number1, number2) => {
  while (number1.length < number2.length) {
    number1 = "0" + number1;
  }
  while (number1.length > number2.length) {
    number2 = "0" + number2;
  }
  if (number1 < number2) return -1;
  if (number1 > number2) return 1;
  return 0;
};

console.log(compareStr("10000", "10000"));
