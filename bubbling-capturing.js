//Example
addEventListener(event, function(){}  , useCapture);

/* 
<p id="myP"> Click Me </p> 
*/ 

document.getElementById("myP").addEventListener("click", myFunction, true);