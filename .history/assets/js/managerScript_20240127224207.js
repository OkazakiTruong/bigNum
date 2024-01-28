const fileExcel = document.querySelector(".file-input");
const tableOfficer = document.querySelector(".table-officer");
const fileName = document.querySelector(".file-name");
const btnSum = document.querySelector(".btn-sum");
const btnAverage = document.querySelector(".btn-average");

let currentFileName = localStorage.getItem("currentName");
if (currentFileName) {
  fileName.innerText = currentFileName;
}

btnSum.addEventListener("click", () => {
  listOfficers = JSON.parse(localStorage.getItem("data"))?.slice(1);
  if (listOfficers) {
    let result = [];
    listOfficers.forEach((item) => {
      result = add(result, item[4]);
    });
  } else {
    alert("Không có dữ liệu để tính toán");
  }
});

btnAverage.addEventListener("click", () => {
  listOfficers = JSON.parse(localStorage.getItem("data"))?.slice(1);
  if (listOfficers) {
    console.log("có officer");
  } else {
    alert("Không có dữ liệu để tính toán");
  }
});

const handleDelete = (index) => {
  if (confirm("Bạn có chắc chắn muốn xóa nhân viên này không?")) {
    listOfficers = JSON.parse(localStorage.getItem("data"));
    listOfficers = listOfficers
      .slice(0, index)
      .concat(listOfficers.slice(++index));
    if (listOfficers.length > 1) {
      localStorage.setItem("data", JSON.stringify(listOfficers));
    } else {
      localStorage.removeItem("data");
    }
    window.location.reload();
  }
};
const handleEdit = (index) => {};

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
  tdD.innerHTML = `<button class ="btn btn-danger btn-delete"}>Xóa</button>`;
  tr.appendChild(tdD);

  table.appendChild(tr);

  let btnDeletes = document.querySelectorAll(".btn-delete");
  btnDeletes[index - 1].addEventListener("click", () => {
    handleDelete(index);
  });
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
  localStorage.setItem("currentName", currentFileName);
  fileName.innerText = currentFileName;
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