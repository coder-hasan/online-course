/*
  Version: 1.0
  Author: BanyanTheme
  Website: https://banyanthemes.com/
*/

(function($) {
 
 	"use strict"; 
    $(document).ready(function(){		
 
    	// Page preloader    	
		$("#fakeloader").fakeLoader({
			timeToHide:1000,
			zIndex:"999999",//Default zIndex
			bgColor:"#ffffff",
			spinner:"spinner3"
		});	
	
		// show body after site load
		$('body').show();
		
		//counter
		$('.counter').counterUp({
			delay: 10,
			time: 1000
		});	
		
		//Sticky sidebar
		  $('.sticky-body, .sticky-sidebar').theiaStickySidebar({
			// Settings
			additionalMarginTop: 100
		  });
		
		
		//Sticky menu
		$(".edufair-nav").sticky({ topSpacing: 0 });
		
      
		// Bootstrap submenu hover dropdown
		$('ul.nav li.dropdown').hover(function() {
		  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
		}, function() {
		  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
		});	
		
		// Masonry portfolio
		$('#edufair-portfolio').mixItUp({
			selectors: {
				target: '.tile',
				filter: '.filter',
				sort: '.sort-btn'
			},		  
			animation: {
			animateResizeContainer: false,
			effects: 'fade scale'
			}
		});	
		
		// Initilize wow js
		new WOW().init();
		
		//bootstap tooltip
		$(function () {
		  $('[data-toggle="tooltip"]').tooltip();
		});
		
  }); // End load document
 
})(jQuery);

(function($){
	"use strict";
	jQuery(document).on('ready', function () {

        // Mean Menu
		jQuery('.mean-menu').meanmenu({
			meanScreenWidth: "991"
        });

        // Header Sticky
		$(window).on('scroll',function() {
            if ($(this).scrollTop() > 120){  
                $('.navbar-area').addClass("is-sticky");
            }
            else{
                $('.navbar-area').removeClass("is-sticky");
            }
        });

        // Search Popup JS
        $('.close-btn').on('click',function() {
            $('.search-overlay').fadeOut();
            $('.search-btn').show();
            $('.close-btn').removeClass('active');
        });
        $('.search-btn').on('click',function() {
            $(this).hide();
            $('.search-overlay').fadeIn();
            $('.close-btn').addClass('active');
        });

        // Last Word Color JS
        // $(".main-banner-content h1").html(function(){
        //     var text= $(this).text().trim().split(" ");
        //     var last = text.pop();
        //     return text.join(" ") + (text.length > 0 ? " <span>" + last + "</span>" : last);
        // });
		
        
        // Go to Top
        $(function(){
            // Scroll Event
            $(window).on('scroll', function(){
                var scrolled = $(window).scrollTop();
                if (scrolled > 300) $('.go-top').addClass('active');
                if (scrolled < 300) $('.go-top').removeClass('active');
            });  
            // Click Event
            $('.go-top').on('click', function() {
                $("html, body").animate({ scrollTop: "0" },  500);
            });
        });		
        
    });
    
    // Preloader Area
	// $(window).on('load', function() {
	// 	$('.preloader').addClass('preloader-deactivate');
	// });
}(jQuery));




