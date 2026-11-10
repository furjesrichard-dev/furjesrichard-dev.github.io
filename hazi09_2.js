
const tabla = document.querySelector("#tabla");

function sakktablatKeszit(meret) {
    for (let sorIndex = 0; sorIndex < meret; sorIndex++) {
        const sakksor = document.createElement("div");
        sakksor.classList.add("sakksor");

        for (let oszlopIndex = 0; oszlopIndex < meret; oszlopIndex++) {
            const mezo = document.createElement("div");
            mezo.classList.add("mezo");

            if ((sorIndex + oszlopIndex) % 2 === 0) {
                mezo.classList.add("vilagos");
            } else {
                mezo.classList.add("sotet");
            }

            sakksor.appendChild(mezo);
        }

        tabla.appendChild(sakksor);
    }
}

const kertMeret = Number(prompt("Mekkora legyen a sakktábla?"));

if (kertMeret > 0 && kertMeret % 1 === 0) {
    sakktablatKeszito(kertMeret);
} else {
    alert("Pozitív egész számot adj meg!");
}

function sakktablatKeszito(meret) {
    const betuk = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (let sorIndex = 0; sorIndex < meret; sorIndex++) {
        const sakksor = document.createElement("div");
        sakksor.classList.add("sakksor");

        const sorSzam = document.createElement("div");
        sorSzam.classList.add("sorSzam");
        sorSzam.textContent = meret - sorIndex;
        sakksor.appendChild(sorSzam);

        for (let oszlopIndex = 0; oszlopIndex < meret; oszlopIndex++) {
            const mezo = document.createElement("div");
            mezo.classList.add("mezo");

            if ((sorIndex + oszlopIndex) % 2 === 0) {
                mezo.classList.add("vilagos");
            } else {
                mezo.classList.add("sotet");
            }

            sakksor.appendChild(mezo);
        }

        tabla.appendChild(sakksor);
    }

    const betukSor = document.createElement("div");
    betukSor.classList.add("betukSor");

    for (let oszlopIndex = 0; oszlopIndex < meret; oszlopIndex++) {
        const oszlopBetu = document.createElement("div");
        oszlopBetu.classList.add("oszlopBetu");
        oszlopBetu.textContent = betuk[oszlopIndex];

        betukSor.appendChild(oszlopBetu);
    }

    tabla.appendChild(betukSor);
}