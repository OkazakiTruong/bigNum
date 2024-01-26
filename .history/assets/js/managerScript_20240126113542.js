const fileExcel = document.querySelector(".file-input");
const tableOfficer = document.querySelectorAll(".table-officer");

fileExcel.addEventListener("change", () => {
  console.log(fileExcel.files);
  const file = fileExcel.files[0];
  parseExcel(file);
});
