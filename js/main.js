$(document).ready(function() {
    function Timer (date) {
        var s = (new Date(date)).getTime() - (new Date()).getTime();
        s = parseInt(s / 1000);
        var h = parseInt(s / 3600);
        s -= h * 3600;
        var m = parseInt(s / 60) % 60;
        s = s % 60;

        document.getElementById('hour').innerHTML = h.toString().length == 1 ? 0 : h.toString();
        document.getElementById('min').innerHTML = m.toString().length == 1 ? 0 : m.toString();
        document.getElementById('sec').innerHTML = s.toString();
    }

    $('.track .click').on('click', function(){
        if (!$(this).hasClass('active')) {
            $('.track .click.active').removeClass('active');
            $(this).addClass('active');
            $('.track .text').slideUp();
            $(this).closest('.circle').find('.text').slideDown();
        }
    });

    $('.track .circle').each(function(){
        $(this).prepend($(this).attr('title'))
    });

    $('.track .circle[data-toggle="tooltip"]').tooltip({'placement' : 'bottom', 'trigger' : 'click hover'});
    $('.track .circle').on('show.bs.tooltip', function() {
        $('.tooltip').not(this).tooltip('hide');
    });


    if ($(".ico .numbers").length > 0) {
        setInterval(Timer, 1000, 'August 21, 2018')
    }

	$('.close').on('click', function(){
        $(this).closest('.alert').slideUp(300);
    });

    $('.points > div').on('click', function() {
        $(this).closest('.points').find('> div').removeClass('active');
        $(this).addClass('active');

        var index = $('.points > div').index($(this)) + 1;
        $('.track .circle').removeClass('active');
        $('.track .circle' + (index + 1)).addClass('active');

        $('.description > div').removeClass('active');
        $('.description > div').eq(index - 1).addClass('active');

        for (var i = 1; i <= 25; i++) {
            if (i <= index*5) {
                $('.track .circle' + (i)).addClass('active');
            }
        }

        $('.line .overview > div').removeClass('active');
        $('.line .overview > div').eq(index - 1).addClass('active');
    });
/*
    $('.carousel').length > 0 ? $('.carousel').carousel({
        num: 5,
        maxWidth: 360,
        maxHeight: 540,
        distance: 175,
        scale: 0.9,
        animationTime: 400,
        autoPlay: false
    }) : null;
*/
    $(".bxslider").length > 0 ? $(".bxslider").bxSlider({
        minSlides: 1,
        maxSlides: 7,
        slideWidth: 375,
        nextText: '',
        prevText: '',
        auto: false,
        responsive: true
    }) : $.noop();

    $(".slider .bx-news").length > 0 ? $(".slider .bx-news").bxSlider({
        minSlides: 1,
        maxSlides: 3,
        slideWidth: 305,
        slideMargin: 25,
        nextText: '',
        prevText: '',
        auto: false,
        responsive: true
    }) : $.noop();

    

    if ($('.commits').length > 0) {
        $(".commits").bxSlider({
            mode: 'vertical',
            minSlides: 3,
            maxSlides: 3,
            moveSlides: 1,
            slideMargin: 7,
            slideWidth: 430,
            nextText: '',
            prevText: '',
            speed: 1500,
            infiniteLoop: true,
            onSlideBefore: function(n, o) {
                $('.commits li').removeClass('active');
                $($('.commits li')[$('.commits li').index(n[0]) + 1]).addClass('active');
            }
        });

        $($('.commits li[aria-hidden=false]')[1]).addClass('active');

        var timerId = setInterval(function() {
            $('.become .bx-next').click();
        }, 3000);
    }

    $('.fancybox').length > 0 ?
    $('.fancybox')
        .attr('rel', 'media-gallery')
        .fancybox({
            openEffect : 'none',
            closeEffect : 'none',
            prevEffect : 'none',
            nextEffect : 'none',

            arrows : false,
            helpers : {
                media : {},
                buttons : {}
            }
        }) : null;
	
	$('.lang_switcher').click(function(e){
        e.stopPropagation();
        $(this).toggleClass('active');
        if($(this).hasClass('active')) {
            $(document).on('click', function(){
                $('.lang_switcher').click();
            });
        } else {
            $(document).off('click');
        }
    });

    $('.tabs > div').click(function(){
        $('.tabs > div').removeClass('active');
        $(this).addClass('active');
        var index = $('.tabs > div').index($(this));
        $('.folder .box > div').removeClass('active');

        $('.folder .box > div.tab' + (index + 1)).addClass('active');
    });
    
    // animation

    // common
    $('footer').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeIn',
        offset: 200
    });

    $('header, .alert').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeIn',
        offset: 0
    });

    $('h1, h2').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated zoomInUp',
        offset: 100
    });

    $('.foundation h1, .foundation h2').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated zoomInUp',
        offset: 200
    });

    $('.logotypes img').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated bounceInUp',
        offset: 100
    });

    $('.foundation .picture').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated zoomInLeft',
        offset: 100
    });

    $('.evolutionary img, .skynet .picture img, .iot .image img').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated rotateIn',
        offset: 100
    });

    $('.evolutionary span').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated rubberBand',
        offset: 100
    });

    $('.board .people_board .block .image img').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated zoomInLeft',
        offset: 100
    });

    $('.board .people_board .block .info').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInRight',
        offset: 100
    });

    $('header ul li').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated flipInX',
        offset: 100
    });

    $('header .logo').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated rollIn',
        offset: 100
    });
    
    // index

    $('.planet').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated bounceInUp',
        offset: 0
    });

    $('.chip .picture img').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInDown',
        offset: 100
    });

    $('.brain .img img, .novel .image img, .most .img img').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInUp',
        offset: 100
    });

    $('.network .picture img').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated pulse',
        offset: 100
    });

    $('.hint1, .hint2, .hint3').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInUp',
        offset: 200
    });

    $('.hint4, .hint5').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInDown',
        offset: 100
    });

    $('.tabs > div').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInRight',
        offset: 100
    });

    $('.internet_box > img').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated pulse',
        offset: 100
    });

    $('.road_page .roadmap .map, .road_page .roadmap .map .line .description').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInUp',
        offset: 100
    });

    $('.most .video').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated flipInY',
        offset: 100
    });

    // page 3
    $('.plan_page .skynet_graph .blocks, .plan_page .stages .centered > div, .plan_page .doughnut_chart .legend ul li').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInUp',
        offset: 100
    });

    $('').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInUp',
        offset: 100
    });

    

    
});
