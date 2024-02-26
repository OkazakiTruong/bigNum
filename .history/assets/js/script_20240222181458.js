const btnAdd = document.querySelector(".btn-add");
const btnMinus = document.querySelector(".btn-minus");
const btnMul = document.querySelector(".btn-mul");
const btnDiv = document.querySelector(".btn-div");
const btnClear = document.querySelector(".btn-clear");

const btnAddStr = document.querySelector(".btn-add-str");
const btnMinusStr = document.querySelector(".btn-minus-str");
const btnMulStr = document.querySelector(".btn-mul-str");
const btnDivStr = document.querySelector(".btn-div-str");

const number1 = document.querySelector(".number1");
const number2 = document.querySelector(".number2");
const resultEle = document.querySelector(".result");
const timerEle = document.querySelector(".performance-timer .timer");

btnAdd.addEventListener("click", () => {
  if (validateNumber(number1.value) && validateNumber(number2.value)) {
    const numArr1 = numInput(number1.value);
    const numArr2 = numInput(number2.value);
    console.log(numArr1, numArr2);
    resultEle.value = "";
    let totalTime = 0;
    let res;
    for (let i = 0; i < 10; i++) {
      const t1 = performance.now();
      res = add(numArr1, numArr2);
      const t2 = performance.now();
      totalTime += t2 - t1;
    }

    resultEle.value = stringInput(res);
    timerEle.innerText = totalTime / 10;
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
    number1.value = "";
    number2.value = "";
  }
});

btnMinus.addEventListener("click", () => {
  if (validateNumber(number1.value) && validateNumber(number2.value)) {
    const numArr1 = numInput(number1.value);
    const numArr2 = numInput(number2.value);
    resultEle.value = "";
    let totalTime = 0;
    let res;
    for (let i = 0; i < 10; i++) {
      const t1 = performance.now();
      res = sub(numArr1, numArr2);
      const t2 = performance.now();
      totalTime += t2 - t1;
    }
    if (!res.length) {
      res.push(0);
    }
    resultEle.value = stringInput(res);
    timerEle.innerText = totalTime / 10;
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
    number1.value = "";
    number2.value = "";
  }
});

btnMul.addEventListener("click", () => {
  if (validateNumber(number1.value) && validateNumber(number2.value)) {
    const numArr1 = numInput(number1.value);
    const numArr2 = numInput(number2.value);
    resultEle.value = "";
    let totalTime = 0;
    let res;
    for (let i = 0; i < 10; i++) {
      const t1 = performance.now();
      res = mul(numArr1, numArr2);
      const t2 = performance.now();
      totalTime += t2 - t1;
    }
    if (!res.length) {
      res.push(0);
    }
    resultEle.value = stringInput(res);
    timerEle.innerText = totalTime / 10;
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
    number1.value = "";
    number2.value = "";
  }
});

btnDiv.addEventListener("click", () => {
  if (validateNumber(number1.value) && validateNumber(number2.value)) {
    console.log("có là 0 không? ", isZero(numInput(number2.value)));
    if (!isZero(numInput(number2.value))) {
      const numArr1 = numInput(number1.value);
      const numArr2 = numInput(number2.value);
      resultEle.value = "";
      let totalTime = 0;
      let res;
      for (let i = 0; i < 10; i++) {
        const t1 = performance.now();
        res = div(numArr1, numArr2);
        const t2 = performance.now();
        totalTime += t2 - t1;
      }
      resultEle.value = stringInput(res);
      timerEle.innerText = totalTime / 10;
    } else {
      Toastify({
        text: "Số bị chia không thể bằng 0!!",
        duration: 1000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #ff0b0c, #ff3637)",
        },
      }).showToast();
      number1.value = "";
      number2.value = "";
    }
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
    number1.value = "";
    number2.value = "";
  }
});
btnClear.addEventListener("click", () => {
  number1.value = "";
  number2.value = "";
  resultEle.value = 0;
  timerEle.innerText = "no data";
});

btnAddStr.addEventListener("click", () => {
  if (validateNumber(number1.value) && validateNumber(number2.value)) {
    let res = addStr(number1.value, number2.value);
    resultEle.value = res;
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
    number1.value = "";
    number2.value = "";
  }
});
