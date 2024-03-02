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
//hàm xóa số 0 ở đầu
const removeZeroFromBeginStr = (number) => {
  while (number.length > 1 && number[0] === "0") {
    number = number.slice(1);
  }
  return number;
};
//hàm kiểm tra có phải là số âm hay không]
const isNegativeStr = (number) => {
  if (number[0] === "-") {
    return true;
  }
  return false;
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
  for (let i = number1.length - 1; i >= 0; i--) {
    d = +number1[i] - +number2[i] - carry;
    if (d < 0) {
      d += 10;
      carry = 1;
    } else {
      carry = 0;
    }
    result = String(d) + result;
  }
  result = removeZeroFromBeginStr(result);
  return result;
};

//cài đặt phép nhân
//nhân một số nguyên lớn với một số nguyên nhỏ
const mulSmallStr = (number1, number2) => {
  let result = "";
  let carry = 0;
  let acc;
  for (let i = number1.length - 1; i >= 0; i--) {
    acc = carry + +number1[i] * number2;
    carry = Math.floor(acc / 10);
    acc %= 10;
    result = String(acc) + result;
  }
  if (carry !== 0) {
    result = String(carry) + result;
  }
  result = removeZeroFromBeginStr(result);
  return result;
};
//nhân một số nguyên lớn với một số nguyên lớn
const mulStr = (number1, number2) => {
  let negativeFlag = false;
  if (isNegativeStr(number1)) {
    negativeFlag = !negativeFlag;
    number1 = number1.slice(1);
  }
  let tg1 = "0";
  let tg2;
  let acc;
  let z = 0;
  for (let i = number2.length - 1; i >= 0; i--) {
    tg2 = mulSmallStr(number1, +number2[i]);
    console.log("tg2", tg2);
    for (let j = 0; j < z; j++) {
      tg2 += "0";
    }
    z++;
    acc = addStr(tg1, tg2);
    acc = removeZeroFromBeginStr(acc);
    tg1 = acc;
  }
  return tg1;
};
