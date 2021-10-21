const loginFormRef = document.querySelector(".login-form");
const warningMessage = "Invalid Email or Password! Try again please.";

const onLoginFormRefChange = function (change) {
  change.preventDefault();

  const {
    elements: { email, password },
  } = change.currentTarget;

  const dataFormResult = {};
  const formData = new FormData(change.currentTarget);

  formData.forEach((value, name) => {
    dataFormResult[name] = value;
  });

  console.log(dataFormResult);

  if (email.value === "" || password.value === "") {
    return alert(warningMessage);
  }

  loginFormRef.reset();
};

loginFormRef.addEventListener("submit", onLoginFormRefChange);
