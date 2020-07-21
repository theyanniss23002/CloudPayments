let width = window.innerWidth;

window.addEventListener("orientationchange", checkOrientation);
window.addEventListener("resize", checkOrientation, false);
document.addEventListener("DOMContentLoaded", checkOrientation);


function checkOrientation() {
  if (window.orientation === 0 && width < 1200) {
    document.getElementById('rotation').style.display = "flex";
  } else {
    document.getElementById('rotation').style.display = "none";
  }
}
