function convertTemperature(source) {
    var celsiusInput = document.getElementById("celsiusInput");
    var fahrenheitInput = document.getElementById("fahrenheitInput");
    var kelvinInput = document.getElementById("kelvinInput");
    var reaumurInput = document.getElementById("reaumurInput");
    var rankineInput = document.getElementById("rankineInput");
  
    var celsius = parseFloat(celsiusInput.value);
    var fahrenheit = parseFloat(fahrenheitInput.value);
    var kelvin = parseFloat(kelvinInput.value);
    var reaumur = parseFloat(reaumurInput.value);
    var rankine = parseFloat(rankineInput.value);
  
    if (source === "celsius") {
      if (!isNaN(celsius)) {
        fahrenheitInput.value = (celsius * 9/5) + 32;
        kelvinInput.value = celsius + 273.15;
        reaumurInput.value = celsius * 4/5;
        rankineInput.value = (celsius + 273.15) * 9/5;
      } else {
        fahrenheitInput.value = "";
        kelvinInput.value = "";
        reaumurInput.value = "";
        rankineInput.value = "";
      }
    } else if (source === "fahrenheit") {
      if (!isNaN(fahrenheit)) {
        celsiusInput.value = (fahrenheit - 32) * 5/9;
        kelvinInput.value = (fahrenheit - 32) * 5/9 + 273.15;
        reaumurInput.value = (fahrenheit - 32) * 4/9;
        rankineInput.value = fahrenheit + 459.67;
      } else {
        celsiusInput.value = "";
        kelvinInput.value = "";
        reaumurInput.value = "";
        rankineInput.value = "";
      }
    } else if (source === "kelvin") {
      if (!isNaN(kelvin)) {
        celsiusInput.value = kelvin - 273.15;
        fahrenheitInput.value = (kelvin - 273.15) * 9/5 + 32;
        reaumurInput.value = (kelvin - 273.15) * 4/5;
        rankineInput.value = kelvin * 9/5;
      } else {
        celsiusInput.value = "";
        fahrenheitInput.value = "";
        reaumurInput.value = "";
        rankineInput.value = "";
      }
    } else if (source === "reaumur") {
      if (!isNaN(reaumur)) {
        celsiusInput.value = reaumur * 5/4;
        fahrenheitInput.value = (reaumur * 9/4) + 32;
        kelvinInput.value = (reaumur * 5/4) + 273.15;
        rankineInput.value = (reaumur * 9/4) + 491.67;
      } else {
        celsiusInput.value = "";
        fahrenheitInput.value = "";
        kelvinInput.value = "";
        rankineInput.value = "";
      }
    } else if (source === "rankine") {
      if (!isNaN(rankine)) {
        celsiusInput.value = (rankine - 491.67) * 5/9;
        fahrenheitInput.value = rankine - 459.67;
        kelvinInput.value = rankine * 5/9;
        reaumurInput.value = (rankine - 491.67) * 4/9;
      } else {
        celsiusInput.value = "";
        fahrenheitInput.value = "";
        kelvinInput.value = "";
        reaumurInput.value = "";
      }
    }
  }
  
  function toggleInfoBox() {
    var infoBox = document.getElementById("infoBox");
    infoBox.style.display = infoBox.style.display === "block" ? "none" : "block";
  }