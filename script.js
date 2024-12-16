function calculateScore() {
    const form = document.getElementById('quizForm');
    const resultDiv = document.getElementById('result');

    const resultBox = document.getElementById('resultBox');
    const resultImage = document.getElementById('resultImage');

    const formData = new FormData(form);
    let totalScore = 0;
    let unanswered = 0;

    for (let [key, value] of formData.entries()) {
        if (value) {
            totalScore += parseInt(value);
        } else {
            unanswered++;
        }
    }

    if (unanswered > 0) {
        resultDiv.textContent = "Please answer all questions!";
        resultDiv.style.color = "red";
        return;
    } else {
        let feedback;
        if (totalScore >= 20) {
            feedback = `Your total score is ${totalScore}. Your mental health appears to be in a good state. Keep taking care of yourself!`;
        } else if (totalScore <= 20 && totalScore >=10) {
            feedback = `Your total score is ${totalScore}. You may be experiencing some stress. Consider practicing relaxation techniques.`;
        } else {
            feedback = `Your total score is ${totalScore}.It looks like you are experiencing Stress, it might help to talk to a professional about your mental health.`;
        }
        resultDiv.textContent = feedback;
        resultDiv.style.color = "green";

        resultBox.style.display = "block"; 
        form.style.display = "none";
    }
}


function retakeTest() {
    const form = document.getElementById('quizForm');
    const resultBox = document.getElementById('resultBox');
    const resultDiv = document.getElementById('result');
    const resultImage = document.getElementById('resultImage');

    const userResponse = confirm("Do you want to retake the test?");

    if (userResponse) {
        // Reset the form and hide the result box
        form.reset();
        resultBox.style.display = "none";
        form.style.display = "block";
    }
}

// Adding the event listener to the form submission
document.getElementById('quizForm').addEventListener('submit', calculateScore);