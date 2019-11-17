sastojak1={
    ImeSastojka:'Voda',
    Kolicina:1,
    Cena:35
}
sastojak2={
    ImeSastojka:'Crno Vino',
    Kolicina:1,
    Cena:260
}
sastojak3={
    ImeSastojka:'Luk',
    Kolicina:1,
    Cena:60
}
sastojak4={
    ImeSastojka:'Sargarepa',
    Kolicina:1,
    Cena:100
}
sastojak5={
    ImeSastojka:'Slanina',
    Kolicina:1,
    Cena:700
}
sastojak6={
    ImeSastojka:'Srnece Meso',
    Kolicina:1,
    Cena:2000
}
sastojak7={
    ImeSastojka:'Paradaiz Sos',
    Kolicina:1,
    Cena:80
}
sastojak8={
    ImeSastojka:'Mlevena Paprika',
    Kolicina:1,
    Cena:110
}
var receptGulas={
    ImeRecepta: 'Srneci Gulas',
    Tezina:'Majstor',
    Sastojci:[sastojak1,sastojak2,sastojak3,sastojak4,sastojak5,sastojak6,sastojak7,sastojak8]
}
//Zadatak5
receptGulas.cena = function(){
    let counter=0;
    this.Sastojci.forEach(element=>{
        counter+=element.Kolicina * element.Cena;
    })
    return counter;  
}
console.log(receptGulas.cena());