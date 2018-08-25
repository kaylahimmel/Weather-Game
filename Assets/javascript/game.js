// VARIABLES -----------------------------------------------------------------------------------
// Assign variables
var options = [".overcast", ".lightning", ".storm", ".tornado"]
var choices = options[i];
var clickedClasses = [];
var currentScore = 0;


// Assign random goal score to appear at the start of each game in the HTML between 19-120
var ranGoal = Math.floor(Math.random() * 121) + 19;
console.log(ranGoal);


// Create random values between 1 - 12
var ranValue = Math.floor(Math.random()) + 1;
    console.log(ranValue);


// Start Round or new game
function startGame() {
    // set new goal score
    $(".goal").text(ranGoal);
    // set userscore to 0
    $(".score").empty();
    // Assign random values (ranValue) to the HTML images
    for (var i = 0; i < options.length; i++) {
        (ranValue).indexOf(options);
        (classChoices).push(clickedClasses);
    };
};


// Add the clickedClasses values to the user's score--assign to HTML class: .userScore
function classChoices() {
    $(".weather").on("click", function() {
        var number = parseInt($(this).attr("ranValue"));
        currentScore += number;
    });
};


// check to see if they won
function checkWin() {
    // update the wins/losses section
    if (userScore === ranGoal ) {
            wins++;
    } else if ( userScore > ranGoal) {
            losses++;
    }
};