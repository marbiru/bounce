var start = new Date;

setInterval(function() {
    $('.Timer').text((new Date - start) / 1000 + " Seconds");
}, 1000);
