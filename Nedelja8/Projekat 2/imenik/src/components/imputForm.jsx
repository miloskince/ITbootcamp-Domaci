import React, { useState } from "react";

const InputForm = (props) => {

    const [userValue,changeUserValue] = useState('');
    const [numberValue,changeNumberValue] = useState('');
    const [greska,setGreska] = useState('');

    const Unesi = () =>{
        if(userValue === ''){return setGreska("Ime i Prezime Ne moze biti prazno")}
        if(numberValue === ''){return setGreska("Broj Telefona Ne moze biti prazan")}
        if(numberValue[0] !== '+'){return setGreska("Broj mora biti formata +XXX XXXXXXXXX")};
        props.setUsers(userValue, numberValue);
        setGreska('')
    }

    return(
        <div>
            <span>TELEFONSKI IMENIK IT BootCamp</span>
            <input id="name" type="text" placeholder="Unesite Vase Ime i Prezime"  onChange = {e =>changeUserValue(e.target.value)}/>
            <input id="number" type="text" placeholder="Unesite Broj Telefona"  onChange = {e =>changeNumberValue(e.target.value)}/>
            <input id="button" type="submit" value="Unesi" onClick = {Unesi}/>
            <p>{greska}</p>
        </div>
    )
}


export { 
    InputForm
}