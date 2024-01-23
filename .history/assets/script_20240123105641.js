const btnAdd = document.querySelector(".btn-add");
const btnMinus = document.querySelector(".btn-minus");
const btnMul = document.querySelector(".btn-mul");
const btnDiv = document.querySelector(".btn-div");
const number1 = document.querySelector(".number1");
const number2 = document.querySelector(".number2");
const result = document.querySelector(".result");

// return arr from string
const numInput = (number) => {
  const numArr = [];
  for (let i = 0; i < number.length; i++) {
    numArr.push(+number[i]);
  }
  return numArr;
};

//Hàm đảo ngược
const reverse = (arr) => {
  arr.reverse();
  return arr;
};
//Them 0 vao dau
const addZeroToBegin = (length) => {
  const arr = [];
  for (let i = 0; i < length; i++) {
    arr.unshift(0);
  }
  return arr;
};
//Xu ly cho phep nhan
const mul = (numArr1, numArr2) => {
  const result = addZeroToBegin(numArr1.length + numArr2.length);
  numArr1 = reverse(numArr1);
  numArr2 = reverse(numArr2);
  for (let i = 0; i < numArr1.length; i++) {
    for (let j = 0; j < numArr2.length; j++) {
      result[i + j] += numArr1[i] * numArr2[j];
      result[i + j + 1] += result[i + j] / 10;
      result[i + j] %= 10;
      console.log(result);
    }
  }
};

btnAdd.addEventListener("click", () => {
  numArr1 = numInput(number1.value);
  console.log(numArr1);
});

btnMul.addEventListener("click", () => {
  const numArr1 = numInput(number1.value);
  const numArr2 = numInput(number2.value);
  mul(numArr1, numArr2);
});
