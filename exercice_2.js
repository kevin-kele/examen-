/*
La music de STAR WARS composée par John Williams en 1977 fut un grand 
succés et fit de bon scores dans les charts, comme le montre notre tableau.
Vous devez afficher dans la console la moyenne atteinte
par la bande originale de STAR WARS 
*/

let star_wars_1977_peak_charts = [67, 13, 7, 10, 4, 18];
let moyenne = 0;
for (let k = 0; k < star_wars_1977_peak_charts.length; k++) {
    moyenne += star_wars_1977_peak_charts[k];


}
console.log(moyenne / star_wars_1977_peak_charts.length)