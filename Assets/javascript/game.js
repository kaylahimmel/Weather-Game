// VARIABLES -----------------------------------------------------------------------------------
// Assign variables
var choiceClasses = [".overcast", ".lightning", ".storm", ".tornado"]

$(startGame) = 
    // set new goal score
    $(ranGoal) = 0;
    // set userscore to 0
    $(".userScore") = 0;
    // assign new values to the images
    $(ranValue).textContent(choiceClasses[i]) {
    // update the wins/losses section
        if function() {
            userScore === ranGoal {
                wins++;
            }
        }
        else if function() {
            userScore > ranGoal {
                losses++;
            }
        }
    };


// Create random values between 1 - 12
var ranValue = function() {
    var minValue = 1;
    var maxValue = 12;
    var ranValue = minValue + (maxValue - minValue) * Math.random() + 1;
    console.log(ranValue)
}

// assign "ranValue" to each image using HTML classes: .overcast, .lightning, .snow, .tornado






// Assign random values to the HTML images
for (var i = 0; i < choiceClasses.length; i++) {
    (ranValue).indexOf(choiceClasses);
}

// Assign random goal score to appear at the start of each game in the HTML between 19-120
var ranGoal = function() {
var minGoal = 19;
var maxGoal = 120;
var ranGoal = minGoal + (maxGoal - minGoal) * Math.random() + 1
console.log(ranGoal)
}


// Have values from the images that have been clicked add to the user's score--assign to HTML class: .userScore
// something like this code maybe?
//var numbering = function(number) {
    //currentNumber = currentNumber.concat(number);


// Hide these values until the user clicks each image (so they have to guess)



// restart the game every time the user wins or loses, maybe with a prompt so it's obvious that it restarted?
// add each win and loss to the appropriate category on the .scoreboard



// Maybe see about removing the figcaption beneath each image and instead have it show on.hover
