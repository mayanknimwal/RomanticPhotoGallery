// Lightbox Pop-up Effect
const photos = document.querySelectorAll(".photo img");
photos.forEach(image => {
    image.addEventListener("click", () => {
        const popup = document.createElement("div");
        popup.classList.add("popup");
        popup.innerHTML = `
            <div class="popup-content">
                <img src="${image.src}" alt="Romantic Memory">
                <span class="close">&times;</span>
            </div>
        `;
        document.body.appendChild(popup);
        setTimeout(() => popup.style.opacity = "1", 50);
        popup.querySelector(".close").addEventListener("click", () => closePopup(popup));
        popup.addEventListener("click", (e) => { if (e.target === popup) closePopup(popup); });
    });
});
function closePopup(popup) {
    popup.classList.add("fade-out");
    setTimeout(() => popup.remove(), 500);
}

// Floating Hearts Effect
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 3 + "s";
    document.getElementById("hearts-container").appendChild(heart);
    setTimeout(() => heart.remove(), 6000);
}
setInterval(createHeart, 700);

// Falling Stars Effect
function createStar() {
    const star = document.createElement("div");
    star.classList.add("star");
    star.style.left = Math.random() * 100 + "vw";
    star.style.animationDuration = Math.random() * 2 + 3 + "s";
    document.getElementById("stars-container").appendChild(star);
    setTimeout(() => star.remove(), 5000);
}
setInterval(createStar, 1000);

// Background Music Control with Smooth Fade-in
const music = document.getElementById("bg-music");
const musicBtn = document.getElementById("music-btn");
music.volume = 0;

musicBtn.addEventListener("click", () => {
    if (music.paused) {
        fadeInMusic(music, 1000);
        musicBtn.textContent = "🎵 Pause Music";
    } else {
        fadeOutMusic(music, 1000);
        musicBtn.textContent = "🎵 Play Music";
    }
});

document.addEventListener("click", () => {
    if (music.paused) {
        fadeInMusic(music, 1000);
        musicBtn.textContent = "🎵 Pause Music";
    }
}, { once: true });

function fadeInMusic(audio, duration) {
    let volume = 0;
    audio.volume = volume;
    audio.play();
    let fadeInterval = setInterval(() => {
        if (volume < 1) {
            volume += 0.05;
            audio.volume = Math.min(volume, 1);
        } else {
            clearInterval(fadeInterval);
        }
    }, duration / 20);
}

function fadeOutMusic(audio, duration) {
    let volume = audio.volume;
    let fadeInterval = setInterval(() => {
        if (volume > 0) {
            volume -= 0.05;
            audio.volume = Math.max(volume, 0);
        } else {
            clearInterval(fadeInterval);
            audio.pause();
        }
    }, duration / 20);
}

// Love Counter Script
document.addEventListener("DOMContentLoaded", function () {
    const startDate = new Date("2024-07-29");
    const today = new Date();
    startDate.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);
    const daysTogether = Math.max(Math.floor((today - startDate) / (1000 * 60 * 60 * 24)), 0);
    const counterElement = document.getElementById("counter");
    let counter = 0;
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
});

// ✅ Fix: Gift Button Click
function openGift() {
    var message = document.getElementById("gift-message");
    if (message.style.display === "none" || message.style.display === "") {
        message.style.display = "block";
    } else {
        message.style.display = "none";
    }
}
