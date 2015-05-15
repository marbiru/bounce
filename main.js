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

level_name.innerHTML = level_1_array[0];