// figure out current level

current_level = 0;
current_level_array = levels_array[current_level];
level_name.innerHTML = current_level_array[0];
instructions.innerHTML = current_level_array[6];

// the timer/points counter: starts at some number of points and counts down to zero. The faster you complete the level, the more points you'll have

var current_points = setInterval(function(){ 
	points_counter() 
	}, 10);

function points_counter() {
	$(function() {
		// the running points counter
		var start_points = 5000;
	    var time_elapsed = 0;
        $( "#points_output" ).html( start_points - time_elapsed );
            if (time_elapsed + 1 < start_points) {
                    time_elapsed += 1;
        	}
	});
};

$(function() {
	setInterval(function() {
        // dialog popup on winning the level
        ball = window.ball;
		ball_height = Math.round(ball.y);
    	if ( ball_height < 0) {
        	$( "#points_output" ).html( level_win_dialog() );
        	clearInterval(points_counter);
    	}
    }, 10);
});

$( "#dummy" ).click(function(){
	clearInterval(points_counter())
	dummy.innerHTML = "dummy";
});

/* var myVar = setInterval(function(){ setColor() }, 300);

function setColor() {
    var x = document.body;
    x.style.backgroundColor = x.style.backgroundColor == "yellow" ? "pink" : "yellow";
}

function stopColor() {
    clearInterval(myVar);
} */

function level_win_dialog() {
    $(function() {
    	var level_win_text = "You won the level with <br />" + current_points + " points!";
    	level_win.innerHTML = level_win_text;
        $( "#level_win" ).dialog( {
          show: {
            effect: "puff",
            duration: 500
       },
          hide: {
            effect: "scale",
            duration: 500
          }
      });
    });
};