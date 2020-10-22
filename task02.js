const jobAssurance=function(name,age,gender,experience){
this.gender=gender.toString();
if(this.gender==='M'){
  this.name="Mr. "+name;
}
else{
  this.name="Mrs. "+name;
}
this.age=parseInt(age);
this.experience=parseInt(experience);

 this.isEligible=function(){
   if(this.age>17)
    { return true;}
   else{return false;}  
 } 
this.isExperienced=function(){
  if(this.experience>4)
    {return true;}
  else {return false;}
}
this.getStatus=function(){
  var isEligible=this.isEligible();
  var isExperienced=this.isExperienced();
  if(isEligible && isExperienced)
    { return "Congratulation "+this.name + ", your job is assured";
    } 
  else 
  {return "Sorry "+this.name+ ", we can not assure your job";
  }
  
}

}
module.exports=jobAssurance;
/*var checkAssurance=new jobAssurance('Rutuja','19yrs','F','5yrs');
var getEmployeeStatus=checkAssurance.getStatus();
console.log(getEmployeeStatus);
console.log(checkAssurance.isEligible());
console.log(checkAssurance.isExperienced());*/

