document.addEventListener('mousemove', function(event) {
    const dot = document.querySelector('.cursor-dot');
    const circle = document.querySelector('.cursor-circle');

    const mouseX = event.clientX;
    const mouseY = event.clientY;

    dot.style.left = `${mouseX}px`;
    dot.style.top = `${mouseY}px`;

    // Add a delay for the circle to follow the dot
    setTimeout(() => {
        circle.style.left = `${mouseX}px`;
        circle.style.top = `${mouseY}px`;
    }, 50); // Adjust the delay as needed
});
