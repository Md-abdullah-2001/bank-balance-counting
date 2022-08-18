document.getElementById("deposit-btn").addEventListener("click", function () {
  let depoInput = document.getElementById("deposit-input");
  let newdeposit = depoInput.value;
  let newNumberInput = parseFloat(newdeposit);

  // adding to total
  let depositTotal = document.getElementById("deposit-total");
  let oldTotal = depositTotal.innerText;
  let numberBalance = parseFloat(oldTotal);
  let newDepo = numberBalance + newNumberInput;

  depositTotal.innerText = newDepo;

  //   ADD TO TOTAL BALANCE
  let prevBalance = document.getElementById("total-balance");
  let balanceStringInput = prevBalance.innerText;
  let totalNumberBalance = parseFloat(balanceStringInput);

  let totalBalanced = totalNumberBalance + newNumberInput;
  prevBalance.innerText = totalBalanced;

  depoInput.value = "";
});
