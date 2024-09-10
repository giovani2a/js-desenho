function setup() {
    createCanvas(400, 400);
      background("gray");
  }
  
  function draw() { 
    stroke("green");
    fill("blue")
   if(mouseIsPressed) {
     rect(mouseX, mouseY, 10, 3)
      }   
    }