function powerOn() { 
    ship.powerOn = true;
  } 
  var  availableModules = [23, 12, 12]; 
   var count = 0; 
  function countModules() { 
      for (let i = 0; i < availableModules.length; i++) { 
  count++; 
  }
  
} 
console.log(availableModules.length);

/* 
correct solution 
* / 
/* 
function powerOn() { 
    ship.powerOn = true;
  } 
 function countModules() { 
   return availableModules.length; 
 } 
 */ 
