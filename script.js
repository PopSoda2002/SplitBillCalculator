let personCount = 1;

function addPerson() {
    personCount++;
    const div = document.createElement('div');
    div.className = 'input-group';
    div.innerHTML = `
        <label>Person ${personCount}:</label>
        <input type="number" class="consumption" step="0.01" placeholder="Enter consumption amount">
    `;
    document.getElementById('peopleInputs').appendChild(div);
}

function calculate() {
    const totalAmount = parseFloat(document.getElementById('totalAmount').value);
    const consumptions = Array.from(document.getElementsByClassName('consumption'))
        .map(input => parseFloat(input.value) || 0);
    
    const subtotal = consumptions.reduce((sum, amount) => sum + amount, 0);
    const results = document.getElementById('results');
    results.innerHTML = '<h3>Results:</h3>';

    consumptions.forEach((consumption, index) => {
        const proportion = consumption / subtotal;
        const shouldPay = totalAmount * proportion;
        results.innerHTML += `
            <div class="result-item">
                <h4>Person ${index + 1}</h4>
                <div class="result-detail">Original consumption: <span class="highlight">$${consumption.toFixed(2)}</span></div>
                <div class="result-detail">Proportion: <span class="highlight">${(proportion * 100).toFixed(2)}%</span></div>
                <div class="result-detail">Should pay: <span class="highlight">$${shouldPay.toFixed(2)}</span></div>
            </div>
        `;
    });
} 