const btnAdd = document.querySelector(".btn-add");
const btnMinus = document.querySelector(".btn-minus");
const btnMul = document.querySelector(".btn-mul");
const btnDiv = document.querySelector(".btn-div");
const btnClear = document.querySelector(".btn-clear");
const number1 = document.querySelector(".number1");
const number2 = document.querySelector(".number2");
const resultEle = document.querySelector(".result");

btnAdd.addEventListener("click", () => {
  if (validateNumber(number1.value) && validateNumber(number2.value)) {
    const numArr1 = numInput(number1.value);
    const numArr2 = numInput(number2.value);
    console.log(numArr1, numArr2);
    resultEle.value = "";
    resultEle.value = stringInput(add(numArr1, numArr2));
  } else {
    Toastify({
      text: "Vui lòng nhập đúng định dạng số!!",
      duration: 1000,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #ff0b0c, #ff3637)",
      },
    }).showToast();
  }
});

btnMinus.addEventListener("click", () => {
  if (validateNumber(number1.value) && validateNumber(number2.value)) {
    const numArr1 = numInput(number1.value);
    const numArr2 = numInput(number2.value);
    resultEle.value = "";
    resultEle.value = stringInput(sub(numArr1, numArr2));
  } else {
    Toastify({
      text: "Vui lòng nhập đúng định dạng số!!",
      duration: 1000,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #ff0b0c, #ff3637)",
      },
    }).showToast();
  }
});

btnMul.addEventListener("click", () => {
  const numArr1 = numInput(number1.value);
  const numArr2 = numInput(number2.value);
  resultEle.value = "";
  resultEle.value = stringInput(mul(numArr1, numArr2));
});

btnDiv.addEventListener("click", () => {
  const numArr1 = numInput(number1.value);
  const numArr2 = numInput(number2.value);
  resultEle.value = "";
  resultEle.value = stringInput(div(numArr1, numArr2));
});
btnClear.addEventListener("click", () => {
  number1.value = "";
  number2.value = "";
  resultEle.value = 0;
});