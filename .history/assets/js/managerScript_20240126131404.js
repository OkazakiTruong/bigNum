const fileExcel = document.querySelector(".file-input");
const tableOfficer = document.querySelectorAll(".table-officer");

const renderTableHeader = (table, row) => {
  const tr = document.createElement("tr");
  const thIndex = document.createElement("th");
  thIndex.innerText = "STT";
  tr.appendChild(thIndex);
  row.array.forEach((item) => {
    const th = document.createElement("th");
    th.innerText = item;
    tr.appendChild(th);
  });
  table.appendChild(tr);
};
const renderTableRows = (table, row) => {
  const tr = document.createElement("tr");
  row.array.forEach((item, index) => {
    const tdIndex = document.createElement("th");
    tdIndex.innerText = index;
    tr.appendChild(tdIndex);
    const td = document.createElement("td");
    td.innerText = item;
    tr.appendChild(th);
  });
  table.appendChild(tr);
};

let fileList = localStorage.getItem("data") | [];

fileExcel.addEventListener("change", (e) => {
  readXlsxFile(e.target.files[0]).then((rows) => {
    // localStorage.setItem("data", JSON.parse(rows));
    rows.map((row, index) => {
      if (index === 0) {
        renderTableHeader(tableOfficer, row);
      } else {
        renderTableRows(tableOfficer, row);
      }
    });
  });
});
