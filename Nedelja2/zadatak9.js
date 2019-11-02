var n=5;
for(i=1; i<=n; i++)
{   
    var output1='';
    var output2='';
        for(j=1; j<=n; j++)
        {   
            if(j>=n-(i-1)) 
            {
                output1+='#';
                output2+='#';
            }
            else
            {
                output1+=' ';
                output2+='';
            }
        }
    console.log(output1+ ' ' + output2);
}  