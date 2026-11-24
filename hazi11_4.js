import { myAlert } from "./myAlert.js";

const tesztGomb = document.querySelector("#alertTesztGomb");

tesztGomb.addEventListener("click", function () {
    myAlert("Felugró ablak!");
});