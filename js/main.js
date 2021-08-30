new WOW().init();

$.scrollIt({
    topOffset: -50
});


// const sr = ScrollReveal({
//     origin: 'top',
//     distance: '30px',
//     duration: 2000,
//     reset: true
// });

// sr.reveal(``, {
//     interval: 200
// })


$('.featurse-carousel').owlCarousel({
    loop:true,
    margin:0,
    autoplay:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:2,
        },
        600:{
            items:3,
        },
        1000:{
            items:4,
        }
    }
});

$('.services-carousel').owlCarousel({
    loop:true,
    margin:0,
    autoplay:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items:4,
        }
    }
});



$(window).on("scroll",function(){
    if($(this).scrollTop()>90){
        $(".navbar").addClass("navbar-osama");
    }
    else{
        $(".navbar").removeClass("navbar-osama");
    }
});

$('.advantages-carousel').owlCarousel({
    loop:true,
    margin:0,
    autoplay:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:2,
        },
        600:{
            items:2,
        },
        1000:{
            items:3,
        }
    }
});

$('.partners-carousel').owlCarousel({
    loop:true,
    margin:0,
    autoplay:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:2,
        },
        600:{
            items:4,
        },
        1000:{
            items:6,
        }
    }
});

// Show Or Hide Element Based on ScrollTop
$(document).scroll(function () {
    if ($(document).scrollTop() > 300) {
        $('.top').fadeIn();
    } 
    else {
        $('.top').fadeOut();
    }
})

$('.top').click(function () {

    $('body, html').animate({
        scrollTop: 0
    }, 1500);

})


$('.sec-2-carousel').owlCarousel({
    loop:true,
    margin:0,
    autoplay:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:1,
        },
        1000:{
            items:1,
        }
    }
});

$('.partners-carousel').owlCarousel({
    loop:true,
    margin:0,
    autoplay:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:3,
        },
        1000:{
            items:6,
        }
    }
});


$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});


// $(".nav-link").on("click",function(){
//     $(".navbar-collapse").collapse("hide")
// });


$(window).on("load",function(){
    $(".preloader").fadeOut("slow");
});



function initClock(){
    updateClock();
    window.setInterval("updateClock()",1);
}

$('.promo-inner .close').on('click', function () {

    $('.promo-inner ').slideUp('fast', function () {
        $('.promo-inner ').remove();
    });

});

$('.sec-hero .close').on('click', function () {

    $('.sec-hero ').slideUp('fast', function () {
        $('.sec-hero ').remove();
    });

});




if ($('.main-slider').length !== 0) {
    $('.main-slider .owl-carousel').owlCarousel({
        loop: true,
        margin: 15,
        nav: false,
        dots: true,
        rtl: true,
        lazyLoad: true,
        items: 1
    })
}

