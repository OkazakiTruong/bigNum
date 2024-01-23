const btnAdd = document.querySelector(".btn-add");
const btnMinus = document.querySelector(".btn-minus");
const btnMul = document.querySelector(".btn-mul");
const btnDiv = document.querySelector(".btn-div");
const number1 = document.querySelector(".number1");
const number2 = document.querySelector(".number2");
const result = document.querySelector(".result");

const numInput = (number) => {
  const numArr = [];
  for (let i = 0; i < number1.value.length; i++) {
    numArr.push(number[i]);
  }
  return numArr;
};

btnAdd.addEventListener("click", () => {});
