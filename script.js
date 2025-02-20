document.addEventListener("DOMContentLoaded", function () {
    const startDate = new Date("2024-07-29"); // Your anniversary date
    const today = new Date();

    startDate.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);

    const timeDifference = today.getTime() - startDate.getTime();
    let daysTogether = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    if (daysTogether < 0) {
        daysTogether = 0; 
    }

    let counter = 0;
    const counterElement = document.getElementById("counter");

    function animateCounter() {
        if (counter < daysTogether) {
            counter++;
            counterElement.textContent = counter;
            setTimeout(animateCounter, 20);
        } else {
            counterElement.textContent = daysTogether;
        }
    }
    animateCounter();

    // Background Music Control
    const music = document.getElementById("bg-music");
    const musicBtn = document.getElementById("music-btn");

    musicBtn.addEventListener("click", () => {
        if (music.paused) {
            music.play().then(() => {
                musicBtn.textContent = "🎵 Pause Music";
            }).catch(error => console.log("Music play blocked:", error));
        } else {
            music.pause();
            musicBtn.textContent = "🎵 Play Music";
        }
    });

    // Ensure music starts after first user interaction (for mobile support)
    document.addEventListener("click", () => {
        if (music.paused) {
            music.play();
            musicBtn.textContent = "🎵 Pause Music";
        }
    }, { once: true });
});
