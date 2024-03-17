document.addEventListener('DOMContentLoaded', function() {
        document.querySelector('.btnL_hard').addEventListener('click', function() {
        // Scroll left
        document.querySelector('.hardware-container').scrollBy({
            left: -200, // Adjust scroll amount (px)
            behavior: 'smooth'
        });
    });
    document.querySelector('.btnR_hard').addEventListener('click', function() {
        // Scroll right
        document.querySelector('.hardware-container').scrollBy({
            left: 200, // Adjust scroll amount (px)
            behavior: 'smooth'
        });
    });
    document.querySelector('.btnL_proj').addEventListener('click', function() {
        // Scroll left
        document.querySelector('.project-container').scrollBy({
            left: -200, // Adjust scroll amount (px)
            behavior: 'smooth'
        });
    });
    document.querySelector('.btnR_proj').addEventListener('click', function() {
        // Scroll right
        document.querySelector('.project-container').scrollBy({
            left: 200, // Adjust scroll amount (px)
            behavior: 'smooth'
        });
    });
    document.querySelector('.btnL_exp').addEventListener('click', function() {
        // Scroll left
        document.querySelector('.exp-container').scrollBy({
            left: -200, // Adjust scroll amount (px)
            behavior: 'smooth'
        });
    });
    document.querySelector('.btnR_exp').addEventListener('click', function() {
        // Scroll right
        document.querySelector('.exp-container').scrollBy({
            left: 200, // Adjust scroll amount (px)
            behavior: 'smooth'
        });
    });
    document.querySelectorAll('.hardware p').forEach((elem) => {
        let innerHTML = elem.textContent.split(',').map(word => `<span>${word} </span>`).join('');
        elem.innerHTML = innerHTML;
      });
});
