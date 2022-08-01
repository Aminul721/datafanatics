jQuery(function(){
	jQuery('#menu').slicknav({
		label: '',
		openedSymbol:"",
		closedSymbol:"",
		prependTo:'#menu_holder'
	});
});

jQuery(".menu_bar").click(function() { 
	jQuery('.mobile_menu').addClass('mobile_menu_open'); 
	jQuery('.mobile_menu').slideDown('slow'); 
});
jQuery(".menu_close").click(function() { 
	jQuery('.mobile_menu').removeClass('mobile_menu_open'); 
	jQuery('.mobile_menu').slideUp('slow'); 
});
jQuery('.service_carousel').owlCarousel({
	loop:false,
	nav:true,
	margin:22,
	items:4,
	dots:false,
	responsiveClass:true,
	responsive:{
        0:{
            items:1,
        },
		 600:{
            items:2,
        },
		992:{
            items:4,
        }
    }
})

jQuery('.home_client_carousel').owlCarousel({
	loop:false,
	nav:true,
	margin:0,
	items:5,
	dots:false,
	responsiveClass:true,
	animateOut: 'fadeOut',
	responsive:{
		0:{
			items:1,
			animateOut: 'fadeOut',
		},
		 600:{
			items:3,
			animateOut: 'slide',
		},
		992:{
			items:5,
			animateOut: 'slide',
		}
	}
})

jQuery('.clients_carousel,.client_carousel_mb,.technology_carousel').owlCarousel({
	loop:false,
	nav:true,
	margin:0,
	items:1,
	dots:false,
	responsiveClass:true,
	responsive:{
        0:{
            items:1,
        }
    }
})
jQuery('.testimonials_carousel').owlCarousel({
	loop:true,
	nav:true,
	margin:0,
	items:3,
	dots:false,
	responsiveClass:true,
	responsive:{
        0:{
            items:1,
        },
		992:{
            items:2,
        },
        1201:{
            items:3,
        }
    }
})

jQuery('.feedback_carousel').owlCarousel({
	loop:false,
	nav:false,
	margin:0,
	items:4,
	dots:false,
	responsiveClass:true,
	responsive:{
        0:{
            items:1,
			dots:true,
        },
		641:{
            items:2,
			dots:true,
        },
		992:{
            items:3,
			dots:true,
        },
        1201:{
            items:4,
        }
    }
})
jQuery('.service_carousel2').owlCarousel({
	loop:false,
	nav:true,
	margin:30,
	items:4,
	dots:false,
	responsiveClass:true,
	responsive:{
	0:{
	items:1,
	},
	600:{
	items:2,
	},
	992:{
	items:4,
	}
	}
})
// jQuery(function() {
//  var i = 0;
// 	var txt = jQuery('.text-animation').attr('data-text');
// 	var speed = 70;
// 	var llength = txt.length;
// 	window.onload = function typeWriter() {
// 		if (i < llength) {
// 			txt += jQuery('.text-animation').append(txt.charAt(i));
// 			i++;
// 			setTimeout(typeWriter, speed);
// 		}
// 	}
// 	new WOW().init();
// });

jQuery( ".toggle_view_item h4" ).click(function(e) {
	if(jQuery(this).hasClass('active')) {
	} else {
		jQuery( ".toggle_view_item h4" ).each(function() {
			if(jQuery(this).hasClass('active')) {
				jQuery(this).toggleClass('active');
				jQuery(this).next('.show_details').slideToggle('hide');
			}
		});
	}
	jQuery(this).toggleClass('active');
	jQuery(this).next('.show_details').slideToggle('slow');
	e.preventDefault();
});

jQuery(function() {
	jQuery(".checkbox-item #selectAll").click(function() {
		jQuery(".checkbox-item input[type=checkbox]").prop("checked", jQuery(this).prop("checked"));
	});
	
	jQuery(".checkbox-item input[type=checkbox]").click(function() {
		if (!jQuery(this).prop("checked")) {
			jQuery(".checkbox-item #selectAll").prop("checked", false);
		}
	});
});
(function($){
    $(".filter-btn").click(function(){
        $(".checkbox-area").slideToggle("slow");
    });
    $('body').on('click', '.btn-cat-filter li', function(e) {
    	$('.btn-cat-filter li').removeClass('active');
    	$(this).addClass('active');
    });
})(jQuery);

(function($){
    $(".cases-popup-link").click(function(){
        $(".cases-popup-overlay").fadeIn("fast");
    }); 
	$(".cases-popup-close").click(function(){
        $(".cases-popup-overlay").fadeOut("fast");
    });
})(jQuery);


