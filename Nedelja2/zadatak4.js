//Da bi dobili koji broj sadrzi 1000 brojeva deljivih sa 5 potrebno je pomnoziti ta dva droja
//5 * 1000 = 5000
{   var a;
    a=1;
    var b;
    b=5000;
    for (a; a <= b; a++) {
        var deljivoSa5 = a % 5;
        if (deljivoSa5 == 0)
            console.log(a)
    }
}