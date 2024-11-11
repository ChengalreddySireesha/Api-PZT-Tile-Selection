document.getElementById('areaForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const length = parseFloat(document.getElementById('length').value);
    const width = parseFloat(document.getElementById('width').value);
    
    // Assuming a tile size of 1m² for simplicity
    const tileArea = 1; // Adjust this based on actual tile size
    const area = length * width;
    const numTiles = Math.ceil(area / tileArea);

    const energyOutput = numTiles * 1.2 * 5000; // Sample energy generation per day: 1.2 watts per step, 5000 footsteps/day
    
    // Display results
    document.getElementById('results').innerHTML = `
        <p>Total Area: ${area} m²</p>
        <p>Number of Tiles Needed: ${numTiles}</p>
        <p>Estimated Daily Energy Output: ${energyOutput} watts</p>
    `;
});
