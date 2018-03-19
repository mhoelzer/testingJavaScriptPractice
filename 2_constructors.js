//We name the class
class User1 {
  //We call the constructor function and create parameters.
  //These will be values that we want to be passed in and stored in the object.
  constructor(first, last, e) {
              //On the right side of these expressions, the word 'first', 'last', and 'e' below, 
              //we have the value that is getting passed into the parens when the object is created.
              // vvv
      this.f = first;
      this.l = last;
      this.email = e;
      //^^^^^^^^ 
    //On the left side we have the actual properties of the object. 
    //The left side stores the incoming value from the right side as the property for 'this' specific object being created.  
  }
}
var userOne = new User1("Paul", "O'Connor", "poconnor@elevenfifty.org");
console.log(userOne.first); //undefined
console.log(userOne.f); //Paul
console.log(userOne.l); //O'Connor
console.log(userOne.email); //poconnor@elevenfifty.org
console.log(userOne); //User {f: "Paul", l: "O'Connor", email: "poconnor@elevenfifty.org"}


console.log("-----new ex-----")


class Animal {
  constructor(name,coolOrNot,color) {
    this.n = name;
    this.c = color;
    this.cON = coolOrNot;
    // ^^^ the order here determines what gets printed first, not in the constructor
  }
}
var animalOne = new Animal("frog", "green or etc", "YESSS");
console.log(animalOne)