if (!localStorage.getItem("isEdit")) {
  window.location.replace("/mangerOfficer.html");
}
const index = localStorage.getItem("isEdit");
console.log(index);
