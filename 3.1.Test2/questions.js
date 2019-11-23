let CreationTableauLangages =  () => ["Html", "CSS", "Java", "PHP"]

let CreationTableauNombres =  () => [...Array(6).keys()]

// Les 2 méthodes fonctionnent
// let RemplacementElement =  (langages) => langages.map((lg,i) => i === 2 ? "Javascript" : lg)
let RemplacementElement =  (langages) => {
    langages.splice(2, 1, 'Javascript')
    return langages
}

// Les 2 méthodes fonctionnent
// let AjoutElementLangages =  (langages) => {
//     langages.push('Ruby')
//     langages.push('Python')
//     return langages
// }
let AjoutElementLangages =  (langages) => {
    langages.splice(4, 0, 'Ruby', 'Python')
    return langages
}

let AjoutElementNombres =  (nombres) => {
    nombres.splice(0, 0, -2, -1)
    return nombres
}

let SuppressionPremierElement =  (langages) => {
    langages.shift()  // marche aussi avec splice(0,1)
    return langages
}

let SuppressionDernierElement =  (langages) => {
    langages.pop()
    return langages
}

let ConversionChaineTableau =  (reseaux_sociaux_chaine) => reseaux_sociaux_chaine.split(",")

let ConversionTableauChaine =  (langages) => langages.join(",")

let TriTableau =  (reseaux_sociaux) => reseaux_sociaux.sort()

let InversionTableau =  (reseaux_sociaux) =>reseaux_sociaux.reverse()
