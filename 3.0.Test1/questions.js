/**
 * Exercice sur les chaines de caractères.
 * Trouvez la façon de faire la plus optimal.
 * Il peut y avoir plusieur façon de faire.
 */
const tailleString = (texte) => {
    return texte.length;
}
const remplaceECar = (texte) => {
    const a = texte.indexOf("e")
    const text = texte.substr(" ", a) + " " + texte.substr(a + 1, texte.length);
    return text;
}
const concatString = (texte1, texte2) => texte1 + texte2

const afficherCar5 = (texte) => texte[4]

const afficher9Car = (texte) => texte.substring(0, 9)

const majusculeString = (texte) => texte.toUpperCase()

const minusculeString = (texte) => texte.toLowerCase()

const SupprEspaceString = (texte) => texte.trim()

const IsString = (texte) => typeof (texte) == "string" ? true : false

const AfficherExtensionString = (texte) => texte.match(/[^.]*$/)[0]

const NombreEspaceString = (texte) => texte.match(/\s/g).length

const InverseString = (texte) => texte.split("").reverse().join("");


/**
 * Exercices sur les nombres et les caluls mathématiques
 */
const calculPuissance = (x, y) => Math.pow(x, y)

const valeurAbsolue = (nombre) => Math.abs(nombre)

const valeurAbsolueArray = (array) => array.map(nbr => Math.abs(nbr))

const sufaceCercle = (r) => Math.round(Math.PI * (r ** 2))

const hypothenuse = (ab, ac) => Math.hypot(ab, ac)

const calculIMC = (poids, taille) => +(poids / taille ** 2).toFixed(2)