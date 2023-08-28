const screen = document.getElementById("screen");
const buttons = document.querySelectorAll("input[type='button']");

for (let button of buttons) {
    if (button.value === "%" || button.value === "AC" || button.value === "CE"
        || button.value === "/" || button.value === "*" || button.value === "-"
        || button.value === "+" || button.value === "=") {
        button.style.background = "grey";
    }
}

buttons.forEach(button => button.addEventListener("click", () => {
    const currentValue = screen.textContent;
    const buttonValue = button.value;

    if (buttonValue === "=") {
        try {
            screen.textContent = eval(currentValue);
        } catch (error) {
            screen.textContent = "Error";
        }
    } else if (buttonValue === "AC") {
        screen.textContent = "";
    } else if (buttonValue === "CE"){
        if (screen.textContent === "Error") {
            screen.textContent = "";
        }
        screen.textContent = screen.textContent.slice(0, -1);
    } else {
        if (screen.textContent === "Error") {
            screen.textContent = "";
        }
        screen.textContent += buttonValue;
    }
    if (screen.textContent.length >= 16) {
        screen.style.overflowX = "scroll";
    } else {
        screen.style.overflowX = "hidden";
    }
}));
