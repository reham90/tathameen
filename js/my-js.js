$(document).ready(function() {

// start js for navbar //
if($(window).width()<991){
(function($) { // Begin jQuery36.
  $(function() { // DOM ready
    // If a link has a dropdown, add sub menu toggle.
 $('nav ul li a:not(:only-child)').click(function(e) {
      $(this).siblings('.nav-dropdown').toggle();
      // Close one dropdown when selecting another
$('.nav-dropdown').not($(this).siblings()).hide();
e.stopPropagation();
    });
    // Clicking away from dropdown will remove the dropdown class
  
   /* $('.dropdown').click(function(e) {
      $('.drop-mobile').toggle();
      $(".up-arrow").toggle();
      $(".down-arrow").toggle();

      // Close one dropdown when selecting another
    });*/

    // Toggle open and close nav styles on click



    
  }); // end DOM ready
})(jQuery); // end jQuery83"9?"
}


 $(".nav-toggle").click(function() {
        $(".menu-screen").addClass("active");
    });

    // Remove Active Class
    $(".re-hide").click(function() {
        $(".menu-screen").removeClass("active");
    });
      $('.dropdown').click(function(e) {
      $('.drop-mobile').toggle();
    

      // Close one dropdown when selecting another
    });
// end  js for navbar //

// js for scroll down button //

$(function() {
  $('.scroll-down').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  });
});

// end js for scroll down button //


// service carousel //

    var owl = $('.service');
    owl.owlCarousel({
        margin: 30,
        nav: true,
        rtl: document.dir == 'rtl' ? true : false,
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        navText: ["<i class='far fa-angle-right'></i>", "<i class='far fa-angle-left'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items:1
            },
            1200: {
                items: 3
            }

        }
    });
 
  // end service carousel //



// vesion carousel //

 if($(window).width()<991){

       var owl = $('.vesion');
    owl.owlCarousel({
       
        nav: true,
        rtl: document.dir == 'rtl' ? true : false,
        
        autoplay: false,
        
        navText: ["<i class='far fa-angle-right'></i>", "<i class='far fa-angle-left'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items:1
            }

        }
    });
    }

    var owl = $('.vesion');
    owl.owlCarousel({
        margin: 30,
        nav: true,
        rtl: document.dir == 'rtl' ? true : false,
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        navText: ["<i class='far fa-angle-right'></i>", "<i class='far fa-angle-left'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items:1
            },
            1200: {
                items: 3
            }

        }
    });

    if($(window).width()<991){

       var owl = $('.vesion');
    owl.owlCarousel({
       
        nav: true,
        rtl: document.dir == 'rtl' ? true : false,
        
        autoplay: false,
        
        navText: ["<i class='far fa-angle-right'></i>", "<i class='far fa-angle-left'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items:1
            }

        }
    });
    }
 
  // end vesion carousel //

// js for counter //

var a = 0;
$(window).scroll(function() {

  var oTop = $('.counter').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.counter-value').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    a = 1;
  }

});

// end js for counter //

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////









  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/// wow js ///
new WOW().init();
   

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// client carousel ///
    var owl = $('.client');
    owl.owlCarousel({
        margin: 40,
        nav: true,
        rtl: document.dir == 'rtl' ? true : false,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        navText: ["<i class='far fa-angle-right'></i>", "<i class='far fa-angle-left'></i>"],
        responsive: {
            0: {
                items: 2
            },
            600: {
                items:2
            },
            1200: {
                items: 6
            }

        }
    });
    // end client carousel //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// articles carousel //

    var owl = $('.art');
    owl.owlCarousel({
        margin: 31,
        nav: true,
        rtl: document.dir == 'rtl' ? true : false,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        navText: ["<i class='far fa-angle-right'></i>", "<i class='far fa-angle-left'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items:1
            },
            1200: {
                items: 3
            }

        }
    });
  });
 
  // end articles carousel //

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

if($(window).width()<991){
   var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function myFunction(y) {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
  
    $(this).siblings(".panel").slideToggle(200);

  

});
}
$(".accordion").click(function(){
  $(this).children('i').toggle();
 
});
}