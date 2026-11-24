import { myAlert } from "./myAlert.js";

const tippMezo = document.querySelector("#tippMezo");
const tippGomb = document.querySelector("#tippGomb");
const eredmeny = document.querySelector("#eredmeny");

const gondoltSzam = Math.floor(Math.random() * 10) + 1;
let tippekSzama = 0;

tippGomb.addEventListener("click", function () {
    const tipp = Number(tippMezo.value);

    if (tipp < 1 || tipp > 10 || tipp % 1 !== 0) {
        myAlert("1 és 10 közötti egész számot adj meg!");
        tippMezo.value = "";
        return;
    }

    tippekSzama++;

    if (tipp === gondoltSzam) {
        eredmeny.textContent = "Eltaláltad! " + tippekSzama + " tippből sikerült.";
    } else {
        myAlert("Nem talált. Próbáld újra!");
    }

    tippMezo.value = "";
});