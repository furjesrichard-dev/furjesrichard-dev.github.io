
const elsoSzamMezo = document.querySelector("#elsoSzam");
const masodikSzamMezo = document.querySelector("#masodikSzam");
const muveletValaszto = document.querySelector("#muvelet");
const szamolGomb = document.querySelector("#szamolGomb");
const eredmenyMezo = document.querySelector("#eredmeny");

szamolGomb.addEventListener("click", function() {
    let elsoSzam = Number(elsoSzamMezo.value);
    let masodikSzam = Number(masodikSzamMezo.value);
    let muvelet = muveletValaszto.value;

    console.log(elsoSzam);
    console.log(muvelet);
    console.log(masodikSzam);
});

szamolGomb.addEventListener("click", function() {
    if (elsoSzamMezo.value === "" || masodikSzamMezo.value === "") {
        eredmenyMezo.textContent = "Add meg mindkét számot!";
        return;
    }

    let elsoSzam = Number(elsoSzamMezo.value);
    let masodikSzam = Number(masodikSzamMezo.value);
    let muvelet = muveletValaszto.value;
    let eredmeny;

    if (muvelet === "+") {
        eredmeny = elsoSzam + masodikSzam;
    } else if (muvelet === "-") {
        eredmeny = elsoSzam - masodikSzam;
    } else if (muvelet === "*") {
        eredmeny = elsoSzam * masodikSzam;
    } else if (muvelet === "/") {
        if (masodikSzam === 0) {
            eredmenyMezo.textContent = "Nullával nem lehet osztani!";
            return;
        }

        eredmeny = elsoSzam / masodikSzam;
    }

    eredmenyMezo.textContent = eredmeny;
});