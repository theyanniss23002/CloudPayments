function parallaxMouseMove(event) {
    document.querySelectorAll('.intro__star, .intro__wrap-word, .universe__character-img').forEach(star => {
        let x = event.clientX / window.innerWidth;
        let y = event.clientY / window.innerHeight;
        let speed = star.getAttribute('data-speed')
        star.style.transform = 'translate(-' + x * speed + 'px, -' + y * speed + 'px)'
    });
}

document.addEventListener('mousemove', parallaxMouseMove)
