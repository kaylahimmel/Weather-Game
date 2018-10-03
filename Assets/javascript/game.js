// VARIABLES -----------------------------------------------------------------------------------
// Assign variables
var clickedClasses = [];
var userScore = 0;
var wins = 0;
var losses = 0;
function choices() {
    options[i];
}

var overcast = Math.floor(Math.random() * 12) + 1;
    console.log(overcast);

var lightning = Math.floor(Math.random() * 12) + 1;
    console.log(lightning);

var snow = Math.floor(Math.random() * 12) + 1;
    console.log(snow);

var tornado = Math.floor(Math.random() * 12) + 1;
    console.log(tornado);

var objects = [ 
    {   name: "overcast",
        value: (0)
    },
    {   name: "lightning",
        value: 0
    },
    {   name: "snow",
        value: 0
    },
    {   name: "tornado",
        value: 0
    }
]


// Assign random goal score to appear at the start of each game in the HTML between 19-120
var ranGoal = Math.floor(Math.random() * 121) + 19;
//console.log(ranGoal);


// Create random values between 1 - 12
var ranValue = function() {
    var value = Math.floor(Math.random() * 12) + 1;
    // console.log(value);
    return value;
}

$(document).ready(function() {

    // Start Round or new game
    function startGame() {
        // set userscore to 0
        $(".score").empty();
        // set new goal score
        $(".goal").text(" " + ranGoal);
        // Assign random values (ranValue) to the HTML images
        // for (var i = 0; i < objects.length; i++) {
        //     objects[i].value = ranValue();
        // };
    };


    // Add the clickedClasses values to the user's score--assign to HTML class: .userScore
    $(".overcast").on("click", function() {
        // console.log(overcast);
        userScore = userScore + overcast;
        $(".score").text(" " + userScore)
        checkWin();
    });

    $(".lightning").on("click", function() {
        // console.log(overcast);
        userScore = userScore + lightning;
        $(".score").text(" " + userScore)
        checkWin();
    });

    $(".snow").on("click", function() {
        // console.log(overcast);
        userScore = userScore + snow;
        $(".score").text(" " + userScore)
        checkWin();
    });

    $(".tornado").on("click", function() {
        // console.log(overcast);
        userScore = userScore + tornado;
        $(".score").text(" " + userScore)
        checkWin();
    });


    // check to see if they won
    function checkWin() {
        // update the wins/losses section
        if (userScore == ranGoal) {
            wins++;
            $(".score").html(userScore);
            $(".wins").text(" " + wins);
            alert("Woop woop, you won! Play again.")
            startGame();
        } else if ( userScore > ranGoal) {
            losses++;
            $(".score").html(userScore);
            $(".losses").text(" " + losses);
            alert("Sorry, you lose. Try again.")
            startGame();
        }
    };

startGame();

})
