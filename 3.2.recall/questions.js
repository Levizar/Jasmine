const selectElementsStartingWithA = (array) => array.filter(el => el[0] === "a")

const selectElementsStartingWithVowel = (array) => array.filter(el => /[aeiou]/i.test(el[0]))

const removeNullElements = (array) => array.filter(el => el != null)

const removeNullAndFalseElements = (array) => array.filter(el => (el !== null && el !== false)) // Attention: égalité stricte pour éviter de filtrer le nombre 0

const reverseWordsInArray = (array) => array.map(word => word.split("").reverse().join(''))

// La 1ere solution est suffisante pour avoir toutes les possibilités mais elles ne sont pas triées
// D'abord un tri sur l'array pour l'ordre alphabétique puis inversion pour tout mettre dans le bon ordre
const everyPossiblePair = (array) => array.sort().map((elm, i, arr) => arr.filter(el => el !== elm)).reverse()

// Splice:
// p1: index p2: nombre d'élément à retirer p3: élément à insérer à leur place
// 1) il sort un ou plusieurs élément de l'array à partir de l'index selectionné
// 2) Il renvoit directement via une array les éléments retirés. Ici, les élément à partir de l'index 3 sont renvoyés
// 3) il insert d'autre élément si mentionné
const allElementsExceptFirstThree = (array) => array.splice(3)

// const addElementToBeginning = (array, element) => array.unshift(element) && array // Méthode un peu "sale"
const addElementToBeginning = (array, element) => (array.unshift(element), array) // Méthode + correct
// const addElementToBeginning = (array, element) => {
//     array.unshift(element);
//     return array
// }

const sortByLastLetter = (array) => array.sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1))

const getFirstHalf = (string) => string.substring(0, 3)

const makeNegative = (number) => -Math.abs(number)

const numberOfPalindromes = (array) => array.filter(word => word === word.split('').reverse().join('')).length
// const numberOfPalindromes = (array) => array.filter(word => word === [...word].reverse().join('')).length // Fonctionne aussi

const shortestWord = (array) => [...array.sort((a, b) => a.length - b.length)][0]

const longestWord = (array) => [...array.sort((a, b) => b.length - a.length)][0]

const sumNumbers = (array) => array.reduce((a, b) => a + b)

const repeatElements = (array) => [...array, ...array]

const stringToNumber = (string) => Number(string)

const calculateAverage = (array) => ([array.reduce((a, b) => a + b)][0] / array.length)

// Map sur l'array, ne renvoit que null ou l'arr.splice au bon moment
// Filter sur le résultat pour éliminer tous les résultats sauf l'arr.splice
// Selectionne l'array résultat avec [...Array][0]
const getElementsUntilGreaterThanFive = (array) => [...array.map((elm, i, arr) => elm > 5 ? arr.splice(0, i) : null).filter(el => el !== null)][0]

// Map pour groupper les éléments par [key, value] et laisser null entre les 2
// Filter pour éliminer les null
// Object.fromEntries sur le résultat
const convertArrayToObject = (array) => Object.fromEntries(array.map((el, i, arr) => (i % 2 == 1) ? [arr[i - 1], arr[i]] : null).filter(el => el !== null));

// Join les mots, les sépares en lettre, trie les lettres, crée un set pour rendre les valeurs uniques, déverse le set dans une array
const getAllLetters = (array) => [...new Set(array.join('').split('').sort())]

// Refactor avec Entries: plus court moins gourmand
// const swapKeysAndValues = (object) => Object.fromEntries(Object.keys(object).map((oldKey,i) => [ [...Object.values(object)][i], oldKey]))
const swapKeysAndValues = (object) => Object.fromEntries(Object.entries(object).map(([key, value]) => [value, key]))

const sumKeysAndValues = (object) => Object.entries(object).join(',').split(',').reduce(((acc, b) => Number(acc) + Number(b)))

const removeCapitals = (string) => string.replace(/[A-Z]/g, '')

