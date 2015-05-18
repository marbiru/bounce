// figure out current level

current_level = 0;
current_level_array = levels_array[current_level];
level_name.innerHTML = current_level_array[0];
instructions.innerHTML = current_level_array[6];

// the points counter

$(function() {
	var start_points = 5000;
    var time_elapsed = 0;
	ball_height = Math.round(ball.y);
	setInterval(function() {
		current_points = start_points - time_elapsed;
        $( "#points_output" ).html( current_points );
            if ((time_elapsed + 1 < start_points) && (ball_height > 0)) {
                    time_elapsed += 1;
        }
    }, 10);
});

// dialog popup on winning the level

$(function() {
    	setInterval(function() {
		ball_height = Math.round(ball.y);
        if ( ball_height < 0) {
            $( "#points_output" ).html( level_win_dialog() ) 
        } ;
    }, 10);
});

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

$( "#level_win" ).on( "dialogclose", function() {
	current_level += 1;
	current_level_array = levels_array[current_level];
	level_name.innerHTML = current_level_array[0]
	instructions.innerHTML = current_level_array[6];
});