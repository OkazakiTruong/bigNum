const fileExcel = document.querySelector(".file-input");
const tableOfficer = document.querySelector(".table-officer");

const currentFileName = "";

const renderTableHeader = (table) => {
  const tr = document.createElement("tr");
  tr.innerHTML = `
  <th>STT</th>
  <th>Tên</th>
  <th>Vị trí</th>
  <th>Địa chỉ</th>
  <th>Số điện thoại</th>
  <th>Lương</th>
  <th>Chỉnh sửa</th>
  <th>Xóa</th>
  `;
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
  tr.appendChild(tdE);

  const tdD = document.createElement("td");
  tdD.innerHTML = `<button class ="btn btn-danger">Xóa</button>`;
  tr.appendChild(tdD);

  table.appendChild(tr);
};

let fileList = JSON.parse(localStorage.getItem("data")) || [];
if (fileList?.length) {
  fileList.map((row, index) => {
    if (index === 0) {
      renderTableHeader(tableOfficer);
    } else {
      renderTableRows(tableOfficer, row, index);
    }
  });
} else {
  tableOfficer.innerHTML = `<div class = "no-data">Không có dữ liệu</div>`;
}

fileExcel.addEventListener("change", (e) => {
  tableOfficer.innerHTML = "";
  currentFileName = e.target.files[0].name;
  console.log(currentFileName);
  readXlsxFile(e.target.files[0]).then((rows) => {
    localStorage.setItem("data", JSON.stringify(rows));
    rows.map((row, index) => {
      if (index === 0) {
        renderTableHeader(tableOfficer);
      } else {
        renderTableRows(tableOfficer, row, index);
      }
    });
  });
});