
// ==========================================
// SPENDWISE BUDGET MANAGEMENT APPLICATION
// ==========================================


// 1. STORE APPLICATION DATA

let monthlyBudget = 0;

let foodExpenses = 0;
let transportExpenses = 0;
let rentExpenses = 0;
let entertainmentExpenses = 0;
let savings = 0;
let utilitiesExpenses = 0;

let totalExpenses = 0;
let remainingBalance = 0;


// 2. CREATE A FUNCTION TO COLLECT USER INPUT

function collectBudgetInformation() {

    monthlyBudget = Number(
        prompt("Enter your monthly budget in KES:")
    );

    foodExpenses = Number(
        prompt("Enter your food expenses:")
    );

    transportExpenses = Number(
        prompt("Enter your transport expenses:")
    );

    rentExpenses = Number(
        prompt("Enter your rent expenses:")
    );

    entertainmentExpenses = Number(
        prompt("Enter your entertainment expenses:")
    );

    savings = Number(
        prompt("Enter your savings:")
    );

    utilitiesExpenses = Number(
        prompt("Enter your utilities expenses:")
    );

}


// 3. CREATE A FUNCTION TO CALCULATE TOTAL EXPENSES

function calculateTotalExpenses() {

    return foodExpenses +
           transportExpenses +
           rentExpenses +
           entertainmentExpenses +
           savings +
           utilitiesExpenses;

}


// 4. CREATE A FUNCTION TO CALCULATE REMAINING BALANCE

function calculateRemainingBalance(budget, expenses) {

    return budget - expenses;

}


// 5. CREATE A FUNCTION TO DISPLAY RESULTS IN THE CONSOLE

function displayBudgetReport() {

    console.log("================================");
    console.log("       SPENDWISE BUDGET REPORT");
    console.log("================================");

    console.log("Monthly Budget: KES " + monthlyBudget);

    console.log("Food Expenses: KES " + foodExpenses);

    console.log("Transport Expenses: KES " + transportExpenses);

    console.log("Rent Expenses: KES " + rentExpenses);

    console.log("Entertainment Expenses: KES " + entertainmentExpenses);

    console.log("Savings: KES " + savings);

    console.log("Utilities Expenses: KES " + utilitiesExpenses);

    console.log("--------------------------------");

    console.log("Total Expenses: KES " + totalExpenses);

    console.log("Remaining Balance: KES " + remainingBalance);

    if (remainingBalance >= 0) {
        console.log("Status: You are within your budget.");
    } else {
        console.log("Status: You have exceeded your budget.");
    }

    console.log("================================");

}


// 6. CREATE A FUNCTION TO UPDATE THE WEBSITE

function updateDashboard() {

    document.getElementById("budget").textContent =
        "KES " + monthlyBudget;

    document.getElementById("expenses").textContent =
        "KES " + totalExpenses;

    document.getElementById("balance").textContent =
        "KES " + remainingBalance;

    document.getElementById("food").textContent =
        "KES " + foodExpenses;

    document.getElementById("transport").textContent =
        "KES " + transportExpenses;

    document.getElementById("rent").textContent =
        "KES " + rentExpenses;

    document.getElementById("entertainment").textContent =
        "KES " + entertainmentExpenses;

    document.getElementById("savings").textContent =
        "KES " + savings;

    document.getElementById("utilities").textContent =
        "KES " + utilitiesExpenses;

    if (remainingBalance >= 0) {

        document.getElementById("message").textContent =
            "Great! You have KES " + remainingBalance +
            " remaining in your budget.";

    } else {

        document.getElementById("message").textContent =
            "Warning! You have exceeded your budget by KES " +
            Math.abs(remainingBalance) + ".";

    }

}


// 7. CREATE THE MAIN BUDGET FUNCTION

function runSpendWise() {

    // Collect information
    collectBudgetInformation();

    // Check for invalid input
    const amounts = [
        monthlyBudget,
        foodExpenses,
        transportExpenses,
        rentExpenses,
        entertainmentExpenses,
        savings,
        utilitiesExpenses
    ];

    if (
        amounts.some(amount =>
            !Number.isFinite(amount) || amount < 0
        ) ||
        monthlyBudget <= 0
    ) {

        alert("Please enter valid positive numbers for your budget and expenses.");

        return;

    }

    // Perform calculations
    totalExpenses = calculateTotalExpenses();

    remainingBalance = calculateRemainingBalance(
        monthlyBudget,
        totalExpenses
    );

    // Display results
    displayBudgetReport();

    // Update the dashboard
    updateDashboard();

}


// 8. CONNECT JAVASCRIPT TO THE BUTTON

document.getElementById("startButton").addEventListener(
    "click",
    runSpendWise
);


// 9. DISPLAY A MESSAGE WHEN THE APPLICATION LOADS

console.log("SpendWise JavaScript loaded successfully!");
console.log("Click the Start Budget Calculation button to begin.");

