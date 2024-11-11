// roi-calculation.js
document.getElementById('roiForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get user input
    const tileCost = parseFloat(document.getElementById('tileCost').value);
    const energySavings = parseFloat(document.getElementById('energySavings').value);
    const totalTiles = parseFloat(document.getElementById('totalTiles').value);

    // Calculate total investment cost
    const totalInvestment = tileCost * totalTiles;

    // Calculate ROI (Return on Investment)
    const monthlySavings = energySavings * totalTiles; // monthly savings from energy generation
    const roi = (monthlySavings / totalInvestment) * 100; // ROI as a percentage

    // Display results
    document.getElementById('roiResults').innerHTML = `
        <p>Total Investment: $${totalInvestment}</p>
        <p>Monthly Energy Savings: $${monthlySavings}</p>
        <p>ROI: ${roi.toFixed(2)}%</p>
    `;
});
