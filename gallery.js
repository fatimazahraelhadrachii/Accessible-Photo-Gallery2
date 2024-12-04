let clickCount = 0;  // Initialize the click counter
let images = [
    { src: "image1.jpg", alt: "first picture" },
    { src: "image2.webp", alt: "second picture" },
    { src: "image3.webp", alt: "third picture" },
    { src: "image4.webp", alt: "fourth picture" },
    { src: "image5.jpg", alt: "fifth picture" },
    { src: "images.jpeg", alt: "sixth picture" }
]; // Array of image objects

let currentImageIndex = 0; // Keeps track of which image to show next

// Function to handle image cycling
function changeImage() {
    clickCount++;  // Increment the click counter

    if (clickCount <= 6) {
        // Display the current image in the #image div
        const previewPic = images[currentImageIndex];
        document.getElementById("image").innerHTML = previewPic.alt;
        document.getElementById("image").style.background = "url(" + previewPic.src + ")";

        // Update to the next image in the array, looping back if necessary
        currentImageIndex = (currentImageIndex + 1) % images.length;
    }

    // After the 6th click, reset to the default state
    if (clickCount === 6) {
        setTimeout(() => {
            // Reset the click counter and revert to the default state after a short delay
            clickCount = 0;
            currentImageIndex = 0; // Reset to the first image
            document.getElementById("image").innerHTML = "Hover over an image below to display here.";
            document.getElementById("image").style.background = "#8e68ff";  // Reset background color
        }, 1000); // 1 second delay before resetting
    }
}

// Function to initialize the gallery and add tabindex
function initializeGallery() {
    // Loop through each image and add tabindex for keyboard navigation
    const images = document.querySelectorAll('.preview');  // Select all images with class 'preview'
    
    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute('tabindex', '0'); // Add tabindex attribute to make images focusable
        console.log('Tabindex added to image:', images[i].alt);  // Log message to confirm tabindex was added
        
        // Adding listeners for onfocus and onblur events
        images[i].addEventListener('focus', function() {
            console.log('Focused on image:', images[i].alt);
        });
        
        images[i].addEventListener('blur', function() {
            console.log('Blurred on image:', images[i].alt);
        });
    }

    // Add click listener to the entire window to trigger image change
    window.addEventListener('click', changeImage);  // Trigger changeImage function when clicking anywhere on the page
}

// Initialize the gallery when the page is loaded
window.onload = initializeGallery;
