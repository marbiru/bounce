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
                    $( "#dummy_text" ).html( Math.round(ball.y) );
                    }, 10);
});

$(function() {
    $( "#level_win" ).dialog({
      autoOpen: false,
      show: {
        effect: "puff",
        duration: 500
      },
      hide: {
        effect: "scale",
        duration: 500
      }
    });
    
    $( "#dummy_text" ).click(function() {
      $( "#level_win" ).dialog( "open" );
    });
});