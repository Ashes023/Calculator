let prevnum = NaN;
let newnum = NaN;
let oper = "";
let check = false;

let dis = document.querySelector(".display");

let press = document.querySelectorAll(".number");
press.forEach(function (button) {
  button.addEventListener("click", () => {
    if(oper=='' && isNaN(newnum)){
      clear();
    }
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
    if (oper == "" && (!isNaN(prevnum) || !isNaN(newnum))) {
      oper = button.value;
      if (isNaN(prevnum)) {
        prevnum = newnum;
        newnum = NaN;
      }
      display("");
    }
    else if(oper != null && !isNaN(prevnum) && !isNaN(newnum)){
        equals();
        oper = button.value;
    }
  });
});

let equal = document.querySelector(".equal");
equal.addEventListener("click", equals); 
function equals(){
    console.log('working', newnum, prevnum, oper);
  if (newnum!='' && !isNaN(prevnum) && oper!='') {
    check = true;
    let store = calculate(prevnum, oper, newnum);
    console.log(!isNaN(newnum) , newnum);
    display(store);
    initial();
    prevnum = store;
  }
}

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
  if (!(isNaN(num)) && num.toString().length > 8) {
    num = num.toString().substring(0, 8);
  }
  dis.innerHTML = num;
  check = false;
}

function update_number(numb) {
  if (isNaN(newnum) || newnum==0) {
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
  numb1 = parseFloat(numb1);
  numb2 = parseFloat(numb2);
  if (operator == "+") {
    console.log(numb1 , numb2);
    return numb1 + numb2;
  } else if (operator == "-") {
    return numb1 - numb2;
  } else if (operator == "*") {
    console.log(numb1,numb2)
    return numb1 * numb2;
  } else if (operator == "/") {
    if (numb2 == 0) {
      return "WTF!";
    }
    return numb1 / numb2;
  }
}
