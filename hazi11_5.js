
const temaValaszto = document.querySelector("#temaValaszto");
const temaStilus = document.querySelector("#temaStilus");

temaValaszto.addEventListener("change", function () {
    temaStilus.href = temaValaszto.value;
});