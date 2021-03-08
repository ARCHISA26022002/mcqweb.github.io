var bleep=new Audio();
bleep.src="Clickaudio.mp3"




var f = 0;
function check() {

    var q1 = document.quiz.ques1.value;

    var q2 = document.quiz.ques2.value;
    var q3 = document.quiz.ques3.value;
    var q4 = document.quiz.ques4.value;
    var q5 = document.quiz.ques5.value;
    var q6 = document.quiz.ques6.value;
    var q7 = document.quiz.ques7.value;
    var q8 = document.quiz.ques8.value;
    var q9 = document.quiz.ques9.value;
    var q10 = document.quiz.ques10.value;
    var finalresult = document.getElementById("finalresult");

    if (q1 == "FIVE") { f++ }
    else { f-- }
    if (q2 == "ELEVEN") { f++ }
    else { f-- }
    if (q3 == "16") { f++ }
    else { f-- }
    if (q4 == "- 30") { f++ }
    else { f-- }
    if (q5 == "FIVE") { f++ }
    else { f-- }
    if (q6 == "THREE") { f++ }
    else { f-- }
    if (q7 == "SIX") { f++ }
    else { f-- }
    if (q8 == "+ 27") { f++ }
    else { f-- }
    if (q9 == "FOUR") { f++ }
    else { f-- }
    if (q10 == "114") { f++ }
    else { f-- }
    if (f <= 5) {

        finalresult.innerHTML = ' RETRY THE QUIZ!!!☹️. <br> Your Score is:  ';
        finalresult.innerHTML += f;
        
    }
    else if (5 < f < 10) {

        finalresult.innerHTML = ' CONGRATULATIONS!!!!!!!😀.<br>   Your Score is:  ';
        finalresult.innerHTML += f;
    }
    else if (f==10) {

        finalresult.innerHTML = ' WELL DONE!!!!!!!😀👍🏻. <br> Your Score is:  ';
        finalresult.innerHTML += f;
    }
let que_count=0;
let que_numb=1;
let counter;   
}
