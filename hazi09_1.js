
const nevMezo = document.querySelector("#nevMezo");
const cimMezo = document.querySelector("#cimMezo");
const telefonszamMezo = document.querySelector("#telefonszamMezo");
const hozzaadGomb = document.querySelector("#hozzaadGomb");
const kapcsolatokSorai = document.querySelector("#kapcsolatokSorai");

hozzaadGomb.addEventListener("click", function() {
    let nev = nevMezo.value;
    let cim = cimMezo.value;
    let telefonszam = telefonszamMezo.value;

    const sor = document.createElement("tr");

    const nevCella = document.createElement("td");
    const cimCella = document.createElement("td");
    const telefonszamCella = document.createElement("td");

    nevCella.textContent = nev;
    cimCella.textContent = cim;
    telefonszamCella.textContent = telefonszam;

    sor.appendChild(nevCella);
    sor.appendChild(cimCella);
    sor.appendChild(telefonszamCella);

    kapcsolatokSorai.appendChild(sor);
});