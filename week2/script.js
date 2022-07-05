function checkPassword() {
  var pass = document.getElementById("pass").value;
  var passConfirm = document.getElementById("passConfirm").value;

  if (pass == "" || passConfirm == "") {
    alert("enter some value first");
  } else if (pass === passConfirm) {
    alert("pass match");
  } else {
    alert("pass not match");
  }
}
