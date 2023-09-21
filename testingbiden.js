// Get references to the button and video element
const playMovieBtn = document.getElementById('playMovieBtn');
const fullscreenVideo = document.getElementById('fullscreenVideo');

// Add a click event listener to the button
playMovieBtn.addEventListener('click', () => {
    // Check if the browser supports the Fullscreen API
    if (fullscreenVideo.requestFullscreen) {
        fullscreenVideo.requestFullscreen(); // Request full-screen mode
    } else if (fullscreenVideo.mozRequestFullScreen) { // Firefox
        fullscreenVideo.mozRequestFullScreen();
    } else if (fullscreenVideo.webkitRequestFullscreen) { // Chrome, Safari, and Opera
        fullscreenVideo.webkitRequestFullscreen();
    }
});

// Listen for the video's "fullscreenchange" event to handle exit full-screen
document.addEventListener('fullscreenchange', () => {
    if (!document.fullscreenElement) {
        // Exit full-screen mode
        fullscreenVideo.pause();
    }
});
