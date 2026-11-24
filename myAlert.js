function myAlert(uzenet) {
    const hatter = document.createElement("div");
    hatter.classList.add("alertHatter");

    const ablak = document.createElement("div");
    ablak.classList.add("alertAblak");

    const uzenetElem = document.createElement("p");
    uzenetElem.textContent = uzenet;

    const rendbenGomb = document.createElement("button");
    rendbenGomb.textContent = "Rendben";

    rendbenGomb.addEventListener("click", function () {
        hatter.remove();
    });

    ablak.appendChild(uzenetElem);
    ablak.appendChild(rendbenGomb);
    hatter.appendChild(ablak);
    document.body.appendChild(hatter);
}

export { myAlert };

