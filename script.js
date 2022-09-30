const billAmount = document.getElementById("bill-amount");
const cashGiven = document.getElementById("cash-given");
const checkButton = document.getElementById("check-btn");
const nextButton = document.getElementById("next-btn");
const message = document.getElementById("error-message");
const denominationsArray = [2000, 500, 100, 20, 10, 5, 1];
const notesArray = document.querySelectorAll(".no-of-notes");
const cashGivenSection = document.querySelector(".cash-given-section");
const changeTableSection = document.querySelector(".change-table");
const validateBillAmount = () => {
  const isNumber = validateNumber(billAmount.value);
  if (!isNumber) {
    return;
  }
  if (billAmount.value <= 0) {
    setMessage("Invalid bill amount");
    return;
  } else {
    cashGivenSection.style.display = "flex";
  }
};
const validateNumber = (value) => {
  if (/\D/.test(value)) {
    setMessage("Please enter a number");
    return false;
  }
  return true;
};
const validateCashAmount = () => {
  const isNumber = validateNumber(cashGiven.value);
  if (!isNumber) {
    return;
  }
  if (Number(cashGiven.value) < Number(billAmount.value)) {
    setMessage("Wanna wash the plates you need to pay more cash");
    return;
  } else if (Number(cashGiven.value) === Number(billAmount.value)) {
    setMessage("You have given the correct change,thank you customer");
  } else {
    const cashToBeReturned = Number(cashGiven.value) - Number(billAmount.value);
    changeTableSection.style.display = "block";
    calculateTheChange(cashToBeReturned);
  }
};
const setMessage = (msg) => {
  message.style.display = "block";
  message.innerText = msg;
};
const calculateTheChange = (cash) => {
  for (let i = 0; i < denominationsArray.length; i++) {
    const numberOfNotes = Math.trunc(cash / denominationsArray[i]);
    cash %= denominationsArray[i];
    notesArray[i].innerText = numberOfNotes;
  }
};
nextButton.addEventListener("click", () => {
  message.style.display = "none";
  validateBillAmount();
});
checkButton.addEventListener("click", () => {
  message.style.display = "none";
  validateBillAmount();
  validateCashAmount();
});
cashGivenSection.style.display = "none";
changeTableSection.style.display = "none";
