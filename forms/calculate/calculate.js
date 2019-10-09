
function calcAvgSquare(num1, num2, num3) {
  return (((num1 + num2 + num3)/3) * Math.pow(num1,2))
  }

let num1 = Number(prompt("Enter a number"))
let num2 = Number(prompt("Enter a second number"))
let num3 = Number(prompt("Enter a third number"))

alert(`The answer is ${calcAvgSquare(num1, num2, num3)}`)
