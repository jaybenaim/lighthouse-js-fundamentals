let dog = {
    name: "Spot",
    color: "Brown", 
    numLegs: 4,
    sayLegs: function() {return "This dog has " + dog.numLegs + " legs."}
  };
  
function Dog() { 
    this.name = "John"; // own property 
    this.color = "black"; 
    
}
Dog.prototype.numLegs = 4; // prototype property

let hound = new Dog(); // Create new dog object 
hound.name = "blood"; // Change name property of new dog named hound 
/* 
console.log(dog); 
console.log(hound); 
*/ 