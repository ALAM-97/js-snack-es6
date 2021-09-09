// Creare un array di oggetti
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore

const bicicles =
    [
        {
            "nome": "Bici 1",
            "peso": 1200
        },
        {
            "nome": "Bici 2",
            "peso": 800
        },
        {
            "nome": "Bici 3",
            "peso": 750
        }
    ];

let lightBicicle = bicicles[0];

for (let i = 1; i < bicicles.length; i++) {
    if (bicicles[i].peso < lightBicicle.peso) {
        lightBicicle = bicicles[i];
    }
};

const {nome, peso} = lightBicicle;

console.log(`La ${nome} è la più leggera, peso: ${peso}`);