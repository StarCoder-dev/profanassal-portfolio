const textElement = document.getElementById('typewriter');
const textArray = ['Subhadip Das', 'A Web Developer', 'Creative Designer', 'Tech Enthusiast'];
const typingSpeed = 100; // Speed in milliseconds
const erasingSpeed = 50;
const newTextDelay = 2000; // Delay before starting to erase
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        textElement.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingSpeed);
    } else {
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        textElement.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingSpeed);
    } else {
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingSpeed + 500); // Delay before typing the next phrase
    }
}

// Start the animation on page load
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(type, newTextDelay + 250);
});



