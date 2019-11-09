function max(a,b,c)
{
    if(a>b && a>c){return a};
    if(b>a && b>c){return b};
    if(c>a && c>b){return c};
    if(a==b && b==c){return 'Brojevi "a" i "b" i "c" su iste vrednosti'};
    if(a==b){return 'Brojevi "a" i "b" su maximum ali su iste vrednosi'};
    if(a==c){return 'Brojevi "a" i "c" su maximum ali su iste vrednosi'};
    if(b==c){return 'Brojevi "b" i "c" su maximum ali su iste vrednosi'};
}
console.log(max(5,10,20));