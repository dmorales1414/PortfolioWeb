const music = document.getElementById("background-music");
const toggleBtn = document.getElementById("audio-toggle");

toggleBtn.addEventListener("click", () => {
    // Toggle play/pause and update button text
    // When paused, will be paused indefenintely until user clicks again
    if (music.paused) {
        music.play();
        toggleBtn.textContent = "Mute";
    } else {
        music.pause();
        toggleBtn.textContent = "Unmute";
    }
});