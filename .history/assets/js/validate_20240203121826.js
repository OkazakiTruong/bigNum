const validateNumber = (number) => {
  const numberRegex = /^-?[0-9]\d*(\.\d+)?$/;
  return numberRegex.test(stringInput(number));
};
