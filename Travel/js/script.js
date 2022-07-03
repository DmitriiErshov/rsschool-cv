


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
