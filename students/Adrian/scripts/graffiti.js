/* 
*HTML elements
*/
const graffitiCanvas = document.getElementById("my-graffiti");
const surface = graffitiCanvas.getContext("2d");
const cleanButton = document.getElementById("clean");

/*
*Graffiti style
*/

surface.lineWidth = 13;
surface.lineJoin="round";
surface.strokeStyle="red";
/*
*shapes
 */
function shapes(){


surface.rect(150,200,100,100);
surface.stroke();
surface.moveTo(200,50);
surface.lineTo(150,200);
surface.closePath();
surface.stroke();

}
shapes();
/*
 * Clean
 */
function cleanCanvas(){
    surface.clearRect(0,0,400,400)

}

cleanButton.addEventListener("click",cleanCanvas);