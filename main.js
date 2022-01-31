
var canvas = new fabric.Canvas('myCanvas');
ball_x=0;
ball_y=0;
hole_x=800;
hole_y=400;
block_image_height=5;
block_image_width=5;


function load_img()
  { 
      fabric.Image.fromURL("golf-h.png", function(Img) 
 {
      hole_obj=Img;
      hole_obj.scaleToWidth(50);
       hole_obj.scaleToHeight(50);
        hole_obj.set(
            { 
                top:hole_y, left:hole_x
            });
            canvas.add(hole_obj);
        });
		new_img();
    }

	function new_img()
  { 
      fabric.Image.fromURL("ball.png", function(Img) 
 {
      ball_obj=Img;
      ball_obj.scaleToWidth(50);
       ball_obj.scaleToHeight(50);
        ball_obj.set(
            { 
                top:ball_y, left:ball_x
            });
            canvas.add(ball_obj);
        });
    }

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Check the coordinates of the ball and hole images to finish the game. 
	And id coordinates matches them remove ball image, 
	display "GAME OVER!!!" 
	and make canvas border 'red'. */
	
	
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		
		{	right();}
		
		
		
	
	function up()
	{
		if(ball_y>=5)
		{
		ball_y=ball_y-block_image_height;
		canvas.remove(ball_obj);
		new_img();
		}
	}

	function down()
	{
		if(ball_y <=450) { ball_y = ball_y + block_image_height; console.log("block image height = " + block_image_height); console.log("When Down arrow key is pressed, X = " + ball_x + " , Y = "+ball_y);
		 canvas.remove(ball_obj); new_img(); }
	}

	function left()
	{
		if(ball_x >5)
		{
			ball_x = ball_x - block_image_width; console.log("block image width = " + block_image_width); console.log("When Left arrow key is pressed, X = " + ball_x + " , Y = "+ball_y); canvas.remove(ball_obj); new_img();
		}
	}

	function right()
	{
		if(ball_x <=750)
		{
			ball_x = ball_x + block_image_width; console.log("block image width = " + block_image_width); console.log("When Right arrow key is pressed, X = " + ball_x + " , Y = "+ball_y); canvas.remove(ball_obj); new_img();
		}
	}
	
}

