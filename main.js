// the timer/points-counter: starts at some number of points and counts down to zero. The faster you complete the level, the more points you'll have

$(function() {
	var count = 5000
    var time_elapsed = 0;
		var run_counter = setInterval(function() {
                    $( "#points_counter" ).html( count - time_elapsed );
                    time_elapsed++;
                	}, 10);
});


// when you press the up arrow the ball slows down

$(document).keydown(function(e) {
    switch(e.which) {
        case 37: // left
        break;

        case 38: // up
        ball.vy = ball.vy + 1;
        break;

        case 39: // right
        break;

        case 40: // down
        $( "#dummy_text" ).html( "dummy down" );
        break;

        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
});