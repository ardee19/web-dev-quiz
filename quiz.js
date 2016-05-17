console.log("Hi there! This message was made with JavaScript!");

var submitButton = document.getElementById("submit");
submitButton.addEventListener("click", sayHello);

function sayHello(){
	var messageBox = document.getElementById("message");
	messageBox.innerText = "Hello there, this is a message!";
}