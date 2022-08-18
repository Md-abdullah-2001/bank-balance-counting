// withdrawing part
document.getElementById("withdraw-btn").addEventListener("click", function () {
  let newWithdrawField = document.getElementById("withdraw-input");
  let newWithdrawInput = newWithdrawField.value;
  let withdrawNumber = parseFloat(newWithdrawInput);

  //   calling new withdraw part
  let prevWithdrawField = document.getElementById("withdraw-amount");
  let prevWithdrawValue = prevWithdrawField.innerText;
  let prevWithdrawNumber = parseFloat(prevWithdrawValue);

  let newWidthdraw = prevWithdrawNumber + withdrawNumber;
  prevWithdrawField.innerText = newWidthdraw;

  let finalWithBalance = document.getElementById("total-balance");
  let takeBalance = finalWithBalance.innerText;
  let totalBalanceToNumber = parseFloat(takeBalance);

  let finalBalanceAfter = totalBalanceToNumber - newWidthdraw;
  finalWithBalance.innerText = finalBalanceAfter;

  newWithdrawField.value = "";
});
