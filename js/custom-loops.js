/* LENGVESNI */

/* 01.
Sukurkite ciklą kuris atspausdintų 10 kartų žodį “labas”.
*/
let labas = 1;
while(labas <= 10) {
    console.log("labas");
    labas++;
}


/* 02.
Sukurkite ciklą kuris atspausdintų skaičius nuo 0 iki 9.
*/
let i;
for(i = 0; i < 10; i++){
    console.log(i)
}

/* 03.
Sukurkite masyvą su dešimt augalų pavadinimų.
*/
let augalai = ["lapas", "medis", "gele", "zole", "agurkas", "akacija", "dagys", "dilgele", "salieras", "salota"];

/* 04.
Atspausdinkite kiekvieną 3-čio uždavinio augalą atskiroje eilutėje.
*/
let augalai2 = ["lapas", "medis", "gele", "zole", "agurkas", "akacija", "dagys", "dilgele", "salieras", "salota"];
for(let i = 0; i < augalai2.length; i++) {
    if(i % 1 == 0) {
    console.log(augalai2[i]);
    }
}


/* 05.
Atspausdinkite 3-čio uždavinio kiekvieną augalą pradedant nuo paskutinio, ir baigiant pirmuoju. (atvirkščias ciklas).
*/
let augalai3 = ["lapas", "medis", "gele", "zole", "agurkas", "akacija", "dagys", "dilgele", "salieras", "salota"];
console.log(augalai3.reverse());



/* 06.
Atspausdinkite kas antrą skaičių nuo 10 iki 50 (porinius);
*/
let Skaičiai = [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50];
for(let i = 0; i < Skaičiai.length; i++) {
    if(i % 2 == 0) {
    console.log(Skaičiai[i]);
    }
}

/* 07.
Atspausdinkite kas antrą skaičių nuo 10 iki 50. (porinius) Jei skaičius dalinasi iš 10 be liekanos jo nespausdinkite. ( naudokite continue.) (atspausdinti visus porinius skaičius, išskyrus tuos kurie dalinasi iš 10 be liekanos)
*/
for(w=10; w <= 50; w++) {
    if(w % 2 == 0) {
        if(w % 10 == 0) {
            continue;
        } else {
            console.log(w);
        }
    }
}

/* 08.
Sukurkite ciklą kuris suktųsi nuo 0 iki 20. Suskaičiuokite, kiek kartų kintamasis i turėjo porinę reikšmę;
*/
for(n = 1; n <= 20; n++){
    if(n % 2 == 0){
        console.log(n)
    }
}

/* 09.
Suskaičiuokite kiek 3-čio uždavinio masyve yra žodžių trumpesnių nei 5 simboliai, ir kiek ilgesnių nei 7 simboliai.
*/

/* SUNKESNI */

/* 01.
Sugeneruokite 300 atsitiktinių skaičių nuo 0 iki 300, atspausdinkite juos atskirtus tarpais ir suskaičiuokite kiek tarp jų yra didesnių už 150.  Skaičiai didesni nei 275 turi būti atspausdinti skliausteliuose” [ ] “.
*/

/* 02.
Vienoje eilutėje atspausdinkite visus skaičius nuo 1 iki 3000, kurie dalijasi iš 77 be liekanos. Skaičius atskirkite kableliais. Po paskutinio skaičiaus kablelio neturi būti.
*/

/* 03.
Nupieškite kvadratą iš “*”, kurio kraštines sudaro 10 “*”.
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
*/