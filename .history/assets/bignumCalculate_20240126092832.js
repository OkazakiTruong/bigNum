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
//Xoa so 0 ở đầu
const removeZeroFromBegin = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      break;
    }
    arr.shift();
  }
  return arr;
};
//Xu ly phep cong
const add = (numArr1, numArr2) => {
  if (numArr1.length < numArr2.length) {
    numArr1 = addZeroToBegin(numArr2.length);
  }
  if (numArr2.length < numArr1.length) {
    numArr2 = addZeroToBegin(numArr1.length);
  }
};
//Xu ly cho phep nhan
const mul = (numArr1, numArr2) => {
  let result = addZeroToBegin(numArr1.length + numArr2.length);
  numArr1 = reverse(numArr1);
  numArr2 = reverse(numArr2);
  for (let i = 0; i < numArr1.length; i++) {
    for (let j = 0; j < numArr2.length; j++) {
      result[i + j] += numArr1[i] * numArr2[j];
      result[i + j + 1] += Math.floor(result[i + j] / 10);
      result[i + j] %= 10;
      console.log(result);
    }
  }
  for (let i = 0; i < result.length - 1; i++) {
    result[i + 1] += Math.floor(result[i] / 10);
    result[i] %= 10;
  }
  result = reverse(result);
  result = removeZeroFromBegin(result);
  resultEle.value = result.join("");
};
