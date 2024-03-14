let prevnum = NaN;
let newnum = NaN;
let oper = "";
let check = false;

let dis = document.querySelector(".display");

let press = document.querySelectorAll(".number");
press.forEach(function (button) {
  button.addEventListener("click", () => {
    display(button.value);
  });
});

let ac = document.querySelector(".clear");
ac.addEventListener("click", () => {
  clear();
});

let operator = document.querySelectorAll(".operator");
operator.forEach((button) => {
  button.addEventListener("click", () => {
    if (oper == "") {
      oper = button.value;
      prevnum = newnum;
      newnum = NaN;
      display("");
    }
    console.log(oper);
  });
});

let equal = document.querySelector(".equal");
equal.addEventListener("click", () => {
  if (!isNaN(newnum)) {
    check = true;
    display(calculate(prevnum, oper, newnum));
    initial();
  }
});

function initial() {
  prevnum = NaN;
  newnum = NaN;
  oper = "";
}

function clear() {
  initial();
  display("");
}

function display(num) {
  if (!check) {
    num = update_number(num);
  }
  dis.innerHTML = num;
  check = false;
}

function update_number(numb) {
  if (isNaN(newnum)) {
    console.log(10);
    newnum = numb;
    return newnum;
  }
  if (newnum > 9999999) {
    return newnum;
  }
  newnum = newnum + numb;
  return newnum;
}

function calculate(numb1, operator, numb2) {
  numb1 = parseInt(numb1);
  numb2 = parseInt(numb2);
  if (operator == "+") {
    return numb1 + numb2;
  } else if (operator == "-") {
    return numb1 - numb2;
  } else if (operator == "*") {
    return numb1 * numb2;
  } else if (operator == "/") {
    if(numb2==0){
        return 'WTF!'
    }
    return numb1 / numb2;
  }
}
