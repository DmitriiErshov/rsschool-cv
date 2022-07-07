



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
// menu burger

const iconMenu = document.querySelector('.header__burger');
const menuBody = document.querySelector('.header-nav');
const overlay = document.querySelector('.burger-menu__overlay');
if (iconMenu){
    
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('.lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
        overlay.classList.toggle('_active');

    });
}

// ancher

const menuLinks = document.querySelectorAll('.nav-link[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });

    overlay.addEventListener("click", function (e) {
        document.body.classList.remove('_lock');
        iconMenu.classList.remove('_active');
        menuBody.classList.remove('_active');
        overlay.classList.remove('_active');
    });

    function onMenuLinkClick(e) {
        const menuLink = e.target;

        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

            if (iconMenu.classList.contains('_active')) {
                document.body.classList.remove('_lock');
                iconMenu.classList.remove('_active');
                menuBody.classList.remove('_active');
                overlay.classList.remove('_active');


            }



            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}
