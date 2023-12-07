const prompt = require('prompt');

prompt.start();

// Fungsi untuk mengonversi suhu
function convertTemperature() {
  prompt.get(['temperature', 'unit'], (err, result) => {
    if (err) {
      console.error('Error reading input.');
      return;
    }

    const { temperature, unit } = result;

    // Konversi input suhu ke bentuk numerik
    const numericTemperature = parseFloat(temperature);

    if (isNaN(numericTemperature)) {
      console.log('Invalid temperature. Please enter a number.');
      return;
    }

    // Konversi ke Fahrenheit, Celsius, Reamur, dan Kelvin
    switch (unit.toLowerCase()) {
      case 'c':
        const fahrenheit = (numericTemperature * 9/5) + 32;
        const reamur = numericTemperature * 4/5;
        const kelvin = numericTemperature + 273.15;

        console.log(`${temperature}°C is ${fahrenheit}°F, ${reamur}°Re, and ${kelvin}K`);
        break;

      case 'f':
        const celsius = (numericTemperature - 32) * 5/9;
        const reamurF = celsius * 4/5;
        const kelvinF = celsius + 273.15;

        console.log(`${temperature}°F is ${celsius}°C, ${reamurF}°Re, and ${kelvinF}K`);
        break;

      case 'r':
        const celsiusRe = numericTemperature * 5/4;
        const fahrenheitRe = (celsiusRe * 9/5) + 32;
        const kelvinRe = celsiusRe + 273.15;

        console.log(`${temperature}°Re is ${celsiusRe}°C, ${fahrenheitRe}°F, and ${kelvinRe}K`);
        break;

      case 'k':
        const celsiusK = numericTemperature - 273.15;
        const fahrenheitK = (celsiusK * 9/5) + 32;
        const reamurK = celsiusK * 4/5;

        console.log(`${temperature}K is ${celsiusK}°C, ${fahrenheitK}°F, and ${reamurK}°Re`);
        break;

      default:
        console.log('Invalid unit. Please use "C", "F", "Re", or "K".');
    }
  });
}

// Panggil fungsi untuk mengonversi suhu
convertTemperature();