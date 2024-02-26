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
//cài đặt phép cộng
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
    let d = +number1[i] + +number2[i] + carry;
    carry = Math.floor(d / 10);
    result = (d % 10) + result;
  }
  if (carry) {
    result = "1" + result;
  }
  return result;
};
//cài đặt phép trừ
const subStr = (number1, number2) => {
  //cân bằng độ dài 2 chuỗi
  while (number1.length < number2.length) {
    number1 = "0" + number1;
  }
  while (number1.length > number2.length) {
    number2 = "0" + number2;
  }

  let d = 0;
  let carry = 0;
  let result = "";
  for (let i = number1.length; i >= 0; i++) {
    d = +number1[i] - +number2[i] - carry;
    if (d < 0) {
      d += 10;
      carry = 1;
    } else {
      carry = 0;
    }
    result = d + result;
  }
  console.log(result);
};
subStr("555", "55");

//cài đặt phép nhân
const mulStr = (number1, number2) => {};
