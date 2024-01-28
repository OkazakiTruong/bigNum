const fileExcel = document.querySelector(".file-input");
const tableOfficer = document.querySelector(".table-officer");
const fileName = document.querySelector(".file-name");
const btnSum = document.querySelector(".btn-sum");
const btnAverage = document.querySelector(".btn-average");
const sumResult = document.querySelector(".sum-result");
const averageResult = document.querySelector(".average-result");
const btnExportFile = document.querySelector(".btn-export-file");
const paginationEle = document.querySelector(".pagination");

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

btnExportFile.addEventListener("click", () => {
  try {
    const listOfficers = JSON.parse(localStorage.getItem("data"));
    const ws = XLSX.utils.json_to_sheet(listOfficers);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

    /* save to file */
    let fileName = prompt("Nhập tên file", "file");
    fileName += ".xlsx";
    XLSX.writeFile(wb, fileName);
  } catch (error) {
    console.log(error);
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
  <td><button class ="btn btn-primary btn-edit-${index}">Sửa</button></td>
  <td><button class ="btn btn-danger btn-delete-${index}">Xóa</button></td>
  `;
  table.appendChild(tr);

  let btnDelete = document.querySelector(`.btn-delete-${index}`);
  btnDelete.addEventListener("click", () => {
    handleDelete(index);
  });

  let btnEdit = document.querySelector(`.btn-edit-${index}`);
  btnEdit.addEventListener("click", () => {
    handleEdit(index);
  });
};

localStorage.getItem("isEdit") && localStorage.removeItem("isEdit");
if (localStorage.getItem("deleteSuccess")) {
  Toastify({
    text: "Xóa thành công!!",
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

if (localStorage.getItem("editSuccess")) {
  Toastify({
    text: "Chỉnh sửa thành công!!",
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
localStorage.removeItem("editSuccess");

if (localStorage.getItem("addSuccess")) {
  Toastify({
    text: "Thêm mới thành công!!",
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
localStorage.removeItem("addSuccess");

let fileList = JSON.parse(localStorage.getItem("data")) || [];
let page_limit = 5;
function pagination(c, m) {
  var current = c,
    last = m,
    delta = 2,
    left = current - delta,
    right = current + delta + 1,
    range = [],
    rangeWithDots = [],
    l;

  for (let i = 1; i <= last; i++) {
    if (i == 1 || i == last || (i >= left && i < right)) {
      range.push(i);
    }
  }

  for (let i of range) {
    if (l) {
      if (i - l === 2) {
        rangeWithDots.push(l + 1);
      } else if (i - l !== 1) {
        rangeWithDots.push("...");
      }
    }
    rangeWithDots.push(i);
    l = i;
  }

  return rangeWithDots;
}

const renderPagination = (pagination, active) => {
  // let html = pagination
  //   .map((item) => {
  //     if (item === active) {
  //       return `<span class="pagination-item active pagi-item-${item}">${item}</span>`;
  //     }
  //     return `<span class="pagination-item" pagi-item-${item}>${item}</span>`;
  //   })
  //   .join("");
  let html = "";
  for (let i = 0; i < pagination.length; i++) {
    if (pagination[i] === active) {
      html += `<span class="pagination-item active pagi-item-${pagination[i]}">${pagination[i]}</span>`;
    }
    if (pagination[i] === "...") {
      html += `<span class="pagination-item pagi-item-dot-${i} >${pagination[i]}</span>`;
    }
    html += `<span class="pagination-item pagi-item-${pagination[i]}" >${pagination[i]}</span>`;
  }

  paginationEle.innerHTML = html;

  for (let i = 0; i < pagination.length; i++) {
    if (pagination[i] !== "...") {
      let pagiItem = document.querySelector(`.pagi-item-${pagination[i]}`);
      pagiItem.addEventListener("click", () => {
        localStorage.setItem("current_page", pagination[i]);
        window.location.reload();
      });
    } else {
      let pagiItem = document.querySelector(`.pagi-item-dot-${i}`);
      pagiItem.addEventListener("click", () => {
        localStorage.setItem("current_page", pagination[i + 1]);
        window.location.reload();
      });
    }
  }
};

if (fileList?.length) {
  renderTableHeader(tableOfficer);
  let current = localStorage.getItem("current_page") || 1;
  const totalPage = Math.ceil(fileList.length / page_limit);
  renderPagination(pagination(current, totalPage), current);

  const renderStart = current > 1 ? (current - 1) * page_limit : 0;
  const renderLength =
    fileList.length - renderStart >= 5
      ? page_limit + renderStart
      : fileList.length;
  for (let i = renderStart; i < renderLength; i++) {
    renderTableRows(tableOfficer, fileList[i], i);
  }
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
      console.log(index);
      renderTableRows(tableOfficer, row, index);
    });
  };
  reader.readAsArrayBuffer(currentFile);
});