var numberSystem={
numberData:{
primeNumbers:6,
fibonacci:6
},
sum_prime_number:function(){
var n=this.numberData.primeNumbers;
var is_NotPrime;
var sum=0;
if(n===0||n===1){
  
  return sum;
}

for(var i=2;i<=n;i++){
  is_NotPrime=0;
  for(var j=2;j<i;j++){
    if(i%j===0){
      is_NotPrime=1;
      break;
    }
  }
  if(is_NotPrime===0){
    sum=sum+i;
  }
}
return sum;
},
fibonacci_Nth_term:function(){
  var n=this.numberData.fibonacci;
  
  var array=[];
  var a=0;
  var b=1;
  
    var c;
array.push(a);
array.push(b);
for(var i=2;i<=n;i++){
c=a+b;
array.push(c);
a=b;
b=c;
}
var lastElement=array[array.length-1];
return lastElement;
}
};
module.exports=numberSystem;
