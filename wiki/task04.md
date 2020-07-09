# ES6
## Task04
### Write a js program for Square class
First of all, copy the code of **Shape** class you created earlier in last task and paste it in your current task file. Now we'd like you to create a **Square** class that inherits from **Shape**, and adds a `calcArea()` method that calculates the square's area. Also set up the constructor so that the **name** property of **Square** object instances is automatically set to `square`, and the **sides** property is automatically set to `4`. When invoking the constructor, you should therefore just need to provide the **sideLength** property.
```js
calcArea(){
  // make every function according to this structure
}
```
* Create an instance of the **Square** class called **square** with a sideLength of 5
Steps:
* You have to code inside **task04.js** file.
* Finally export your classes in given object format  
* ```js
  module.exports = {
      parentClass: Shape,
      childClass: Square, // The class name
      instance: square, // The instance name
      SquarePerimeter: //the perimeter of sqaure,
      SquareArea: // the area of square
  }
  ```