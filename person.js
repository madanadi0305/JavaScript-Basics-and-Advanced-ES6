class Person{
  Name=['firstName','lastName'];
  Age;
  Gender;
  Interests;

constructor(name,age,gender,interests){
this.Name=name;
this.Age=age;
this.Gender=gender;
this.Interests=interests;

}

 Bio(){
return this.Name[0]+" "+this.Name[1]+" is "+this.Age+" years old. They like "+this.Interests;

 }
 Greeting(){
   return "Hi! I'm "+this.Name[0]+" "+this.Name[1];
 }
}
module.exports=Person;

