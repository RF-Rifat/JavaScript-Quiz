const startBtn = document.getElementById("start-btn");
const questionPage = document.querySelector('.question-section');
const rules =document.getElementById('rules');

const question = document.getElementById('Questions');
const options = document.getElementById('options');

const nextBtn = document.getElementById('next-btn');
const resultPage = document.getElementById('result');

const total_que = document.getElementById('total-que');
const showAns = document.getElementById('showAns');

let que_count = 0; 
let counter; 
let userScore = 0;
showAns.innerText = userScore;

startBtn.onclick = () => {
    que_count++;
    total_que.innerText = que_count + ' of' + ' '+ questions.length + ' Questions'
    rules.classList.add('d-none');
    questionPage.classList.remove('d-none');
    questionSection(0);
    const answers = document.querySelectorAll('.options');
    let selectedOption = null;
    let isAnswerSelected = false;
    answers.forEach(option => {
        option.addEventListener('click', () => {
            // Check if an answer is already selected
            if (!isAnswerSelected) {
                // Update the selectedOption variable
                selectedOption = option;
                // Update isAnswerSelected to true
                isAnswerSelected = true;
                
                // Show the next button
                nextBtn.classList.remove('d-none');
                // Get the innerText value of the selected option
                const selectedOptionValue = selectedOption.innerText;
                // Call the checkAnswer function with the selected option value
                checkAnswer(selectedOptionValue);
                // Check if the selected answer is correct
                if (selectedOptionValue == questions[0].answer) {
                    option.classList.add('correct-answer');
                    option.classList.remove('hover-options');
                    userScore += 1;
                } else {
                    option.classList.add('wrong-answer');
                    option.classList.remove('hover-options');
                    // Loop through all options and add the correct-answer class to the correct option
                    answers.forEach(correctOption => {
                        if (correctOption.innerText == questions[0].answer) {
                            correctOption.classList.add('correct-answer');
                            correctOption.classList.remove('hover-options');
                        }
                    });
                }
            }
        });
    });
    
    showAns.innerText = userScore;
}


let index = 0;
let score = userScore;

function questionSection(index){
    question.innerHTML = questions[index].question;
    let optionSection = '<div class="options"><span>' + questions[index].options[0]  +'</span></div>'
    + '<div class="options"><span>' + questions[index].options[1]  +'</span></div>'
    + '<div class="options"><span>' + questions[index].options[2]  +'</span></div>'
    + '<div class="options"><span>' + questions[index].options[3]  +'</span></div>'
    options.innerHTML = optionSection;
}

function checkAnswer(answer){
    if(answer == questions[index].answer){
        score++;
    }
}


nextBtn.onclick = () => {
    que_count ++
    total_que.innerText = que_count + ' of' +' '+ questions.length + ' Questions'
    nextBtn.classList.add('d-none');
    checkAnswer();
    index++;
    if (index >= questions.length) {
        // Remove "Next" button and add Result Page
        questionPage.classList.add('d-none');
        resultPage.classList.remove('d-none');
        const scoreBtn = document.getElementById('end-btn');
        scoreBtn.innerText = 'Restart';
        scoreBtn.onclick = () => {
            location.reload();
        };
        
    } else {
        questionSection(index);
        const answers = document.querySelectorAll('.options');
        let selectedOption = null;
        let isAnswerSelected = false;
        answers.forEach(option => {
            option.addEventListener('click', () => {
                // Check if an answer is already selected
                if (!isAnswerSelected) {
                    // Update the selectedOption variable
                    selectedOption = option;
                    // Update isAnswerSelected to true
                    isAnswerSelected = true;
                    // Show the next button
                    nextBtn.classList.remove('d-none');
                    // Get the innerText value of the selected option
                    const selectedOptionValue = selectedOption.innerText;
                    // Check if the selected answer is correct
                    if (selectedOptionValue == questions[index].answer) {
                        option.classList.add('correct-answer');
                        option.classList.remove('hover-options');
                        userScore++;
                        console.log(userScore)
                    } else {
                        option.classList.add('wrong-answer');
                        option.classList.remove('hover-options');
                        // Loop through all options and add the correct-answer class to the correct option
                        answers.forEach(correctOption => {
                            if (correctOption.innerText == questions[index].answer) {
                                correctOption.classList.add('correct-answer');
                                correctOption.classList.remove('hover-options');
                            }
                        });
                    }
                }
            });
        });
    }
    showAns.innerText = userScore;

    resultMessage()
    
};

  