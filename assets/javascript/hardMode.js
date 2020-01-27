$(document).ready(function() {
    
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
        //add more lines here
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
        
    var answers = [];
    var response = [1,2,3,4,5,6,7,8,9,10];

    function setupQuestion() {
        var i = localStorage.getItem("i");
        if (i === null){
            var i = 1;
            localStorage.setItem("i",i);
        } else {
            var i = localStorage.getItem("i");
        }
        console.log(i);
        var questionIndex = (i - 1);
        
    //selects the variables for the question
        var randomSelection = Math.floor(Math.random()*countToTen.length);
        var randomLanguage = countToTen[randomSelection].name;
        var correctAnswer = countToTen[randomSelection].numbers[(questionIndex)];
        var correctAnswerSpot = Math.floor(Math.random()*5) + 1;
        var randomNumber = countToTen[5].numbers[(questionIndex)];

    //question to be asked
        var question = 'What is ' + randomNumber + ' in ' + randomLanguage + '?';
        console.log('Language used: ' + randomLanguage);
        console.log('English number: ' + randomNumber);
        console.log('Question ' + (i) + ': ' + question);
        console.log('The answer is ' + correctAnswer);
        console.log('The correct answer spot is: ' + correctAnswerSpot);

    //adds the question to the correct spot on the page
        $('#ultimateQuestion').prepend((i) + ') ' + question + '<br>');
            
    //sets up all the possible answers
        answers[questionIndex] = correctAnswer;
        var possibleAnswers = [];
        possibleAnswers.push(correctAnswer);
        console.log(possibleAnswers);

        do {
            var wrongRandomSelection = Math.floor(Math.random()*countToTen.length);
            var wrongRandomLanguage = countToTen[wrongRandomSelection].numbers[(questionIndex)];
            if (possibleAnswers.indexOf(wrongRandomLanguage) === -1) {
                possibleAnswers.push(wrongRandomLanguage);
            }
        } while (possibleAnswers.length<5);
        
    //puts the correct answer in the correct spot in the array
        possibleAnswers.splice(0, 1);
        possibleAnswers.splice(correctAnswerSpot-1, 0, correctAnswer);
        console.log(possibleAnswers);
    //outputs the label for every possible answer
        $.each(possibleAnswers, function(index, value) {
            $("#labelQuestionAnswer" + (index + 1)).text(value).addClass(value);
        });

    console.log(answers);
    localStorage.setItem("i",i);
    var selection = localStorage.setItem("guess", possibleAnswers);
    };

//pushes all of the guesses into an array

    $("input").on("click", function() {
        var i = local
        var guess = i;
        
        console.log(guess);
        response[localStorage.getItem("i")-1] = guess;
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
        if (localStorage.getItem("i") === 9){
            check();
        }
    }

    $(".next").on("click", function() {
        next();
    });
    
    setupQuestion();

}); //end of document.ready
