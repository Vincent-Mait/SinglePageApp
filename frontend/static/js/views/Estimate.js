import AbstractView from "./AbstractView.js";

// Declare calculateEstimate function in the global scope
window.calculateEstimate = function() {
    // Get input values
    var squareFeet = parseFloat(document.getElementById('squareFeet').value);
    var buildingType = document.getElementById('buildingType').value;
    
    // Validate input
    if (isNaN(squareFeet) || squareFeet <= 0) {
        alert('Please enter a valid square footage.');
        return;
    }
    if (buildingType === '') {
        alert('Please select a building type.');
        return;
    }
    
    // Calculate estimate based on building type
    var baseRate;
    if (buildingType === 'residential') {
        baseRate = 5; // $5 per square foot for residential buildings
    } else if (buildingType === 'commercial') {
        baseRate = 10; // $10 per square foot for commercial buildings
    } else if (buildingType === 'industrial') {
        baseRate = 15; // $15 per square foot for industrial buildings
    }
    
    var estimate = squareFeet * baseRate;
    
    // Display the result
    var resultElement = document.getElementById('result');
    resultElement.innerHTML = 'Estimated cost for ' + buildingType + ' building with ' + squareFeet + ' square feet: ' + estimate.toLocaleString("en-US", {style: "currency", currency: "USD"});
};

export default class extends AbstractView {
    
    constructor(params) {
        super(params);
        this.setTitle("Price Estimate");
    }

    async getHtml() {
        return `
            <h1 class= "price">Price Estimate</h1>
            <p>This form gives a price estimate based on buildling type and square feet.</p>
            <p>Please be advised this will not be your final price!</p>
            <p>Final price will be determine during  first consulatation. This is because price will change based on services needed, the condition of building, if additional materials are required, and if additional man power is needed.</p>
            <form id="estimateForm">
            <label for="squareFeet">Square Feet of Building:</label>
            <input type="number" id="squareFeet" name="squareFeet" required>
    
            <label for="buildingType">Building Type:</label>
            <select id="buildingType" name="buildingType" required>
                <option value="">Select building type</option>
                <option value="residential">Residential</option>
                <option value="commercial">Commercial</option>
                <option value="industrial">Industrial</option>
            </select>
            
            <button type="button" onclick="calculateEstimate()">Calculate Estimate</button>
            </form>

            <div id="result" class="result"></div>
         
        `;
    }
}

