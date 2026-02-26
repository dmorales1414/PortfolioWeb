const music = document.getElementById("background-music");
const toggleBtn = document.getElementById("audio-toggle");

if (music) {
    // Set volume
    music.volume = 0.2;
    music.loop = true;

    // Restore saved time
    const savedTime = localStorage.getItem("musicTime");
    const wasPlaying = localStorage.getItem("musicPlaying");

    if (savedTime) {
        music.currentTime = parseFloat(savedTime);
    }

    // Resume only if it was playing
    if (wasPlaying === "true") {
        music.play();
    }

    // Save time continuously
    music.addEventListener("timeupdate", () => {
        localStorage.setItem("musicTime", music.currentTime);
    });

    // Save play/pause state
    music.addEventListener("play", () => {
        localStorage.setItem("musicPlaying", "true");
    });

    music.addEventListener("pause", () => {
        localStorage.setItem("musicPlaying", "false");
    });
}

if (music && toggleBtn) {
    toggleBtn.addEventListener("click", () => {
        if (music.paused) {
            music.play();
            toggleBtn.textContent = "Mute";
        } else {
            music.pause();
            toggleBtn.textContent = "Unmute";
        }
    });
}