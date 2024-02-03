//Hàm chuyển đổi từ string mà người dùng nhập vào thành arr
const numInput = (number) => {
  const numArr = [];

  if (number[0] == "-") {
    numArr.push("-");
    number = number.substring(1);
  }

  for (let i = 0; i < number.length; i++) {
    numArr.push(+number[i]);
  }
  return numArr;
};

// Hàm chuyển đổi từ arr sang string để có thể hiển thị
const stringInput = (number) => {
  return number.join("");
};

//Hàm kiểm tra xem 1 số có phải số âm không
const isNegativeN = (numArr) => {
  if (numArr[0] == "-") {
    return true;
  }

  return false;
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
//Xoa so 0 ở đầu
const removeZeroFromBegin = (arr) => {
  if (arr.length > 1) {
    let i = 0;
    while (i < arr.length) {
      if (arr[i] == 0) {
        arr.shift();
      } else {
        break;
      }
    }
  }
  return arr;
};
//Hàm so sánh 2 số
const compare = (number1, number2) => {
  number1 = removeZeroFromBegin(number1);
  number2 = removeZeroFromBegin(number2);

  if (number1.length > number2.length) {
    return 1;
  }

  if (number2.length > number1.length) {
    return -1;
  }

  for (let i = 0; i < number1.length; i++) {
    if (number1[i] > number2[i]) {
      return 1;
    }

    if (number1[i] < number2[i]) {
      return -1;
    }
  }

  return 0;
};

//Hàm kiểm tra xem 1 số có phải 0 không
const isZero = (number) => {
  console.log(number);
  removeZeroFromBegin(number);
  if (number.length) {
    return false;
  }
  return true;
};
// Cong 2 so nguyen lon

const add = (numArr1, numArr2) => {
  let isAllNegative = isNegativeN(numArr1) && isNegativeN(numArr2);
  if (isAllNegative) {
    numArr1.shift("-");
    numArr2.shift("-");
  }
  let result = [];
  let max = Math.max(numArr1.length, numArr2.length);

  let compareNums = compare(numArr1, numArr2);
  let zcount = Math.abs(numArr1.length - numArr2.length);
  if (compareNums == 1) {
    for (let i = 1; i <= zcount; i++) {
      numArr2.unshift(0);
    }
  }

  if (compareNums == -1) {
    for (let i = 1; i <= zcount; i++) {
      numArr1.unshift(0);
    }
  }

  let remain = 0;
  for (let i = max - 1; i >= 0; i--) {
    let x = numArr1[i] + numArr2[i] + remain;
    remain = Math.floor(x / 10);
    x = x % 10;
    result.push(x);
  }

  result.push(remain);
  result = reverse(result);
  result = removeZeroFromBegin(result);
  if (isAllNegative) {
    result.unshift("-");
  }
  return result;
};

//Tru 2 so nguyen lon
const sub = (numArr1, numArr2) => {
  let result = [];
  let max = Math.max(numArr1.length, numArr2.length);

  let compareNums = compare(numArr1, numArr2);
  let zcount = Math.abs(numArr1.length - numArr2.length);
  if (compareNums == 1) {
    for (let i = 1; i <= zcount; i++) {
      numArr2.unshift(0);
    }
  }

  if (compareNums == -1) {
    for (let i = 1; i <= zcount; i++) {
      numArr1.unshift(0);
    }
  }

  let remain = 0;
  for (let i = max - 1; i >= 0; i--) {
    let x = numArr1[i] - numArr2[i] - remain;
    if (x < 0) {
      x += 10;
      remain = 1;
    } else remain = 0;

    result.push(x);
  }

  result = reverse(result);

  return removeZeroFromBegin(result);
};

//Xu ly cho phep nhan
const mul = (numArr1, numArr2) => {
  let isNegative = false;

  if (isNegativeN(numArr1)) {
    numArr1.shift();
    isNegative = !isNegative;
  }

  if (isNegativeN(numArr2)) {
    numArr2.shift();
    isNegative = !isNegative;
  }

  let result = addZeroToBegin(numArr1.length + numArr2.length + 1);
  numArr1 = reverse(numArr1);
  numArr2 = reverse(numArr2);
  for (let i = 0; i < numArr1.length; i++) {
    for (let j = 0; j < numArr2.length; j++) {
      result[i + j] += numArr1[i] * numArr2[j];
      result[i + j + 1] += Math.floor(result[i + j] / 10);
      result[i + j] %= 10;
    }
  }
  for (let i = 0; i < result.length - 1; i++) {
    result[i + 1] += Math.floor(result[i] / 10);
    result[i] %= 10;
  }

  reverse(numArr1);
  reverse(numArr2);
  result = reverse(result);

  result = removeZeroFromBegin(result);
  if (isNegative) {
    result.unshift("-");
  }
  return result;
};

// chia so lon cho so nho lay nguyen
const smalldivInt = (numArr, smalNum) => {
  let result = [];
  let remain = 0;
  numArr.forEach((num) => {
    remain = remain * 10 + num;
    result.push(Math.floor(remain / smalNum));
    remain = remain % smalNum;
  });

  result = removeZeroFromBegin(result);

  return result;
};

// chia lay nguyen 2 so nguyen lon
const divInt = (numArr1, numArr2) => {
  let l = [1];
  let r = numArr1;
  let res = [0];
  while (compare(l, r) == -1 || compare(l, r) == 0) {
    let mid = smalldivInt(add(r, l), 2);

    if (compare(numArr1, mul(mid, numArr2)) != -1) {
      res = mid;
      l = add(mid, [1]);
    } else {
      r = sub(mid, [1]);
    }
  }

  return res;
};
// chia 2 so nguyen lon lay du
const divIntRemain = (numArr1, numArr2) => {
  let divIntN = divInt(numArr1, numArr2);
  let res = sub(numArr1, mul(divIntN, numArr2));
  res = res.length !== 0 ? res : [0];
  return res;
};

const div = (numArr1, numArr2) => {
  let isNegative = false;
  if (
    (isNegativeN(numArr1) && !isNegativeN(numArr2)) ||
    (!isNegativeN(numArr1) && isNegativeN(numArr2))
  ) {
    isNegative = true;
  }

  if (isNegativeN(numArr1)) {
    numArr1.shift();
  }

  if (isNegativeN(numArr2)) {
    numArr2.shift();
  }

  let divIntN = divInt(numArr1, numArr2);
  let divRemain = divIntRemain(numArr1, numArr2);
  res = divIntN;

  if (compare(divRemain, [0]) == 1) {
    if (compare(divRemain, numArr2) == -1) {
      divRemain.push(0);
      res.push(".");
      while (compare(divRemain, numArr2) == -1) {
        divRemain.push(0);
        res.push(0);
      }
    }

    let l = 10;
    while (l >= 1) {
      let remainDivInt = divInt(divRemain, numArr2);
      let remainDivRemain = divIntRemain(divRemain, numArr2);
      res = res.concat(remainDivInt);
      if (compare(remainDivRemain, [0]) == 0) {
        break;
      }

      remainDivRemain.push(0);
      divRemain = remainDivRemain;
      l--;
    }
  }

  if (isNegative) {
    res.unshift("-");
  }

  return res;
};
