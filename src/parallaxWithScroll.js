function parallaxWithScroll(event) {
  document.querySelectorAll('.intro__star').forEach(star => {
    let y = event.clientY / window.innerHeight;
    y /= 5;
    let speed = star.getAttribute('data-speed');
    star.style.transform = 'translate(-' + y * speed + 'px)'
  });
}

window.addEventListener('wheel', parallaxWithScroll);
