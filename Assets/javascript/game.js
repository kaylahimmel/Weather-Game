// VARIABLES -----------------------------------------------------------------------------------
// Assign variables
var choiceClasses = [".overcast", ".lightning", ".storm", ".tornado"]
var currentScore = 0;

// Assign random goal score to appear at the start of each game in the HTML between 19-120
var ranGoal = Math.floor(Math.random() * 121) + 19;
console.log(ranGoal)


// Start Round or new game
var startGame = {
    // set new goal score
    $(".goal").textContent(ranGoal);
    // set userscore to 0
    $(".score").empty();
    // assign new values to the images
    $(ranValue).text(choiceClasses[i]);

};


// check to see if they won
var checkWin = {
    // update the wins/losses section
    if (userScore === ranGoal ) {
            wins++;
    } else if ( userScore > ranGoal) {
            losses++;
    }
};


// Create random values between 1 - 12
var ranValue = Math.floor(Math.random()) + 1;
    console.log(ranValue);


// Assign random values (ranValue) to the HTML images
for (var i = 0; i < choiceClasses.length; i++) {
    (choiceClasses).indexOf(ranValue);
};


// Have values from the images that have been clicked add to the user's score--assign to HTML class: .userScore
// something like this code maybe?
//var numbering = function(number) {
    //currentNumber = currentNumber.concat(number);
var classChoices = $(".choices").on("click", function() {
    var number = parseInt($(this).attr("ranValue"));
    currentScore += number;
});