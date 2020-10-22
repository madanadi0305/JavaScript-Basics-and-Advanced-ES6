function task10(arr1,arr2,key){
  var obj={};
  var str="";
  var map11=new Map();
  for(var i=0;i<arr1.length;i++){
  map11.set(arr1[i],arr2[i]);
  }
  console.log(map11);
if(map11.has(key)===true){
 
  obj.value=map11.get(key);
  map11.delete(key);
  obj.size=map11.size;
  var objKeys=Object.fromEntries(map11);
  obj.keys=Object.keys(objKeys);
  obj.map=map11;

  return obj;
}
  
else{
  let arr=[];
  console.log("Not Present");
  for(var key1 of map11.keys()){
    var str1=key1+":"+map11.get(key1);
    arr.push(str1);
    
  }
  //return str.toString();
  //console.log(str);
  return arr.join("\n");
  
}
}
module.exports=task10;
//map1([1,2,3,4,5,6,7,8,9],[23,4323,13,3235,5,434,67,625,931],44); 
