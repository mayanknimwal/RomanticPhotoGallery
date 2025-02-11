// Lightbox Pop-up Effect
document.querySelectorAll(".photo img").forEach(image => {
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

        // Fade-in effect
        setTimeout(() => {
            popup.style.opacity = "1";
        }, 50);

        // Close popup when clicking on the close button
        popup.querySelector(".close").addEventListener("click", () => closePopup(popup));

        // Close popup when clicking outside the image
        popup.addEventListener("click", (e) => {
            if (e.target === popup) {
                closePopup(popup);
            }
        });
    });
});

// Function to close the popup smoothly
function closePopup(popup) {
    popup.classList.add("fade-out");
    setTimeout(() => popup.remove(), 500);
}

// Floating Hearts Effect
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");

    // Random position and size
    heart.style.left = Math.random() * 100 + "vw"; 
    heart.style.animationDuration = Math.random() * 2 + 3 + "s"; 

    document.getElementById("hearts-container").appendChild(heart);

    // Remove heart after animation ends
    setTimeout(() => {
        heart.remove();
    }, 5000);
}
setInterval(createHeart, 600);

// Falling Stars Effect
function createStar() {
    const star = document.createElement("div");
    star.classList.add("star");

    // Random position and size
    star.style.left = Math.random() * 100 + "vw";
    star.style.animationDuration = Math.random() * 2 + 3 + "s";

    document.getElementById("stars-container").appendChild(star);

    // Remove after animation ends
    setTimeout(() => {
        star.remove();
    }, 5000);
}
setInterval(createStar, 800);

// Background Music Control
const music = document.getElementById("bg-music");
const musicBtn = document.getElementById("music-btn");

musicBtn.addEventListener("click", () => {
    if (music.paused) {
        music.play();
        musicBtn.textContent = "🎵 Pause Music";
    } else {
        music.pause();
        musicBtn.textContent = "🎵 Play Music";
    }
});
