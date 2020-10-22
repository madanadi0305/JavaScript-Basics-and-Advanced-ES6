# ES6
## Task03
### Write a js program for Shape class
Create a class named **Shape** , in which its constructor will take three inputs 
as **name**, **sides** and **sideLength**.
* Class fields:
  * name: Name of the shape
  * sides: Number of sides that shape will have
  * sideLength: Length of each side

We want you to :
Add a new method to the **Shape** class, **calcPerimeter()** (don't keep it private), 
which calculates its perimeter (the length of the shape's outer boundary) and return the result.
```js
calcPerimeter(){
  // make every function according to this structure
}
```
* Create a new instance of the Shape class called **Square**. Give it a name of `square` and a sideLength of `5`.
* Call your **calcPerimeter()** method on the instance, and save it in a variable with name `squareperim` 
as we need it later.
* Create a new instance of Shape called **Triangle**, with a name of `triangle` and a sideLength of `3`.
* Call **Triangle.calcPerimeter()** and save it in a variable with name `triperim` as we need it later.

Steps:
* You have to code inside **task03.js** file.
* Finally export your data in given object format :
 
```js
  module.exports = {
      class: Shape,
      Square: Square,
      Triangle: Triangle,
      SquarePerimeter: squareperim,
      TrianglePerimeter: triperim
  }
  ```
