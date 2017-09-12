$(document).ready(function() {

  var questions = {
  	q1: "Is the sky blue?",
  	q2: "Is dirt brown?"
  	// q3: "Is this bootcamp hard?",
  	// q4: "Will you succeed in this program?",
  }
  
  var questionIndex = 0

  var questionsArray = [questions.q1, questions.q2]
  // , questions.q3, questions.q4]

  var answers = {
    a1: ["green", "blue", "yellow", "pink"],
    a2: ["blue", "pink", "brown", "black"]
  }

  var answersIndex = 0

  var answersArray = [answers.a1, answers.a2]
  
  var displayAnswer = ["blue", "brown"]

  var displayAnswerIndex = 0

  var answerValues = {
    v1: [0, 1, 0, 0],
    v2: [0, 0, 1, 0]
  }

  var ValuesIndex = 0

  var correctGif = ["https://giphy.com/embed/3oz8xNsv8x0UgtYvn2", "https://giphy.com/embed/l2YWCz0kmmgdx8feM"]

  var correctGifIndex = 0 

  var incorrectGif = ["https://giphy.com/embed/hkMXte9dBJFfO", "https://giphy.com/embed/BiDSHFS0HFzoY"]

  var incorrectGifIndex = 0

  var outOfTimeGif = ["", ""]

  var outOfTimeGifIndex = 0

  var timeLeft = 30
  
  var correctAnswers = 0

  var incorrectAnswers = 0

  var unAnswered = 0



  var answerValues = [answerValues.v1, answerValues.v2]

  $("#start").click(renderQ1Answers)
  
  $("#start").click(renderQuestion)

  function startGame() {
      var startButton = $("<button>Start</button>")
      $("#start").append(startButton)

       $("#start").on("click", function() {
        $("#start").empty()

     
      })
  }

  function startOver() {
        var startOverButton = $("<button>Start Over?</button>")
        $("#start-over").append(startOverButton)
        
        $("#start-over").on("click", function() {
        
        reset()
        
        
     
      })
  }

  function reset() {
    $("#multiple-choice").empty()
    $("#start-over").empty()
    $("#timer").empty()
    $("#correct-answers-score").empty()
    $("#incorrect-answer-score").empty()
    $("#unanswered-score").empty()
    correctAnswers = 0
    incorrectAnswers = 0
    unAnswered = 0
    questionIndex = 0
    answersIndex = 0
    ValuesIndex = 0
    displayAnswerIndex = 0
    correctGifIndex = 0
    incorrectGifIndex = 0
    outOfTimeGifIndex = 0
    stoptimer()
    renderQuestion()
    renderQ1Answers()
    
  }

  function indexAdder () {
      correctGifIndex++
      incorrectGifIndex++
      displayAnswerIndex++
      answersIndex++
      ValuesIndex++
      questionIndex++
      outOfTimeGifIndex++
  }
  
  function renderQuestion() {
        // If there are still more questions, render the next one.
        if (questionIndex <= (questionsArray.length - 1)) {
          document.getElementById("questions").innerHTML = questionsArray[questionIndex]
          console.log(questionsArray[questionIndex])
          console.log(correctAnswers)
          
          }
  }


  function timer() {
        intervalId = setInterval(countDown, 1000)
        document.getElementById("timer").innerHTML = "Time remaining: " + timeLeft
        console.log(timeLeft)
  }

  function countDown () {
    timeLeft--
    document.getElementById("timer").innerHTML = "Time remaining: " + timeLeft
    console.log(timeLeft)
      if (timeLeft <= 0) {
        $("#timer").empty()
        stoptimer()
        outOfTime()
        
      }
  }

  function stoptimer() {
      clearInterval(intervalId);
      
      


}

  function correct() {
      document.getElementById("wrong-right").innerHTML = "Correct!"
      $("#questions").empty()
      $("#multiple-choice").empty()
      $("#image-gif").html("<iframe src=" + correctGif[correctGifIndex] + " width='480' height='270' frameBorder='0' class='giphy-embed' allowFullScreen></iframe>")
      correctAnswers++
      indexAdder()
      setTimeout(clear, 3000)
      setTimeout(renderQuestion, 3000)
      setTimeout(renderQ1Answers, 3000)
  }

  function wrong() {

      document.getElementById("wrong-right").innerHTML = "Wrong!"
      document.getElementById("questions").innerHTML = displayAnswer[displayAnswerIndex]
        $("#multiple-choice").empty()
        $("#image-gif").html("<iframe src=" + incorrectGif[incorrectGifIndex] + " width='480' height='270' frameBorder='0' class='giphy-embed' allowFullScreen></iframe>")
      incorrectAnswers++
      indexAdder()
      setTimeout(clear, 3000)  
      setTimeout(renderQuestion, 3000)
      setTimeout(renderQ1Answers, 3000)

  }

  function outOfTime() {
      document.getElementById("questions").innerHTML = displayAnswer[displayAnswerIndex]
      $("#multiple-choice").empty()
        indexAdder()
        
        unAnswered++
        

      // $("#image-gif").html("<iframe src=" + incorrectGif[incorrectGifIndex] + " width='480' height='270' frameBorder='0' class='giphy-embed' allowFullScreen></iframe>")
      
      setTimeout(renderQuestion, 3000)
      setTimeout(renderQ1Answers, 3000)
  }

  function clear() {
      $("#wrong-right").empty()
  }

  function renderQ1Answers() {
      if (answersIndex <= (answersArray.length - 1)) {
      if (ValuesIndex <= (answerValues.length - 1)) {
          timeLeft = 30
          timer()
        
        $("#image-gif").empty()
        
        // $("#wrong-right").empty()

      var answerButton1 = $("<button>" + answersArray[answersIndex][0] + "</button>")
         answerButton1.attr("data-answervalue", answerValues[answersIndex][0])
      
      var answerButton2 = $("<button>" + answersArray[answersIndex][1] + "</button>")
         answerButton2.attr("data-answervalue", answerValues[answersIndex][1])

      var answerButton3 = $("<button>" + answersArray[answersIndex][2] + "</button>")
      answerButton3.attr("data-answervalue", answerValues[answersIndex][2])

      var answerButton4 = $("<button>" + answersArray[answersIndex][3] + "</button>")
      answerButton4.attr("data-answervalue", answerValues[answersIndex][3])

      $("#multiple-choice").append(answerButton1, answerButton2, answerButton3, answerButton4)
// anything selected inside of a jquery selector needs to be in quotes exept when working with javascript reseve words such as this
        $("button").on("click", function(data) {
                  // this simply is asosiated with the html button that you click on.
           var userGuess = $(this).data("answervalue") 
           // if answer is correct
            if (userGuess === 1) {
              console.log("correct")
              stoptimer()
              correct()
              
              // renderQuestion()
              // renderQ1Answers()
            }
          // If answer is incorrect
            else {
              if (displayAnswerIndex <= (displayAnswer.length - 1)) {
                  console.log(displayAnswer[displayAnswerIndex])
                  console.log("wrong")
                  stoptimer()
                  wrong()
                  
      
              }
            }

          })
        }
      }
      // if there are no more questions
      else {
        document.getElementById("correct-answers-score").innerHTML = ("correct answers: " + correctAnswers)
        document.getElementById("incorrect-answer-score").innerHTML = ("incorrect answers: " + incorrectAnswers)
        document.getElementById("unanswered-score").innerHTML = ("unanswered: " + unAnswered)
        $("#wrong-right").empty()
        $("#questions").empty()
        $("#image-gif").empty()
        $("#multiple-choice").empty()
        stoptimer()
        startOver()

            
      }
        
  }
  startGame()

})




	    
		    
				
      


      





    



