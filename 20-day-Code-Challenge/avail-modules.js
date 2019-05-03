
 
function powerOn() { 
  ship.powerOn = true;
} 
function countModules() { 
 return availableModules.length; 
}
function countEssential() { 
var count = 0; 
 
for (let i = 0; i < availableModules.length; i++) { 
  if (availableModules[i].essential)  { 
     count += 1;  
  } else { 
    console.log("error"); 
  }
    
} 
return count;
} 


console.log(countEssential(availableModules)); 

/* To check my work 
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
*/
/* 
correct solution 
*/ 