/* Script on ready
---------------------------------*/
$(document).ready(function () {

    //equalheight('.service-carousel .service-block');
    removeClass = true;
    
    $('.banner-right-box , .bottom-form-row').click(function () {
        $('body').addClass('form-active');
        $('.banner-section').addClass('form-active-parent');
        $('.banner-right-box').addClass('focus-active');
        $('.focus-active-none').addClass('focus-active-1');
        removeClass = false;
    });
    $('html').click(function () {
        if (removeClass) {
            $('body').removeClass('form-active');
            $('.banner-section').removeClass('form-active-parent');
            $('.banner-right-box').removeClass('focus-active');
            $('.focus-active-none').removeClass('focus-active-1');
        }
        removeClass = true;
    });

    /* for ipad */
    if ((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i))) {
        $(".header-right nav ul li a").each(function () {
            var onClick;
            var firstClick = function () {
                onClick = secondClick;
                return false;
            };
            var secondClick = function () {
                onClick = firstClick;
                return true;
            };
            onClick = firstClick;
            $(this).click(function () {
                return onClick();
            });
        });
    }

    var $div = $('<div />').appendTo('body');
    $div.attr('class', 'mobile-menu');

    var $mobile_nav = $('header nav').clone();
    $mobile_nav.attr({
        class: 'sb-slidebar',
        id: 'menu'
    });


    $($mobile_nav).appendTo('.mobile-menu');

    //  The menu
    $('#menu').mmenu({
        navbar: {
            title: ""
        },
        offCanvas: {
            position: 'top',
        },
        extensions: ["pageshadow", "effect-zoom-menu", "effect-zoom-panels"],
    });

    var titleText = 'Back';
    $("#menu").find(".mm-title").text(titleText);

    var API = $('#menu').data('mmenu');
    $('#nav-icon1').click(function () {
        API.close();
    });


    $('.tab-content a.trigger').each(function () {
        var Index1 = $(".tab-content a.trigger").index($(this));
        $('.nav-tabs').append('<li><a href="javascript:void(0)">' + $(this).html() + '</a></li>');
        equalheight('.nav-tabs li');
    });

    $('.tab-content .tab-pane').eq(0).addClass('active');
    $('.nav-tabs a').eq(0).addClass('active');
    $('.tab-content .trigger').eq(0).addClass('active');
    $('.tab-content a.trigger').click(function () {
        $('.tab-content a.trigger').removeClass('active');
        $('.tab-content a.trigger').next().stop().slideUp();
        $(this).next().stop().slideDown();
        $(this).addClass('active');
    });

    $('.nav-tabs li a').click(function () {
        var IndexValue = $('.nav-tabs a').index($(this));
        $('.tab-content .tab-pane, .nav-tabs a').removeClass('active');
        $(this).addClass('active');
        $('.tab-content .tab-pane').eq(IndexValue).addClass('active');
    });

    $('.service-carousel').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
                            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
                            }
        ]
    });

    $('.box-list-slider-four-col').slick({
        slidesToShow: 4,
        arrows: false,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                }
                            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    dots: true,
                }
                            }
        ]
    });

    $('.cards-carousel').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 531,
                settings: {
                    slidesToShow: 1
                }
        }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
                }, {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3
                }
                }
        ]
    });

    $('.testimonials-carousel').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        variableWidth: true,
        appendArrows: $('.testimonials-wrapper .append-arrows'),
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    variableWidth: false,
                    appendArrows: $('.testimonials-section .right-content'),
                }
                            }
        ]
    });

    $('.clients-carousel-three-col').slick({
        slidesPerRow: 3,
        rows: 2,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesPerRow: 2,
                rows: 3,
            }
            }]
    });

    $('.clients-carousel-two-col').slick({
        slidesPerRow: 2,
        rows: 2,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesPerRow: 2,
                rows: 3,
            }
            }]
    });

    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });

    $('.slider-nav').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        focusOnSelect: true,
        asNavFor: '.slider-for',
        vertical: true,
        responsive: [
            {
                breakpoint: 531,
                settings: {
                    vertical: false,
                    slidesToShow: 2,
                },
                            }
             ]
    });

    // Popup Start
    $('.terms-and-conditions-link').fancybox({
        closeBtn: true
    });
    // Popup END

    $(".fancybox").fancybox({
        //autoHeight:true,
        fitToView: false,
        helpers: {
            overlay: {
                locked: false
            }
        }
        //width: 760px
    });
    $(".zoom-tab").click(function () {
        $('body').addClass('close-design');
    });
    $(".lp-slider .fancybox").fancybox({
        afterClose: function () {
            $('body').removeClass("close-design");
        }
    });

    $('.service-carousel .slick-arrow').click(function () {
        //alert('hi')
        //setTimeout(function () {
        equalheight('.service-carousel .service-block');
        //}, 500);
    })

    if ($('#accordion-ask').length > 0) {
        $('#accordion-ask').accordion({
            active: false,
            autoHeight: false,
            navigation: true,
            collapsible: true,
            heightStyle: "content"
        });
    }

    /* Progressbar */ 
    /*var bar = new ProgressBar.Circle(container, {
        strokeWidth: 6,
        easing: 'easeInOut',
        duration: 1400,
        color: '#FFEA82',
        trailColor: '#eee',
        trailWidth: 1,
        svgStyle: null
     });
    bar.animate(1.0);  // Number from 0.0 to 1.0*/

    
    var progressSelector = $(".progress-wrap");
    progressSelector.each(function () {
        var getPercent = $(this).attr("data-progresspercent");
        var getSpeed = parseInt($(this).attr("data-speed"));
        var getColor = $(this).attr("data-color");
        var getHeight = $(this).attr("data-height");
        var getWidth = $(this).attr("data-width");
        $(this).css({
            "height": getHeight,
            "width": getWidth
        });
        $(this).find(".progress-bar").css({
            "background-color": "#" + getColor
        }).animate({
            width: getPercent + '%'
        }, getSpeed)
    });


    // page init
    jQuery(function () {
        initCustomForms();
    });
    // initialize custom form elements
    function initCustomForms() {
        jcf.setOptions('Select', {
            wrapNative: false,
            fakeDropInBody: false,
            wrapNativeOnMobile: false,
            multipleCompactStyle: true,
            maxVisibleItems: 15
        });
        jcf.replaceAll('.form-Select-1');
    }
});

