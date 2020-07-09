# ES6
## Task06
### Write a js program for Teacher and Student class
* Create a **Person** class with following features in a new file named `person.js` (if the file does not exist then create one for yourself):
  * ![Person](https://media.prod.mdn.mozit.cloud/attachments/2016/09/16/13889/379b78629e89434f1a067bb7e50abe00/person-diagram.png)
  * Name: Array containing first name and last name. 
  * Age: Age is just a number.
  * Gender: Either "M" (for male) or "F" (for female)
  * Interests: A simple string containing interests in any format may be single word or multiple word.
  * Bio: This has to be done by you accordingly (There is a fullstop `.` sign at the end of the sentence).
    * Here **Name** will be combined form of first name and last name with a space between them
  * Greeting: This also has to be done by you accordingly (There is a fullstop `.` sign at the end of the sentence).
    * Here **Name** will be combined form of first name and last name with a space between the
  * At last export this class.
* Now in your `task06.js` file import your **Person** class with a variable name **Person**.
* Create two classes named **Teacher** and **Student** with following given features and make sure to inherit your **Person** class properties here in your new classes.
  * ![Child-classes](https://media.prod.mdn.mozit.cloud/attachments/2016/09/16/13881/ab731768fc533e00c1cbcaef2a2d3ac3/MDN-Graphics-inherited-3.png)
  * Subject: Name of subject teacher taught in string format.
  * Greeting (teacher): This you have to do on your own.
    * Prefix: It will be "Mr." if teacher is male or otherwise "Mrs." Make sure to put a space after that.
  * Greeting (student): This also you have do on your own.
* Once get done with constructing above classes then, make object instance of student and teacher separately.
* *`Caution`*: Don't make any field **private**
* Then export is in following pattern:
  * ```js
    module.exports = {
        ParentClass: Person,
        ChildTeacherClass: Teacher,
        ChildStrudentClass: Student,
        TeacherInstance: //  Object instance that you created for teacher,
        StudentInstance: //  Object instance that you created for student  
    }