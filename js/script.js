const music = document.getElementById("background-music");
const toggleBtn = document.getElementById("audio-toggle");

toggleBtn.addEventListener("click", () => {
    if (music.paused) {
        music.play();
        toggleBtn.textContent = "Mute";
    } else {
        music.pause();
        toggleBtn.textContent = "Unmute";
    }
});