$(document).ready(function() {

  var questions = {
  	q1: "What is Neo's real name?",
  	q2: "What are the Agents after?",
  	q3: "When taken, what color was the pill Morpheus offers that allows the recipient to wake up from the Matrix?",
  	q4: "What is the first martial art form Neo learns?"
  }
  
  var questionIndex = 0

  var questionsArray = [questions.q1, questions.q2, questions.q3, questions.q4]
  

  var answers = {
    a1: ["John P. Black", "Thomas A. Anderson", "James L. Burns", "Peter N. Fitzgerald"],
    a2: ["Neo", "The Oracle", "Access codes to the Zion mainframe", "The Lady in the Red Dress"],
    a3: ["red", "yellow", "green", "blue"],
    a4: ["Judo", "Taekwondo", "Jujutsu", "Kung Fu"]
  }

  var answersIndex = 0

  var answersArray = [answers.a1, answers.a2, answers.a3, answers.a4]
  
  var displayAnswer = ["Thomas A. Anderson", "Access codes to the Zion mainframe", "blue", "Kung Fu"]

  var displayAnswerIndex = 0

  var answerValues = {
    v1: [0, 1, 0, 0],
    v2: [0, 0, 1, 0],
    v3: [1, 0, 0, 0],
    v4: [0, 0, 0, 1]
  }

  var ValuesIndex = 0

  var correctGif = ["https://giphy.com/embed/Mtln6vg7Ph4Yw", "https://giphy.com/embed/BJLIhJQIcgnPa", "https://giphy.com/embed/113P5us0pgBcpa", "https://giphy.com/embed/3o7btNhMBytxAM6YBa"]

  var correctGifIndex = 0 

  var incorrectGif = ["https://giphy.com/embed/G1C40uYwoBTby", "https://giphy.com/embed/nGnKGLOqzhfGM", "https://giphy.com/embed/hmbAsOkRpwtri", "https://giphy.com/embed/VLCrn1EUswFO"]

  var incorrectGifIndex = 0

  var outOfTimeGif = ["https://giphy.com/embed/3ornjXizVZDbngmjRK", "https://giphy.com/embed/xAsQU9jATql1e", "https://giphy.com/embed/7cGl3Eyng4Vj2", "https://giphy.com/embed/l0IyhWl9rB1J9vyw0"]

  var outOfTimeGifIndex = 0

  var timeLeft = 30
  
  var correctAnswers = 0

  var incorrectAnswers = 0

  var unAnswered = 0



  var answerValues = [answerValues.v1, answerValues.v2, answerValues.v3, answerValues.v4]

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
      setTimeout(clear, 6000)
      setTimeout(renderQuestion, 6000)
      setTimeout(renderQ1Answers, 6000)
  }

  function wrong() {

      document.getElementById("wrong-right").innerHTML = "Wrong!"
      document.getElementById("questions").innerHTML = displayAnswer[displayAnswerIndex]
        $("#multiple-choice").empty()
        $("#image-gif").html("<iframe src=" + incorrectGif[incorrectGifIndex] + " width='480' height='270' frameBorder='0' class='giphy-embed' allowFullScreen></iframe>")
      incorrectAnswers++
      indexAdder()
      setTimeout(clear, 6000)  
      setTimeout(renderQuestion, 6000)
      setTimeout(renderQ1Answers, 6000)

  }

  function outOfTime() {
      document.getElementById("questions").innerHTML = displayAnswer[displayAnswerIndex]
      $("#multiple-choice").empty()
      $("#image-gif").html("<iframe src=" + outOfTimeGif[outOfTimeGifIndex] + " width='480' height='270' frameBorder='0' class='giphy-embed' allowFullScreen></iframe>")
        indexAdder()
        
        unAnswered++
        

      // $("#image-gif").html("<iframe src=" + incorrectGif[incorrectGifIndex] + " width='480' height='270' frameBorder='0' class='giphy-embed' allowFullScreen></iframe>")
      
      setTimeout(renderQuestion, 6000)
      setTimeout(renderQ1Answers, 6000)
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




	    
		    
				
      


      





    



        
        
     
