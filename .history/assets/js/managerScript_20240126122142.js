const fileExcel = document.querySelector(".file-input");
const tableOfficer = document.querySelectorAll(".table-officer");

let fileList = [];
fileExcel.addEventListener("change", async () => {
  const file = fileExcel.files[0];
  fileList = await this.parseExcel(file);
  console.log(fileList);
});
