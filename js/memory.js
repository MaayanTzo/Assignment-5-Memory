var superHeroes = [
    {
        name: "flash",
        img: "url('../images/flash.jpg')",
    },
    {
        name: "wonderwoman",
        img: "url('../images/wonderwoman.jpg')",
    },
    {
        name: "marvel",
        img: "url('../images/marvel.jpg')",
    },
    {
        name: "spiderman",
        img: "url('../images/spiderman.jpg')",
    },
    {
        name: "ironman",
        img: "url('../images/ironman.jpg')",
    },
    {
        name: "hulk",
        img: "url('../images/hulk.jpg')",
    },
]
$.each(superHeroes, function(index,value){
    console.log(value);
    var newCard=$("<div />");
    newCard.addClass("col-xs-6 col-md-3 card anon");
    newCard.data("name", superHeroes[index]["name"]);
    newCard.css("background-img", superHeroes[index]["img"]);
    $(".row").append(newCard);
})



//to display content of each card when clicked on:

/*
cards.each(function () {
    $(this).on("click", function () {
        for (var i = 0; i < superHeroes.length; i++) {
            $(this).toggleClass("" + superHeroes[i].name + "");
        }
    })
});
*/