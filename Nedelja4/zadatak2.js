var recept={
    ImeRecepta: 'Srneci Gulas',
    Tezina:'Majstor',
    Sastojci:['Voda','Crno vino','Luk','Sargarepa','Paradaiz sos','Srnece meso','Slanina','Mlevena paprika']
}

var recepti=[{
    ImeRecepta: 'Jaje na oko',
    Tezina:'Pocetni',
    Sastojci:['Mast','Jaje','So','Biber']
},
{
    ImeRecepta: 'Kajgana',
    Tezina:'Lak',
    Sastojci:['Mast','Slanina','Jaje','So','Biber']
},
{
    ImeRecepta: 'Popara',
    Tezina:'Srednji',
    Sastojci:['Voda','Mast','Sir','So','Bajat Hleb']
},
{
    ImeRecepta: 'Juneca Corba',
    Tezina:'Tezak',
    Sastojci:['Voda','Sargarepa','Luk','Junece Meso','Ulje']
},
recept]

function IspisRecepta(RedniBr){
    console.log(`${recepti[RedniBr].ImeRecepta} :`);
    console.log(`Tezina: ${recepti[RedniBr].Tezina}`);
    console.log(`Sastojci : ${recepti[RedniBr].Sastojci}`);

}

//IspisRecepta(3);

//Zadatak2
recepti.forEach(element=>{
    if(element.Tezina == 'Lak' || element.Tezina == 'Pocetni'){
        console.log(`<${element.ImeRecepta}>`);
        console.log(`Tezina: <${element.Tezina}>`);
        console.log(`Sastojci : [<${element.Sastojci[0]}>,${element.Sastojci.slice(1)}]`);};
});