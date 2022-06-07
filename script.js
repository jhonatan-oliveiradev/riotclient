const inputs = document.querySelectorAll(".input");
const button = document.querySelector(".login__button");

const handleFocus = ({ target }) => {
  const span = target.previousElementSibling;
  span.classList.add("span-active");
};

const handleFocusOut = ({ target }) => {
  const span = target.previousElementSibling;
  if (target.value === "") {
    span.classList.remove("span-active");
  }
};

inputs.forEach((input) => {
  input.addEventListener("focus", handleFocus);
});

inputs.forEach((input) => {
  input.addEventListener("focusout", handleFocusOut);
});

const handleChange = () => {
  const [username, password] = inputs;

  if (username.value && password.value.length >= 8) {
    document.querySelector(".login__button").disabled = false;
  } else {
    document.querySelector(".login__button").disabled = true;
  }
};

inputs.forEach((input) => {
  input.addEventListener("input", handleChange);
});
