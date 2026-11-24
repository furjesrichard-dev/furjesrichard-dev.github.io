
const datumMezo = document.querySelector("#datumMezo");
const keresoGomb = document.querySelector("#keresoGomb");
const eredmeny = document.querySelector("#eredmeny");

const napok = [
    "vasárnap",
    "hétfő",
    "kedd",
    "szerda",
    "csütörtök",
    "péntek",
    "szombat"
];

keresoGomb.addEventListener("click", function () {
    const datumReszei = datumMezo.value.split("-");

    const ev = Number(datumReszei[0]);
    const honap = Number(datumReszei[1]);
    const nap = Number(datumReszei[2]);

    const datum = new Date(ev, honap - 1, nap);
    const hetNapja = datum.getDay();

    eredmeny.textContent = "Ez a nap: " + napok[hetNapja];
});