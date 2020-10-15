## What is a class?
From a dictionary: a class is “a set or category of things having some property
 or attribute in common and differentiated from others by kind, type, or quality.”

In JavaScript, a class is a type of **`function`**, but instead of using the keyword **`function`** to initiate it, we use the keyword **`class`**, we use the keyword class, and the properties are assigned inside a constructor() method. You will learn about constructor method in the next wiki. 


## Defination: ***class*** keyword 

The special keyword **`class`** defines a class in JavaScript:

```js
class User {
  // The body of a class
}
```
The code above defines a class **`User`**. The curly braces **`{ }`** determines the limit of class body. Note that this
 syntax is named **class declaration**. 

You’re not obligated to indicate the class name. By using a class expression you can assign the class to a variable:

```js
const UserClass = class {
  // The body of a class
};
```
### How to create class instance ?
```js
const myUser = new User();
```
* Notice that the **`new`** operator is used when calling a class.
* This tells JavaScript to create a new *`instance`* of **User** called **myUser**.
  * Here *`Instance`* just describes a relationship with class.
  * An *`Instance`* within itself, creates a copy of methods and fields defined inside a class.
* Now **myUser** (instance) has all the methods and fields which were previously defined inside the **User** class

**Note**: `Later on in this course, we will learn about fields and methods in detail`. `This will become more clear with examples as we will proceed further`.
