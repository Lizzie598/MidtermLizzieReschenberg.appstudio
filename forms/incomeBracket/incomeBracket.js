
function taxBracket(I) {
  return lblReturn.value
  }

btnSubmit.onclick=function(){
  if (inptIncome.value < 30000) {
    lblReturn.value = With your income of ${inptIncome.value}, you are in a tax bracket of 8%
  } else if (inptIncome.value >= 30000 && < 99999) {
    lblReturn.value = With your income of ${inptIncome.value}, you are in a tax bracket of 15%
  } else if (inptIncome.value >= 99999) {
    lblReturn.value = With your income of ${inptIncome.value}, you are in a tax bracket of 25%
  } else {
    lblReturn.value = no entry
  }
}


btnGoAgain.onclick=function(){
  inputIncome.value == ""
}
