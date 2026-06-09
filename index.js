/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const quantityInput = document.getElementById("quantity");

// Configuration for the maximum visual width of the input field
const maxLength = 8;

/**
 * Dynamically adjusts the width of the input field based on the character count.
 * It ensures a minimum width of 1 character and a maximum of maxLength.
 */
function resizeInput() {
	const length = Math.min(Math.max(quantityInput.value.length, 1), maxLength);
	// Use the 'ch' unit (width of the '0' glyph) to size the input plus a small buffer
	quantityInput.style.width = `${length + 1}ch`;
}

// Update width whenever the user types or modifies the input
quantityInput.addEventListener("input", resizeInput);

// Initialize width on load to account for default values
resizeInput();

const convertBtn = document.getElementById("convert-btn");

const meterFeet = document.getElementById("meter-feet");
const literGallon = document.getElementById("liter-gallon");
const kgPound = document.getElementById("kg-pound");

convertBtn.addEventListener("click", () => {
	const number = Number(document.getElementById("quantity").value);

	const meterToFeet = (number * 3.281).toFixed(3);
	const feetToMeter = (number * 0.3048).toFixed(3);
	meterFeet.textContent = `${number} meters = ${number * 3.281} feet | ${number} feet = ${feetToMeter} meters`;

    const litreToGallon = (number * 0.264).toFixed(3);
    const gallonToLiter = (number * 3.78541).toFixed(3);
	literGallon.textContent = `${number} liters = ${litreToGallon} gallons | ${number} gallons = ${gallonToLiter} liters`;

    const kgToPound = (number * 2.20462).toFixed(3);
    const poundToKg = (number * 0.453592).toFixed(3);
    kgPound.textContent = `${number} kilos = ${kgToPound} pounds | ${number} pounds = ${poundToKg} kilos`
});