const order='dugme';
let orderBtn=document.getElementsByClassName(order);
console.log(orderBtn);

const poruka=document.getElementById('poruka');

const broilo=document.getElementById('brojac');

const orderNow='dugmeNow';
let orderNowBtn=document.getElementsByClassName(orderNow)
console.log(orderNowBtn);

for(let button of orderBtn)
{
    button.addEventListener('click',function(){
        brojacPizza(button);
    });
}
var pizzaCount=0;
function brojacPizza(element)
{
    console.log(element)
    pizzaCount++;
    broilo.innerHTML=pizzaCount;
}


for (let button of orderNowBtn)
{
    button.addEventListener('click',function(){
        broilo0(button);    
    });
}


function broilo0(element)
{   
    var dateTimeNow = new Date();
    var day = dateTimeNow.getDay();
    var danUmesecu = dateTimeNow.getDate();

    switch(day){
        case 0:
            day='Nedelja';
            break;
        case 1:
            day='Ponedeljak';
            break;
        case 2:
            day='Utorak';
            break;
        case 3:
            day='Sreda';
            break;
        case 4:
            day='Cetvrtak';
            break;
        case 5:
            day='Petak';
            break;
        case 6:
            day='Subota';
            break;
    }

    var month = dateTimeNow.getMonth();

    switch(month){
        case 0:
            month='Januar';
            break;
        case 1:
            month='Februar';
            break;
        case 2:
            month='Mart';
            break;
        case 3:
            month='April';
            break;
        case 4:
            month='Maj';
            break;
        case 5:
            month='Jun';
            break;
        case 6:
            month='Jul';
            break;
        case 7:
            month='Avgust';
            break;
        case 8:
            month='Septembar';
            break;
        case 9:
            month='Oktobar';
            break;
        case 10:
            month='Novembar';
            break;
        case 11:
            month='Decembar';
            break;
    }

    var year = dateTimeNow.getFullYear();
    var hours = dateTimeNow.getHours();
    var minutes = dateTimeNow.getMinutes();
    var seconds = dateTimeNow.getSeconds();
    var timeStampString = `${day} ${danUmesecu}.${month}.${year}  ${hours}:${minutes}:${seconds}`;
    var paragraf1=`<p>NISTE NARUCILI NI 1 PIZZU!!! ${timeStampString}</p>`;
    var paragraf2=`<p>NARUCILI STE ${pizzaCount} PIZZA!!! ${timeStampString}</p>`;
    if(pizzaCount==0){poruka.innerHTML=paragraf1;}
    if(pizzaCount!==0){poruka.innerHTML=paragraf2;}
    console.log(element);
    pizzaCount=0;
    broilo.innerHTML=0;
}
