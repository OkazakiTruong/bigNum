const fileExcel = document.querySelector(".file-input");
const tableOfficer = document.querySelectorAll(".table-officer");

const fileList = [];
fileExcel.addEventListener("change", () => {
  const file = fileExcel.files[0];
  fileList = JSON.parse(parseExcel(file));
  console.log(typeof fileList);
});