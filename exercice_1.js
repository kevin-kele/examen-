/*
Vous devez afficher dans la console la phrase inversée
"l'école multimédia" devient "aidémitlum elocé'l"
*/

let sentence =
    "If you want your children to be intelligent, read them fairy tales. If you want them to be more intelligent, read them more fairy tales.";


function reverse(str) {
    return str.split("").reverse().join("");
}
console.log(reverse(sentence));