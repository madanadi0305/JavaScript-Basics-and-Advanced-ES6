# ES6
## Task03
### Write a js program for Shape class
Create a clas named **Shape** , in which its constructor will take three inputs as **name**, **sides** and **sideLength**.
* CLass fields:
  * name: Name of the shape
  * sides: Number of sides that shape will have
  * sideLength: Length of each side

We want you to :
Add a new method to the Shape class, **calcPerimeter()** (don't keep it private), which calculates its perimeter (the length of the shape's outer edge) and return the result.
```js
calcPerimeter(){
  // make every function according to this structure
}
```
* Create a new instance of the Shape class called **Square**. Give it a name of `square` and a sideLength of `5`.
* Call your **calcPerimeter()** method on the instance, and save it in a variable as later we need it.
* Create a new instance of Shape called **Triangle**, with a name of `triangle` and a sideLength of `3`.
* Call **Triangle.calcPerimeter()** and save it in a variable as later we need it.

Steps:
* You have to code inside **task02.js** file.
* Finally export your data in given object format  
* ```js
  module.exports = {
      class: Shape,
      Sqaure: Square,
      Triangle: Triangle,
      SquarePerimeter: //the perimeter of sqaure,
      TrainglePerimeter: // the perimeter of triangle
  }
  ```
