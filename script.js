const quizdata =[
    {
        question:"who is CEO of Vivo ?",
        a:"Iniyan",
        b:"Robert",
        c:"Dany lee",
        d:"shen wei",
        correct:"d",
    },
    {
        question:"what does css stands for ?",
        a:"Central style sheets",
        b:"Cascading style sheets",
        c:"Cascading simple sheets",
        d:"Cars Suv sailboats",
        correct:"b",
    },
    {
        question:"who is CEO of flipkart ?",
        a:"Albert",
        b:"Marcel",
        c:"Kalyan kirshnamurthy",
        d:"justin",
        correct:"c",
    },

];
const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const optionA = document.getElementById('optionA')
const optionB = document.getElementById('optionB')
const optionC = document.getElementById('optionC')
const optionD = document.getElementById('optionD')
const submitBtn = document.getElementById("submit")

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz(){

    deselectAnswers()

    const currentQuizData= quizdata[currentQuiz]

    questionEl.innerText=currentQuizData.question
    optionA.innerText=currentQuizData.a
    optionB.innerText=currentQuizData.b
    optionC.innerText=currentQuizData.c
    optionD.innerText=currentQuizData.d
}

function deselectAnswers(){
 answerEls.forEach(answerEl => answerEl.checked = false)
}
function getselected(){

let answer

answerEls.forEach(answerEl => {
    if(answerEl.checked){
        answer=answerEl.id
    }
})

return answer
}

submitBtn.addEventListener('click',()=>{
    const answer = getselected()
    if(answer){
        if(answer === quizdata[currentQuiz].correct){
            score++
        }
        currentQuiz++

        if(currentQuiz < quizdata.length){
            loadQuiz()
        }else{

            quiz.innerHTML =`
            <h2>Your Answer ${score}/${quizdata.length} Questions Correct </h2>

        <button onclick="location.reload()">TRY AGAIN</button>
        `
        }
    }
})