//Калькулятор

let display = document.querySelector(".display");
let buttons = Array.from(document.querySelectorAll(".button"));

// Добавляем обработчик событий для каждой кнопки
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const text = button.innerText; 


    if (text === "AC") {
      display.innerText = "0";
    }

    else if (text === "=") {
      try {
     
        display.innerText = Function('return ' + display.innerText)(); 
      } catch {
        display.innerText = "Error!"; 
      }
    }

    else if (text === "+/-") {
      display.innerText = (parseFloat(display.innerText) * -1).toString(); 
    }

    else if (text === "%") {
      display.innerText = (parseFloat(display.innerText) / 100).toString(); 
    }
   
    else {
  
      if (display.innerText === "0" && text !== ".") {
        display.innerText = text;
      } else {
        display.innerText += text; 
      }
    }
  });
});


// Конвертер
let unitTypeSelect = document.querySelector("#unit-type");
let tempConverter = document.querySelector("#temperature-converter");
let distanceConverter = document.querySelector("#distance-converter");

unitTypeSelect.addEventListener("change", () => {
  if (unitTypeSelect.value === "temperature") {
    tempConverter.style.display = "block";
    distanceConverter.style.display = "none";
  } else {
    tempConverter.style.display = "none";
    distanceConverter.style.display = "block";
  }
});

document.querySelector("#convert-temp").addEventListener("click", () => {
  let tempValue = document.querySelector("#temp-value").value;
  let tempUnit = document.querySelector("#temp-unit").value;
  let result;

  if (tempUnit === "C") {
    result = `${tempValue}°C = ${(parseFloat(tempValue) * 9/5 + 32).toFixed(2)}°F = ${(parseFloat(tempValue) + 273.15).toFixed(2)}K`;
  } else if (tempUnit === "F") {
    result = `${tempValue}°F = ${((parseFloat(tempValue) - 32) * 5/9).toFixed(2)}°C = ${(((parseFloat(tempValue) - 32) * 5/9) + 273.15).toFixed(2)}K`;
  } else if (tempUnit === "K") {
    result = `${tempValue}K = ${(parseFloat(tempValue) - 273.15).toFixed(2)}°C = ${((parseFloat(tempValue) - 273.15) * 9/5 + 32).toFixed(2)}°F`;
  }

  document.querySelector("#temp-result").innerText = result;
});

document.querySelector("#convert-distance").addEventListener("click", () => {
  let distanceValue = document.querySelector("#distance-value").value;
  let distanceUnit = document.querySelector("#distance-unit").value;
  let result;

  if (distanceUnit === "km") {
    result = `${distanceValue} km = ${(parseFloat(distanceValue) * 0.621371).toFixed(2)} miles`;
  } else if (distanceUnit === "miles") {
    result = `${distanceValue} miles = ${(parseFloat(distanceValue) / 0.621371).toFixed(2)} km`;
  }

  document.querySelector("#distance-result").innerText = result;
});






