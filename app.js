const emailFirstInput = document.querySelector(".first-input input");
const emailSecondInput = document.querySelector(".second-input input");
const firstLabel = document.querySelector(".first-input");
const secondLabel = document.querySelector(".second-input");
const firstButton = document.querySelector(".first-button");
const secondButton = document.querySelector(".second-button");
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const emailValidation = function (input, label) {
  if(input.value.match(emailRegex)) {
    input.style.borderColor = "black";
    label.classList.remove("error");
    label.classList.add("success");
  } else {
    input.style.borderColor = "red";
    label.classList.remove("success");
    label.classList.add("error");
  }
};

firstButton.addEventListener("click", function () {
  emailValidation(emailFirstInput, firstLabel);
});

secondButton.addEventListener("click", function () {
  emailValidation(emailSecondInput, secondLabel);
});