/* Script on load
----------------------------------*/
$(window).on('load', function () {
    equalheight('.team-row .team-person-block');
    //setTimeout(function(){
    /*equalheight('.service-block');*/
    //},500);
    equalheight('.nav-tabs li');
    equalheight('.different-feature-block');
    equalheight('.equal-height');
    equalheight('.header-top-menu ul li');
    equalheight('.client-logo-col-1');
    /*equalheight('.service-details .desc');
    equalheight('.client-overview-page .service-block');    
    equalheight('.client-overview-page .service-block .service-details .title');    */

});

/* Script on scroll
---------------------------------*/
$(window).scroll(function () {

});

/* Script on resize
---------------------------------*/
$(window).resize(function () {
    equalheight('.team-row .team-col');
    /*equalheight('.service-carousel .service-block');*/
    equalheight('.nav-tabs li');
    equalheight('.different-feature-block');
    equalheight('.equal-height');
    equalheight('.header-top-menu ul li');
    equalheight('.service-link-block');
    equalheight('.client-logo-col-1');
    /* equalheight('.service-details .desc');
     equalheight('.client-overview-page .service-block');    
     equalheight('.client-overview-page .service-block .service-details .title');*/

});


/* Script all functions
----------------------------------*/

/* sticky footer function */
function StickyFooter() {
    var st = $('footer').outerHeight()
    $('#wrapper').css({
        'margin-bottom': -st,
        'padding-bottom': st
    })
}

// equal height testimonials block
equalheight = function (container) {

    var currentTallest = 0,
        currentRowStart = 0,
        rowDivs = new Array(),
        $el,
        topPosition = 0;
    $(container).each(function () {

        $el = $(this);
        $($el).height('auto')
        topPostion = $el.position().top;

        if (currentRowStart != topPostion) {
            for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
                rowDivs[currentDiv].height(currentTallest);
            }
            rowDivs.length = 0; // empty the array
            currentRowStart = topPostion;
            currentTallest = $el.height();
            rowDivs.push($el);
        } else {
            rowDivs.push($el);
            currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
        }
        for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
            rowDivs[currentDiv].height(currentTallest);
        }
    });
}

function setClass(els, className, fnName) {
    for (var i = 0; i < els.length; i++) {
        els[i].classList[fnName](className);
    }
}

//animation js
AOS.init();