// ==========================================
// 1. HAMBURGER MENU LOGIC
// ==========================================
const mobileMenu = document.getElementById('mobile-menu');
const sidebar = document.getElementById('sidebar');

// Listen for a click on the hamburger icon
mobileMenu.addEventListener('click', () => {
    // Toggles the 'active' class to slide the menu in and out
    sidebar.classList.toggle('active');
});

// ==========================================
// 2. ACCORDION MENU LOGIC
// ==========================================
const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
    header.addEventListener('click', function() {
        // Find the icon inside the clicked header
        const icon = this.querySelector('.icon-toggle');
        
        // Find the hidden list right below the clicked header
        const content = this.nextElementSibling;

        // Toggle the icon between '+' and '-'
        if (icon.classList.contains('fa-plus')) {
            icon.classList.remove('fa-plus');
            icon.classList.add('fa-minus');
        } else {
            icon.classList.remove('fa-minus');
            icon.classList.add('fa-plus');
        }

        // Toggle the display of the sub-menu content
        if (content.style.display === 'block') {
            content.style.display = 'none';
        } else {
            content.style.display = 'block';
        }
    });
});

// ==========================================
// 3. TYPEWRITER ANIMATION LOGIC
// ==========================================
const textArray = ["Deliciousness", "Matcha", "Chocolate", "Excellence"];
let textIndex = 0;
let charIndex = 0;
const typewriterElement = document.getElementById('typewriter');
let isDeleting = false;

function typeWriter() {
    if (!typewriterElement) return; // Failsafe if the element doesn't exist

    const currentWord = textArray[textIndex];
    
    // Type or delete characters
    if (isDeleting) {
        typewriterElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typewriterElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    // Set typing speed
    let typingSpeed = 150;
    if (isDeleting) {
        typingSpeed /= 2; // Delete twice as fast
    }

    // Determine what to do at the end of a word or when fully deleted
    if (!isDeleting && charIndex === currentWord.length) {
        typingSpeed = 2000; // Pause at the end of the word for 2 seconds
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        // Move to the next word in the array, looping back to the start if needed
        textIndex = (textIndex + 1) % textArray.length;
        typingSpeed = 500; // Pause briefly before typing the next word
    }

    // Run the function again after the calculated delay
    setTimeout(typeWriter, typingSpeed);
}

// Start the typewriter effect when the webpage fully loads
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(typeWriter, 1000); // Wait 1 second before starting
});

// ==========================================
// 4. SECOND TYPEWRITER (HIGHLIGHTS NEWS)
// ==========================================
const newsArray = ["News", "Updates", "Events", "Achievements"];
let newsIndex = 0;
let newsCharIndex = 0;
const newsElement = document.getElementById('news-typewriter');
let isNewsDeleting = false;

function newsTypeWriter() {
    if (!newsElement) return;

    const currentWord = newsArray[newsIndex];
    
    if (isNewsDeleting) {
        newsElement.textContent = currentWord.substring(0, newsCharIndex - 1);
        newsCharIndex--;
    } else {
        newsElement.textContent = currentWord.substring(0, newsCharIndex + 1);
        newsCharIndex++;
    }

    let typingSpeed = 150;
    if (isNewsDeleting) typingSpeed /= 2;

    if (!isNewsDeleting && newsCharIndex === currentWord.length) {
        typingSpeed = 2000;
        isNewsDeleting = true;
    } else if (isNewsDeleting && newsCharIndex === 0) {
        isNewsDeleting = false;
        newsIndex = (newsIndex + 1) % newsArray.length;
        typingSpeed = 500;
    }

    setTimeout(newsTypeWriter, typingSpeed);
}

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(newsTypeWriter, 1500); // Starts slightly after the first typewriter
});