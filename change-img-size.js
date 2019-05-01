/*
<img id='lhl-logo' src='https://cl.ly/2O3Y2w1R2j0v/Image%202016-07-20%20at%201.16.13%20PM.png' width='400' />
*/

var image = document.querySelector('#lhl-logo'); 

function imgSizeAdjust() {
    image.width = '200'; 
  }
  var timer = setInterval(imgSizeAdjust, 1000);
  
  function imgSizeAdjustBack() {
    image.width = '400'; 
  }
  
  var timer = setInterval(imgSizeAdjustBack, 2000);