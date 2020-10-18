function task09(pre_map,arr){

/*if(pre_map.size===0){
    return -1;
}*/

for(var i=0;i<arr.length;i++){
    //check whether arr[i] exists as key in pre_map
    var elem=arr[i];
    //if the key does not exist then add that key
    var armstrongOrNot=isArmstrong(elem);
    if(pre_map.has(elem)===false){
     if(armstrongOrNot===true){
      pre_map.set(elem,true);  


     }
     else{
         pre_map.set(elem,false);
     }
           
    }
    else{
        //delete the map element
        pre_map.delete(elem);
    }
}

return pre_map;

}


const isArmstrong=(number)=>{
var sum=0;
var n=parseInt(number);
var rem;
if(number===0||number===1){
    return true;
}
while(n!==0){
    rem=n%10;
   sum=sum+rem*rem*rem;
   n=n/10;
}
if(sum===number){
    return true;
}
else{
    return false;
}


};





module.exports=task09;
