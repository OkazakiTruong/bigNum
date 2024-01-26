const fileExcel = document.querySelector(".file-input");
const tableOfficer = document.querySelectorAll(".table-officer");

let fileList = localStorage.getItem("data") | [];
fileExcel.addEventListener("change", (e) => {
  readXlsxFile(e.target.files[0]).then((rows) => {
    localStorage.setItem("data", JSON.parse(rows));
  });
});
