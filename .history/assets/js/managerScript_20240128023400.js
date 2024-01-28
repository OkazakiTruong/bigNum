const fileExcel = document.querySelector(".file-input");
const tableOfficer = document.querySelector(".table-officer");
const fileName = document.querySelector(".file-name");
const btnSum = document.querySelector(".btn-sum");
const btnAverage = document.querySelector(".btn-average");
const sumResult = document.querySelector(".sum-result");
const averageResult = document.querySelector(".average-result");

let currentFileName = localStorage.getItem("currentName");
if (currentFileName) {
  fileName.innerText = currentFileName;
}

const sumSalary = (listOfficers) => {
  let result = [];
  listOfficers.forEach((item) => {
    console.log(item);
    result = add(result, numInput(String(item.Salary)));
  });
  return result;
};
const averageSalary = (listOfficers) => {
  let result = sumSalary(listOfficers);
  result = div(result, numInput(String(listOfficers.length)));
  return result;
};
btnSum.addEventListener("click", () => {
  listOfficers = JSON.parse(localStorage.getItem("data"));
  if (listOfficers) {
    let result = sumSalary(listOfficers);
    let html = `Tổng lương là: <span>${stringInput(result)}</span>`;
    sumResult.innerHTML = html;
  } else {
    alert("Không có dữ liệu để tính toán!");
  }
});

btnAverage.addEventListener("click", () => {
  listOfficers = JSON.parse(localStorage.getItem("data"));
  if (listOfficers) {
    let result = averageSalary(listOfficers);
    let html = `Trung bình lương là: <span>${stringInput(result)}</span>`;
    averageResult.innerHTML = html;
  } else {
    alert("Không có dữ liệu để tính toán!");
  }
});

const handleDelete = (index) => {
  if (confirm("Bạn có chắc chắn muốn xóa nhân viên này không?")) {
    listOfficers = JSON.parse(localStorage.getItem("data"));
    listOfficers = listOfficers
      .slice(0, index)
      .concat(listOfficers.slice(++index));
    if (listOfficers.length > 0) {
      localStorage.setItem("data", JSON.stringify(listOfficers));
    } else {
      localStorage.removeItem("data");
    }
    localStorage.setItem("deleteSuccess", true);
    window.location.reload();
  }
};
const handleEdit = (index) => {
  localStorage.setItem("isEdit", index);
  window.location.href = "/editOfficer.html";
};

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
  tr.innerHTML = `
  <td>${index + 1}</td>
  <td>${row.Name}</td>
  <td>${row.Position}</td>
  <td>${row.Phone}</td>
  <td>${row.Address}</td>
  <td>${row.Salary}</td>
  <td><button class ="btn btn-primary btn-edit">Sửa</button></td>
  <td><button class ="btn btn-danger btn-delete">Xóa</button></td>
  `;
  table.appendChild(tr);

  let btnDeletes = document.querySelectorAll(".btn-delete");
  btnDeletes[index].addEventListener("click", () => {
    handleDelete(index);
  });

  let btnEdits = document.querySelectorAll(".btn-edit");
  btnEdits[index].addEventListener("click", () => {
    handleEdit(index);
  });
};

localStorage.getItem("isEdit") && localStorage.removeItem("isEdit");
if (localStorage.getItem("deleteSuccess")) {
  Toastify({
    text: "Xóa thành công",
    duration: 1000,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #56c2d3, #095fa0)",
    },
  }).showToast();
}
localStorage.removeItem("deleteSuccess");
let fileList = JSON.parse(localStorage.getItem("data")) || [];
if (fileList?.length) {
  renderTableHeader(tableOfficer);
  fileList.map((row, index) => {
    renderTableRows(tableOfficer, row, index);
  });
} else {
  tableOfficer.innerHTML = `<div class = "no-data">Không có dữ liệu</div>`;
}

fileExcel.addEventListener("change", async (e) => {
  tableOfficer.innerHTML = "";
  currentFile = e.target.files[0];
  localStorage.setItem("currentName", currentFile.name);
  fileName.innerText = currentFile.name;
  const reader = new FileReader();
  reader.onload = (event) => {
    const data = event.target.result;
    const workbook = XLSX.read(data, { type: "array" });
    const firstSheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[firstSheetName];
    const rows = XLSX.utils.sheet_to_json(worksheet);
    console.log(rows);
    localStorage.setItem("data", JSON.stringify(rows));
    renderTableHeader(tableOfficer);
    rows.map((row, index) => {
      renderTableRows(tableOfficer, row, index);
    });
  };
  reader.readAsArrayBuffer(currentFile);
});
