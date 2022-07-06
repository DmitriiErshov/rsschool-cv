$(document).ready(function(){
    $('.slider').slick({
        arrows:false,
        dots:true,
        centerMode: true,
        variableWidth: true,
        easing: 'ease',
        speed: 1000,
        // infinite: false,
        initialSlide: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        // pauseOnFocus: true,
        // pauseOnHover: true,
        pauseOnDotsHover: true,
        draggable: true,
    });
    $('.slider390').slick({
        arrows:true,
        dots:true,
        centerMode: true,
        variableWidth: true,
        slidesToShow: 1,
        infinite: false,
    })
})