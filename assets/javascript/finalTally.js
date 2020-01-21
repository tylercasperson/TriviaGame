$(document).ready(function() {

    console.log(localStorage.getItem("numberCorrect"));
    console.log($(".results"));
    $(".results").text(localStorage.getItem("numberCorrect"));
        
}); //end of document.ready
