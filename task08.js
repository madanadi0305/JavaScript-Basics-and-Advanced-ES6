function task08(array){
var arr1=[];
var arr;
for(var i=0;i<array.length;i++){
    arr=array[i];
    for(var j=0;j<arr.length;j++){
        for(var k=j+1;k<arr.length;k++){
            if(arr[k]===arr[j]){
                arr.splice(k,1);
            }
        }
    }
    arr1.push(arr);
}
var mapArray=new Map();
for(var i=0;i<arr1.length;i++){
    mapArray.set(i,arr1[i]);
}

return mapArray;
}
module.exports=task08;
