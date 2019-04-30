function range (start, end, step) { 
  var result = []; 
  if (start === undefined || end === undefined || step === undefined) return result; 
  if (start > end) return result; 
  if (step < 0) return result; 

  for (let i = 0; i < ((end - start) / step + 1); i++) {   
    result.push(start + step * i); 
  }
  return result; 
}
   
console.log(range(-5, 8, 3));
  