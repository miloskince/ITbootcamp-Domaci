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
    var hours = dateTimeNow.getHours();
    var minutes = dateTimeNow.getMinutes();
    var seconds = dateTimeNow.getSeconds();
    var timeStampString = `${hours}:${minutes}:${seconds}`;
    var paragraf1=`<p>NISTE NARUCILI NI 1 PIZZU!!! ${timeStampString}</p>`;
    var paragraf2=`<p>NARUCILI STE ${pizzaCount} PIZZA!!! ${timeStampString}</p>`;
    if(pizzaCount==0){poruka.innerHTML=paragraf1;}
    if(pizzaCount!==0){poruka.innerHTML=paragraf2;}
    console.log(element);
    pizzaCount=0;
    broilo.innerHTML=0;
}