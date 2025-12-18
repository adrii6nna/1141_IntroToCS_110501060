const mathInput = document.getElementById("mathInput");
const englishInput = document.getElementById("englishInput");
const submitBtn = document.getElementById("submitBtn");

const tableBody = document.getElementById("tableBody");

const mathAvgEl = document.getElementById("mathAvg");
const englishAvgEl = document.getElementById("englishAvg");
const overallAvgEl = document.getElementById("overallAvg");

let rowCount = 0;

function toFixed2(num) {
  return Number(num).toFixed(2);
}

function readNumber(inputEl, label) {
  const raw = inputEl.value.trim();

  if (raw === "") {
    alert(`${label} is required.`);
    return null;
  }

  const value = Number(raw);

  if (Number.isNaN(value)) {
    alert(`${label} must be a number.`);
    return null;
  }

  // 只接受 0~100（你老師若沒限制可拿掉這段）
  if (value < 0 || value > 100) {
    alert(`${label} must be between 0 and 100.`);
    return null;
  }

  return value;
}

function addRow(mathScore, englishScore) {
  rowCount++;

  const avg = (mathScore + englishScore) / 2;

  const tr = document.createElement("tr");

  const tdIndex = document.createElement("td");
  tdIndex.textContent = rowCount;

  const tdMath = document.createElement("td");
  tdMath.textContent = mathScore;

  const tdEnglish = document.createElement("td");
  tdEnglish.textContent = englishScore;

  const tdAvg = document.createElement("td");
  tdAvg.textContent = toFixed2(avg);

  tr.appendChild(tdIndex);
  tr.appendChild(tdMath);
  tr.appendChild(tdEnglish);
  tr.appendChild(tdAvg);

  tableBody.appendChild(tr);
}

function updateColumnAverages() {
  const rows = tableBody.querySelectorAll("tr");
  const n = rows.length;

  if (n === 0) {
    mathAvgEl.textContent = "0.00";
    englishAvgEl.textContent = "0.00";
    overallAvgEl.textContent = "0.00";
    return;
  }

  let mathSum = 0;
  let englishSum = 0;

  rows.forEach((tr) => {
    const tds = tr.querySelectorAll("td");
    const math = Number(tds[1].textContent);
    const eng = Number(tds[2].textContent);
    mathSum += math;
    englishSum += eng;
  });

  const mathAvg = mathSum / n;
  const englishAvg = englishSum / n;
  const overallAvg = (mathAvg + englishAvg) / 2;

  mathAvgEl.textContent = toFixed2(mathAvg);
  englishAvgEl.textContent = toFixed2(englishAvg);
  overallAvgEl.textContent = toFixed2(overallAvg);
}

submitBtn.addEventListener("click", function () {
  const mathScore = readNumber(mathInput, "Math");
  if (mathScore === null) return;

  const englishScore = readNumber(englishInput, "English");
  if (englishScore === null) return;

  addRow(mathScore, englishScore);
  updateColumnAverages();

  // 清空輸入框
  mathInput.value = "";
  englishInput.value = "";
  mathInput.focus();
});
