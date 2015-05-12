$(function() {
    var cnt = 0;
		var counter = setInterval(function() {
                    $( "#points_counter").html( cnt );
                    cnt++;
                	},
 					10);
});