//bouton 1
let compteurVues = localStorage.getItem('vues');

if (!compteurVues) {
    compteurVues = 0;
} else {
    compteurVues = parseInt(compteurVues);
}

document.getElementById("nombreVues").textContent = compteurVues + "vues";

function incrementerVues() {
    compteurVues++;

    document.getElementById("nombreVues").textContent = compteurVues + "vues";

    localStorage.setItem('vues', compteurVues)
} 
//bouton 2
let compteurVues2 = localStorage.getItem('vues2');
if (!compteurVues2) {
    compteurVues2 = 0;
} else {
    compteurVues = parseInt(compteurVues2);
}

document.getElementById("vues2").textContent = compteurVues2 + "vues";

function incrementer2() {
    compteurVues2++;

    document.getElementById("vues2").textContent = compteurVues2 + "vues";

    localStorage.setItem('vues2', compteurVues2)
}
//bouton 3
let compteurVues3 = localStorage.getItem('vues3');
if (!compteurVues3) {
    compteurVues3 = 0;
} else {
    compteurVues = parseInt(compteurVues3);
}

document.getElementById("vues3").textContent = compteurVues3 + "vues";

function incrementer3() {
    compteurVues3++;

    document.getElementById("vues3").textContent = compteurVues3 + "vues";

    localStorage.setItem('vues3', compteurVues3)
}
//bouton4
let compteurVues4 = localStorage.getItem('vues4');
if (!compteurVues4) {
    compteurVues4 = 0;
} else {
    compteurVues = parseInt(compteurVues4);
}

document.getElementById("vues4").textContent = compteurVues4 + "vues";

function incrementer4() {
    compteurVues4++;

    document.getElementById("vues4").textContent = compteurVues4 + "vues";

    localStorage.setItem('vues4', compteurVues4)
}
//bouton 5
let compteurVues5 = localStorage.getItem('vues5');
if (!compteurVues5) {
    compteurVues5 = 0;
} else {
    compteurVues = parseInt(compteurVues5);
}

document.getElementById("vues5").textContent = compteurVues5 + "vues";

function incrementer5() {
    compteurVues5++;

    document.getElementById("vues5").textContent = compteurVues5 + "vues";

    localStorage.setItem('vues5', compteurVues5)
}