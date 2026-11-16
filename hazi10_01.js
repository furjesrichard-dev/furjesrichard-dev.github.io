const kepKeret = (function() {
    const sablon = `
        <div class="kepKeret">
            <img>
            <p></p>
        </div>
    `;

    const ideiglenesTarolo = document.createElement("div");
    ideiglenesTarolo.innerHTML = sablon;

    const kepKeretSablon = ideiglenesTarolo.firstElementChild;

    function create(kepUtvonal, kepSzoveg) {
        const ujKepKeret = kepKeretSablon.cloneNode(true);

        const kep = ujKepKeret.querySelector("img");
        kep.src = kepUtvonal;
        kep.alt = kepSzoveg;

        const kepAlairas = ujKepKeret.querySelector("p");
        kepAlairas.textContent = kepSzoveg;

        const tartalom = document.querySelector("#tartalom");
        tartalom.appendChild(ujKepKeret);

        return ujKepKeret;
    }

    return {
        create: create
    };
})();

kepKeret.create("kepek/tajkep-33.jpg", "Egy szép tájkép");