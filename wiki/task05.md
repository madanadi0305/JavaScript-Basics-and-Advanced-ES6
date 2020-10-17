# ES6
## Task05
### Write a js program for Person class
* Create a **Person** class with following features in a new file named `person.js` 
(if the file does not exist then create one for yourself):
  * ![Person](https://media.prod.mdn.mozit.cloud/attachments/2016/09/16/13889/379b78629e89434f1a067bb7e50abe00/
  person-diagram.png)
  * Name: Array containing first name and last name.
    * Input: ["firstName", "lastName"]
    * Keep the **Name** same as input array having two elements.
  * Age: Age is just a number.
  * Gender: Either "M" (for male) or "F" (for female)
  * Interests: A simple string containing interests in any format may be single word or multiple word.
  * Bio: This has to be done by you accordingly (There is a fullstop `.` sign at the end of the sentence).
    * This should be a function of the class returning well-formed string.
    * Here **Name** will be combined form of first name and last name with a space between them
  * Greeting: This also has to be done by you accordingly (There is a fullstop `.` sign at the end of the sentence).
    * This should be a function of the class returning well-formed string.
    * Here **Name** will be combined form of first name and last name with a space between the
* **`Note`**: Don't miss that, `Name`, `Age`, `Gender`, `Interests` are the class fields initiating inside constructor.
 While `Bio` and `Greeting` are the functions need to be define outside the constructor.
* At last export this class.
  * *`Caution`*: Don't make any field **private**
* Now, import this above exported class inside your task file `task05.js` and create an instance
 from this by giving suitable input data to it.
* Export your created instance using `module.exports`.
