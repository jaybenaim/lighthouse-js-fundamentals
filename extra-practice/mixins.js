let flyMixin = function(obj) {
    obj.fly = function() {
      return "Flying, wooosh!";
    };
  }
  function glideMixin(obj) {
    obj.glide = function() {
      return "Gliding on the water";
    };
  }

let bird = {
    name: "Donald",
    numLegs: 2
  };
  
  let plane = {
    model: "777",
    numPassengers: 524
  };

  glideMixin(bird);
  flyMixin(plane);

  

  // grouping mixins into a module 

  let motionModule = (function () {
    return {
      glideMixin: function (obj) {
        obj.glide = function() {
          console.log("Gliding on the water");
        };
      },
      flyMixin: function(obj) {
        obj.fly = function() {
          console.log("Flying, wooosh!");
        };
      }
    }
  }) (); // The two parentheses cause the function to be immediately invoked
  
  motionModule.glideMixin(duck);  // apply mixin to duck 
  duck.glide(); // apply glide from mixin 