const loginFormRef = document.querySelector(".login-form");
const warningMessage = "Invalid Email or Password! Try again please.";

const onLoginFormRefChange = function (change) {
  change.preventDefault();

  const {
    elements: { email, password },
  } = change.currentTarget;

  const dataFormResult = {};
  const formData = new FormData(change.currentTarget);

  if (email.value && password.value) {
    formData.forEach((value, name) => {
      dataFormResult[name] = value;
    });

    loginFormRef.reset();
    return console.log(dataFormResult);
  }

  return alert(warningMessage);
};

loginFormRef.addEventListener("submit", onLoginFormRefChange);
