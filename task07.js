function task07(number){
var n=parseInt(number);
var perfect_square_sum=0;
for(var i=1;(i*i)<n;i++)
{
    perfect_square_sum=perfect_square_sum+i*i;
}
var map1=new Map();
map1.set(perfect_square_sum,perfect_square_sum);
return map1;
}
module.exports=task07;
