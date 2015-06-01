$(document).ready(function() {

    
    $('#clip1').hide();
    $('#clip2').hide();
    
    /*
    Function that gets called every time the page is scrolled in either direction. 
    We've set up a variable to store the scroll position. You can use conditional 
    statements to fire off events based on that number. Here we're showing an image 
    if were over 250 and hiding it again if the number is lower than that. 
    */
    $(document).scroll(function(e) {
        var scrollPosition = $("body").scrollTop();
        var video = document.getElementById('clip1');
        var video2 = document.getElementById('clip2');
        var audio = document.getElementById('ad1');
        var audio2 = document.getElementById('ad2');
        console.log(scrollPosition); 
        if(scrollPosition > 50) {
            $('#ad1').get(0).play();
        }
        if(scrollPosition > 2812) {
            $('#ad1').get(0).pause();
        }
        if(scrollPosition > 3396) {
            $('#clip1').fadeIn(1000);
            $('#clip1').get(0).play();
        }
        if(scrollPosition < 3396) {
            $('#clip1').get(0).pause();
            $('#clip1').fadeOut();
        }
        //find actual scroll positions
        if(scrollPosition > 6777) {
            $('#clip1').get(0).pause();
        }
        if(scrollPosition > 10023) {
            $('#clip2').get(0).play();
        }
        if(scrollPosition < 10023) {
            $('#clip2').get(0).pause();
        }
        //if(scrollPosition > 5000) {
          //  $('#clip2').get(0).pause();
      //}
        if(scrollPosition > 10023) {
            $('#ad2').get(0).play();
        }
        if(scrollPosition < 10023) {
            $('#ad2').get(0).pause();
        }
        
        
        
    });
    
    

    var videoElement = document.getElementById("clip1");
    
  function toggleFullScreen() {
    if (!document.mozFullScreen && !document.webkitFullScreen) {
      if (videoElement.mozRequestFullScreen) {
        videoElement.mozRequestFullScreen();
      } else {
        videoElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
      }
    } else {
      if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else {
        document.webkitCancelFullScreen();
      }
    }
  }
  
  document.addEventListener("keydown", function(e) {
    if (e.keyCode == 13) {
      toggleFullScreen();
        videoElement.play();
    }
  }, false);
    
});
