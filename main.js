$(function(){
	$("#points_counter").text("hello");
  });

function run_counter() {
		var counter = 0;
		setInterval(function () {
			++counter;
		}, 1000);
		points_counter.innerHTML = counter;
    	};

});
