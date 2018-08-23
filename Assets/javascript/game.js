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

// Assign random values to the HtML images
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

// Assign user's score to start at 0 at the start of each--assign to class: .userScore
var userScore = function() {
    
}

// Have values from the images that have been clicked add to the user's score--assign to class: .userScore



// Assign random values to the HtML images with values between 1 - 12
// assign to classes: .overcast, .lightning, .snow, .tornado
$(".choices").click(function(){
    $("input:text").val(function(n, c){
        return c + " Griffin";
    });
});
        $("___").val("___");
    });
});
// Hide these values until the user clicks each image (so they have to guess)



// restart the game every time the user wins or loses, maybe with a prompt so it's obvious that it restarted?
// add each win and loss to the appropriate category on the .scoreboard



// Maybe see about removing the figcaption beneath each image and instead have it show on.hover
