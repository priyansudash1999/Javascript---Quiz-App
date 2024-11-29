document.addEventListener('DOMContentLoaded', () => {
    const questions = [
        {
          "question": "What is the capital of France?",
          "choices": ["Berlin", "Madrid", "Paris", "Rome"],
          "answer": "Paris"
        },
        {
          "question": "Which planet is known as the Red Planet?",
          "choices": ["Earth", "Mars", "Jupiter", "Saturn"],
          "answer": "Mars"
        },
        {
          "question": "Who wrote 'To Kill a Mockingbird'?",
          "choices": ["Harper Lee", "J.K. Rowling", "Ernest Hemingway", "George Orwell"],
          "answer": "Harper Lee"
        },
        {
          "question": "What is the largest ocean on Earth?",
          "choices": ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
          "answer": "Pacific Ocean"
        },
        {
          "question": "Which element has the chemical symbol 'O'?",
          "choices": ["Oxygen", "Osmium", "Ozone", "Oganesson"],
          "answer": "Oxygen"
        },
        {
          "question": "What is the smallest prime number?",
          "choices": ["0", "1", "2", "3"],
          "answer": "2"
        },
        {
          "question": "In which year did the Titanic sink?",
          "choices": ["1900", "1912", "1923", "1932"],
          "answer": "1912"
        },
        {
          "question": "Who painted the Mona Lisa?",
          "choices": ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
          "answer": "Leonardo da Vinci"
        },
        {
          "question": "What is the largest country in the world by land area?",
          "choices": ["Canada", "United States", "Russia", "China"],
          "answer": "Russia"
        },
        {
          "question": "What is the freezing point of water in Celsius?",
          "choices": ["0°C", "32°C", "-10°C", "100°C"],
          "answer": "0°C"
        }
    ];

    // Buttons
    const start_btn = document.getElementById('start')
    const next_btn = document.getElementById('next')
    const restart_btn = document.getElementById('play-again')
    
    // question_container
    const question_container = document.getElementById('question-container')
    const queston_text = document.getElementById('queston-text')
    const answer_options = document.getElementById('options')

    // answer-container
    const answer_container = document.getElementById('result-container')
    const your_score = document.getElementById('score')


    let currQuesIdx = 0
    let score = 0

    start_btn.addEventListener('click', startQuiz)
    next_btn.addEventListener('click', nextQuestion)
    restart_btn.addEventListener('click', restartQuiz)

    function startQuiz(){
        start_btn.classList.add('hidden')
        answer_container.classList.add('hidden')
        question_container.classList.remove('hidden')
        showQuestions()
    }

    function showQuestions(){
        next_btn.classList.add('hidden')
        queston_text.textContent = questions[currQuesIdx].question
        answer_options.innerHTML = ""
        questions[currQuesIdx].choices.forEach(option => {
            const li = document.createElement('li')
            li.classList.add('list_of_choice')
            li.textContent = option
            li.addEventListener('click', () => selectedAnswer(li, option))
            answer_options.appendChild(li)
        })
    }

    function selectedAnswer(selectedElement, choice){
        const correct_ans = questions[currQuesIdx].answer
        if(choice === correct_ans){
            Array.from(answer_options.children).forEach(option => {
              option.classList.remove('wrong')
            })
            selectedElement.classList.add('right')
            score++
        }
        else{
          Array.from(answer_options.children).forEach(option => {
            option.classList.remove('right')
          })
          selectedElement.classList.add('wrong')
        }
        next_btn.classList.remove('hidden')
    }

    function nextQuestion(){
      currQuesIdx++
      if(currQuesIdx < questions.length){
        showQuestions()
      }
      else{
        showResult()
      }
    }

    function showResult(){
      question_container.classList.add('hidden')
      answer_container.classList.remove('hidden')
      your_score.textContent = `${score} out of ${questions.length}`
    }

    function restartQuiz(){
      currQuesIdx = 0
      score = 0
      answer_container.classList.add('hidden')
      showQuestions()
      startQuiz()
    }

})