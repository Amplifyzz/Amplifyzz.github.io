const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const originalText = "Welcome To The Trumpet Hub";
const h1Element = document.querySelector("h1");
const downArrow = document.querySelector(".down-arrow");

function startRandomizing() {
    let iterations = 0;
    const interval = setInterval(() => {
        const newText = h1Element.innerText.split("").map((letter, index) => {
            if (iterations >= originalText.length) {
                clearInterval(interval);
                return originalText[index];
            }
            return letters[Math.floor(Math.random() * 26)];
        }).join("");

     h1Element.innerText = newText;

        if (iterations >= originalText.length) { 
            clearInterval(interval);
            h1Element.innerText = originalText;
            downArrow.style.display = "block"; 
        }

        iterations += 1 / 3;
    }, 30);
}

startRandomizing();