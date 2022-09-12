

// Getting the temperature selector
let userSelector = document.getElementById('userTempSelector');
let resSelector = document.getElementById('resTempSelector');



// Getting the input fields
let userInput = document.getElementById('userTemp');
let resInput = document.getElementById('resTemp');

// Function to change the unit according to one another

userSelector.onchange = () => {
  let userSelected = userSelector.value;
  let resSelected = resSelector.value;
  if (userSelected === resSelected) {
    if (resSelector.selectedIndex < 2) {
      resSelector.selectedIndex += 1;
    } else {
      resSelector.selectedIndex = 0;
    }
  }
}

resSelector.onchange = () => {
  let resSelected = resSelector.value;
  let userSelected = userSelector.value;
  if (resSelected === userSelected) {
    if (userSelector.selectedIndex < 2) {
      userSelector.selectedIndex += 1;
    } else {
      userSelector.selectedIndex = 0;
    }
  }
}

// Getting the trigger button
let trigger = document.querySelector('.triggerBtn');

// Function to convert the temperature from one unit to another
trigger.onclick = () => {
  let userValue = parseFloat(userInput.value);

  if (userInput.value == "") {
    window.alert('Please enter the value to be converted');
  } else {

    if (userSelector.value == "celsius" && resSelector.value == "fahrenheit") {
      // Celsius to Fahrenheit
      resInput.value = (parseFloat((userValue * 9 / 5) + 32)).toFixed(2) + " " +  'F';
    } else if (userSelector.value == "celsius" && resSelector.value == "kelvin") {
      // Celsius to Kelvin
      resInput.value = (parseFloat(userValue + 273.15)).toFixed(2) + " " +  'K';
    } else if (userSelector.value == "fahrenheit" && resSelector.value == "celsius") {
      // Fahrenheit to Celsius
      resInput.value = (parseFloat((userValue - 32) * 5 / 9)).toFixed(2) +  " " + 'C';
    } else if (userSelector.value == "fahrenheit" && resSelector.value == "kelvin") {
      // Fahrenheit to Kelvin
      resInput.value = (parseFloat((userValue - 32) * 5 / 9) + 273.15).toFixed(2) + " " +  'K';
    } else if (userSelector.value == "kelvin" && resSelector.value == "celsius") {
      // Kelvin to Celsius
      resInput.value = (parseFloat(userValue - 273.15)).toFixed(2) + " " +  'C';
    } else {
      // Kelvin to Fahrenheit
      resInput.value = (parseFloat(userValue - 273.15) * 9 / 5 + 32).toFixed(2) +  " " + 'F';
    }

  }
}

