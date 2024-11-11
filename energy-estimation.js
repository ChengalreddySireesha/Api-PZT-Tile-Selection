// energy-estimation.js
document.getElementById('trafficForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get user input
    const footTraffic = parseFloat(document.getElementById('footTraffic').value);
    const wattsPerStep = parseFloat(document.getElementById('wattsPerStep').value);

    // Calculate daily energy generation (in watts)
    const dailyEnergy = footTraffic * wattsPerStep;

    // Calculate monthly energy generation
    const monthlyEnergy = dailyEnergy * 30; // assuming 30 days in a month

    // Display results
    document.getElementById('results').innerHTML = `
        <p>Daily Energy Output: ${dailyEnergy} watts</p>
        <p>Monthly Energy Output: ${monthlyEnergy} watts</p>
    `;
});
