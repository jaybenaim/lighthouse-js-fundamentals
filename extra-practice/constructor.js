
// making a new bird object  
function Bird(name, color) {
  this.name = name;
  this.color = color;
}
Bird.prototype.numLegs = 2; // add this to create prototype and add the property to all Bird objects
let pigeon = new Bird("flacko", "black"); 
pigeon instanceof Bird; // true 

// too see all the properties in the canary Bird. 

let canary = new Bird("Tweety");
let ownProps = [];

for (let property in canary) { 
  if(canary.hasOwnProperty(property)) { 
    ownProps.push(property); 
  }
}
/*
console.log(ownProps); 
*/ 
let duck = new Bird("Donald"); 
let allDuckOwnProps = []; 
let allDuckPrototypeProps = []; 

for (let property in duck) { 
  if(duck.hasOwnProperty(property)) { 
    allDuckOwnProps.push(property); 
  } else { 
    allDuckPrototypeProps.push(property); 
  }
}
// console.log(allDuckOwnProps); // prints name, color 
// console.log(allDuckPrototypeProps); // prints numLegs 

function Dog(name, color) {
  this.name = name; 
  this.color = color; 
}

Dog.prototype.numLegs = 4; // adding one property to the prototype 
// adding multiple properties to the prototype // rememeber to define the constructor property 
Dog.prototype = { 
  constructor: Dog, // must define when manually setting a pt to a new object 
  numEars: 2, 
  eat: function() { 
    console.log("nom nom nom"); 
  }
}; 

let pitbull = new Dog("Sparky"); 
Dog.prototype.isPrototypeOf(pitbull); // see its inherited prototypes from the Dog constructor 
// console.log(Dog.prototype.isPrototypeOf(pitbull)); 
Object.prototype.isPrototypeOf(Dog.prototype); // returns true // prototypes prototype is an object // prototype chain 

let terrier = new Dog("scruff", "white"); 
// console.log(terrier.numLegs); 
terrier instanceof Dog; // true 

function joinDogFraternity(candidate) {
  if (candidate.constructor === Dog) { 
    return true; // if new candidate is a constructor of dog 
  } else { 
    return false; 
  }
}
 // console.log(joinDogFraternity(terrier)); // checks if terrier is an object of Dog shows true if yes 

 // adding a supertype that will add properties to multiple objects 
 function Animal() { } ; 
 Animal.prototype = { 
   constructor: Animal, 
   describe: function() { 
    console.log("My name is " + this.name);
   }
 };
 // making an instance of the Animal supertype
// let animal = new Animal(); // may have disadvantages in using 
let animal = Object.create(Animal.protoype); // use this instead when creating a new object of a supertype 
animal.eat(); // prints true 
animal instanceof Animal; // => true 
Dog.prototype = Object.create(Animal.prototype); // adds the supertype animal prototypes to the Dog prototype 
Bird.prototype = Object.create(Animal.prototype); // Bird now contains everything from Animal 
let tabi = new Dog(); 
console.log(tabi.eat()); 

// create a house object 
function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}
// create an instance of House 
let myHouse = new House(4); 
myHouse instanceof House; 

