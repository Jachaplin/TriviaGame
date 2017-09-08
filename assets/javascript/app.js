$(document).ready(function() {

  var questions = {
  	q1: ["Is the sky blue?", 1],
  	q2: ["Is dirt brown?", 5],
  	q3: ["Is this bootcamp hard?", 9],
  	q4: ["Will you succeed in this program?", 13]
  }

  var answerOptions = {
	  a1Choices: {
	  	a1: ["green", 2],
	  	a2: ["brown", 3],
	  	a3: ["blue", 1],
	  	a4: ["yellow", 4],
	    a2Choices: {
		  	a5: ["green", 6],
		  	a6: ["brown", 5],
		  	a7: ["blue", 7],
		  	a8: ["yellow", 8],
		    a3Choices: {
		  	    a9: ["impossible", 12],
			  	a10: ["very challenging", 9],
			  	a11: ["a light challenge", 10],
			  	a12: ["it's a breeze", 11],
				a4Choices: {
				  	a13: ["no chance in hell", 14],
				  	a14: ["if you're lucky", 15],
				  	a15: ["it's a possiblity", 16],
				  	a16: ["absolutly", 13]
		  }
		}
	  }
  	}
  }
  var correctAnswers = 0

  var incorrectAnswers = 0

  var unAnswered = 0
  
  var questionIndex = 0

  var questionsArray = [questions.q1, questions.q2, questions.q3, questions.q4]

  var answerIndex = 0

  var answerArray = [answerOptions.a1Choices.a3, answerOptions.a1Choices.a2Choices.a6, answerOptions.a1Choices.a2Choices.a3Choices.a10, answerOptions.a1Choices.a2Choices.a3Choices.a4Choices.a16]

  function renderQuestion() {
        // If there are still more questions, render the next one.
        if (questionIndex <= (questionsArray.length - 1)) {
          document.getElementById("questions").innerHTML = questionsArray[questionIndex][0]
console.log(questionsArray[questionIndex][1])
        	}
    	}

  function renderAnswers() {

  		if (answerIndex <= (answerArray.length - 1)) {
  			// console.log(event)
  	console.log(answerArray[answerIndex][1])
  // console.log(questionsArray[questionIndex][1])
  			if (questionsArray[questionIndex][1] === answerArray[answerIndex][1]) {
  				// console.log("Correct Answer!!!")
  			  }
  			else {
  				// console.log("Wrong!!!!")
  			  }
  			}
  		}

renderQuestion()
renderAnswers()


})




	    
		    
				
