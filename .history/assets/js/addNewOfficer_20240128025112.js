const officerName = document.querySelector(".officer-name");
const officerPosition = document.querySelector(".officer-position");
const officerAddress = document.querySelector(".officer-address");
const officerPhone = document.querySelector(".officer-phone");
const officerSalary = document.querySelector(".officer-salary");
const btnSave = document.querySelector(".btn-save");
const btnCancel = document.querySelector(".btn-cancel");

let listOfficers = JSON.parse(localStorage.getItem("data"));

btnCancel.addEventListener("click", () => {
  window.location.href = "/managerOfficer.html";
});

btnSave.addEventListener("click", () => {
  listOfficers = [
    ...listOfficers,
    {
      Name: officerName.value,
      Position: officerPosition.value,
      Address: officerAddress.value,
      Phone: officerPhone.value,
      Salary: officerSalary.value,
    },
  ];
  localStorage.setItem("addSuccess", true);
  localStorage.setItem("data", JSON.stringify(listOfficers));
  window.location.replace("/managerOfficer.html");
});
