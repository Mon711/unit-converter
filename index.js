/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/


const quantityInput = document.getElementById("quantity")

// Configuration for the maximum visual width of the input field
const maxLength = 8

/**
 * Dynamically adjusts the width of the input field based on the character count.
 * It ensures a minimum width of 1 character and a maximum of maxLength.
 */
function resizeInput() {
    const length = Math.min(Math.max(quantityInput.value.length, 1), maxLength)
    // Use the 'ch' unit (width of the '0' glyph) to size the input plus a small buffer
    quantityInput.style.width = `${length + 1}ch`
}

// Update width whenever the user types or modifies the input
quantityInput.addEventListener("input", resizeInput)

// Initialize width on load to account for default values
// resizeInput()
