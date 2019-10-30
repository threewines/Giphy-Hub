$(document).ready(function(){
    console.log("js file loaded")

    function getGifs(name){
        console.log("about to do ajax")
        $.ajax({
            url:"http://api.giphy.com/v1/gifs/search?api_key=VfMDxOi9vkCNrDALsU5nwrICwNPAv5oX&q=" + name
        }).then(function(dataWeGotBack){
            console.log("data we got back",dataWeGotBack)
        })
    }

    $(".gif-button").on("click",function(){
        console.log("You got clicked", $(this).attr("name"))
        getGifs($(this).attr("name"))       

    })

})