if (!localStorage.getItem("isEdit")) {
  window.location.replace("/mangerOfficer.html");
}
const index = +localStorage.getItem("isEdit");
const listOfficers = JSON.parse(localStorage.getItem("data"));
