const text1 = "Hello! My name is Eric, and I am pursuing a degree in Computer Engineering at the University of British Columbia. Currently, I am engaged in the roles of a game developer and hardware engineer. My portfolio includes the development of a Unity-based shooting game, which is available on Steam, and an innovative project using Raspberry Pi technology."; // The text to type out
const text2 = "My passion for design and creation is the driving force behind my endeavors. Although I may not fit the traditional image of an artist, I view myself as one at heart, relishing the opportunity to apply my creativity towards solving open-ended problems. This artistic approach to engineering challenges distinguishes my work and fuels my continuous pursuit of innovation and excellence in the field.";
let index = 0; // Start at the beginning of the text
let index2 = 0;

function typeText() {
    if (index < text1.length) { // Check if there's more text to type
        document.querySelector('.type').textContent += text1.charAt(index);
        index++;
        setTimeout(typeText, 5); // Adjust typing speed (milliseconds)
    }
    if(index == text1.length){
        if (index2 < text2.length) { // Check if there's more text to type
            document.querySelector('.type2').textContent += text2.charAt(index2);
            index2++;
            setTimeout(typeText, 8); // Adjust typing speed (milliseconds)
        }
    }
    if(index2 == text2.length){
        showRest();
    }
}

function showRest() {
    const sectionsToShow = document.querySelectorAll('.skills, .projects, .educations, .experiences, .about, .contact');
    sectionsToShow.forEach(section => {
        section.style.display = ''; // Or use 'block', 'flex', etc., depending on your layout
    });
}

function hideRest() {
    const sectionsToHide = document.querySelectorAll('.skills, .projects, .educations, .experiences, .about, .contact');
    sectionsToHide.forEach(section => {
        section.style.display = 'none';
    });
}


document.addEventListener('DOMContentLoaded', function() {
    hideRest();
    typeText(); // Start typing out the text
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
      document.querySelectorAll('.course').forEach((elem) => {
        let innerHTML = elem.textContent.split(',').map(word => `<span>${word} </span>`).join('');
        elem.innerHTML = innerHTML;
      });
    document.getElementById('b1').addEventListener('click', function() {
        document.querySelector('.projects').scrollIntoView({behavior: 'smooth'});
    });
    document.getElementById('b2').addEventListener('click', function() {
        document.querySelector('.skills').scrollIntoView({behavior: 'smooth'});
    });
    document.getElementById('b3').addEventListener('click', function() {
        document.querySelector('.educations').scrollIntoView({behavior: 'smooth'});
    });
    document.getElementById('b4').addEventListener('click', function() {
        document.querySelector('.experiences').scrollIntoView({behavior: 'smooth'});
    });
    document.getElementById('b5').addEventListener('click', function() {
        document.querySelector('.contact').scrollIntoView({behavior: 'smooth'});
    });

});

updateScrollIndicator();

function updateScrollIndicator() {
    // Calculate the scroll percentage
    const scrollY = window.scrollY || window.pageYOffset;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (scrollY / height) * 100;
    const scrollIndicator = document.querySelector('.scrollIndicator');
    if (scrollIndicator) {
        scrollIndicator.style.width = `${scrolled}%`;
    }
}

// Event listener for scroll event
window.onscroll = function() {
    updateScrollIndicator();
};
