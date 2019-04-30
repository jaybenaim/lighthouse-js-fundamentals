function loopy(num) { 
    var output = ""; 
for (let num = 100; num <= 200; num++) {  
  if (num % 4 === 0 && num % 3 === 0) { 
       output += 'LoopyLighthouse\n';  
   }
   else if (num % 4 === 0) { 
       output += 'Lighthouse\n'; 
   }
   else if (num % 3 === 0) { 
       output += "Loopy\n"; 
   } else { 
       output += `${num} \n` ; 

   }
    
   }
   return output ; 
} 
console.log(loopy(100)); 