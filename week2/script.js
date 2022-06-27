function checkPassword() {
  var pass = document.getElementById("pass").value;
  var passConfirm = document.getElementById("passConfirm").value;
  pass === passConfirm ? alert("pass match") : alert("pass not match");
}
