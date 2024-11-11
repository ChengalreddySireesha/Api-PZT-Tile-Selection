document.getElementById('trafficForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form input values
    const area = document.getElementById('area').value;
    const footTraffic = document.getElementById('footTraffic').value;
    const footstepPower = document.getElementById('footstepPower').value;

    // Prepare the data to be sent
    const data = {
        area: area,
        footTraffic: footTraffic,
        footstepPower: footstepPower
    };

    // Send data using Fetch API
    fetch('/pzt/foot_traffic', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        // Show success message or data response
        document.getElementById('responseMessage').innerHTML = `<p>Data submitted successfully!</p>`;
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('responseMessage').innerHTML = `<p>Error submitting data. Please try again.</p>`;
    });
});
