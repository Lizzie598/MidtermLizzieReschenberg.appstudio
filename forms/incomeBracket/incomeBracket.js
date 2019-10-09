
function taxBracket(I) {
  return 

btnSubmit.onclick=function(){
  lblReturn.value = With your income of ${inptIncome}, you are in a tax bracket of ${taxBracket}
}

if (inptIncome.value < 30000) {
  lblReturn.value = With your income of ${inptIncome}, you are in a tax bracket of 8%
} else if (inptIncome.value >= 30000 && < 99999) {
  lblReturn.value = With your income of ${inptIncome}, you are in a tax bracket of 15%
} else if (inptIncome.value >= 99999) {
  lblReturn.value = With your income of ${inptIncome}, you are in a tax bracket of 25%
} else {
  lblReturn.value = no entry
}