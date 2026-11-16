
function ervenyesCssSzin(szinkod) {
    const hexMinta = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;

    if (hexMinta.test(szinkod)) {
        return true;
    }

    const rgbMinta = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/;
    const rgbTalalat = szinkod.match(rgbMinta);

    if (rgbTalalat === null) {
        return false;
    }

    let piros = Number(rgbTalalat[1]);
    let zold = Number(rgbTalalat[2]);
    let kek = Number(rgbTalalat[3]);

    return piros <= 255 && zold <= 255 && kek <= 255;
}

console.log(ervenyesCssSzin("#abc"));
console.log(ervenyesCssSzin("#aabbcc"));
console.log(ervenyesCssSzin("rgb(255, 0, 128)"));
console.log(ervenyesCssSzin("rgb(256, 0, 128)")); 
console.log(ervenyesCssSzin("rgb(1, 2)"));        