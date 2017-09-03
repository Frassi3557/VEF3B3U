(function () {

  "use strict";

  let elCircle = document.getElementById('cirlce'); 	
  
  elCircle.addEventListener("click", function() {
    elCircle.className = "activeCircle";
  }, false);  
  
  
/* DOM element */
	let elContainer = document.getElementById('container'); 	
  
  elContainer.addEventListener("click", function() {
    elContainer.className = "active";
}, false);  
  
})();