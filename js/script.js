$('.pix-slider').owlCarousel({
    loop:true,
    margin:20,
    items:1,
    dots: true,
    smartSpeed: 600,
    autoWidth:true,
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:false,
    responsive:{
        0:{
            items:1,
            autoWidth:false
        },
        600:{
            items:1,
        },
        1000:{
            items:1
        },
    }
});