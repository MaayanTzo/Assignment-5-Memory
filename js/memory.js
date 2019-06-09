var superHeroes = [
    {
        name: "flash",
        img: "url('./images/flash.jpg')",
        class: "flash",
    },
    {
        name: "wonderwoman",
        img: "url('./images/wonderwoman.jpg')",
        class: "wonderwoman",
    },
    {
        name: "marvel",
        img: "url('./images/marvel.jpg')",
        class: "marvel",
    },
    {
        name: "spiderman",
        img: "url('./images/spiderman.jpg')",
        class: "spiderman",
    },
    {
        name: "ironman",
        img: "url('./images/ironman.jpg')",
        class: "ironman",
    },
    {
        name: "hulk",
        img: "url('./images/hulk.jpg')",
        class: "hulk",
    },
]

//double the objects to provide a match for each:

var cardMatches = superHeroes.concat(superHeroes);

//shuffle the cards:

cardMatches.sort(function (a, b) {
    return 0.5 - Math.random();
});

//create new card for each object and set image:

$.each(cardMatches, function (index, value) {
    //console.log(value);
    var newCard = $("<div />");
    newCard.addClass("col-xs-6 col-sm-3 card anon");
    newCard.data("name", cardMatches[index]["name"]);
    var heroClass = cardMatches[index]["class"];
    newCard.addClass("card");
    newCard.addClass(heroClass);
    newCard.toggleClass(heroClass);
    $(".row").append(newCard);
    //toggle the class to reveal image when card is clicked:
    function revealCard() {
        $(this).toggleClass("anon");
        $(this).addClass(heroClass);
        var that = $(this);
    }
    newCard.on("click", revealCard);
});


//set count to 0 and guess to blank:

var count = 0;
var firstGuess = "";
var secondGuess = "";
var previousGuess = null;

//function to reset count to 0 and guesses to blank, remove selected class:

function resetCount() {
    firstGuess = "";
    secondGuess = "";
    count = 0;
    $(".selected").removeClass("selected");
}

//function to only flip two cards at a time and check if theyre matched:

$(".row").on("click", function (event) {
    var clicked = $(event.target);
    if (clicked.hasClass("row")) {
        return;
    }
    if (count < 2) {
        count++;
        if (count === 1) {
            firstGuess = clicked.data("name");
            clicked.addClass("selected");
        } else {
            secondGuess = clicked.data("name");
            clicked.addClass("selected");
        }
        if (firstGuess !== "" && secondGuess !== "") {
            if (firstGuess === secondGuess) {
                $(".card").addClass("notouch");
                setTimeout(allowClick, 1000);
                setTimeout(cardsMatch, 1000);
                setTimeout(resetCount, 1000);
            } else {
                $(".card").addClass("notouch");
                setTimeout(allowClick, 1000);
                setTimeout(flipCardBackOver, 1000);
                setTimeout(resetCount, 1000);
            }
        }
        previousGuess = clicked;
    }
})

//no ability to click when two unmatched cards are flipped:
function allowClick() {
    $(".card").removeClass("notouch");
}

//flip unmatched cards back over:
function flipCardBackOver() {
    $(".selected").toggleClass("anon");
}

//indicate when two cards are a match:

function cardsMatch() {
    $.each($(".selected"), function () {
        $(".selected").addClass("match");
    });
    setTimeout(newGame, 10);
}

//if user wins, start new game:

function newGame() {
    if ($(".card").length == $(".match").length) {
        $("#overlay").css("visibility", "visible");
        $("#startOver").css("visibility", "visible");
        function startOver() {
            document.location.reload();
        }
        $("#startOver").on("click", startOver);
    }
}

