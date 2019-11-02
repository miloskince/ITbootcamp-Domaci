var n=5;
for(i=1; i<=n; i++)
{   
    var output='';
        for(j=1; j<=n; j++)
        {   
            if(j>=n-(i-1)) 
            {
                output+='#';
            }
            else
            {
                output+=' ';
            }
        }
    console.log(output);
}  