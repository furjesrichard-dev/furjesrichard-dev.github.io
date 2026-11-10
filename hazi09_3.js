
function veletlenSzinGenerator() {
    let piros = Math.floor(Math.random() * 256);
    let zold = Math.floor(Math.random() * 256);
    let kek = Math.floor(Math.random() * 256);

    return `rgb(${piros}, ${zold}, ${kek})`;
}

console.log(veletlenSzinGenerator());

function fill(selector) {
    const szinezendoElem = document.querySelector(selector);

    if (szinezendoElem !== null) {
        szinezendoElem.style.backgroundColor = veletlenSzinGenerator();
    }
}

const szinezoGomb = document.querySelector("#szinezoGomb");

szinezoGomb.addEventListener("click", function() {
    fill("#szinezendo");
});