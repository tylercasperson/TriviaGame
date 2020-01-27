$(document).ready(function() {

    console.log(localStorage.getItem("numberCorrect"));
    console.log($(".results"));
    var numberCorrect = localStorage.getItem("numberCorrect")
    $(".results").text("Congragulations! You scored: " + numberCorrect); 
    $(".results").append("<br><button class='playAgain'><a href='./index.html'>Play Again?</a></button><button class='study'><a href='https://www.omniglot.com/language/numbers/index.htm'>Study materials?</a></button>");

 

        
}); //end of document.ready
