// Append characters to the display
function appendCharacter(char) {
    document.getElementById("display").value += char;
}

// Clear the display
function clearDisplay() {
    document.getElementById("display").value = "";
}

// Delete last character
function deleteLastChar() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

// Calculate and display result
function calculateResult() {
    try {
        document.getElementById("display").value = eval(document.getElementById("display").value);
    } catch {
        document.getElementById("display").value = "Error";
    }
}
