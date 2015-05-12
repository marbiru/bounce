var counter = 0;

setInterval(function () {
  ++counter;
}, 1000);

$(function(){
	$("#points_counter").text(counter);
});