const roundUp = (number) => Math.ceil(number)

const formatDateNicely = (date) => date.toLocaleDateString("en-GB")

// const getDomainName = (string) => string.match(/(?<=@)(.*)(?=\.)/)[0] // (?<=@) ne marche pas sous firefox
// const getDomainName = (string) => {
//     let arobaseIndex = null;
//     let lastDotIndex = null;
//     arrayString = string.split('')
//     // Double condition ternaire
//     arrayString.forEach( (letter, i) => letter === "@" ? arobaseIndex = i : letter === "." ? lastDotIndex = i : 0 )
//     let captured = arrayString.splice(arobaseIndex+1, lastDotIndex - arobaseIndex - 1)
//     return captured.join('')
// }
const getDomainName = (string) => string.slice(string.indexOf("@") + 1, string.lastIndexOf("."))

// cette regex ne fonctionne pas sous firefox car il y a un look around (?<= )
const titleize = (string) => string.replace(/(^[^ ])|(?<= )([^ at])|(?<=\. )([^ ])/g, (elm) => elm.toUpperCase())

const checkForSpecialCharacters = (string) => /\W/g.test(string)
// /[^A-Z0-9]/gi.test(string) fonctionne aussi

const squareRoot = (number) => Math.sqrt(number)

const factorial = (number) => number <= 1 ? 1 : (number * factorial(number - 1))
// const factorial = (number) => [...Array(number).map( (x,i) => i+1 )].reduce((a,b) => a * b) // 

// // L'algorithme ne couvre pas toutes les solutions:
// // Seules les solutions à échanges par paires sont couvertes.
// // Le moment où chaque lettre se déplace n'est pas couvert.
// const findAnagrams = (string) => {
//     const word = string.split('').sort();
//     console.log("word", word);
//     let arrOfAnagram = [];
//     // Couvre les permutations par paires => n'est pas fonctionnel
//     // A re écrire de Zero.
//     // Il ne devrait pas y avoir besoin de faire une boucle de plus
//     for (let i = 0; i < word.length; i++) {
//         for (let j = 0; j < word.length; j++) {
//             // D'une manière ou d'une autre, la permutation modifie l'ordre de l'array Word
//             // Il faut donc la redéfinir à chaque fois à travers une autre variable
//             let currentWord = string.split('').sort();
//             let permutation = currentWord[i];
//             currentWord[i] = currentWord[j];
//             currentWord[j] = permutation;
//             currentWord = currentWord.join('');
//             arrOfAnagram.push(currentWord);
//         }
//     }
//     // Couvre les chaises musicales
//     let currentWord = string.split('').sort();
//     for (let i = 0; i < word.length; i++) {
//         currentWord.push(currentWord[0]);
//         currentWord.shift();
//         let musicalChairSolution = currentWord.join('');
//         arrOfAnagram.push(musicalChairSolution);
//     }
//     console.log(arrOfAnagram);
//     arrOfAnagram = [...new Set(arrOfAnagram)]
//     console.log(arrOfAnagram);
//     return arrOfAnagram
// }

const findAnagrams = (string) => {
    
    let word = string.split('').sort();
    word = new Array(...word)
    let compteur = 0
    let arrOfAnagram = [];
    for (let i = 0; i < word.length; i++) {
        for (let j = 0; j < word.length; j++) {
            let currentWord = new Array(...word);
            console.log(currentWord);
            console.log(compteur++);
            let permutation = currentWord[i];
            currentWord[i] = currentWord[j];
            currentWord[j] = permutation;
            currentWord = currentWord.join('');
            arrOfAnagram.push(currentWord);
        }
    }
    arrOfAnagram = [...new Set(arrOfAnagram)]
    return arrOfAnagram
}
findAnagrams("ABC")


const convertToCelsius = (number) => Math.round((number - 32) * 5 / 9)

const letterPosition = (array) => array.map(elm => elm.toLowerCase().charCodeAt(0) - 96)