


// menu burger

const iconMenu = document.querySelector('.header__burger');
if (iconMenu){
    const menuBody = document.querySelector('.header__nav');
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('.lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');

    });
}

//slider

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

// ancher

$(document).ready(function(){
    $("a.nav-link").click(function(){
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
            duration: 1000,
            easing: "swing"
        });
        return false;
    });
})