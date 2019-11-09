function lifeSupply(mesecnaIzjedenost,godineZderaoca)
    {   
        let rezultat=pizza4life(mesecnaIzjedenost,godineZderaoca)
        console.log(rezultat);
    }

function pizza4life(mesecnaIzjedenost,godineZderaoca)
    {   
        let doKrajaZivota=100 - godineZderaoca;
        let izjedenostNaGodisnjemNivou=12 * mesecnaIzjedenost;
        return rezultat=doKrajaZivota * izjedenostNaGodisnjemNivou;
    }

console.log(pizza4life(22,33));
lifeSupply(10,26);