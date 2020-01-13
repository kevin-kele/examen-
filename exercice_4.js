/*
En utilisant les données ci-dessous, vous devez afficher le message chiffré par substitutation de mots.

Le principe est le suivant : chaque nombre dans le message chiffré correspond 
à la position du mot déchiffré dans le dictionnaire.
*/

const message_crypted =
    "19-81-40-6-15-36-47-50-75-19-80-40-36-21-7-86-61-58-62-11-34-68-36-67-84-12-51-23-84-79-21-54-37-83-23-4-35-32-49-10-2-61-33-84-12-21-54-27-26-9-21-50-24-21-63-48-42-15-25-20-23-0-8-35-83-17-56-21-45-78-43-21-74-70-23-6-87-1-23-76-52-49-39-64-60-40-18-78-55-30-21-50-38-66-71-69-41-16-72-78-82-78-85-21-50-15-28-3-14-78-5-88-53-77-38-29-31-71-16-57-73-78-46-21-82-65-33-78-22-21-13-59";
const dictionnary = [
    "max",
    "dirigée",
    "les",
    "ce",
    "lorenz",
    "dispositifs",
    "une",
    "nombreuses",
    "newman",
    "lors",
    "partenariat).",
    "celles",
    "code",
    "communication",
    "sont",
    "machine",
    "pour",
    "au",
    "conçu",
    "il",
    "conçue",
    "de",
    "blocs",
    "par",
    "conception",
    "fut",
    "utilisées",
    "furent",
    "enigma.",
    "machines",
    "améliorées",
    "enigma",
    "siemens",
    "sur",
    "qui",
    "et",
    "à",
    "(machine",
    "«",
    "1943.",
    "également",
    "utilisée",
    "cette",
    "postes",
    "il",
    "recherche",
    "ensembles",
    "coder",
    "colossus.",
    "en",
    "la",
    "généré",
    "flowers",
    "associant",
    "fish",
    "versions",
    "laboratoire",
    "éliminer",
    "mathématiques,",
    "d'enigma.",
    "a",
    "recherches",
    "comme",
    "l'ordinateur",
    "turing",
    "potentielles",
    "bombe",
    "casser",
    "aboutiront",
    "polonaise",
    "hill",
    "»",
    "trouver",
    "rapidement",
    "dollis",
    "voix.",
    "thomas",
    "plusieurs",
    "des",
    "téléscripteur",
    "contribue",
    "conçoit",
    "clés",
    "construite",
    "le",
    "messages",
    "autres",
    "équipe",
    "électromécaniques"
];

let eureka = "";
let m = message_crypted.split('-')
for (let k = 0; k < m.length; k++) {

    eureka += dictionnary[m[k]] + " "

}
console.log(eureka)