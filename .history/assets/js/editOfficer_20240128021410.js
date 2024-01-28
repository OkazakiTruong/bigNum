if (!localStorage.getItem("isEdit")) {
  window.location.replace("/mangerOfficer.html");
}
const officerName = document.querySelector("officer-name");
const officerPosition = document.querySelector("officer-name");
const officerAddress = document.querySelector("officer-name");
const officerPhone = document.querySelector("officer-name");
const officerSalary = document.querySelector("officer-name");

const index = +localStorage.getItem("isEdit");
const listOfficers = JSON.parse(localStorage.getItem("data"));
