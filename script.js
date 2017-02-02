$.getJSON('https://ajar-target.gomix.me/stops', function(response) {
    console.log(response)

    var keys = Object.keys(response)

    for (i = 0; i < keys.length; i++) {


        $(".container").append(

            "<div class= col-md-4>" +

            "<div class='well'>" + response[keys[i]].stop_name + "<br>" + "</div>"

            +
            "</div>"

        )
    }
})




