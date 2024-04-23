//Author: Saheed lawal
//Date: 22-04-2024
//Deploymeent to Github 


/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
let costPerDay = 25; 
let numberOfDaysSelected = 0;
const fullDayButton = document.getElementById('full');
const halfDayButton = document.getElementById('half');
const daySelectors = document.querySelectorAll('.day-selector li');
const calculatedCostElement = document.getElementById('calculated-cost');
const clearButton = document.getElementById('clear-button');

function updateCalculatedCost() {
    const totalCost = costPerDay * numberOfDaysSelected;
    calculatedCostElement.textContent = totalCost;
}

function handleDayTypeButtonClick(event) {
    const buttonClicked = event.target.id;
}

function handleDaySelectorClick(event) {
    const daySelected = event.target.id;
}

function handleClearButtonClick() {
}

fullDayButton.addEventListener('click', handleDayTypeButtonClick);
halfDayButton.addEventListener('click', handleDayTypeButtonClick);
daySelectors.forEach(selector => {
    selector.addEventListener('click', handleDaySelectorClick);
});
clearButton.addEventListener('click', handleClearButtonClick);

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
document.addEventListener("DOMContentLoaded", function() {
    const days = document.querySelectorAll('.day-selector li');
    let dayCounter = 0;

    days.forEach(day => {
        day.addEventListener('click', () => {
            if (!day.classList.contains('clicked')) {
                day.classList.add('clicked');
                dayCounter++;
            } else {
                day.classList.remove('clicked');
                dayCounter--;
            }
            calculateTotalCost();
        });
    });
    function calculateTotalCost() {
        const fullDayCost = 35; // Example full day cost
        const halfDayCost = 15; // Example half day cost
        const totalCost = (fullDayCost * dayCounter) + (halfDayCost * (5 - dayCounter));
        document.getElementById('calculated-cost').textContent = totalCost;
    }

    const clearButton = document.getElementById('clear-button');
    clearButton.addEventListener('click', () => {
        days.forEach(day => {
            if (day.classList.contains('clicked')) {
                day.classList.remove('clicked');
                dayCounter--;
            }
        });
        calculateTotalCost();
    });
});



/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
document.addEventListener("DOMContentLoaded", function() {
    // Function to reset the booking
    function resetBooking() {
        // Remove "clicked" class from all days
        const days = document.querySelectorAll('.day-selector li');
        days.forEach(day => {
            day.classList.remove('clicked');
        });

        document.getElementById('calculated-cost').textContent = '0';
    }

    // Event listener for the clear button
    const clearButton = document.getElementById('clear-button');
    clearButton.addEventListener('click', resetBooking);
});






/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
document.addEventListener("DOMContentLoaded", function() {
    // Function to handle when half-day button is clicked
    function handleHalfDay() {
        // let the daily rate to be $20
        const dailyRate = 20;

        // Add "clicked" class to "half" element and remove it from "full" element
        document.getElementById('full').classList.remove('clicked');
        document.getElementById('half').classList.add('clicked');

        // Recalculate the total cost
        calculateCost();
    }

    // Function to calculate the total cost
    function calculateCost() {
        // Get the selected days
        const selectedDays = document.querySelectorAll('.day-selector li.clicked');
        
        // Get the selected rate (full or half)
        const rate = document.querySelector('.small-button.clicked').id;

        // Calculate the total cost
        let totalCost = 0;
        selectedDays.forEach(day => {
            totalCost += (rate === 'full' ? 35 : 20); // If full rate, $40, else $20
        });

        // the calculated cost in the HTML
        document.getElementById('calculated-cost').textContent = totalCost;
    }

    // Event listeners for the full and half-day buttons
    const fullButton = document.getElementById('full');
    const halfButton = document.getElementById('half');
    fullButton.addEventListener('click', calculateCost);
    halfButton.addEventListener('click', handleHalfDay);
});




// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
document.addEventListener("DOMContentLoaded", function() {
    // Function to handle when full-day button is clicked
    function handleFullDay() {
        // Set the daily rate to $35
        const dailyRate = 35;

        // Add "clicked" class to "full" element and remove it from "half" element
        document.getElementById('half').classList.remove('clicked');
        document.getElementById('full').classList.add('clicked');

        // Recalculate the total cost
        calculateCost();
    }

    // Function to calculate the total cost
    function calculateCost() {
        // Get the selected days
        const selectedDays = document.querySelectorAll('.day-selector li.clicked');
        
        const rate = document.querySelector('.small-button.clicked').id;

        // Calculate the total cost
        let totalCost = 0;
        selectedDays.forEach(day => {
            totalCost += (rate === 'full' ? 35 : 20); // If full rate, $35, else $20
        });

        // calculated cost in the HTML
        document.getElementById('calculated-cost').textContent = totalCost;
    }

    // Event listeners for the full and half-day buttons
    const fullButton = document.getElementById('full');
    const halfButton = document.getElementById('half');
    fullButton.addEventListener('click', handleFullDay);
    halfButton.addEventListener('click', calculateCost);
});





/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
document.addEventListener("DOMContentLoaded", function() {
    // Function to handle whenever the  half-day button is clicked
    function handleHalfDay() {
        // let the daily rate to be $20
        const dailyRate = 20;

        document.getElementById('full').classList.remove('clicked');
        document.getElementById('half').classList.add('clicked');

        // Recalculate the total cost
        calculateCost();
    }

    // Function to handle whenever the  full-day button is clicked 
    function handleFullDay() {
        // Set the daily rate to $35
        const dailyRate = 35;

        document.getElementById('half').classList.remove('clicked');
        document.getElementById('full').classList.add('clicked');

        // Recalculate the total cost
        calculateCost();
    }

    // Function to calculate the total cost
    function calculateCost() {
    
        const selectedDays = document.querySelectorAll('.day-selector li.clicked');
        
        const rate = document.querySelector('.small-button.clicked').id;

        // Calculate the total cost
        let totalCost = 0;
        selectedDays.forEach(day => {
            totalCost += (rate === 'full' ? 35 : 20); 
        });

        document.getElementById('calculated-cost').innerHTML = totalCost;
    }

    // Event listeners for the full-day and half-day buttons
    const fullButton = document.getElementById('full');
    const halfButton = document.getElementById('half');
    fullButton.addEventListener('click', handleFullDay);
    halfButton.addEventListener('click', handleHalfDay);
});


