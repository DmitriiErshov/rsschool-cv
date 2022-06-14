let aboutMeBtn = document.querySelector('.aboutme-btn');
// let videoBtn = document.querySelector('.video-btn');
let skillsBtn = document.querySelector('.skills-btn');
let portfolioBtn = document.querySelector('.portfolio-btn');
let languagesBtn = document.querySelector('.languages-btn');
let contactsBtn = document.querySelector('.contacts-btn');
// 3d scroll

let zSpacing = -1000,
    lastPos = zSpacing / 5,
    $frames = document.getElementsByClassName('frame'),
    frames = Array.from($frames),
    zVals = []

window.onscroll = function () {

    let top = document.documentElement.scrollTop,
        delta = lastPos - top

    lastPos = top

    frames.forEach(function (n, i) {
        zVals.push((i * zSpacing) + zSpacing)
        zVals[i] += delta * -5.5
        let frame = frames[i],
            transform = `translateZ(${zVals[i]}px)`
        opacity = zVals[i] < Math.abs(zSpacing) / 1.8 ? 1 : 0
        frame.setAttribute('style', `transform: ${transform}; opacity: ${opacity}`)

    });
}

const scrollToAboutMe = () => {
    window.scrollTo({
        top: 800,
        behavior: "smooth"
    });
    aboutMeBtn.classList.toggle('active');
}
// const scrollToVideo = () => {
//     window.scrollTo({
//         top: 300,
//         behavior: "smooth"
//     });
//     videoBtn.classList.toggle('active');
// }
const scrollToSkills = () => {
    window.scrollTo({
        top: 1000,
        behavior: "smooth"
    });
    skillsBtn.classList.toggle('active');
}
const scrollToContacts = () => {
    window.scrollTo({
        top: 1200,
        behavior: "smooth"
    });
    contactsBtn.classList.toggle('active');
}
const scrollToPortfolio = () => {
    window.scrollTo({
        top: 1800,
        behavior: "smooth"
    });
    portfolioBtn.classList.toggle('active');
}
const scrollToLanguages = () => {
    window.scrollTo({
        top: 2000,
        behavior: "smooth"
    });
    languagesBtn.classList.toggle('active');
}

window.scrollTo(0, 1)

// audio

let soundButton = document.querySelector('.soundbutton'),
    audio = document.querySelector('.audio')

soundButton.addEventListener('click', e => {
    soundButton.classList.toggle('paused')
    audio.paused ? audio.play() : audio.pause()
})

window.onfocus = function () {
    soundButton.classList.contains('paused') ? audio.pause() : audio.play()
}

window.onblur = function () {
    audio.pause()
}

aboutMeBtn.addEventListener('click', scrollToAboutMe);
// videoBtn.addEventListener('click', scrollToVideo);
skillsBtn.addEventListener('click', scrollToSkills);
contactsBtn.addEventListener('click', scrollToContacts);
portfolioBtn.addEventListener('click', scrollToPortfolio);
languagesBtn.addEventListener('click', scrollToLanguages);


// Anchor

// const anchors = document.querySelectorAll('a[href*="#"]')

// for (let anchor of anchors) {
//     anchor.addEventListener("click", function(event){
//         event.preventDefault();
//         const blockID = anchor.getAttribute('href')
//         document.querySelector('' + blockID).scrollIntoView({
//             behavior: "smooth",
//             block: "s"
//         })
//     })
// }

// Anchor
