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
const textArray = ["Deliciousness", "Matcha", "Chocolate", "Excellence", "Cakes", "Desserts", "Sweetness", "Indulgence"];
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



/* ==========================================
   HIGHLIGHTS TYPEWRITER WITH DYNAMIC LINKS
   ========================================== */

// 1. The Data: Pairing the words with their specific page destinations
// Notice that 'gallery' and 'contact' are in the main folder, so they don't use 'about/'
const highlightData = [
    { word: "Cakes", url: "about/products.html" },
    { word: "Purpose", url: "about/vision.html" },
    { word: "Members", url: "about/team.html" },
    { word: "Updates", url: "about/marketing.html" },
    { word: "Achievements", url: "about/achievements.html" },
    { word: "Review", url: "about/reviews.html" },
    { word: "Statement", url: "about/finance.html" },
    { word: "Media", url: "gallery.html" }, 
    { word: "Question", url: "contact.html" }
];

// 2. Tracking variables
let hlIndex = 0;
let hlCharIndex = 0;
let hlIsDeleting = false;

// 3. The main typing function
function typeDynamicHighlights() {
    const typeWriterElement = document.getElementById("news-typewriter");
    const linkElement = document.getElementById("news-link");

    // Safety check: If these elements don't exist on the current page, stop the function
    if (!typeWriterElement || !linkElement) return;

    const currentItem = highlightData[hlIndex];
    
    // As soon as we start typing a new word, dynamically update the anchor link destination
    if (!hlIsDeleting && hlCharIndex === 0) {
        linkElement.href = currentItem.url;
    }

    // Handle typing and deleting letter by letter
    if (hlIsDeleting) {
        typeWriterElement.textContent = currentItem.word.substring(0, hlCharIndex - 1);
        hlCharIndex--;
    } else {
        typeWriterElement.textContent = currentItem.word.substring(0, hlCharIndex + 1);
        hlCharIndex++;
    }

    // Set dynamic speeds (typing is slower than deleting)
    let typingSpeed = hlIsDeleting ? 50 : 100;

    // Control pauses at the end of words or before starting a new word
    if (!hlIsDeleting && hlCharIndex === currentItem.word.length) {
        typingSpeed = 2000; // Pause for 2 seconds so the user has time to click
        hlIsDeleting = true;
    } else if (hlIsDeleting && hlCharIndex === 0) {
        hlIsDeleting = false;
        hlIndex++;
        
        // Loop back to the first word when reaching the end of the list
        if (hlIndex >= highlightData.length) {
            hlIndex = 0; 
        }
        typingSpeed = 500; // Brief pause before typing the next word
    }

    setTimeout(typeDynamicHighlights, typingSpeed);
}

// 4. Trigger the function once the HTML document has fully loaded
document.addEventListener("DOMContentLoaded", function() {
    typeDynamicHighlights();
});