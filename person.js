class Person{
  Name=[firstName,lastName];
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
return this.Name.firstName+" "+this.Name.lastName+" is "+this.Age+" years old.They like "+this.Interests;

 }
 Greeting(){
   return "Hi! I'm "+this.Name.firstName+" "+this.Name.lastName;
 }
}
module.exports={class:Person};

