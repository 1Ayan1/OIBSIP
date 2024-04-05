function convertTemperature() {
    var temperatureInput = document.getElementById("temperatureInput");
    var temperature = parseFloat(temperatureInput.value);
    var unit = document.getElementById("unitSelect").value;
    var resultElement = document.getElementById("result");
    var unitLabels = document.getElementById("unitLabels");
    var convertedTemperature;
    
    if (isNaN(temperature)) {
      resultElement.innerText = "Please enter a valid number!";
      resultElement.classList.add("error");
      unitLabels.innerHTML = "";
      return;
    }
    
    resultElement.classList.remove("error");
    
    if (unit === "celsius") {
      convertedTemperature = (temperature * 9/5) + 32;
      resultElement.innerText = temperature + "°C = " + convertedTemperature.toFixed(2) + "°F";
      unitLabels.innerHTML = "Converting from Celsius to Fahrenheit";
    } else if (unit === "fahrenheit") {
      convertedTemperature = (temperature - 32) * 5/9;
      resultElement.innerText = temperature + "°F = " + convertedTemperature.toFixed(2) + "°C";
      unitLabels.innerHTML = "Converting from Fahrenheit to Celsius";
    } else if (unit === "kelvin") {
      convertedTemperature = temperature - 273.15;
      resultElement.innerText = temperature + "K = " + convertedTemperature.toFixed(2) + "°C";
      unitLabels.innerHTML = "Converting from Kelvin to Celsius";
    }
  }
  
  function clearFields() {
    document.getElementById("temperatureInput").value = "";
    document.getElementById("result").innerHTML = "";
    document.getElementById("unitLabels").innerHTML = "";
  }
  
  function toggleDarkMode() {
    var body = document.body;
    body.classList.toggle("dark-mode");
  }
  