

function szigoruanNoVagyCs(szamok) {
    if (szamok.length < 2) {
        return false;
    }

    let novekvo = true;
    let csokkeno = true;

    for (let i = 1; i < szamok.length; i++) {
        if (szamok[i] <= szamok[i - 1]) {
            novekvo = false;
        }

        if (szamok[i] >= szamok[i - 1]) {
            csokkeno = false;
        }
    }

    return novekvo || csokkeno;
}

console.log(szigoruanNoVagyCs([1, 2, 3, 4, 5]));
console.log(szigoruanNoVagyCs([3, 2, 1, 0, -1]));
console.log(szigoruanNoVagyCs([1, 1, 2, 3, 4]));
console.log(szigoruanNoVagyCs([1, 3, 2, 4, 5, 6])); 