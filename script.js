const inputBill = document.querySelector(".bill-input");
const tips = document.querySelectorAll("li");
const customTip = document.querySelector(".tip-custom-input");
const inputNumberOfPeople = document.querySelector(".input-number-of-people");
const outputTip = document.querySelector(".tip-output");
const outputTotal = document.querySelector(".total-output");
const buttonReset = document.querySelector(".button-reset");
let tipPercent = 0;
let value = 0;
let people = 1;
let tipValuePerson = 0;
let totalValuePerson = 0;

tips.forEach((tip, index) => {
  tip.addEventListener("click", () => {
    tips.forEach((item) => {
      item.style.background = "hsl(183, 100%, 15%)";
    });

    tip.style.background = "hsl(172, 67%, 45%)";

    const predefinedTips = [5, 10, 15, 25, 50];
    tipPercent = predefinedTips[index];
    CalculateBill();
  });
});

customTip.addEventListener("input", () => {
  tipPercent = parseFloat(customTip.value) || 0;
  CalculateBill();
});

inputBill.addEventListener("input", () => {
  value = parseFloat(inputBill.value) || 0;
  CalculateBill();
});

inputNumberOfPeople.addEventListener("input", () => {
  people = parseFloat(inputNumberOfPeople.value) || 1;
  CalculateBill();
});

function CalculateBill() {
  if (value === 0 || people === 0) {
    outputTip.innerHTML = "0.00$";
    outputTotal.innerHTML = "0.00$";
    return;
  }

  tipValuePerson = (value * (tipPercent / 100)) / people;
  totalValuePerson = value / people + tipValuePerson;

  outputTip.innerHTML = `${tipValuePerson.toFixed(2)}$`;
  outputTotal.innerHTML = `${totalValuePerson.toFixed(2)}$`;
}

buttonReset.addEventListener("click", () => {
  tipPercent = 0;
  value = 0;
  people = 1;
  tipValuePerson = 0;
  totalValuePerson = 0;

  inputBill.value = "";
  customTip.value = "";
  inputNumberOfPeople.value = "";

  outputTip.innerHTML = "0.00$";
  outputTotal.innerHTML = "0.00$";

  tips.forEach((item) => {
    item.style.background = "hsl(183, 100%, 15%)";
  });
});
