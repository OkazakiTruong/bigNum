if (!localStorage.getItem("isEdit")) {
  window.location.replace(MANAGER_OFFICER_LINK);
}
const officerName = document.querySelector(".officer-name");
const officerPosition = document.querySelector(".officer-position");
const officerAddress = document.querySelector(".officer-address");
const officerPhone = document.querySelector(".officer-phone");
const officerSalary = document.querySelector(".officer-salary");
const officerMonth = document.querySelector("#input-month");
const btnSave = document.querySelector(".btn-save");
const btnCancel = document.querySelector(".btn-cancel");

const index = +localStorage.getItem("isEdit");
let listOfficers = JSON.parse(localStorage.getItem("data"));

officerName.value = listOfficers[index].Name;
officerPosition.value = listOfficers[index].Position;
officerAddress.value = listOfficers[index].Address;
officerPhone.value = listOfficers[index].Phone;
officerSalary.value = listOfficers[index].Salary;
officerMonth.value = listOfficers[index].Month;

btnCancel.addEventListener("click", () => {
  window.location.href = MANAGER_OFFICER_LINK;
});

btnSave.addEventListener("click", () => {
  // if (
  //   officerName.value === "" ||
  //   officerPosition.value === "" ||
  //   officerAddress.value === "" ||
  //   officerPhone.value === "" ||
  //   officerSalary.value === ""
  // ) {
  //   Toastify({
  //     text: "Không được bỏ trống!!!",
  //     duration: 1000,
  //     close: true,
  //     gravity: "top", // `top` or `bottom`
  //     position: "right", // `left`, `center` or `right`
  //     stopOnFocus: true, // Prevents dismissing of toast on hover
  //     style: {
  //       background: "linear-gradient(to right, #ff0b0c, #ff3637)",
  //     },
  //   }).showToast();
  //   return 0;
  // }
  // if (!validatePhoneNumber(officerPhone.value)) {
  //   // Toastify({
  //   //   text: "Số điện thoại không chính xác",
  //   //   duration: 1000,
  //   //   close: true,
  //   //   gravity: "top", // `top` or `bottom`
  //   //   position: "right", // `left`, `center` or `right`
  //   //   stopOnFocus: true, // Prevents dismissing of toast on hover
  //   //   style: {
  //   //     background: "linear-gradient(to right, #ff0b0c, #ff3637)",
  //   //   },
  //   // }).showToast();
  //   // return 0;
  // }
  listOfficers = listOfficers.map((officer, i) => {
    if (i === index) {
      officer.Name = officerName.value;
      officer.Position = officerPosition.value;
      officer.Address = officerAddress.value;
      officer.Phone = officerPhone.value;
      officer.Salary = officerSalary.value;
      officer.Month = officerMonth.value;
    }
    return officer;
  });
  localStorage.setItem("editSuccess", true);
  localStorage.setItem("data", JSON.stringify(listOfficers));
  window.location.replace(MANAGER_OFFICER_LINK);
});
