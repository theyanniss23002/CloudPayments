let width = window.innerWidth;
import $ from 'jquery'

window.addEventListener("orientationchange", checkOrientation);
window.addEventListener("resize", checkOrientation, false);
document.addEventListener("DOMContentLoaded", checkOrientation);


function checkOrientation() {
    if (window.orientation === 0 && width < 1200) {
        document.getElementById('rotation').style.display = "flex";
        document.querySelector('.universe').style.display = "none";
    } else {
        document.getElementById('rotation').style.display = "none";
        document.querySelector('.universe').style.display = "block";
    }
}

let cientHeight = document.documentElement.clientHeight;

if (width < 1200) {
    $('.intro').css({
        'height': cientHeight,
        'min-height': 'unset'
    });

    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    window.addEventListener('resize', () => {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
}
