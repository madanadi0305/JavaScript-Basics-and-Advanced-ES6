function task03(){
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
var Square=new Shape('Square',4,5);
var Triangle=new Shape('Triangle',3,3);
var squareperim=Square.calcPerimeter();
var triperim=Triangle.calcPerimeter();

}
module.exports={
class:Shape,
Square:Square,
Triangle:Triangle,
SquarePerimeter: squareperim,
TrianglePerimeter: triperim
};
