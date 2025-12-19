// 取得 DOM 元素
const num1El = document.getElementById("num1");
const num2El = document.getElementById("num2");
const operatorEl = document.getElementById("operator");
const resultEl = document.getElementById("result");
const calcBtn = document.getElementById("calcBtn");

// 運算函式
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    alert("Cannot divide by zero!");
    return null;
  }
  return a / b;
}

// 計算主函式
function calculate() {
  const a = Number(num1El.value);
  const b = Number(num2El.value);
  const op = operatorEl.value;

  if (isNaN(a) || isNaN(b)) {
    alert("Please enter valid numbers!");
    return;
  }

  let result;

  switch (op) {
    case "+":
      result = add(a, b);
      break;
    case "-":
      result = subtract(a, b);
      break;
    case "*":
      result = multiply(a, b);
      break;
    case "/":
      result = divide(a, b);
      if (result === null) return;
      break;
  }

  resultEl.textContent = "Result = " + result.toFixed(2);
}

// 事件監聽
calcBtn.addEventListener("click", calculate);
