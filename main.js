$(function() {
	var count = 5000
    var time_elapsed = 0;
		var run_counter = setInterval(function() {
                    $( "#points_counter").html( count - time_elapsed );
                    time_elapsed++;
                	}, 10);
});