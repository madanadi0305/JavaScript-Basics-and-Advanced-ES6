# ES6
## Task06
### Write a js program for Teacher and Student class
* Copy the previously made class having name **Person**  with following features in a new file named `person.js` (if the file does not exist then create one for yourself):
  * ![Person](https://media.prod.mdn.mozit.cloud/attachments/2016/09/16/13889/379b78629e89434f1a067bb7e50abe00/person-diagram.png)
  * Name: Array containing two elements as the first name and the last name. 
    * eg: ["Ritwick", "Desai"]
  * Age: Age is just a number.
    * eg: 21
  * Gender: Either "M" (for male) or "F" (for female)
    * eg: "M"
  * Interests: A simple string containing interests in any format may be a single word or multiple words.
    * eg: "Football"
  * Bio: This has to be done by you accordingly (There is a full stop **`.`** sign at the end of the sentence).
    * Here **Name** will be combined form of the first name and last name with a space between them
  * Greeting: This also has to be done by you accordingly (There is a full stop **`.`** sign at the end of the sentence).
    * Here **Name** will be combined form of the first name and last name with a space between them

  * At last, export this class.
* Now in your `task06.js` file import your **Person** class with a variable name **Person**.
* Create two classes named **Teacher** and **Student** with the following given features and make sure to inherit your **Person** class properties here in your new classes.
  * ![Child-classes](https://media.prod.mdn.mozit.cloud/attachments/2016/09/16/13881/ab731768fc533e00c1cbcaef2a2d3ac3/MDN-Graphics-inherited-3.png)
  * Subject: Name of the subject, which teacher taught, in string format.
    * eg: "Science"
  * Greeting (teacher): This you have to do on your own as mentioned in the above image.
    * Prefix: It will be "Mr." if the teacher is male or otherwise "Mrs." Make sure to put a space after the prefix.
    * `Note`: There is a **`,`** after the first word *`Hello`*.
    * eg: "Mr. Desai"
  * Greeting (student): This also you have to do on your own as mentioned in the above image.

* Once you are done with constructing the above classes then, make an object instance of student and teacher separately.
* *`Caution`*: Don't make any field **private**
* Then export it in the following pattern:
  ```js
    module.exports = {
        ParentClass: Person,
        ChildTeacherClass: Teacher,
        ChildStudentClass: Student,
        TeacherInstance: //  Name of the Object instance that you created for teacher,
        StudentInstance: //  Name of the Object instance that you created for student  
    }
