$(document).ready(function() {

    $("a").on("click", function(){
        var timelimit = $("input").val();
        console.log('timelimit' + timelimit);
        localStorage.setItem("timelimit",timelimit);
    })
    
}); //end of document.ready
