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
    var questionDelete = document.querySelector(".Question");
    console.log(questionDelete);
    questionDelete.remove();
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
    
        questionCount++;

        
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
            if(questionCount<Questions.length){
            createQuestions(Questions[questionCount]);
            }
            else{endGame();}
        }
        else{
            window.alert("Incorrect -5 seconds off your time");
            console.log(timer);
            timer-=5;
            timerE1.innerHTML="<h3>"+timer+"</h3>";
            deleteQuestion();
            if(questionCount<Questions.length){
                createQuestions(Questions[questionCount]);
                }
                else{endGame();}
        }
    };



var timeChange=function(){
if(timer<=0){
    timer=30;
    alert("Out of Time!");
    endGame();
}
console.log("timer entered")

timerE1.innerHTML="<h3>"+timer+"</h3>";
timer--;

};
var endGame=function(){

var highScore=document.createElement("div");
var highScoreH2=document.createElement("h2");
highScoreH2.innerHTML="<h2 id='high-score>High Score"
var userName=document.createElement("form")
userName.innerHTML=
"<input type='text' id='form-user' name='user-name placeholder='enter your name'/>"
var userButton=document.createElement("Button");
userButton.innerHTML="<button id='save' type='submit>Save</button>"
var saveID=userName.innerText;
userName.appendChild(userButton);
console.log(saveID);
userName.setAttribute("id",saveID);

highScore.appendChild(userName);

document.body.appendChild(highScore);
loadHS();




addEventListener("submit",handleSubmit);

};

var handleSubmit =function(){
    var nameValue = document.getElementById("form-user").value;
    var hsObj={
        bestScore:score,
        name:nameValue,
        
    
    }
    console.log(hsObj);

    hs.push(hsObj);
    saveHS()
    createHS(hsObj);

}

var createHS=function(obj){
var elem=document.createElement("div")
elem.innerHTML="<h4 id='"+obj.nameValue+"'>Score of: "+obj.bestScore+"by "+obj.name+"</h4>";
document.body.appendChild(elem);
};

var saveHS = function() {
    localStorage.setItem("HS", JSON.stringify(hs));
  };
  

var loadHS = function() {
    var savedHS = localStorage.getItem("HS");
    // if there are no tasks, set tasks to an empty array and return out of the function
    if (!savedHS) {
      return false;
    }
    console.log("HS Found");
    // else, load up saved tasks
  
    // parse into array of objects
    savedHS = JSON.parse(savedHS);
  
    // loop through savedTasks array
    for (var i = 0; i < savedHS; i++) {
      // pass each task object into the `createTaskEl()` function
      createHS(savedHS[i]);
    }
  };



//startButton.addEventListener("click", startGame);
endGame();
