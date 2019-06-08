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
    newCard.addClass("col-xs-6 col-md-3 card anon");
    newCard.data("name", cardMatches[index]["name"]);
    var heroClass = cardMatches[index]["class"];
    newCard.addClass("card");
    newCard.addClass(heroClass);
    newCard.toggleClass(heroClass);
    //newCard.css("margin", "5px 5px 0px 0px");
    //newCard.css("box-sizing", "border-box");
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
var firstGuess="";
var secondGuess="";

//function to reset count to 0 and guesses to blank, remove selected class:

function resetCount() {
    firstGuess="";
    secondGuess="";
    count=0;
    $(".selected").removeClass("selected");
}

$(".row").on("click", function (event) {
    var clicked = $(event.target);
    if (clicked.hasClass("row")) {
        return;
    }
    if (count < 2) {
        count++;
        if (count ===1) {
            firstGuess=clicked.data("name");
            clicked.addClass("selected");
        } else {
            secondGuess=clicked.data("name");
            clicked.addClass("selected");
        }
        if (firstGuess !=="" && secondGuess !=="") {
            if (firstGuess === secondGuess) {
                setTimeout(cardsMatch,2000);
                setTimeout(resetCount,2000);
            } else {
                $(".card").addClass("notouch");
                setTimeout(allowClick, 2000);
                setTimeout(flipCardBackOver, 2000);
                setTimeout(resetCount,2000);
            }
        }
    }
})
function allowClick() {
    $(".card").removeClass("notouch");
}
function flipCardBackOver() {
    $(".selected").toggleClass("anon");
}

function cardsMatch() {
    $.each($(".selected"), function () {
        $(".selected").addClass("match");
    });

}

