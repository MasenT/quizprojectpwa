
var currentQuestion = 0; // the question we are currently on

var score = 0; // numbers of correct questions

// questions is an array of question objects
var questions = [
   {
	"question": "What company created Team Fortress 2?",
	"a": "Blizzard",
	"b": "Activision",
	"c": "Valve",
	"d": "Epic Games",
	"image":"quizimages/q1.jpg",
	"answer": "c"
   },
   {
	"question": "When was Team Fortress 2 released?",
	"a": "1999",
	"b": "2007",
	"c": "2009",
	"d": "2012",
	"image":"quizimages/q2.jpg",
	"answer": "b"
   },
   {
	"question": "What year does the game take place?",
	"a": "1953",
	"b": "1968",
	"c": "1986",
	"d": "1998",
	"image":"quizimages/q3.png",
	"answer": "b"
   },
   {
	"question": "What year does the current comic series take place?",
	"b": "1969", 
	"a": "1968",
	"c": "1971",
	"d": "1972",
	"image":"quizimages/q4.jpg",
	"answer": "d"
   },
   {
   	"question": "For what reason was the war between RED (Redmond) and BLU (Blutarch) started?",
	"a": "Weapons",
	"b": "Land",
	"c": "Money",
	"d": "Hatred",
	"image":"quizimages/q5.jpg",
	"answer": "b"
   },
   {
	"question": "What does RED stand for?",
	"a": "Reliable Excavation Demolition",
	"b": "Redmonds Elite Demolitionists",
	"c": "Red Extermination Department",
	"d": "Reliable Explosives Disposal",
	"image":"quizimages/q6.png",
	"answer": "a"
   },
   {
	"question": "What does BLU stand for?",
	"a": "Builders Leading Unity",
	"b": "Blue Legion Union",
	"c": "Builders League United",
	"d": "Blutarchs Labour Unit",
	"image":"quizimages/q7.png",
	"answer": "c"
   },
   {
	"question": "Who ran Mann Co. until 1972?",
	"a": "Saxton Hale",
	"b": "Redmond Mann",
	"c": "Blutarch Mann",
	"d": "Gray Mann",
	"image":"quizimages/q8.png",
	"answer": "a"
   },
   {
	"question": "Who is the Scout's dad?",
	"a": "Medic",
	"b": "Tom Jones",
	"c": "Engineer",
	"d": "Spy",
	"image":"quizimages/q9.png",
	"answer": "d"
   },
   {
	"question": "Who was Soldier's former roommate?",
	"a": "The Headless Horseless Horseman",
	"b": "Merasmus",
	"c": "Demoman",
	"d": "The Skeleton King",
	"image":"quizimages/q10.jpg",
	"answer": "b"
   }
 ];
 
