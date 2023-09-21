window.addEventListener('load', () => {
    // Make variables for all of your different screens

    // Make variables for all of your different buttons

    //addevent lsiteners on all those buttons and handle where or what each shoud lead you to / do



    const gameStartScreen = document.getElementById("startScreenGameBeginning");

    const firstGameScreen = document.getElementById("chapterOneScreenOne");

    const startButtonStartScreen = document.getElementById("superStartButton");


    startButtonStartScreen.addEventListener("click", () => {
        // Hide the start screen

        // Show the first screen

    })
})












// // Get references to the button and video element
// const playMovieBtn = document.getElementById('playMovieBtn');
// const fullscreenVideo = document.getElementById('fullscreenVideo');

// // Add a click event listener to the button
// playMovieBtn.addEventListener('click', () => {
//     // Check if the browser supports the Fullscreen API
//     if (fullscreenVideo.requestFullscreen) {
//         fullscreenVideo.requestFullscreen(); // Request full-screen mode
//     } else if (fullscreenVideo.mozRequestFullScreen) { // Firefox
//         fullscreenVideo.mozRequestFullScreen();
//     } else if (fullscreenVideo.webkitRequestFullscreen) { // Chrome, Safari, and Opera
//         fullscreenVideo.webkitRequestFullscreen();
//     }
// });

// // Listen for the video's "fullscreenchange" event to handle exit full-screen
// document.addEventListener('fullscreenchange', () => {
//     if (!document.fullscreenElement) {
//         // Exit full-screen mode
//         fullscreenVideo.pause();
//     }
// });
