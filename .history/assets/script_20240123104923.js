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
    numArr.push(number[i]);
  }
  return numArr;
};

//Hàm đảo ngược
const reverse = (arr) => {
  arr.reverse();
  return arr;
};
//Xu ly cho phep nhan
const mul = (numArr1, numArr2) => {
  const result = [];
  numArr1 = reverse(numArr1);
  numArr2 = reverse(numArr2);
  for (let i = 0; i < numArr1.length; i++) {
    for (let j = 0; j < numArr2.length; j++) {
      result[i + j] += +numArr1[i] * +numArr2[j];
      result[i + j + 1] = result[i + j] / 10;
      result[i + j] %= 10;
    }
  }
  console.log(result);
};

btnAdd.addEventListener("click", () => {
  numArr1 = numInput(number1.value);
  console.log(numArr1);
});

btnMul.addEventListener("click", () => {
  console.log("Nhân");
});
