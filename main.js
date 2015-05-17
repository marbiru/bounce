// the timer/points-counter: starts at some number of points and counts down to zero. The faster you complete the level, the more points you'll have

$(function() {
	var start_points = 5000;
    var time_elapsed = 0;
		setInterval(function() {
            $( "#points_counter" ).html( start_points - time_elapsed );
                if (time_elapsed + 1 < start_points) {
                        time_elapsed += 1;
            }
        }, 10);
});

// dialog popup on winning the level

level_win.innerHTML = "You won with XXX points!";

$(function() {
    	setInterval(function() {
		ball_height = Math.round(ball.y);
        if ( ball_height > 410) {
        	var x = 0;
        } else {
        	level_name.innerHTML = ball_height;
            $( "#points_counter" ).html( level_win_dialog() ) 
        } ;
    }, 10);
});

function level_win_dialog() {
    $(function() {
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

level_name.innerHTML = level_1_array[0];