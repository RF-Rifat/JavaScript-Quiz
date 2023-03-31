const resultMes = document.getElementById('result-mes')

function resultMessage(){
    const totalQuestions = questions.length;
const passingScore = questions.length - 3;


const percentageScore = (userScore / totalQuestions) * 100;


if (percentageScore >= (passingScore / totalQuestions) * 100) {
  
  const message = `You scored ${userScore} out of ${totalQuestions}. Keep up the great work!`;
  console.log(message); 
  resultMes.innerHTML = `<img src="image/congratulations2.png" alt="photo" class="png-size"></img> <h5>${message}</h5>`;
} else {
  
  const message = `you scored ${userScore} out of ${totalQuestions}. You need at least ${passingScore} correct answers to pass.`;
  resultMes.innerHTML = `<img src="image/sorry2.png" alt="photo" class="png-size2"></img> <h5>${message}</h5>`;
}
}
