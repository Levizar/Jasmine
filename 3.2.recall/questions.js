let selectElementsStartingWithA = (array) => array.filter(el => el[0] === "a")

let selectElementsStartingWithVowel = (array) => array.filter(el => /[aeiou]/i.test(el[0]))

let removeNullElements = (array) => array.filter(el => el != null)

let removeNullAndFalseElements = (array) => array.filter(el => (el !== null && el !== false)) // Attention: égalité stricte pour éviter de filtrer le nombre 0

let reverseWordsInArray = (array) => array.map(word => word.split("").reverse().join(''))

// La 1ere solution est suffisante pour avoir toutes les possibilités mais elles ne sont pas triées
// let everyPossiblePair = (array) => array.map((elm,i,arr) => arr.filter(el => el !== elm))
// D'abord un tri sur l'array pour l'ordre alphabétique puis inversion pour tout mettre dans le bon ordre
let everyPossiblePair = (array) => array.sort().map((elm, i, arr) => arr.filter(el => el !== elm)).reverse()

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

let sortByLastLetter = (array) => array.sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1))

let getFirstHalf = (string) => string.substring(0, 3)

let makeNegative = (number) => -Math.abs(number)

let numberOfPalindromes = (array) => array.filter(word => word === word.split('').reverse().join('')).length
// let numberOfPalindromes = (array) => array.filter(word => word === [...word].reverse().join('')).length // Fonctionne aussi

let shortestWord = (array) => [...array.sort((a, b) => a.length - b.length)][0]

let longestWord = (array) => [...array.sort((a, b) => b.length - a.length)][0]

let sumNumbers = (array) => array.reduce((a, b) => a + b)

let repeatElements = (array) => [...array, ...array]

let stringToNumber = (string) => Number(string)

let calculateAverage = (array) => ([array.reduce((a, b) => a + b)][0] / array.length)

// Map sur l'array, ne renvoit que null ou l'arr.splice au bon moment
// Filter sur le résultat pour éliminer tous les résultats sauf l'arr.splice
// Selectionne l'array résultat avec [...Array][0]
let getElementsUntilGreaterThanFive = (array) => [...array.map((elm, i, arr) => elm > 5 ? arr.splice(0, i) : null).filter(el => el !== null)][0]

// Map pour groupper les éléments par [key, value] et laisser null entre les 2
// Filter pour éliminer les null
// Object.fromEntries sur le résultat
let convertArrayToObject = (array) => Object.fromEntries(array.map((el, i, arr) => (i % 2 == 1) ? [arr[i - 1], arr[i]] : null).filter(el => el !== null));

// Join les mots, les sépares en lettre, trie les lettres, crée un set pour rendre les valeurs uniques, déverse le set dans une array
let getAllLetters = (array) => [...new Set(array.join('').split('').sort())]

// Refactor avec Entries: plus court moins gourmand
// let swapKeysAndValues = (object) => Object.fromEntries(Object.keys(object).map((oldKey,i) => [ [...Object.values(object)][i], oldKey]))
let swapKeysAndValues = (object) => Object.fromEntries(Object.entries(object).map(([key, value]) => [value, key]))

let sumKeysAndValues = (object) => Object.entries(object).join(',').split(',').reduce(((acc, b) => Number(acc) + Number(b)))

let removeCapitals = (string) => string.replace(/[A-Z]/g, '')

let roundUp = (number) => Math.ceil(number)

let formatDateNicely = (date) => date.toLocaleDateString("en-GB")

let getDomainName = (string) => string

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
