function Animal() { 
    this.name = name; 
}

Animal.prototype = {
  constructor: Animal,  
  eat: function() {
    return "nom nom nom";
  }
};

function Dog() { }
Dog.prototype = Object.create(Animal.prototype); 
Dog.prototype.constructor = Dog; 
Dog.prototype.woof = function() { 
    console.log("Woof!"); 
}; 

let beagle = new Dog();
beagle.name = "sparky"; 
/* 
console.log(beagle.woof()); 
console.log(beagle.name); 
console.log(beagle.eat());  // Should print "nom nom nom"
*/ 
function Bird() { }
Bird.prototype = Object.create(Animal.prototype); //inherits all methods from Animal 
Bird.prototype.constructor = Bird;
Bird.prototype.eat = function() { 
    return "peck peck peck"; 
}; // overrides Animal.eat() 

let chirp = new Bird(); 
chirp.name = "chippy"; 
console.log(chirp.eat());
console.log(beagle.eat()); 
/* 
console.log(chirp.name); 
console.log(chirp.eat());
 */ 

