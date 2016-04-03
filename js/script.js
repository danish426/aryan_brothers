(function($) {
	
	"use strict";
	
	
	//Hide Loading Box (Preloader)
	function handlePreloader() {
		if($('.preloader').length){
			$('.preloader').delay(200).fadeOut(500);
		}
	}
	
	
	//Update Scroll to Top
	function headerStyle() {
		if($('.main-header').length){
			var mainHeader = $('.main-header').height();
			var windowpos = $(window).scrollTop();
			if (windowpos >= mainHeader) {
				$('.bounce-in-header').addClass('now-visible');
				$('.scroll-to-top').fadeIn(300);
			} else {
				$('.bounce-in-header').removeClass('now-visible');
				$('.scroll-to-top').fadeOut(300);
			}
		}
	}
	
	headerStyle();
	
	
	//Submenu Dropdown Toggle
	if($('.main-header li.dropdown ul').length){
		$('.main-header li.dropdown').append('<div class="dropdown-btn"></div>');
		
		//Dropdown Button
		$('.main-header li.dropdown .dropdown-btn').on('click', function() {
			$(this).prev('ul').slideToggle(500);
		});
	}
	
	
	//Revolution Slider
	if($('.revolution-slider .tp-banner').length){

		jQuery('.revolution-slider .tp-banner').show().revolution({
		  dottedOverlay:"yes",
		  delay:10000,
		  startwidth:1200,
		  startheight:700,
		  hideThumbs:600,
	
		  thumbWidth:80,
		  thumbHeight:50,
		  thumbAmount:5,
	
		  navigationType:"bullet",
		  navigationArrows:"0",
		  navigationStyle:"preview4",
	
		  touchenabled:"on",
		  onHoverStop:"off",
	
		  swipe_velocity: 0.7,
		  swipe_min_touches: 1,
		  swipe_max_touches: 1,
		  drag_block_vertical: false,
	
		  parallax:"mouse",
		  parallaxBgFreeze:"on",
		  parallaxLevels:[7,4,3,2,5,4,3,2,1,0],
	
		  keyboardNavigation:"off",
	
		  navigationHAlign:"center",
		  navigationVAlign:"bottom",
		  navigationHOffset:0,
		  navigationVOffset:20,
	
		  soloArrowLeftHalign:"left",
		  soloArrowLeftValign:"center",
		  soloArrowLeftHOffset:20,
		  soloArrowLeftVOffset:0,
	
		  soloArrowRightHalign:"right",
		  soloArrowRightValign:"center",
		  soloArrowRightHOffset:20,
		  soloArrowRightVOffset:0,
	
		  shadow:0,
		  fullWidth:"on",
		  fullScreen:"off",
	
		  spinner:"spinner4",
	
		  stopLoop:"off",
		  stopAfterLoops:-1,
		  stopAtSlide:-1,
	
		  shuffle:"off",
	
		  autoHeight:"off",
		  forceFullWidth:"on",
	
		  hideThumbsOnMobile:"on",
		  hideNavDelayOnMobile:1500,
		  hideBulletsOnMobile:"on",
		  hideArrowsOnMobile:"on",
		  hideThumbsUnderResolution:0,
	
		  hideSliderAtLimit:0,
		  hideCaptionAtLimit:0,
		  hideAllCaptionAtLilmit:0,
		  startWithSlide:0,
		  videoJsPath:"",
		  fullScreenOffsetContainer: ""
	  });

		
	}
	
	
	//Main BX-Slider
	if($('.main-bxslider').length){
		$('.main-bxslider').bxSlider({
			adaptiveHeight: true,
			auto:true,
			mode:'fade',
			controls: true,
			pause: 5000,
			speed: 700,
			pager: true
		});
	}
	
	
	//Our Team Slider
	if($('.team-slider').length){
		$('.team-slider').bxSlider({
			adaptiveHeight: true,
			auto:true,
			controls: false,
			pause: 5000,
			speed: 1000,
			pagerCustom: '#team-pager'
		});
	}
	
	
	//Testimonials Slider
	if($('#testimonials-one').length){
		
		var slider = new MasterSlider();
		slider.control('bullets');  
    	slider.control('bullets',{autohide:false});
		slider.setup('testimonials-one' , {
			autoplay:true,
			loop:true,
			width:120,
			height:120,
			speed:20,
			view:'wave',
			preload:0,
			space:100,
			autoHeight:true,
			wheel:true,
			filters: {
            grayscale: 1
        },
			viewOptions:{centerSpace:1.6}
		});
		slider.control('slideinfo',{insertTo:'#staff-info'});
		
	}
	
	
	//Image Slider
	if ($('.image-slider').length) {
		$('.image-slider').owlCarousel({
			loop:true,
			  nav : true,
			  smartSpeed : 1000,
			  autoplay: 7000,
			  responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				1024:{
					items:1
				},
				1200:{
					items:1
				},
				1400:{
					items:1
				}
			}
		});    		
	}
	
	
	// Fact Counter
	function factCounter() {
		if($('.fact-counter').length){
			$('.fact-counter .column.animated').each(function() {
		
				var $t = $(this),
					n = $t.find(".count-text").attr("data-stop"),
					r = parseInt($t.find(".count-text").attr("data-speed"), 10);
					
				if (!$t.hasClass("counted")) {
					$t.addClass("counted");
					$({
						countNum: $t.find(".count-text").text()
					}).animate({
						countNum: n
					}, {
						duration: r,
						easing: "linear",
						step: function() {
							$t.find(".count-text").text(Math.floor(this.countNum));
						},
						complete: function() {
							$t.find(".count-text").text(this.countNum);
						}
					});
				}
				
			});
		}
	}
	
	
	//Progress Bar / Levels
	if($('.progress-levels .progress-box .bar-fill').length){
		$(".progress-box .bar-fill").each(function() {
			var progressWidth = $(this).attr('data-percent');
			$(this).css('width',progressWidth+'%');
			$(this).children('.percent').html(progressWidth+'%');
		});
	}
	
	
	//Accordions
	if($('.accordion-box').length){
		$('.accordion-box .acc-btn').on('click', function() {
		if($(this).hasClass('active')!==true){
				$('.accordion-box .acc-btn').removeClass('active');
			}
			
		if ($(this).next('.acc-content').is(':visible')){
				$(this).removeClass('active');
				$(this).next('.acc-content').slideUp(500);
			}
		else{
				$(this).addClass('active');
				$('.accordion-box .acc-content').slideUp(500);
				$(this).next('.acc-content').slideDown(500);	
			}
		});
	}
	
	
	//LightBox / Fancybox
	if($('.lightbox-image').length) {
		$('.lightbox-image').fancybox({
			openEffect  : 'elastic',
			closeEffect : 'elastic',
			helpers : {
				media : {}
			}
		});
	}
	
	
	//Contact Form Validation
	if($('#contact-form').length){
		$('#contact-form').validate({
			rules: {
				username: {
					required: true
				},
				email: {
					required: true,
					email: true
				},
				subject: {
					required: true
				},
				message: {
					required: true
				}
			}
		});
	}
	
	
	
	// Locations Map
	if($('#locations-box').length){
		
		//Add Locations Here
		
		var data = [{
            title: 'Envato',                // Location Title Here
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit consectetur adipisicing elit.',  // Location Description Here
            image: '',   // You can add image Here if you want to heighlight location with image
            link: 'http://www.themeforest.net/user/template_path/portfolio',  // You can add link here
            iconMarker: 'images/icons/icon-map-marker.png',  // Add Mrker Icon Path Here
            lat: -37.817085,   // Add Latitude of Location
            lng: 144.955631      // Add Longitude of Location
         },
         {
            title: 'Dhaka',                // Location Title Here
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit consectetur adipisicing elit.',  // Location Description Here
            image: '',   // You can add image Here if you want to heighlight location with image
            link: 'http://www.themeforest.net/user/template_path/portfolio',  // You can add link here
            iconMarker: 'images/icons/icon-map-marker.png',  // Add Mrker Icon Path Here
            lat: 24.1254521,    // Add Latitude of Location
            lng: 89.1733936    // Add Longitude of Location
         },
		 {
            title: 'Bejing',                // Location Title Here
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit consectetur adipisicing elit.',  // Location Description Here
            image: '',   // You can add image Here if you want to heighlight location with image
            link: 'http://www.themeforest.net/user/template_path/portfolio',  // You can add link here
            iconMarker: 'images/icons/icon-map-marker.png',  // Add Mrker Icon Path Here
            lat: 39.9390731,    // Add Latitude of Location
            lng: 116.1172792    // Add Longitude of Location
         },
		 {
            title: 'New York',                // Location Title Here
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit consectetur adipisicing elit.',  // Location Description Here
            image: '',   // You can add image Here if you want to heighlight location with image
            link: 'http://www.themeforest.net/user/template_path/portfolio',  // You can add link here
            iconMarker: 'images/icons/icon-map-marker.png',  // Add Mrker Icon Path Here
            lat: 40.6976637,    // Add Latitude of Location
            lng: -74.1197637    // Add Longitude of Location
         }
      ];
	  
	  //Apply Map
		$('#locations-box').easyLocator({
		   myLocations: data,
		   maxZoom: 10
		});
	}
	
	
	//Contact Form Validation
	if($('#contact-form-one').length){
		$('#contact-form-one').validate({
			rules: {
				username: {
					required: true
				},
				email: {
					required: true,
					email: true
				},
				phone: {
					required: true
				},
				subject: {
					required: true
				},
				message: {
					required: true
				}
			}
		});
	}
	if ($('#mixitup_list').length) {
		$('#mixitup_list').mixItUp(); // mix it up 
	};
	function GalleryFancyboxActivator () {
		var galleryFcb = $('.fancybox');
		if(galleryFcb.length){
			galleryFcb.fancybox({
			  openEffect  : 'elastic',
			  closeEffect : 'elastic',
			  helpers : {
			    media : {}
			  }
			});
		}
	}
	GalleryFancyboxActivator();
	
	// Google Map Settings
	if($('#map-location').length){
		var map;
		 map = new GMaps({
			el: '#map-location',
			zoom: 14,
			scrollwheel:false,
			//Set Latitude and Longitude Here
			lat: -37.817085,
			lng: 144.955631
		  });
		  
		  //Add map Marker
		  map.addMarker({
			lat: -37.817085,
			lng: 144.955631,
			infoWindow: {
			  content: '<p class="info-outer" style="text-align:center;"><strong>Envato</strong><br>Melbourne VIC 3000, Australia</p>'
			}
		 
		});
	}
	
	
	// Scroll to a Specific Div
	if($('.scroll-to-target').length){
		$(".scroll-to-target").on('click', function() {
			var target = $(this).attr('data-target');
		   // animate
		   $('html, body').animate({
			   scrollTop: $(target).offset().top
			 }, 1000);
	
		});
	}
	
	
	// Elements Animation
	if($('.wow').length){
		var wow = new WOW(
		  {
			boxClass:     'wow',      // animated element css class (default is wow)
			animateClass: 'animated', // animation css class (default is animated)
			offset:       0,          // distance to the element when triggering the animation (default is 0)
			mobile:       true,       // trigger animations on mobile devices (default is true)
			live:         true       // act on asynchronously loaded content (default is true)
		  }
		);
		wow.init();
	}


/* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */
	
	$(window).on('scroll', function() {
		headerStyle();
		factCounter();
	});
	
/* ==========================================================================
   When document is loading, do
   ========================================================================== */
	
	$(window).on('load', function() {
		handlePreloader();
	});

	

})(window.jQuery);