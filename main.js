// the timer/points-counter: starts at some number of points and counts down to zero. The faster you complete the level, the more points you'll have

$(function() {
	var start_points = 5000
    var time_elapsed = 0;
		var run_counter = setInterval(function() {
                    $( "#points_counter" ).html( start_points - time_elapsed );
                    time_elapsed++;
                	}, 10);
});

// dialog pops up when you win the level


$(function() {
    setInterval(function() {
                    $( "#current_height" ).html( Math.round(ball.y) );
                    }, 10);
});

$(function() {
    setInterval(function() {
                if ( ball.y > 380) {
                    $( "#dummy_text" ).html( "" ) 
                } else {
                    $( "#dummy_text" ).html( level_win() );
                    $( "#level_points" ).html( points_counter.innerHTML );
                };
            }, 10);
});

function level_win() {
    $(function() {
        $( "#level_win" ).dialog({

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

    level_win_text.innerHTML =
    "Yeah! You won this level! <br /><br />" +
    "You scored " + points_counter.innerHTML + " points."

};