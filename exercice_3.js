/*
En utilisant les données ci-dessous, affichez deux listes :

- les jeux en exclusivité Switch
- les jeux en exclusivité Playstation

Notez que les données des deux tableaux sont reliées par leur indices
*/

let games = [
    "Death stranding",
    "Mario Kart 8 : Deluxe",
    "Super Mario Odyssey",
    "The last guardian",
    "Horizon Zero Dawn",
    "Luigi's Mansion 3"
];
let consoles = [
    "Playstation",
    "Switch",
    "Switch",
    "Playstation",
    "Playstation",
    "Switch"
];

let listesPlay = [];
let listesSwitch = [];

for (let k = 0; k < games.length; k++) {

    if (consoles[k] === "Playstation") {

        listesPlay.push(games[k]);
    }

    if (consoles[k] === "Switch") {

        listesSwitch.push(games[k]);
    }

};
console.log(listesPlay);
console.log(listesSwitch);