//hàm so sánh 2 str
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
//add
const addStr = (number1, number2) => {
  //Cân bằng độ dài 2 số
  while (number1.length < number2.length) {
    number1 = "0" + number1;
  }
  while (number1.length > number2.length) {
    number2 = "0" + number2;
  }
  let carry = 0;
  let result = "";
  for (let i = number1.length - 1; i >= 0; i--) {
    let d = number1[i] - "0" + (number2[i] - "0") + carry;
    carry = Math.floor(d / 10);
    result = (d % 10) + "0" + result;
    console.log(result);
  }
  if (carry) {
    result = "1" + result;
  }
  console.log(result);
};
addStr("123", "3");
