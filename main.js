// the timer/points-counter: starts at some number of points and counts down to zero. The faster you complete the level, the more points you'll have

$(function() {
	var count = 5000
    var time_elapsed = 0;
		var run_counter = setInterval(function() {
                    $( "#points_counter" ).html( count - time_elapsed );
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
                if ( ball.y > 400) {
                    $( "#dummy_text" ).html( "waiting...." ) 
                } else {
                    $( "#dummy_text" ).html( level_win() ) 
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
};