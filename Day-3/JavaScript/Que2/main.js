let colorHexP = document.querySelector(".color-hex span");
let errorP = document.querySelector(".error");
let copyBtn = document.querySelector(".copy-btn");
let generateBtn = document.querySelector(".generate-btn");
let colorCode = "#d1d1d1";

const generateColorCode = () => {
    let hex = "0123456789abcdef";
    let color = "#";

    for (let i = 1; i <= 6; i++) {
        let random = Math.floor(Math.random() * hex.length);
        color += hex[random]
    }
    return color;
}

const copyToClipboard = async (colorCode) => {
    try {
        await navigator.clipboard.writeText(colorCode);
    }
    catch(err) {
        package.innerText = "Failed to copy!";
        console.log(err);
    }
}

generateBtn.addEventListener("click", () => {
    colorCode = generateColorCode();
    document.body.style.backgroundColor = colorCode;

    colorHexP.innerText = colorCode;
})

copyBtn.addEventListener("click", () => {
    copyToClipboard(colorCode);
});