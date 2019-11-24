let selectElementsStartingWithA = (array) => array.filter(el => el[0] === "a")

let selectElementsStartingWithVowel = (array) => array.filter(el => /[aeiou]/i.test(el[0]))

let removeNullElements = (array) => array.filter(el => el != null)

let removeNullAndFalseElements = (array) => array.filter(el => (el !== null && el !== false)) // Attention: égalité stricte pour éviter de filtrer le nombre 0

let reverseWordsInArray = (array) => array.map(word => word.split("").reverse().join(''))

// La 1ere solution est suffisante pour avoir toutes les possibilités mais elles ne sont pas triées
// let everyPossiblePair = (array) => array.map((elm,i,arr) => arr.filter(el => el !== elm))
// D'abord un tri sur l'array pour l'ordre alphabétique puis inversion pour tout mettre dans le bon ordre
let everyPossiblePair = (array) => array.sort().map((elm,i,arr) => arr.filter(el => el !== elm)).reverse()

// Splice:
// p1: index p2: nombre d'élément à retirer p3: élément à insérer à leur place
// 1) il sort un ou plusieurs élément de l'array à partir de l'index selectionné
// 2) Il renvoit directement via une array les éléments retirés. Ici, les élément à partir de l'index 3 sont renvoyés
// 3) il insert d'autre élément si mentionné
let allElementsExceptFirstThree = (array) => array.splice(3)

// let addElementToBeginning = (array, element) => array.unshift(element) && array // Méthode un peu "sale"
let addElementToBeginning = (array, element) => (array.unshift(element), array) // Méthode + correct
// let addElementToBeginning = (array, element) => {
//     array.unshift(element);
//     return array
// }

let sortByLastLetter = (array) => array.sort( (a,b) => a.charCodeAt(a.length -1) - b.charCodeAt(b.length -1))

let getFirstHalf = (string) => string.substring(0,3)

let makeNegative = (number) => -Math.abs(number)

let numberOfPalindromes = (array) => array.filter(word => word === word.split('').reverse().join('')).length

let shortestWord = (array) => [...array.sort((a,b) => a.length - b.length)][0]

let longestWord = (array) => [...array.sort((a,b) => b.length - a.length)][0]

let sumNumbers = (array) => {
    return 'Write your method here';
}

let repeatElements = (array) => {
    return 'Write your method here';
}

let stringToNumber = (string) => {
    return 'Write your method here';
}

let calculateAverage = (array) => {
    return 'Write your method here';
}

let getElementsUntilGreaterThanFive = (array) => {
    return 'Write your method here';
}

let convertArrayToObject = (array) => {
    return 'Write your method here';
}

let getAllLetters = (array) => {
    return 'Write your method here';
}

let swapKeysAndValues = (object) => {
    return 'Write your method here';
}

let sumKeysAndValues = (object) => {
    return 'Write your method here';
}

let removeCapitals = (string) => {
    return 'Write your method here';
}

let roundUp = (number) => {
    return 'Write your method here';
}

let formatDateNicely = (date) => {
    return 'Write your method here';
}

let getDomainName = (string) => {
    return 'Write your method here';
}

let titleize = (string) => {
    return 'Write your method here';
}

let checkForSpecialCharacters = (string) => {
    return 'Write your method here';
}

let squareRoot = (number) => {
    return 'Write your method here';
}

let factorial = (number) => {
    return 'Write your method here';
}

let findAnagrams = (string) => {
    return 'Write your method here';
}

let convertToCelsius = (number) => {
    return 'Write your method here';
}

let letterPosition = (array) => {
    return 'Write your method here';
}
