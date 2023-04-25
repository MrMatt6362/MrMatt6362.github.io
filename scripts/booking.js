/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let costPerDay = 35;
let numberDays = 0;
var totalCost = 0;
var clearButton = document.getElementById("clear-button");

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

/*
function changeToClicked(dayOfWeek) {
    var element = document.getElementById(dayOfWeek);
    element.classList.add("clicked");
}


document.getElementsByClassName("blue-hover").onclick = changeToClicked(docunent.getElementById);
*/

var mondayButton = document.getElementById("monday");
var tuesdayButton = document.getElementById("tuesday");
var wednesdayButton = document.getElementById("wednesday");
var thursdayButton = document.getElementById("thursday");
var fridayButton = document.getElementById("friday");

mondayButton.onclick = function() {
    mondayButton.classList.toggle("clicked");
    numberDays++;
    calculate();
};

tuesdayButton.onclick = function() {
    tuesdayButton.classList.toggle("clicked");
    numberDays++;
    calculate();
}

wednesdayButton.onclick = function() {
    wednesdayButton.classList.toggle("clicked");
    numberDays++;
    calculate();
}

thursdayButton.onclick = function() {
    thursdayButton.classList.toggle("clicked");
    numberDays++;
    calculate();
}

fridayButton.onclick = function() {
    fridayButton.classList.toggle("clicked");
    numberDays++;
    calculate();
}

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

clearButton.onclick = function() {
    totalCost = 0;
    document.getElementById("calculated-cost").innerHTML = totalCost;
    mondayButton.classList.remove("clicked");
    tuesdayButton.classList.remove("clicked");
    wednesdayButton.classList.remove("clicked");
    thursdayButton.classList.remove("clicked");
    fridayButton.classList.remove("clicked");
}




/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
var halfDayButton = document.getElementById("half");
halfDayButton.onclick = function() {
    costPerDay = 20;
    halfDayButton.classList.add("clicked");
    fullDayButton.classList.remove("clicked");
    calculate();
}



// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
var fullDayButton = document.getElementById("full");
fullDayButton.onclick = function() {
    costPerDay = 35;
    fullDayButton.classList.add("clicked");
    halfDayButton.classList.remove("clicked");
    calculate();
}




/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function calculate() {
    totalCost = numberDays * costPerDay;
    document.getElementById("calculated-cost").innerHTML = totalCost;
}


/*
pseudoButton.onclick = function() {
document.getElementById("calculated-cost").innerHTML = totalCost;
}
*/