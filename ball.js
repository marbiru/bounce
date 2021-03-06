// adapted code from http://cssdeck.com/labs/lets-make-a-bouncing-ball-in-html5-canvas

var canvas = $( "#canvas" )[0];

var canvas_context = canvas.getContext("2d");

// Now setting the width and height of the canvas

var canvas_width = 350;
var canvas_height = 450;

// Applying these to the canvas element

canvas.width = canvas_width;
canvas.height = canvas_height; 

// First of all we'll create a ball object which will contain all the methods and variables specific to the ball.
// Lets define some variables first

var ball = {};
gravity = current_level_array[1];
bounce_factor = current_level_array[2];

ball = {
		x: canvas_width/2,
		y: current_level_array[3],
		
		radius: 15,
		color: "red",
		
		// Velocity components
		vx: current_level_array[4],
		vy: current_level_array[5],
		
		draw: function() {
			canvas_context.beginPath();
			canvas_context.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
			canvas_context.fillStyle = this.color;
			canvas_context.fill();
			canvas_context.closePath();
		}
};

// When we do animations in canvas, we have to repaint the whole canvas in each frame. Either clear the whole area or paint it with some color.

function clear_canvas() {
	canvas_context.clearRect(0, 0, canvas_width, canvas_height);
}

// A function that will update the position of the ball

function update() {
	clear_canvas();
	ball.draw();
	ball.y += ball.vy;
	ball.x += ball.vx;
	ball.vy += gravity;
	$(document).keydown(function(e) {
    	switch(e.which) {
    		case 37: // left
    		// ball.vx = ball.vx - 0.01;
        	break;
        	
        	case 38: // up
        	break;

        	case 39: // right
        	// ball.vx = ball.vx + 0.01;
        	break;

        	case 40: // down
        	ball.vy = ball.vy + 0.01;
        	break;

        	default: return; // exit this handler for other keys
    	}	
    	e.preventDefault(); // prevent the default action (scroll / move caret)
	});
	//Perfect! Now, lets make it rebound when it touches the floor
	if(ball.y + ball.radius > canvas_height) {
		// First, reposition the ball on top of the floor and then bounce it!
		ball.y = canvas_height - ball.radius;
		ball.vy *= -bounce_factor;
		// The bounce_factor variable that we created decides the elasticity or how elastic the collision will be. If it's 1, then the collision will be perfectly elastic. If 0, then it will be inelastic.
	};
	//  sideways bounce!
	if(ball.x + ball.radius > canvas_width) {
		ball.x = canvas_width - ball.radius;
		ball.vx *= -bounce_factor;
	};

	if(ball.x - ball.radius < 0) {
		ball.x = 0 + ball.radius;
		ball.vx *= -bounce_factor;
	};

}

function update_ball() { 
	setInterval(update, 1000/60);
	ball_height = Math.round(ball.y);
    if ( ball_height < 0) {
    	clearInterval(); 
    };
};

$( update_ball() );
	
function reset_variables() {
	gravity = current_level_array[1];
	bounce_factor = current_level_array[2];
	ball.vx = 0;
	ball.vy = 0;
	ball.x = canvas_width/2;
	ball.y = current_level_array[3];
	ball.vx = current_level_array[4];
	ball.vy = current_level_array[5];
};

$( "#level_win" ).on( "dialogclose", function() {
	current_level += 1;
	reset_variables();
	dummy1.innerHTML = "ball.gravity = " + gravity;
	current_level_array = levels_array[current_level];
	level_name.innerHTML = current_level_array[0];
	instructions.innerHTML = current_level_array[6];
	update_ball();
});
