if (!localStorage.getItem("isEdit")) {
  window.location.replace("/mangerOfficer.html");
}
const officerName = document.querySelector("officer-name");
const officerPosition = document.querySelector("officer-position");
const officerAddress = document.querySelector("officer-address");
const officerPhone = document.querySelector("officer-phone");
const officerSalary = document.querySelector("officer-salary");

const index = +localStorage.getItem("isEdit");
const listOfficers = JSON.parse(localStorage.getItem("data"));

officerName.value = listOfficers[index].Name;
officerPosition.value = listOfficers[index].Position;
officerAddress.value = listOfficers[index].Address;
officerPhone.value = listOfficers[index].Phone;
officerSalary.value = listOfficers[index].Salary;
