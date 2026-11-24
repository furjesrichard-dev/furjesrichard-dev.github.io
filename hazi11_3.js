
const kezdoDatumMezo = document.querySelector("#kezdoDatum");
const zaroDatumMezo = document.querySelector("#zaroDatum");
const napJelolonegyzetek = document.querySelectorAll(
    'input[type="checkbox"]'
);
const keresesGomb = document.querySelector("#keresesGomb");
const talalatok = document.querySelector("#talalatok");

keresesGomb.addEventListener("click", function () {
    const kivalasztottNapok = [];

    for (let i = 0; i < napJelolonegyzetek.length; i++) {
        if (napJelolonegyzetek[i].checked) {
            kivalasztottNapok.push(
                Number(napJelolonegyzetek[i].value)
            );
        }
    }


    talalatok.textContent = "";

    if (kezdoDatumMezo.value === "" || zaroDatumMezo.value === "") {
        talalatok.textContent = "Add meg mindkét dátumot!";
        return;
    }

    if (kivalasztottNapok.length === 0) {
        talalatok.textContent = "Jelölj be legalább egy napot!";
        return;
    }

    const kezdoReszek = kezdoDatumMezo.value.split("-");
    const zaroReszek = zaroDatumMezo.value.split("-");

    let aktualisDatum = new Date(
        Number(kezdoReszek[0]),
        Number(kezdoReszek[1]) - 1,
        Number(kezdoReszek[2])
    );

    const zaroDatum = new Date(
        Number(zaroReszek[0]),
        Number(zaroReszek[1]) - 1,
        Number(zaroReszek[2])
    );

    if (aktualisDatum > zaroDatum) {
        talalatok.textContent = "A kezdő dátum nem lehet később a záró dátumnál!";
        return;
    }

let talalatVan = false;

    while (aktualisDatum <= zaroDatum) {
        const hetNapja = aktualisDatum.getDay();
        let eztANapotKeressuk = false;

        for (let i = 0; i < kivalasztottNapok.length; i++) {
            if (hetNapja === kivalasztottNapok[i]) {
                eztANapotKeressuk = true;
            }
        }

        if (eztANapotKeressuk) {
            const listaElem = document.createElement("li");

            const datumSzoveg =
                aktualisDatum.getFullYear() + ". " +
                (aktualisDatum.getMonth() + 1) + ". " +
                aktualisDatum.getDate() + ".";

            listaElem.textContent = datumSzoveg;
            talalatok.appendChild(listaElem);
            talalatVan = true;
        }

        aktualisDatum.setDate(aktualisDatum.getDate() + 1);
    }

    if (talalatVan === false) {
        talalatok.textContent = "Nincs találat a megadott időszakban.";
    }

});