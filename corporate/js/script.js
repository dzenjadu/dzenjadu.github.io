$(document).ready(function(){
    $("#navToggle").click(function() {
        $(this).toggleClass("active");
        $(".overlay").toggleClass("open");
    });
    $('.overlay').click(function() {
        $(this).removeClass('open');
        $('.navBurger').removeClass('active');
    });

    $(".header__menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
    $(".header__menu-hamburger").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });

    var mainHeader = $('.cd-auto-hide-header'),
        secondaryNavigation = $('.cd-secondary-nav'),
        belowNavHeroContent = $('.sub-nav-hero'),
        headerHeight = mainHeader.height();

    var scrolling = false,
        previousTop = 0,
        currentTop = 0,
        scrollDelta = 10,
        scrollOffset = 150;

    mainHeader.on('click', '.nav-trigger', function(event){
        event.preventDefault();
        mainHeader.toggleClass('nav-open');
    });

    $(window).on('scroll', function(){
        if( !scrolling ) {
            scrolling = true;
            (!window.requestAnimationFrame)
                ? setTimeout(autoHideHeader, 250)
                : requestAnimationFrame(autoHideHeader);
        }
    });

    $(window).on('resize', function(){
        headerHeight = mainHeader.height();
    });

    function autoHideHeader() {
        var currentTop = $(window).scrollTop();

        ( belowNavHeroContent.length > 0 )
            ? checkStickyNavigation(currentTop)
            : checkSimpleNavigation(currentTop);

        previousTop = currentTop;
        scrolling = false;
        if(currentTop != 0) {
            $('.header').addClass("js-header");
        } else if(currentTop == 0) {
            $('.header').removeClass("js-header");
        }
    }

    function checkSimpleNavigation(currentTop) {
        if (previousTop - currentTop > scrollDelta) {
            mainHeader.removeClass('is-hidden');
        } else if( currentTop - previousTop > scrollDelta && currentTop > scrollOffset) {
            mainHeader.addClass('is-hidden');
        }
    }

    function checkStickyNavigation(currentTop) {
        var secondaryNavOffsetTop = belowNavHeroContent.offset().top - secondaryNavigation.height() - mainHeader.height();

        if (previousTop >= currentTop ) {
            if( currentTop < secondaryNavOffsetTop ) {
                mainHeader.removeClass('is-hidden');
                secondaryNavigation.removeClass('fixed slide-up');
                belowNavHeroContent.removeClass('secondary-nav-fixed');
            } else if( previousTop - currentTop > scrollDelta ) {
                mainHeader.removeClass('is-hidden');
                secondaryNavigation.removeClass('slide-up').addClass('fixed');
                belowNavHeroContent.addClass('secondary-nav-fixed');
            }

        } else {
            if( currentTop > secondaryNavOffsetTop + scrollOffset ) {
                mainHeader.addClass('is-hidden');
                secondaryNavigation.addClass('fixed slide-up');
                belowNavHeroContent.addClass('secondary-nav-fixed');
            } else if( currentTop > secondaryNavOffsetTop ) {
                mainHeader.removeClass('is-hidden');
                secondaryNavigation.addClass('fixed').removeClass('slide-up');
                belowNavHeroContent.addClass('secondary-nav-fixed');
            }

        }
    }

    $('.slider-body').slick({
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });
});
