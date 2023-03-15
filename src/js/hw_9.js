const button = document.querySelector(".change-color");
const span = document.querySelector(".color");
const body = document.body;

const onChangeColour = () => {
    span.textContent = body.style.backgroundcolor = getRandomHexColor();
}

button.addEventListener("click", onChangeColour)


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}