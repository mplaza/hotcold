$(document).ready(function(){
	console.log("js file");
var number = Math.floor(Math.random()*10 + 1);
var currentGuess = 0;
var prevGuess = 0;
var direction = 0;
var proximity = null;
$(".guessBox").on("click", function(){
	if($("#userGuess").attr("value") == "Your Guess"){
		$("#userGuess").attr("value", " ");
	}
})
var ask = function(){
	$(".guessButton").on("click", function(){
	prevGuess = currentGuess;
	currentGuess = $("#userGuess").val();
	if($.isNumeric(currentGuess)==false){
		proximity = "Please guess";
		direction = "a number!";
	}
	else if (prevGuess === currentGuess){
		proximity = "Try guessing";
		direction = "something else!";
	}
	else{
	if (currentGuess >= 1 && currentGuess <= 10){
		if(currentGuess === number){
			direction = "you're right!";
		}
		else if( currentGuess < number ){
			direction = "higher!";
		}
		else {
			direction = "lower!";
		};
		if (prevGuess == 0)
			{
			proximity = " ";
		}
		else{
		if(Math.abs(number - currentGuess) < Math.abs(number - prevGuess)){
			proximity = "you're closer!";
		}
		else if (Math.abs(number - currentGuess) == Math.abs(number - prevGuess)){
			proximity = "same distance!";
		}
		else { 
			proximity = "you're farther away!";
		};
		};
	} 
	else { 
		proximity = "Please guess from";
		direction = "1-10!";
		}
};
});
};

ask();
var displayFeedback = function(){
	if (currentGuess != number) 
	{
		$(".guessFeedback").html( proximity + " " + direction);
		$(".guessFeedback").show();
	}
	else {
		$(".guessFeedback").html( "You're right!");
		$(".guessBox").css("background-color", "grey");
		$(".guessFeedback").show();
		if(confirm("Would you like to play again?"))
		{
    	window.location.reload();  
		}
	}
};
$(".guessButton").on("click", displayFeedback);
var unroundCorners = function(){
	$(".guessBox").css("border-bottom-right-radius", "0px");
	$(".guessBox").css("border-bottom-left-radius", "0px");
}
$(".guessButton").on("click", unroundCorners);
})