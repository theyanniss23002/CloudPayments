let width = window.innerWidth;
import $ from 'jquery'

window.addEventListener("orientationchange", checkOrientation);
window.addEventListener("resize", reload, false);
document.addEventListener("DOMContentLoaded", checkOrientation);

let body = document.querySelector('body');
let gap = body.offsetWidth - body.clientWidth;
body.style.overflowY = "hidden";
body.style.width = "calc(100% - " + gap + "px )";

function reload() {
  if (width >= 1200) {
    location.reload()
  }
}

function checkOrientation() {
  if (window.orientation === 0 && width < 1200) {
    document.getElementById('rotation').style.display = "flex";
    document.querySelector('.universe').style.display = "none";
  } else {
    document.getElementById('rotation').style.display = "none";
    document.querySelector('.universe').style.display = "block";
  }
}

