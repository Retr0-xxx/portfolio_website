document.addEventListener('DOMContentLoaded', function() {
        document.querySelector('.btnL').addEventListener('click', function() {
        // Scroll left
        document.querySelector('.hardware-container').scrollBy({
            left: -200, // Adjust scroll amount (px)
            behavior: 'smooth'
        });
    });
    document.querySelector('.btnR').addEventListener('click', function() {
        // Scroll right
        document.querySelector('.hardware-container').scrollBy({
            left: 200, // Adjust scroll amount (px)
            behavior: 'smooth'
        });
    });
});
