//trivia variable serves as an area where the timer, questions, done button, and answers can prepend/append to

let trivia = $("#game");

//assigns click listener to initially displayed start button to load trivia variable and add elements for user to interact with. start function is further defined below

$(document).on("click", "#startbutton", function (event) {
    game.start();
});

//assigns click listener to done button created and attached to html via js. done function is further defined below 

$(document).on("click", "#done", function (event) {
    game.done();
});

//question array including choices and correct answer 

const questions = [
    {
        question: "Where does digestion start?",
        choices: ["Mouth", "Stomach", "Small Intestine", "Large Intestine"],
        answer: "Mouth"
    },

    {
        question: "Which organ produces bile?",
        choices: ["Liver", "Gallbladder", "Pancreas", "Stomach"],
        answer: "Liver"
    },

    {
        question: "Which enzyme assists in the digestion of proteins?",
        choices: ["Trypsin", "Chymotripsin", "Amylase", "Lipase"],
        answer: "Trypsin"
    },

    {
        question: "Which enzyme assists in the digestion of carbohydrates?",
        choices: ["Trypsin", "Chymotripsin", "Amylase", "Lipase"],
        answer: "Amylase"
    },
    {
        question: "Which enzyme assists in the digestion of fats?",
        choices: ["Trypsin", "Chymotripsin", "Amylase", "Lipase"],
        answer: "Lipase"
    },
    {
        question: "Chewing is a form of:",
        choices: ["Chemical digestion", "Mechanical digestion", "Both mechanical and chemical digestion", "None of the above"],
        answer: "Both mechanical and chemical digestion"
    },
    {
        question: "Motility in the context of the digestion process refers to:",
        choices: ["GI tract contractions", "Processing of macromolecules", "Rate of calorie burning", "None of the above"],
        answer: "GI tract contractions"
    },
    {
        question: "Egestion is another term for:",
        choices: ["Excretion", "Diffusion", "Absorption", "None of the above"],
        answer: "Excretion"
    }
];

//variable that holds the start, done, countdown, and results functions. is revealed when the user clicks start 

var game = {
    correct: 0,
    incorrect: 0,
    counter: 60,

//countdown that can trigger done function if time runs out. number is assigned and can be changed from the start function 

    countdown: function () {
        game.counter--;
        $("#counter-number").html(game.counter);

        if (game.counter === 0) {
            game.done();
        }
    },

//triggered by clicking start function

    start: function () {
        timer = setInterval(game.countdown, 1000);
        $('#time').prepend('<center>Time Remaining: <span id="counter-number">60</span> Seconds</center>');
        $("#start").remove();

        //I had help with this and parts of the done function. Enclosing for loop appends questions while the enclosed one appends choices to trivia

        for (var i = 0; i < questions.length; i++) {
            trivia.append('<h2>' + questions[i].question + '</h2>');
            for (var l = 0; l < questions[i].choices.length; l++) {
                trivia.append('<input type="radio" name ="question' + '-' + i + '"value="' + questions[i].choices[l] + '">' + questions[i].choices[l]);
            }
        }
        trivia.append("<button id='done'>DONE</button>");

    },

    //checks user input against answer to determine increment or correct or incorrect variable for eight questions 

    done: function () {

        $.each($("input[name='question-0']:checked"), function () {
            if ($(this).val() == questions[0].answer) {
                game.correct++;
            } else {
                game.incorrect++;
            }

        });
        $.each($("input[name='question-1']:checked"), function () {
            if ($(this).val() == questions[1].answer) {
                game.correct++;
            } else {
                game.incorrect++;
            }

        });
        $.each($("input[name='question-2']:checked"), function () {
            if ($(this).val() == questions[2].answer) {
                game.correct++;
            } else {
                game.incorrect++;
            }

        });
        $.each($("input[name='question-3']:checked"), function () {
            if ($(this).val() == questions[3].answer) {
                game.correct++;
            } else {
                game.incorrect++;
            }

        });
        $.each($("input[name='question-4']:checked"), function () {
            if ($(this).val() == questions[4].answer) {
                game.correct++;
            } else {
                game.incorrect++;
            }

        });
        $.each($("input[name='question-5']:checked"), function () {
            if ($(this).val() == questions[5].answer) {
                game.correct++;
            } else {
                game.incorrect++;
            }

        });
        $.each($("input[name='question-6']:checked"), function () {
            if ($(this).val() == questions[6].answer) {
                game.correct++;
            } else {
                game.incorrect++;
            }

        });
        $.each($("input[name='question-7']:checked"), function () {
            if ($(this).val() == questions[7].answer) {
                game.correct++;
            } else {
                game.incorrect++;
            }

        });
        $.each($("input[name='question-8']:checked"), function () {
            if ($(this).val() == questions[8].answer) {
                game.correct++;
            } else {
                game.incorrect++;
            }

        });

        //displays results function

        this.results();
    },

    //stops timer and appends modified correct and incorrect values along with answers to trivia

    results: function () {
        clearInterval(timer);
        trivia.append("<h3>Correct: " + this.correct + "</h3>");
        trivia.append("<h3>Incorrect: " + this.incorrect + "</h3>");
        trivia.append("<h3>Answers: Mouth, Liver, Trypsin, Amylase, Lipase, Both, GI contraction, Excretion </h3>")

    }

};

