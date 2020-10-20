var Person=require('./person.js');
class Teacher extends Person{
Name=[];    
constructor(firstName,lastName,age,gender,interests,subject){
super(firstName,lastName,age,gender,interests);
this.Subject=subject;
//this.firstName=
this.Name.push(firstName);
//this.lastName=
this.Name.push(lastName);
this.Age=age;
this.Gender=gender;
this.Interests=interests;
}
Greeting(){
var salutation;
if(this.Gender==='M'){
    salutation='Mr. ';

}
else{
    salutation='Mrs. ';
}
return "Hello, My name is "+salutation+this.Name[1]+", and I teach "+this.Subject+".";
}
Bio(){
   return this.Name[0]+" "+this.lastName[1]+" is "+this.Age+" years old. They like "+this.Interests+"."; 
}


}
class Student extends Person{
Name=[];
constructor(firstName,lastName,age,gender,interests){
super(firstName,lastName,age,gender,interests);
//this.firstName=
this.Name.push(firstName);
//this.lastName=
this.Name.push(lastName);
this.Age=age;
this.Gender=gender;
this.Interests=interests;
}
Bio(){
  return  this.Name[0]+" "+this.Name[1]+" is "+this.Age+" years old. They like "+this.Interests;
}

Greeting(){
return "Yo! I'm "+this.Name[0];

}
}
var teacher=new Teacher('Rahul','Desai',50,'M','Research in Physics','Physics');
var student=new Student('Rohan','Nayak',14,'M','Playing Football');
module.exports = {
        ParentClass: Person,
        ChildTeacherClass: Teacher,
        ChildStudentClass: Student,
        TeacherInstance: teacher,//  Name of the Object instance that you created for teacher,
        StudentInstance:student //  Name of the Object instance that you created for student  
    }
