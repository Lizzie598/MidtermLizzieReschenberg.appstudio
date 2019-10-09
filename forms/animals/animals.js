let animals = ["dog", "cat", "horse", "mouse", "pig", "cow", "ferret", "lizard", "frog"]

let newAnimal = prompt("What is your favorite animal's name?")
let newAnimals = animals.push(newAnimal.toLowerCase)

console.log(`The last animal is ${newAnimals}`)