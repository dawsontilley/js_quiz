// defines initial variables

var startButton = document.getElementById("start-game")
console.log(startButton);
var timerE1 = document.querySelector("#timer");
var score=0;
var timer=30;
var questionCount=0;
var hs=[];

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

var Question4={
    Q:"What library allows for quick access of DOM elements with ${}",
    A1:"X",
    A2:"C",
    A3:"X",
    A4:"X",
    O1:"React",
    O2:"jQuery",
    O3:"Angular",
    O4:"HTML",
};

var Question5={
    Q:"What can be used to add an element on to an array? ",
    A1:"X",
    A2:"X",
    A3:"X",
    A4:"C",
    O1:"insert()",
    O2:".pop",
    O3:".addArray",
    O4:".push",
};
var Question6={
    Q:"What is not a var type in js?",
    A1:"X",
    A2:"X",
    A3:"X",
    A4:"C",
    O1:"number",
    O2:"boolean",
    O3:"string",
    O4:"long int",
};

var Questions = [Question1,Question2,Question3,Question4,Question5,Question6];

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
// this deletes the high score html to just show the quiz again.
deleteQuestion=function(){
    var questionDelete = document.querySelector(".Question");
    console.log(questionDelete);
    questionDelete.remove();
    };
var deleteScore=function(){
var divsDel=document.querySelectorAll("div");
var h2rem=document.querySelector("#high-score");
h2rem.remove();
console.log(divsDel)
divsDel.forEach(deleteHTML);
function deleteHTML (item){
if (item.id!="timer"){
item.remove();
}
};

//divsDel.remove();
};
// this function calls the start game functione except it resets articles to not cause errors.
var restart= function(){
    console.log("restarted");
    deleteScore();
    
    timer=30;
    questionCount=0;
    myInterval=setInterval(timeChange,1000);
    if (timer<=0){
        clearInterval(myInterval);
    }
    
        if (timer>0){
            createQuestions(Questions[questionCount]);
        }
};

// called by button, deletes input for, sets timer and creates questions.
var startGame=function(){
deleteStart();
//createQuestions(Questions);
console.log("button clicked")
timer=30;
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
// this checks of the clicked option is correct.
var checkAnswer=function(event){
    
        questionCount++;

        
        //if (event.)
        //console.log(event.target);
        var clickID= event.target.getAttribute("data-answer");
        //console.log(clickID);
        //console.log(clickID);
        var clickedId = event.target.getAttribute("id");
        if (clickID=="C"){
            window.alert("Correct! +1 to your score.");
            score+=1;
            //console.log(score);
            deleteQuestion();
            if(questionCount<Questions.length){
            createQuestions(Questions[questionCount]);
            }
            else{endGame();}
        }
        else{
            window.alert("Incorrect -5 seconds off your time");
            //console.log(timer);
            timer-=5;
            timerE1.innerHTML="<h3>"+timer+"</h3>";
            deleteQuestion();
            if(questionCount<Questions.length){
                createQuestions(Questions[questionCount]);
                }
                else{endGame();}
        }
    };


// this handles the timer and is called by setInterval every second.
var timeChange=function(){
if(timer<=0){
    alert("Out of Time!");
    endGame();
}
//console.log("timer entered")

timerE1.innerHTML="<h3>"+timer+"</h3>";
timer--;

};
// called once timer hits zero or questions finished, allows for entering score.
var endGame=function(){
var timer= document.querySelector("#timer");
timer.value="0";

var temp= document.querySelector(".Question");
if(temp){
    deleteQuestion();
}
clearInterval(myInterval);

var highScore=document.createElement("div");
var highScoreH2=document.createElement("h2");
highScoreH2.innerHTML="<h2 id='high-score'>Previous Scores:</h2>";

var enterScore=document.createElement("h2");
enterScore.innerHTML="<h2>Enter your Name Below!</h2>";
var userName=document.createElement("form")
userName.setAttribute("id","hs-form");

userName.innerHTML=
"<input type='text' id='form-user' name='user-name placeholder='enter your name'/>"
var userButton=document.createElement("Button");
userButton.innerHTML="<button id='save' type='button'>Save</button>"
var saveID=userName.innerText;
userName.appendChild(userButton);
console.log(saveID);
//userName.setAttribute("id",saveID);
document.body.appendChild(highScoreH2);
loadHS();
enterScore.appendChild(userName);
highScore.appendChild(enterScore);
document.body.appendChild(highScore);





addEventListener("submit",handleSubmit);

};


// this handles the submit on the name for score.
var handleSubmit =function(e){
    e.preventDefault();
    var nameValue = document.getElementById("form-user").value;
    var hsObj={
        bestScore:score,
        name:nameValue,
        
    
    };
    console.log(hsObj);
    createHS(hsObj);
    hs.push(hsObj);
    saveHS();
    deleteForm();
    return false;
    
    

}
// handles deleting the form once it is saved.
var deleteForm=function(){
var form=document.querySelector("#hs-form");
form.remove();
createStartAgain();
};
// creates new high scores as well as those from memory.
var createHS=function(obj){
var elem=document.createElement("div")
elem.innerHTML="<h4 id='"+obj.nameValue+"'>Score of: "+obj.bestScore+" by "+obj.name+"</h4>";
document.body.appendChild(elem);
return false;
};
// creates button asking to start again.
var createStartAgain=function(){
    var startagain= document.createElement("div");
    startagain.innerHTML="<div class='start-btn'><h2>Click Here to Try Again!</h2><button class='btn' id='start-game' type='button'>Start</button>";
    document.body.appendChild(startagain);
    var startAgainButton = document.querySelector("#start-game");
    console.log("start game button"+startAgainButton);
    startAgainButton.addEventListener("click",restart);
}
// saves the HS to memory.
var saveHS = function() {
    console.log("in save function");
    localStorage.setItem("HS", JSON.stringify(hs));
  };
  
// loads HS if there is previous one in memory
var loadHS = function() {
    var savedHS = localStorage.getItem("HS");
    
    if (!savedHS) {
      return false;
    }
    console.log("HS Found");
    
    
    var saved = JSON.parse(savedHS);
    console.log("what we found in memory"+saved);
    
    for (var i = 0; i < saved.length; i++) {
      
      console.log(saved[i]);
      createHS(saved[i]);
      console.log(i+"loop of saved");
    }
  };

startButton.addEventListener("click", startGame);
//endGame();
