const fileExcel = document.querySelector(".file-input");
const tableOfficer = document.querySelectorAll(".table-officer");

let fileList = [];
fileExcel.addEventListener("change", (e) => {
    readXlsxFile(e.target.files[0]).then(data)=>{
        console.log(data);
    }
});
