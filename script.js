let prevnum = 0;
let newnum = 0;
let oper = "";

let press = document.querySelectorAll(".number");
press.forEach(function (button) {
  button.addEventListener("click", () => {
    display(button.value);
  });
});

function display(num) {
  let dis = document.querySelector(".display");
  update_number();
  dis.innerHTML = num;
}

function operate(numb1, operator, numb2) {
  if (operator == "+") {
    return numb1 + numb2;
  } else if (operator == "-") {
    return numb1 - numb2;
  } else if (operator == "*") {
    return numb1 * numb2;
  } else if (operator == "/") {
    return numb1 / numb2;
  }
}
