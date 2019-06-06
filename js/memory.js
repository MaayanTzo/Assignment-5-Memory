var superHeroes = [
    {
        name: "flash",
        img: "url('./images/flash.jpg')",
    },
    {
        name: "wonderwoman",
        img: "url('./images/wonderwoman.jpg')",
    },
    {
        name: "marvel",
        img: "url('./images/marvel.jpg')",
    },
    {
        name: "spiderman",
        img: "url('./images/spiderman.jpg')",
    },
    {
        name: "ironman",
        img: "url('./images/ironman.jpg')",
    },
    {
        name: "hulk",
        img: "url('./images/hulk.jpg')",
    },
]

//double the objects to provide a match for each:

var cardMatches = superHeroes.concat(superHeroes);

//shuffle the cards:

cardMatches.sort (function(a,b) {
    return 0.5 - Math.random();
});

//create new card for each object and set image:

$.each(cardMatches, function(index,value){
    console.log(value);
    var newCard=$("<div />");
    newCard.addClass("col-xs-6 col-md-3 card anon");
    newCard.data("name", cardMatches[index]["name"]);
    newCard.css("background-image", cardMatches[index]["img"]);
    newCard.css("background-size", "cover");
    $(".row").append(newCard);
})


