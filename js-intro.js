// Intro to Javascript Assessments
//
// Consider this variable:
//
// var mantra = "Be the dev";
//
// 1. Write the code that returns 'B' from mantra.
console.log (mantra.charAt(0))
// 2. Write the code that determines if there is a 'x' in mantra.
console.log(mantra.includes("x"))
//
// 3. Write the code that determines if there is a 'v' in mantra.
console.log(mantra.includes("v"))
// // Stretch: Write the code that returns the position of 'v' in mantra.
console.log (mantra.indexOf('v'))
//
// // Consider the following statement:
//
var codingIsEasy = (10 > 5)
var imBored = (true != false)
// //
if (codingIsEasy && imBored) {
  console.log("I need more!")
} else {
  console.log("Steady as she goes")
}
// //
// 4. Update the codingIsEasy and imBored variables above the statement to the values required to log "I need more!"
//
// // Consider the following statement:
//
var imLost = (10 % 2 != 0)
var imFrustrated = ("9" === 9)
// //
if (imLost || imFrustrated) {
    console.log('Break time!')
} else {
    console.log('Keep coding!')
}
//
// 5. Update the imLost and imFrustated variables above the statement to the values required to log "Keep coding!"
//
// 6a. Recall the mantra variable from the first question. Write the code that logs each letter of mantra using a for loop.
var mantra = "Be the dev"
//use RegEx to find all whitespace in string and replace with no space
var newMantra = mantra.replace(/\s/g, "")
for (let i=0; i<newMantra.length; i++)
console.log(newMantra[i])
//
// Stretch: Using a while loop.
//change string to an array
var mantra = "Be the dev"
var newMantra = mantra.replace(/\s/g, "")
//converts string to an array
var mantraArr = newMantra.split("")
//start while loop at index 0
var i = 0
// as long as there's an index in the array, the while loop will continue
while (mantraArr[i]){
  //log each array
  console.log(mantraArr[i]);
  //increment to next array value
  i++
}
//
// Super Stretch: Using forEach().
//
// Consider the following variable:
// //
var message = "thisisateststring"
var mess1 = "my name is mike"
var mess2 = "learning code is rad"
7. Write a function that takes a string like message as an argument and returns the string without vowels.
function removeVowels (str){
  const noVowelsArr = []
  // convert argument from a string to an array
  const array = str.split("")
  for (let i=0; i < array.length; i++){
      //search array for consonants
      if (array[i] != "a" && array[i] != "e" && array[i] != "i" && array[i] != "o" && array[i] != "u"){
      //pushes value in array[i] to noVowelsArr
          noVowelsArr.push(array[i])
    }
  }
  //convert values in array into a string
  return noVowelsArr.join("")
}
console.log(removeVowels(message))
console.log(removeVowels(mess1))
console.log(removeVowels(mess2))
//
// // Stretch: Update your function to throw an exception if the argument is not a string.
var message = "thisisateststring"
var mess1 = "my name is mike"
var number = 9
var boolean = true
var arr = [1, "Hello", true]

function removeVowels (str){
    //check if argument is not a string
    if (typeof str != "string"){
      // if not a string, log error code
      return("Invalid: Please enter a valid String")
  } else {
    const noVowelsArr = []
    const array = str.split("")
      for (let i=0; i < array.length; i++){
        if (array[i] != "a" && array[i] != "e" && array[i] != "i" && array[i] != "o" && array[i] != "u"){
        noVowelsArr.push(array[i])
        }
      }
  return noVowelsArr.join("")
  }
}
console.log(removeVowels(message))
console.log(removeVowels(number))
console.log(removeVowels(boolean))
console.log(removeVowels(arr))
console.log(removeVowels(mess1))
//
// // Super Duper Stretch: Update your function to throw a TypeError if the argument is not a string.
//
// // Consider the following variable:
//
// var toonimals = [ {name: 'Itchy', animal: 'mouse'}, {name: 'Stimpy', animal: 'cat'}, {name: 'Daffy', animal: 'duck'}, {name: 'Scratchy', animal: 'cat'}, {name: 'Ren', animal: 'dog'}, {name: 'Felix', animal: 'cat'}]
// //
// // 8. Write a function that takes an array like toonimals and returns an array with only the toons that are cats.
//
class Cat{
  constructor(name,animal){
  this.name = name
  this.animal = animal
  }
    justCats(){
      const catsArr = []
      for (let i=0; i < toonimals.length; i++){
        if (toonimals.animal === 'cat')
        catsArr.push(toonimals[i])
      }
  }
  return catsArr
}
console.log(toonimals,justCats)
