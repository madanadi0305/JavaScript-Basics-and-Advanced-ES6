class Person{
 Name;
  Age;
  Gender;
  Interests;

constructor(firstName,lastName,age,gender,interests){
this.Name={
  firstName,
  lastName
};
this.Age=age;
this.Gender=gender;
this.Interests=interests;

}

 Bio(){
return this.firstName+" "+this.lastName+" is "+this.Age+" years old. They like "+this.Interests+".";

 }
 Greeting(){
   return "Hi! I'm "+this.firstName+" "+this.lastName+".";
 }



}
module.exports=Person;
