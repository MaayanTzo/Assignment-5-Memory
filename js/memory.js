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

//create new card for each object and set image, reveal image when card is clicked:

$.each(cardMatches, function (index, value) {
    console.log(value);
    var newCard = $("<div />");
    newCard.addClass("col-xs-6 col-md-3 card anon");
    newCard.data("name", cardMatches[index]["name"]);
    var heroClass = cardMatches[index]["class"];
    newCard.addClass("card");
    newCard.addClass(heroClass);
    newCard.toggleClass(heroClass);
    $(".row").append(newCard);
    //toggle the class when card is clicked:
    function revealCard() {
        $(this).toggleClass("anon");
        $(this).toggleClass(heroClass);
        var that = $(this);
        //flip the card back over after one second:
        setTimeout(function () {
            that.toggleClass("anon");
            that.toggleClass(heroClass);
        }, 1000);
    }
    newCard.on("click", revealCard);
});




