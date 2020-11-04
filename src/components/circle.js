// import using require
let shape = require("./shape");
class circle extends shape {
  calculateArea() {
    console.log("calculate");
  }
}

module.export = circle;

// declare class

// export class using module.exports
