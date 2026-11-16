
const negyzet = document.querySelector("#negyzet");

let bal = 0;
let felso = 0;
const lepes = 10;

document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowRight") {
        event.preventDefault();
        if (bal < 550) {
            bal = bal + lepes;
        }
    } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        if (bal > 0) {
            bal = bal - lepes;
        }
    } else if (event.key === "ArrowDown") {
        event.preventDefault();
        if (felso < 350) {
            felso = felso + lepes;
        }
    } else if (event.key === "ArrowUp") {
        event.preventDefault();
        if (felso > 0) {
            felso = felso - lepes;
        }
    }

    negyzet.style.left = bal + "px";
    negyzet.style.top = felso + "px";
});