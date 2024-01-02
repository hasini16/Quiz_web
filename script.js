const questions=[
    {
        question:"which is the third largest iit ?",
        answers:[
            {text:"IIT kharagpur" ,correct:false },
            {text:"IIT kanpur" ,correct:true },
            {text:"IIT BHU" ,correct:false },
            {text:"IIT Bombay" ,correct:false },
        ]
    },
    {
        question:"What company was originally called Cadabra? ",
        answers:[
            {text:"Amazon" ,correct:true },
            {text:"Facebook" ,correct:false },
            {text:"Instagram" ,correct:false },
            {text:"Flipkart" ,correct:false },
        ]
    },
    {
        question:"What software company is headquartered in Redmond, Washington?",
        answers:[
            {text:"Microsoft" ,correct:true },
            {text:"Google" ,correct:false },
            {text:"Pepsi" ,correct:false },
            {text:"Nike" ,correct:false },
        ]
    },
    {
        question:"What city is known as The Eternal City ? ",
        answers:[
            {text:"italy" ,correct:false },
            {text:"china" ,correct:false },
            {text:"india" ,correct:false },
            {text:"Rome" ,correct:true },
        ]
    },
    {
        question:"In what year was the internet opened to the public?",
        answers:[
            {text:"1993" ,correct:true },
            {text:"1889" ,correct:false },
            {text:"1991" ,correct:false },
            {text:"None Of The Above" ,correct:false },
        ]
    },
    {
        question:"What sporting event has a strict dress code of all-white? ",
        answers:[
            {text:"Wimbledon" ,correct:true },
            {text:"Hockey" ,correct:false },
            {text:"Golf" ,correct:false },
            {text:"Circket" ,correct:false },
        ]
    },
    {
        question:"Who painted the Mona Lisa?",
        answers:[
            {text:"Me" ,correct:false },
            {text:" Leonardo da Vinci" ,correct:true},
            {text:"You" ,correct:false },
            {text:"ravi Kumar" ,correct:false },
        ]
    },
    {
        question:"What year was the United Nations established?",
        answers:[
            {text:"1777" ,correct:false },
            {text:"1999" ,correct:false },
            {text:"1945" ,correct:true },
            {text:"1996" ,correct:false },
        ]
    },
    {
        question:"How many faces does a Dodecahedron have?",
        answers:[
            {text:"11" ,correct:false },
            {text:"12" ,correct:true },
            {text:"4" ,correct:false },
            {text:"44" ,correct:false },
        ]
    },
    {
        question:"What country has won the most  Football World Cups?",
        answers:[
            {text:"Brazil" ,correct:true },
            {text:"poland" ,correct:false },
            {text:"uk" ,correct:false },
            {text:"Austria" ,correct:false },
        ]
    },
]
const questionelement=document.getElementById("question");
const answerbutton=document.getElementById("answer-buttons");
const nextbutton=document.getElementById("next-btn");

let currentquestionindex=0;
let score=0;
function startquiz()
{
    currentquestionindex=0;
    score=0;
    nextbutton.innerHTML="Next";
    showquestion();
}
function showquestion()
{
    resetState();
    let currentquestion=questions[currentquestionindex];
    let questionNo=currentquestionindex+1;
    questionelement.innerHTML=(questionNo)+'.'+currentquestion.question;
    currentquestion.answers.forEach(answer=>{
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerbutton.appendChild(button);
        if(answer.correct)
        {
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectanswer)
        

    });
}
 function resetState()
{
    nextbutton.style.display="none";
    while(answerbutton.firstChild)
    {
        answerbutton.removeChild(answerbutton.firstChild);
    }
}
function selectanswer(e)
{
    const selectedbtn=e.target;
    const iscorrect=selectedbtn.dataset.correct==="true";
    if(iscorrect)
    {
        selectedbtn.classList.add("correct");
        score++;
    }
    else
    {
        selectedbtn.classList.add("incorrect");
    }
    Array.from(answerbutton.children).forEach(button =>
        {
            if(button.dataset.correct==="true")
            {
                button.classList.add("correct");
            }
            button.disabled=true;
        });
        nextbutton.style.display="block";
}
function showscore()
{
    resetState();
    questionelement.innerHTML=`you scored ${score} out of ${questions.length}!`;
    nextbutton.innerHTML="play again";
    nextbutton.style.display="block";
}
function handlenextbutton()
{
    currentquestionindex++;
    if(currentquestionindex<questions.length)
    {
        showquestion();
    }
    else{
        showscore();
    }
}
nextbutton.addEventListener("click",()=>
{
    if(currentquestionindex<questions.length)
    {
        handlenextbutton();
    }
    else{
        startquiz();
    }
})
startquiz();