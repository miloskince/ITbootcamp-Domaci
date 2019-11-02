var cenaPice=500;//cena u dinarima
var precnikPice=30;//precnik u centimetrima
var poluprecnik;
poluprecnik=precnikPice/2;
var povrsinaPice;
povrsinaPice=Math.pow(poluprecnik,2)*Math.PI;
var rezultat;
rezultat=(cenaPice/povrsinaPice).toFixed(2);
console.log(`Povrsina Pice je : ${povrsinaPice} cm²`);
console.log(`Cena Pice po cm² je : ${rezultat} dinara`);