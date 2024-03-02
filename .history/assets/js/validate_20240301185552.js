const validateNumber = (number) => {
  const numberRegex = /^-?[0-9]\d*(\.\d+)?$/;
  return numberRegex.test(number);
};
const validatePhoneNumber = (phoneNumber) => {
  const phoneNumberRegex = /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/;
  return phoneNumberRegex.test(phoneNumber);
};
const validateEmail = (email) => {
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return emailRegex.test(email);
};
