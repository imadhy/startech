(function($)
{   
    $('.owl-carousel').owlCarousel(
    {
        loop:true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        animateOut: 'fadeOut',
        pagination: true,
        nav: true,
        navText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })
})(jQuery);