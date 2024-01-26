const fileExcel = document.querySelector(".file-input");
const tableOfficer = document.querySelectorAll(".table-officer");

const renderTableHeader = (table, row) => {
  const tr = document.createElement("tr");
  row.array.forEach((item) => {
    const th = document.createElement("th");
    th.innerText = item;
    tr.appendChild(th);
  });
  table.appendChild(tr);
};
const renderTableRows = (table, row) => {
  const tr = document.createElement("tr");
  row.array.forEach((item) => {
    const th = document.createElement("th");
    th.innerText = item;
    tr.appendChild(th);
  });
  table.appendChild(tr);
};

let fileList = localStorage.getItem("data") | [];

fileExcel.addEventListener("change", (e) => {
  readXlsxFile(e.target.files[0]).then((rows) => {
    localStorage.setItem("data", JSON.parse(rows));
  });
});
