$(document).ready(function() {

  var questions = {
  	q1: "Is the sky blue?",
  	q2: "Is dirt brown?",
  	q3: "Is this bootcamp hard?",
  	q4: "Will you succeed in this program?",
  }

  
  var correctAnswers = 0

  var incorrectAnswers = 0

  var unAnswered = 0
  
  var questionIndex = 0

  var questionsArray = [questions.q1, questions.q2, questions.q3, questions.q4]

  function startGame() {
  		document.getElementById("start").innerHTML = "start"
  		 $("#start").on("click", function() {
		 	setTimeout(startGame, 10)
			renderQuestion()
			renderQ1Answers()

  			
		 		
		 	
  		})
  }

  function renderQuestion() {
        // If there are still more questions, render the next one.
        if (questionIndex <= (questionsArray.length - 1)) {
          document.getElementById("questions").innerHTML = questionsArray[questionIndex]
console.log(questionsArray[questionIndex])
        	}
    	}

  function renderQ1Answers() {

  		var q1AnswerArray = ["green", "blue", "yellow", "pink"]
	  		$("#multiple-choice-1").append(q1AnswerArray[0])
	  		$("#multiple-choice-2").append(q1AnswerArray[1])
	  		$("#multiple-choice-3").append(q1AnswerArray[2])
	  		$("#multiple-choice-4").append(q1AnswerArray[3])
 			
			var userGuess1 = $("#multiple-choice-1").on("click", function() {
 				if (userGuess2 !== q1AnswerArray[0]) {
 					console.log("wrong!!!")
 					return
 				}
			})
 				
 			var userGuess2 = $("#multiple-choice-2").on("click", function() {
 				if (userGuess2 !== q1AnswerArray[1]) {
 					console.log("Correct!!!")
 					questionIndex++
 					renderQuestion()
 				}
 				
			})
 			
 			var userGuess3 = $("#multiple-choice-3").on("click", function() {
 				if (userGuess3 !== q1AnswerArray[2]) {
 					console.log("wrong!!!")
 				}
 				
			})

			var userGuess4 = $("#multiple-choice-4").on("click", function() {
 				if (userGuess4 !== q1AnswerArray[3]) {
 					console.log("wrong!!!")
 				}
 				
			})
  			
  		}

startGame()

})




	    
		    
				
