// declare class
// export class using module.exports
class shape {
  constructor(color) {
    this.color = "red";
  }
  drawShape = () => {
    console.log("draw a shape");
  };

  calculateArea = () => {
    console.log("calculate the area ");
  };
}

module.exports = shape;
