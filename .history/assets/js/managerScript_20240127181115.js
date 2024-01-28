const fileExcel = document.querySelector(".file-input");
const tableOfficer = document.querySelector(".table-officer");

const renderTableHeader = (table, row) => {
  const tr = document.createElement("tr");
  const thIndex = document.createElement("th");
  thIndex.innerText = "STT";
  tr.appendChild(thIndex);
  row.map((item) => {
    const th = document.createElement("th");
    th.innerText = item;
    tr.appendChild(th);
  });
  const thE = document.createElement("th");
  thE.innerText = "Sửa";
  tr.appendChild(thE);
  const thD = document.createElement("th");
  thD.innerText = "Xóa";
  tr.appendChild(thD);
  table.appendChild(tr);
};
const renderTableRows = (table, row, index) => {
  const tr = document.createElement("tr");
  const tdIndex = document.createElement("th");
  tdIndex.innerText = index;
  tr.appendChild(tdIndex);
  row.map((item) => {
    const td = document.createElement("td");
    td.innerText = item;
    tr.appendChild(td);
  });
  const tdE = document.createElement("td");
  tdE.innerHTML = `<button class ="btn btn-primary">Sửa</button>`;

  const btnDelete = document.createElement("button");
  btnDelete.classList.add("btn");
  tr.appendChild(btnDelete);

  table.appendChild(tr);
};

let fileList = JSON.parse(localStorage.getItem("data")) || [];
if (fileList?.length) {
  fileList.map((row, index) => {
    if (index === 0) {
      renderTableHeader(tableOfficer, row);
    } else {
      renderTableRows(tableOfficer, row, index);
    }
  });
}

fileExcel.addEventListener("change", (e) => {
  tableOfficer.innerHTML = "";
  readXlsxFile(e.target.files[0]).then((rows) => {
    localStorage.setItem("data", JSON.stringify(rows));
    rows.map((row, index) => {
      if (index === 0) {
        renderTableHeader(tableOfficer, row);
      } else {
        renderTableRows(tableOfficer, row, index);
      }
    });
  });
});