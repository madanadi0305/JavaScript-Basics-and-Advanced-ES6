class Shape{
name;
sides;
sideLength;
constructor(name,sides,sideLength){
    this.name=name;
    this.sides=sides;
    this.sideLength=sideLength;
}
calcPerimeter(){
    return this.sides*this.sideLength;
}


}

class Square extends Shape{
    super(name,sides,sideLength);
    name;
    sides;
    sideLength;
    
    constructor(sideLength){
        //super(name,sides,sideLength);
        this.name="square";
        this.sides=4;
        this.sideLength=sideLength;
    }
    
    calcArea(){
        
        return this.sideLength*this.sideLength;
    }
}

var square=new Square(5);
var squareperim=square.calcPerimeter();
var squarearea=square.calcArea();
module.exports = {
      parentClass: Shape,
      childClass: Square, // The class name
      instance: square, // The instance name
      SquarePerimeter:squareperim, //the variable with perimeter of square,
      SquareArea:squarearea // the variable with area of square
  }
