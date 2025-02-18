const btn = document.querySelector(".btn");
const body = document.querySelector("body");
const colorCode = document.querySelector(".color-code");

const generateColor = () => {
    const hex = "0123456789ABCDEF";
    let color = "#";

    for(let i = 0; i < 6; i++) {
        let random = Math.floor(Math.random() * hex.length);

        color += hex[random];
    }

    return color;
}

btn.addEventListener('click', () => {
    let color = generateColor();

    colorCode.textContent = color;
    colorCode.style.color = color;
    body.style.backgroundColor = color;
});