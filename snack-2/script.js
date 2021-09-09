// 1. Creare un array di oggetti di squadre di calcio.
// 2. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// 2a. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// 3. Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
// 4. Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

/* FUNCTIONS */

// 3.
// creo la funzione per generare il numero casuale di punti ottenuti e di di falli subiti
const rndGen = (min, max) => parseInt(Math.floor(Math.random() * (max - min + 1) ) + min);

/* MAIN PROGRAM */

// 1.
// 2.
const superLeague =
[
    {
        team : "Milan",
        points: rndGen(1, 9),
        fouls: rndGen(10, 35)
    },
    {
        team: "Real Madrid",
        points: rndGen(1, 9),
        fouls: rndGen(13, 48)
    },
    {
        team: "Barcellona",
        points: rndGen(1, 9),
        fouls: rndGen(8, 27)
    },
    {
        team: "Juventus",
        points: rndGen(1, 9),
        fouls: rndGen(18, 48)
    }
];

// 4.
const {team, fouls} = superLeague;

const teamsAndFouls = [];

for (let i = 0; i < superLeague.length; i++) {
    teamsAndFouls.push(superLeague[i].team);
    teamsAndFouls.push(superLeague[i].fouls);
}
console.log(teamsAndFouls);