//register the service worker when the js loads
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js');
}
 
 
 
 
 // run code when the body loads
 function initialize() {
	 document.getElementById("lightbox").style.display="none";
	 //alert("Look! I'm running an initialization function!");
	 loadQuestion();
 };
 
 
 // load the current question on the page
 function loadQuestion() {
	 let message = "";
	 
	 // true if on the last question
	 if (currentQuestion == questions.length) {
		 message = "You have finished the quiz! Your Score is " + score + " / " +
		 questions.length + ". Click to start again";
		 if (score == 10) {
			 message = "Your final score is " + score + " / " + questions.length + " ! You are a TF2 Master! Click to start again.";
			// show the lightbox with feedback
			document.getElementById("lightbox").style.display="block";
			document.getElementById("message").innerHTML = message;
			currentQuestion = 0;
			score = 0;
		} // if score 10
		 if (score >= 8 && score <=9) {
		 message = "Your final score is " + score + " / " + questions.length + ". You are a TF2 Fan! Click to start again.";
			// show the lightbox with feedback
			document.getElementById("lightbox").style.display="block";
			document.getElementById("message").innerHTML = message;
			currentQuestion = 0;
			score = 0;
		} // if score 8 - 9
		 if (score >= 6 && score <=7) {
		 message = "Your final score is " + score + " / " + questions.length + ". You are a Regular TF2 Player! Click to start again.";
			// show the lightbox with feedback
			document.getElementById("lightbox").style.display="block";
			document.getElementById("message").innerHTML = message;
			currentQuestion = 0;
			score = 0;
		 } // if score 6 - 7
		 if (score >= 3 && score <=5) {
		 message = "Your final score is " + score + " / " + questions.length + ". You are a Casual TF2 Player! Click to start again.";
			// show the lightbox with feedback
			document.getElementById("lightbox").style.display="block";
			document.getElementById("message").innerHTML = message;
			currentQuestion = 0;
			score = 0;
		 } // if score 3 - 5
		 if (score >= 1 && score <=2) {
		 message = "Your final score is " + score + " / " + questions.length + ". You are a TF2 Newbie! Click to start again.";
			// show the lightbox with feedback
			document.getElementById("lightbox").style.display="block";
			document.getElementById("message").innerHTML = message;
			currentQuestion = 0;
			score = 0;
		 } // if score 1 - 2
		 if (score >0 && score <=1) {
		 message = "Your final score is " + score + " / " + questions.length + ". You seem to be unfamiliar with TF2! You should try it! Click to start again.";
			// show the lightbox with feedback
			document.getElementById("lightbox").style.display="block";
			document.getElementById("message").innerHTML = message;
			currentQuestion = 0;
			score = 0;
		 } // if score 0
	 } // if on last question
	
	 
	 // preload the image
	 var img = document.getElementById("image");
	 var preLoadImg = new Image();
	 preLoadImg.src = questions[currentQuestion].image;
	 
	 preLoadImg.onLoad = function () {
		img.width = this.width;
	 }
     img.style.maxWidth = "500px";
	 img.src = preLoadImg.src;
	 
	
	// load the question
	document.getElementById("question").innerHTML = questions[currentQuestion].question;
	document.getElementById("a").innerHTML = "A." + questions[currentQuestion].a;
	document.getElementById("b").innerHTML = "B." + questions[currentQuestion].b;
	document.getElementById("c").innerHTML = "C." + questions[currentQuestion].c;
	document.getElementById("d").innerHTML = "D." + questions[currentQuestion].d;
   
  // document.getElementById("image").src = questions[currentQuestion].image
 } // loadQuestion
 
 
 // mark the current question
 function markIt(ans) {
	let message = "";
	 
	// if the answer is correct add to score and move to next question
    if (ans == questions[currentQuestion].answer) {
		// alert("Correct"); // don't use alerts in real web design..too 1995
		
		// add to score and move to next question
		score = score + 1; // or score++ or score +=1
		document.getElementById("score").innerHTML = score + " / " + questions.length;
		
		message = "Correct Answer! Your score is " + score + " / " + questions.length;
	} // if
  
	
  
	// otherwise notify user the answer is incorrect
    else {
	message = "Incorrect Answer! Your score is " + score + " / " + questions.length;
	} // else

	
	// show the lightbox with feedback
	document.getElementById("lightbox").style.display="block";
	document.getElementById("message").innerHTML = message;
	
	// move to the next question
	currentQuestion++; // add 1 to currentQuestion
	loadQuestion();
		



 }  // markIt
 
	//Restarts quiz when quiz is unfocused
	window.onblur = function() { tabOpened();};
	function tabOpened() {
	 message = "Tab unfocused! Click to restart. Just making sure you're not trying to cheat. :)"
	 document.getElementById("lightbox").style.display="block";
	 document.getElementById("message").innerHTML = message;
	 currentQuestion=0;
	 score=0;
	 loadQuestion();
	 document.getElementById("score").innerHTML = score + " / " + questions.length;
	} // Restarts quiz when quiz is unfocused
 
	function skipQuestion() {
	currentQuestion++;
	score = score - 1;
	loadQuestion();
	}
 
 	// close the lightbox
	function closeLightBox() {
	 document.getElementById("lightbox").style.display="none";
	} //closeLightBox
