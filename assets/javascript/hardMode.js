$(document).ready(function() {
    
    var answers = [];
    var answerSelections = [];
    var languageUsed = [];
    var response = [1,2,3,4,5,6,7,8,9,10];

    //add timmer
    var timelimit = localStorage.getItem("timelimit");
    var intervalId;
    
    //runs the timmer
    function run() {
        clearInterval(intervalId);
        intervalID = setInterval(decrement, 1000);
    }

    //decreases the timmer
    function decrement() {
        timelimit--;
        $("#timmer").html("<h2>Better hurry! Here is your remaining time: " + timelimit + "</h2>");

        if (timelimit <= 0) { 
            stop();
            check();
        }
    }

    //events that happen when the timmer hits 0
    function stop() {
        clearInterval(intervalId);
        $("#timmer").html("<h2>" + 0 + "</h2>");
    }

    run();

    var countToTen = [
        {
            name: 'Chinese', 
            numbers: ['yi','er','san','si','wu','liu','qi','ba','jiu','shi']
        },
        {
            name: 'Croatian',
            numbers: ['jedan','dva','tri','četiri','pet','šest','sedam','osam','devet','deset']
        },
        {
            name: 'Czech',
            numbers: ['jeden','dva','tri','chtyri','pet','shest','sedm','osm','devet','deset']
        },
        {
            name: 'Danish',
            numbers: ['en','to','tre','fire','fem','seks','syv','otte','ni','ti']
        },
        {
            name: 'Dutch',
            numbers: ['een','twee','drie','vier','vijf','zes','zeven','acht','negen','tien']
        },
        {
            name: 'English',
            numbers: ['one','two','three','four','five','six','seven','eight','nine','ten']
        },
        {
            name: 'Estonian',
            numbers: ['üks','kaks','kolm','neli','viis','kuus','seitse','kaheksa','üheksa','kümme']
        },
        {
            name: 'Finnish',
            numbers: ['yksi','kaksi','kolme','neljä','viisi','kuusi','seitsemän','kahdeksan','yhdeksän','kymmenen']
        },
        {
            name: 'French',
            numbers: ['un','deux','trois','quatre','cinq','six','sept','huit','neuf','dix']
        },
        {
            name: 'German',
            numbers: ['eins','zwei','drei','vier','fünf','sechs','sieben','acht','neun','zehn']
        },
        {
            name: 'Hebrew',
            numbers: ['אחת','שנים','שלוש','ארבע','חמש','שש','שבע','שמונה','תשע','עשר']
        },
        {
            name: 'Hungarian',
            numbers: ['egy','kettö','három','négy','öt','hat','hét','nyolc','kilenc','tíz']
        },
        {
            name: 'Italian',
            numbers: ['uno','due','tre','quattro','cinque','sei','sette','otto','nove','dieci']
        },
        {
            name: 'Japanese',
            numbers: ['ichi','ni','san','yon','go','roku','nana','hachi','kyuu','juu']
        },
        {
            name: 'Norwegian',
            numbers: ['en','to','tre','fire','fem','seks','syv','åtte','ni','ti']
        },
        {
            name: 'Polish',
            numbers: ['jeden','dwa','trzy','cztery','piec','szesc','siedem','osiem','dziewiec','dziesiec']
        },
        {
            name: 'Portuguese',
            numbers: ['um','dois','três','quatro','cinco','seis','sete','oito','nove','dez']
        },
        {
            name: 'Romanian',
            numbers: ['unu','doi','trei','patru','cinci','sase','sapte','opt','noua','zece']
        },
        {
            name: 'Spanish',
            numbers: ['uno','dos','tres','cuatro','cinco','seis','siete','ocho','nueve','diez']
        },
        {
            name: 'Swedish',
            numbers: ['en','två','tre','fyra','fem','sex','sju','åtta','nio','tio']
        },
        {
            name: 'Turkish',
            numbers: ['bir','iki','üç','dört','bes','alti','yedi','sekiz','dokuz','on']
        },
        {
            name: 'Welsh (masculine)',
            numbers: ['un','dau','tri','pedwar','pump','chwech','saith','wyth','naw','deg']
        },
        {
            name: 'Welsh (feminine)',
            numbers: ['un','dwy','tair','pedair','pump','chwech','saith','wyth','naw','deg']
        }
    ];

    function setupQuestion() {
        var counter = $(".counter").text();
        var questionIndex = (counter - 1);
        //setups the possible answers
        function setupAnswers(){
            for (var i = 0; i<10; i++){
                //selects the variables for the question
                var randomSelection = Math.floor(Math.random()*countToTen.length);
                var randomLanguage = countToTen[randomSelection].name;
                var correctAnswer = countToTen[randomSelection].numbers[(i)];
                answers.push(correctAnswer);
                languageUsed.push(randomLanguage);
                var possibleAnswers = [];
                possibleAnswers.push(correctAnswer);
                do {
                    var wrongRandomSelection = Math.floor(Math.random()*countToTen.length);
                    var wrongRandomLanguage = countToTen[wrongRandomSelection].numbers[(i)];
                    if (possibleAnswers.indexOf(wrongRandomLanguage) === -1) {
                        possibleAnswers.push(wrongRandomLanguage);
                    }
                } while (possibleAnswers.length<6);
                answerSelections.push(possibleAnswers);
            }
        }
        setupAnswers();
    
        var englishNumber = countToTen[5].numbers[questionIndex];
        var languageSelected = languageUsed[questionIndex];
        var answerToQuestion = answers[questionIndex];

    //question to be asked
        var question = 'What is ' + englishNumber + ' in ' + languageSelected + '?';
        console.log('Language used: ' + languageSelected);
        console.log('English number: ' + englishNumber);
        console.log('Question ' + (counter) + ': ' + question);
        console.log('The answer is ' + answerToQuestion);

    //adds the question to the correct spot on the page
        $('#ultimateQuestion').prepend((counter) + ') ' + question + '<br>');
            
    //sets up all the possible answers
        var correctAnswer = answers[questionIndex];
        var randomSpot = Math.floor(Math.random()*5);
        answerSelections[questionIndex].shift();
        answerSelections[questionIndex][randomSpot] = correctAnswer;
        console.log(answerSelections[questionIndex]);

        var listedAnswers = answerSelections[questionIndex];
    
    //outputs the label for every possible answer
        $.each(listedAnswers, function(index, value) {
            $("#labelQuestionAnswer" + (index + 1)).text(value).addClass(value);
        });
    };

//pushes all of the guesses into an array
    $("input").on("click", function() {
        var counter = $(".counter").text();
        var questionIndex = (counter - 1);
        var answerNumber = $(this).attr('id').charAt(14) - 1;
        response[questionIndex] = answerSelections[questionIndex][answerNumber];
        console.log(response);
    });
        
    function check() {
        var correct = 0;
        for (var a = 0; a < answers.length; a++){
            if (answers[a] === response[a]) {
                correct++;
            }
            console.log(response[a]);
        }
        console.log(answers);
        console.log(response);
        localStorage.setItem("numberCorrect",correct);
    };

    function next() {
        var counter = $(".counter").text();
        if (counter === '9'){  //localStorage.getItem("i")
            $(".counter").text(parseInt(counter)+1);
            $("input").prop("checked", false);
            $('#ultimateQuestion').empty();
            $("button").empty();
            $("button").prepend('<button id="submit" form="languageOfNumbers"><a href="./finalTalley.html">Submit</a></button>');
            setupQuestion();
        } else if(counter === '10'){
            check();
        } else {
            $(".counter").text(parseInt(counter)+1);
            $("input").prop("checked", false);
            $('#ultimateQuestion').empty();
            setupQuestion();
        }
    }

    $(".next").on("click", function() {
        next();
    });
    
    setupQuestion();

}); //end of document.ready
