const officerName = document.querySelector(".officer-name");
const officerPosition = document.querySelector(".officer-position");
const officerAddress = document.querySelector(".officer-address");
const officerPhone = document.querySelector(".officer-phone");
const officerSalary = document.querySelector(".officer-salary");
const officerMonth = document.querySelector("#input-month");
const btnSave = document.querySelector(".btn-save");
const btnCancel = document.querySelector(".btn-cancel");

btnCancel.addEventListener("click", () => {
  window.location.href = MANAGER_OFFICER_LINK;
});

btnSave.addEventListener("click", () => {
  let listOfficers = JSON.parse(localStorage.getItem("data")) || [];

  if (
    officerName.value === "" ||
    officerPosition.value === "" ||
    officerAddress.value === "" ||
    officerPhone.value === "" ||
    officerSalary.value === "" ||
    officerMonth.value === ""
  ) {
    Toastify({
      text: "Không được bỏ trống",
      duration: 1000,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #ff0b0c, #ff3637)",
      },
    }).showToast();
    return 0;
  }
  listOfficers.unshift({
    Name: officerName.value,
    Position: officerPosition.value,
    Address: officerAddress.value,
    Phone: officerPhone.value,
    Salary: officerSalary.value,
    Month: officerMonth.value,
  });
  localStorage.setItem("addSuccess", true);
  localStorage.setItem("data", JSON.stringify(listOfficers));
  window.location.replace(MANAGER_OFFICER_LINK);
});
