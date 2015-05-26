
$(document).ready(function() {
    
    /*
    This hides the image that is shown later on scroll. Might be better to set 
    up a css class for this and set the display: none; property. This might 
    avoid seeing the content briefly before our script file loads and hides it. 
    */
    $(".video").hide();     
    
    /*
    Function that gets called every time the page is scrolled in either direction. 
    We've set up a variable to store the scroll position. You can use conditional 
    statements to fire off events based on that number. Here we're showing an image 
    if were over 250 and hiding it again if the number is lower than that. 
    */
    $(document).scroll(function(e) {
        var scrollPosition = $("horizonscroll").scrollLeft();
        console.log(scrollPosition); 
       
        if(scrollPosition > 1000) {
            $("video").fadeIn();
        }
        
        if(scrollPosition < 2000) {
            $("video").fadeOut();
        }
        
    });
    
        $("#ad1").scroll(function) {
            var audio = $("")
        }
    
});
    
    setTimeout(function(){
    document.getElementById("ad1").play();
}, 10000);
    
});   