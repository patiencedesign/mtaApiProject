$.getJSON('https://ajar-target.gomix.me/stops', function(response){
    console.log(response)
    
    var keys = Object.keys(response)
    
    for (i = 0; i < keys.length; i++){
        
        
        $(".container").append(
            
            "<div class= col-md-2>" +
            
            "<div class='well'>" + keys[i] + "<br>"+ "</div>"
            
            + "</div>"
            
            )
    }
}) 