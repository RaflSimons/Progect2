let offset = 0;
const sliderLine = document.querySelector('.carusel__line');

document.querySelector('.carusel__next').addEventListener('click', function(){
    offset = offset + 750;
    if (offset > 1500) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});

document.querySelector('.carusel__prev').addEventListener('click', function () {
    offset = offset - 750;
    if (offset < 0) {
        offset = 1500;
    }
    sliderLine.style.left = -offset + 'px';
});