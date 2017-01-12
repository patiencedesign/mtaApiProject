$.getJSON('https://ajar-target.gomix.me/stops', function(response){
    console.log(Object.keys(response))
    
    $("body").append(Object.keys(response))
})