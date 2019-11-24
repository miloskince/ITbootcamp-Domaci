var nizDeljivSa=[1,2,3,4,5,10,15,23,1,5];
function deljive(delioc)
{   
    console.log(`Brojevi u nizu deljivi sa ${delioc} su:`);
    let output='';
    for(let i=0; i<nizDeljivSa.length; i++)
    {   
        if (nizDeljivSa[i] % delioc == 0)
        {output+= ` ${nizDeljivSa[i]}`};
    } 
    if(output == ''){output=`U nizu nema Brojeva deljivih sa ${delioc} !!!`};
    console.log(output);
}

deljive(5);// Uneti broj kojim cemo deliti elemente niza.Ima uslov i isps kada brojevi nisu deljivi sa unetim brojem;