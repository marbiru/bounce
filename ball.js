// initial code from http://cssdeck.com/labs/lets-make-a-bouncing-ball-in-html5-canvas
current_level = 0;
current_level_array = levels_array[current_level];

// Now some basic canvas stuff. Here we'll make a variable for the canvas and then initialize its 2d context for drawing

var canvas = document.getElementById("canvas");
		
var canvas_context = canvas.getContext("2d");

// Now setting the width and height of the canvas

var W = 350;
var H = 450;

// Applying these to the canvas element

canvas.height = H; 
canvas.width = W;

// First of all we'll create a ball object which will contain all the methods and variables specific to the ball.
// Lets define some variables first

var ball = {},
		gravity = current_level_array[1],
		bounceFactor = current_level_array[2];

ball = {
	x: W/2,
	y: window.current_level_array[3],
	
	radius: 15,
	color: "red",
	
	// Velocity components
	vx: window.current_level_array[4],
	vy: window.current_level_array[5],
	
	draw: function() {
		// Here, we'll first begin drawing the path and then use the arc() function to draw the circle. The arc function accepts 6 parameters, x position, y position, radius, start angle, end angle and a boolean for anti-clockwise direction.
		canvas_context.beginPath();
		canvas_context.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
		canvas_context.fillStyle = this.color;
		canvas_context.fill();
		canvas_context.closePath();
	}
};

// When we do animations in canvas, we have to repaint the whole canvas in each frame. Either clear the whole area or paint it with some color.

function clearCanvas() {
	canvas_context.clearRect(0, 0, W, H);
}

// A function that will update the position of the ball is also needed. Lets create one

function update() {
	clearCanvas();
	ball.draw();
	
	// Now, lets make the ball move by adding the velocity vectors to its position
	ball.y += ball.vy;
	ball.x += ball.vx;
	// Ohh! The ball is moving!
	// Lets add some acceleration
	ball.vy += gravity;
	$(document).keydown(function(e) {
    	switch(e.which) {
    		case 37: // left
    		ball.vx = ball.vx - 0.01;
        	break;
        	
        	case 38: // up
        	break;

        	case 39: // right
        	ball.vx = ball.vx + 0.01;
        	break;

        	case 40: // down
        	ball.vy = ball.vy + 0.01;
        	break;

        	default: return; // exit this handler for other keys
    	}	
    	e.preventDefault(); // prevent the default action (scroll / move caret)
	});
	//Perfect! Now, lets make it rebound when it touches the floor
	if(ball.y + ball.radius > H) {
		// First, reposition the ball on top of the floor and then bounce it!
		ball.y = H - ball.radius;
		ball.vy *= -bounceFactor;
		// The bounceFactor variable that we created decides the elasticity or how elastic the collision will be. If it's 1, then the collision will be perfectly elastic. If 0, then it will be inelastic.
	};
	// now sideways bounce!
	if(ball.x + ball.radius > W) {
		ball.x = W - ball.radius;
		ball.vx *= -bounceFactor;
	};

	if(ball.x - ball.radius < 0) {
		ball.x = 0 + ball.radius;
		ball.vx *= -bounceFactor;
	};
}

// Now, the animation time!
// in setInterval, 1000/x depicts x fps! So, in this casse, we are aiming for 60fps for smoother animations.

setInterval(update, 1000/60);


$( "#level_win" ).on( "dialogclose", function() {
	current_level += 1;
	current_level_array = levels_array[current_level];
	level_name.innerHTML = current_level_array[0]
	instructions.innerHTML = current_level_array[6];
	main_ball_function();
});
