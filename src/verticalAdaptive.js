let width = window.innerWidth;
import $ from 'jquery'

window.addEventListener("orientationchange", checkOrientation);
window.addEventListener("resize", reload, false);
document.addEventListener("DOMContentLoaded", checkOrientation);
function reload() {
  location.reload()
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