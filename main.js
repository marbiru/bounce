// the timer/points-counter: starts at some number of points and counts down to zero. The faster you complete the level, the more points you'll have

$(function() {
	var start_points = 5000;
    var time_elapsed = 0;
		setInterval(function() {
			current_points = start_points - time_elapsed;
            $( "#points_counter" ).html( current_points );
                if (time_elapsed + 1 < start_points) {
                        time_elapsed += 1;
            }
        }, 10);
});

// dialog popup on winning the level



$(function() {
    	setInterval(function() {
		ball_height = Math.round(ball.y);
        if ( ball_height < 0) {
            $( "#points_counter" ).html( level_win_dialog() ) 
        } ;
    }, 10);
});
var level_points = points_counter.innerHTML;

function level_win_dialog() {
    $(function() {
    	var level_win_text = "You won the level with <br />" + level_points + " points!";
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

level_name.innerHTML = level_1_array[0];