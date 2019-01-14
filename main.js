
console.log("Starting program");
main();

function Point(xValue,yValue)
{
  this.xValue = xValue;
  this.yValue = yValue;
}

function Circle(radius)
{
  this.radius = radius;
  Point.call(this,0,0);
}

function Cylinder(height,radius)
{
  this.height = height;
  Circle.call(this, radius)

  this.calculateVol = function() {
    var x = this.radius;
    var vol = Math.PI * x * x * height;
    return vol.
  }
}

function main()
{

  var cylinder = new Cylinder(2, 1.5);

  var volume = cylinder.calculateVol();
  
}









