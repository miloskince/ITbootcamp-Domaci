function pica(cenaPice,precnik)
{
    let rezultat=izracunatiCenu(cenaPice,precnik);
    console.log(`Cena Pice po cm² je : ${rezultat} dinara`);
}
function izracunatiCenu(cenaPice,precnik)
{
    var poluprecnik;
    poluprecnik=precnik/2;
    var povrsinaPice;
    povrsinaPice=Math.pow(poluprecnik,2)*Math.PI;
    return izracunatiCenu=(cenaPice/povrsinaPice).toFixed(2);
}
pica(500,30);