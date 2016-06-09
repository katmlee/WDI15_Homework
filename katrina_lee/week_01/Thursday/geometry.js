var rectangle = {
  length: 5,
  width: 4
};

var isSquare = function(test) {
  if (test.length === test.width){
    console.log ("You are a square");
  }else {
    console.log ("You are not a square");
  }
};
isSquare(rectangle);

var area = function(test) {
    return test.length * test.width;
};
console.log(area(rectangle));

var perimeter = function(test) {
    return (test.length * 2) + (test.width * 2);
};
console.log(perimeter(rectangle));

var triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};

var isEquilateral = function(test) {
  if (test.sideA === test.sideB && test.sideA === test.sideC){
    console.log ("You are an equilateral Triangle");
  }else {
    console.log ("You are not an equilateral Triangle");
  }
};

isEquilateral(triangle);

var isIsosceles = function(test) {
  if (test.sideA === test.sideB || test.sideA === test.sideC || test.sideB === test.sideC){
    console.log ("You are an isosceles Triangle");
  }else {
    console.log ("You are not an isosceles Triangle");
  }
};

isIsosceles(triangle);

var areaTriangle= function(test) {
  var s= (test.sideA + test.sideB + test.sideC)/2;
  return Math.sqrt(s * (s- test.sideA) * (s-test.sideB) * (s-test.sideC));
};

console.log(areaTriangle(triangle));

var triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};

var isObtuse = function(test) {
  var a = test.sideA;
  var b = test.sideB;
  var c = test.sideC;
  if ((a*a) + (b*b) < (c*c) || (b*b) + (c*c) < (a*a) || (c*c)+(a*a) < (b*b)){
    console.log ("You are an obtuse Triangle");
  }else {
    console.log ("You are not an obtuse Triangle");
  }
};
isObtuse(triangle);
