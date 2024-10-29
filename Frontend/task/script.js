// Get the slider element
const slider = document.getElementById('slider');

// Get all images inside the slider
const images = slider.getElementsByTagName('img');

// Set the interval time (3 seconds)
const intervalTime = 3000;

// Initialize the current image index
let currentIndex = 0;

// Function to transition to the next image
function transitionNextImage() {
    // Hide the current image
    images[currentIndex].classList.remove('active');
    
    // Increment the current index
    currentIndex = (currentIndex + 1) % images.length;
    
    // Show the next image
    images[currentIndex].classList.add('active');
}

// Set the interval to transition images every 3 seconds
setInterval(transitionNextImage, intervalTime);
