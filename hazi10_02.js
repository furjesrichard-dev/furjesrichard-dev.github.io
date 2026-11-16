
function createSecretStore(secretPassword, secretData) {
    function read(password) {
        if (password === secretPassword) {
            return secretData;
        }

        return "Hibás jelszó!";
    }

    function update(password, newData) {
        if (password === secretPassword) {
            secretData = newData;
            return "Sikeres módosítás!";
        }

        return "Hibás jelszó!";
    }

    return {
        read: read,
        update: update
    };
}

const titkosTarolo = createSecretStore("jelszo", "Titkos adat");

console.log(titkosTarolo.read("rossz")); // Hibás jelszó!
console.log(titkosTarolo.read("jelszo")); // Titkos adat

console.log(titkosTarolo.update("jelszo", "Új titkos adat"));
// Sikeres módosítás!

console.log(titkosTarolo.read("jelszo")); // Új titkos adat

