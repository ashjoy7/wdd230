// In the darkmode.js file
const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    if (modeButton.textContent.includes("🕶️")) {
        modeButton.textContent = "🔆";
    } else {
        modeButton.textContent = "🕶️";
    }
});

// Ensure the dark mode button is always visible
modeButton.style.display = "block";
