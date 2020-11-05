
const clrBtn = document.getElementById("clrBtn");
const hexText = document.getElementById("hexText");

// Create a random HSL color and apply it to doc body
const randomBackgroundColor = () => {
    const randomHue = Math.random()*360;
    const saturation = '100%';
    const lightness = 50 + Math.random()*40 + '%';
    const randomColor = `hsl(${randomHue}, ${saturation}, ${lightness})`;
    document.body.style.background = randomColor;
    hexText.innerText = rgbToHex(document.body.style.background);
}

// Changes rgb(0, 255, 0) color to #00FF00 form
const rgbToHex = (rgb) => {
    rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
    const hex = (rgb && rgb.length === 4) ? "#" +
     ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
     ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
     ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : 'Not a RGB color.';
    return hex.toUpperCase();
 }

// Generate random color on webpage start
randomBackgroundColor();
clrBtn.onclick = randomBackgroundColor;

const autoBtn = document.querySelector("#autoBtn");
const main = document.querySelector("main");

let interval;
autoBtn.onclick = () => {
    if (autoBtn.innerText === "Auto Mode") {
        main.style.opacity = "0%";
        autoBtn.innerText = "Manual Mode";
        interval = setInterval(randomBackgroundColor, 1500);
    }
    else {
        main.style.opacity = "100%";
        autoBtn.innerText = "Auto Mode";
        clearInterval(interval);
    }
}

autoBtn.addEventListener("mouseover", () => {
    if (autoBtn.innerText === "Manual Mode")
        autoBtn.style.opacity = "100%";
})

autoBtn.addEventListener("mouseout", () => {
    if (autoBtn.innerText === "Manual Mode")
        autoBtn.style.opacity = "0%";
})