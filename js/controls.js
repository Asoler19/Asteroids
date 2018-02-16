function controls(controlObj){
    
      function keyDown(playerKeyPress)
      {
        var keyPressed = playerKeyPress.which;
        if (keyPressed == 38)
          controlObj.upPressed = 1;
        if (keyPressed == 40)
          controlObj.downPressed = 1;
        if (keyPressed == 37)
          controlObj.leftPressed = 1;
        if (keyPressed == 39)
          controlObj.rightPressed = 1;
      }
    
      function keyUp(playerKeyPress)
      {
        var keyPressed = playerKeyPress.which;
        if (keyPressed == 38)
          controlObj.upPressed = 0;
        if (keyPressed == 40)
          controlObj.downPressed = 0;
        if (keyPressed == 37)
          controlObj.leftPressed = 0;
        if (keyPressed == 39)
          controlObj.rightPressed = 0;
      }
    
      document.addEventListener("keyup",keyUp);
      document.addEventListener("keydown", keyDown);
      // document.addEventListener("downpressed", downPressed);
      // document.addEventListener("uppressed", upPressed);
      // document.addEventListener("leftpressed", leftPressed);
      // document.addEventListener("rightpressed", rightPressed);
    
    
    
    
    }
    
    export default controls;