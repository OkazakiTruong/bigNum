import "./bignumCalculate.js";
const btnAdd = document.querySelector(".btn-add");
const btnMinus = document.querySelector(".btn-minus");
const btnMul = document.querySelector(".btn-mul");
const btnDiv = document.querySelector(".btn-div");
const number1 = document.querySelector(".number1");
const number2 = document.querySelector(".number2");
const resultEle = document.querySelector(".result");

btnAdd.addEventListener("click", () => {
  numArr1 = numInput(number1.value);
  console.log(numArr1);
});

btnMul.addEventListener("click", () => {
  const numArr1 = numInput(number1.value);
  const numArr2 = numInput(number2.value);
  mul(numArr1, numArr2);
});
