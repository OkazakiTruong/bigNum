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

// btnSave.addEventListener("click", () => {
//   listOfficers = listOfficers.map((officer, i) => {
//     if (i === index) {
//       officer.Name = officerName.value;
//       officer.Position = officerPosition.value;
//       officer.Address = officerAddress.value;
//       officer.Phone = officerPhone.value;
//       officer.Salary = officerSalary.value;
//     }
//     return officer;
//   });
//   localStorage.setItem("editSuccess", true);
//   localStorage.setItem("data", JSON.stringify(listOfficers));
//   window.location.replace("/managerOfficer.html");
// });
