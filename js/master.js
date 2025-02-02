$('#owl_courses').owlCarousel({
    loop:true,
    margin:40,
    responsiveClass:true,
    dots:true,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },
        1200:{
            items:3
        }
    }
});
$('#testimonials').owlCarousel({
    center:true,
    loop:true,
    nav:true,
    margin:40,
    responsiveClass:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },
        1200:{
            items:3
        }
    },
    navText: ['<span class="fas fa-arrow-left"></span>','<span class="fas fa-arrow-right"></span>'],
});
