var startButton = document.getElementById("start-game")
console.log(startButton);
var timerE1 = document.querySelector("#timer");
var score=0;
var timer=30;
var questionCount=0;

// the question object is used to contain the information to create a question along with the correct option
// the C stands for correct, X for incorrect.
var Question1={
    Q:"What JS command can be used to select an element from a document?",
    A1:"C",
    A2:"X",
    A3:"X",
    A4:"X",
    O1:"querySelector",
    O2:"readHTML",
    O3:"getInnerHTML",
    O4:"push",
};
var Question2={
    Q:"What attribute can be used to store additional information about and element in JS?",
    A1:"X",
    A2:"X",
    A3:"X",
    A4:"C",
    O1:"form",
    O2:"class",
    O3:"additonal-information",
    O4:"data-*",
};
var Question3={
    Q:"Where do you insert the JS link within an HTML document",
    A1:"X",
    A2:"C",
    A3:"X",
    A4:"X",
    O1:"The head",
    O2:"The end of the body",
    O3:"The start of the body",
    O4:"a meta tag",
};
var Questions = [Question1,Question2,Question3];

// this creates the question 
var createQuestions=function(Question){
    var questionE1=document.createElement("div");
    questionE1.className="Question";
    var question=document.createElement("h2");
    question.textContent=Question.Q;
    questionE1.appendChild(question);

    var answers=document.createElement("ul");
    
    var answer1=document.createElement("li");
    answer1.innerHTML =
    "<button data-answer='"+Question.A1+"'id='O1' class='option'>" + Question.O1 + "</button>";
    //answer1.setAttribute("data-answer",Question.A1);
    answers.appendChild(answer1);
    
    var answer2=document.createElement("li");
    answer2.innerHTML =
    "<button data-answer='"+Question.A2+"'id='O2' class='option'>" + Question.O2 + "</button>";
    //answer2.setAttribute("data-answer",Question.A2);
    answers.appendChild(answer2);
    
    var answer3=document.createElement("li");
    answer3.innerHTML =
    "<button data-answer='"+Question.A3+"'id='O3' class='option'>" + Question.O3 + "</button>";
    //answer3.setAttribute("data-answer",Question.A3);
    answers.appendChild(answer3);
    var answer4=document.createElement("li");
    answer4.innerHTML =
    "<button data-answer='"+Question.A4+"'id='O4' class='option'>" + Question.O4 + "</button>";
    //answer4.setAttribute("data-answer",Question.A4);
    answers.appendChild(answer4);
    questionE1.appendChild(answers);
    answers.addEventListener("click",checkAnswer);
    document.body.appendChild(questionE1);
    

};
// deletes the start text when the game button is clicked.
deleteStart=function(){
var toDelete = document.querySelector(".start-btn");
console.log(toDelete);
toDelete.remove();
};
deleteQuestion=function(){
    var toDelete = document.querySelector(".question");
    console.log(toDelete);
    toDelete.remove();
    };
var startGame=function(){
deleteStart();
//createQuestions(Questions);
console.log("button clicked")

myInterval=setInterval(timeChange,1000);
if (timer<=0){
    clearInterval(myInterval);
}

    if (timer>0){
        createQuestions(Questions[questionCount]);
    }

//while (timer<0){
 //   setTimer();
//}



};

var checkAnswer=function(event){
    
    

        
        //if (event.)
        console.log(event.target);
        var clickID= event.target.getAttribute("data-answer");
        console.log(clickID);
        console.log(clickID);
        var clickedId = event.target.getAttribute("id");
        if (clickID=="C"){
            window.alert("Correct! +1 to your score.");
            score+=1;
            console.log(score);
            deleteQuestion();
        }
        else{
            window.alert("Incorrect -5 seconds off your time");
            console.log(timer);
            timer-=5;
            timerE1.innerHTML="<h3>"+timer+"</h3>";
            deleteQuestion();

        }
    };

var timeChange=function(){
console.log("timer entered")

timerE1.innerHTML="<h3>"+timer+"</h3>";
timer--;

};



startButton.addEventListener("click", startGame);
