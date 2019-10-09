
let calculation = prompt("Would you like to do an average calculation or a random multiplication?")

if(calculation = "average calculation") {
function calcAvgSquare(num1, num2, num3) {
  return (((num1 + num2 + num3)/3) * Math.pow(num1,2))
  }

let num1 = Number(prompt("Enter a number"))
let num2 = Number(prompt("Enter a second number"))
let num3 = Number(prompt("Enter a third number"))

alert(`The answer is ${calcAvgSquare(num1, num2, num3)}`)

} else if (calculation = "random multiplication") {

function randomMultiply(num4, num5) {
  return num4*num5
  }

let num4 = Number(prompt("Enter a number"))
let num5 = Math.random()*10

alert(`The result of multiplying the random number ${num5} with ${num4} is ${randomMultiply(num4, num5)}.`)

} else {
alert("I'm sorry we can't calculate that")
}

