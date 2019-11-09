function max(a,b,c)
{
    if(a>b && a>c){return a};
    if(b>a && b>c){return b};
    if(c>a && c>b){return c};
    if(a==b && b==c){return a || b || c};
    if(a==b){return b || a};
    if(a==c){return a || c};
    if(b==c){return b || c};
}
console.log(max(10,20,30));