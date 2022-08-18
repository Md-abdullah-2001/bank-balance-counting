document.getElementById("submit-btn").addEventListener("click", function () {
  //   email validation part:

  let emailField = document.getElementById("email-input");
  let email = emailField.value;

  //   Password validation part:
  let passField = document.getElementById("pass-input");
  let password = passField.value;

  if (email === "mdabdullah.dm2001@gmial.com" && password === "password") {
    window.location.href = "money.html";
  } else {
    alert("Invalid E-mail or Password");
  }
});
