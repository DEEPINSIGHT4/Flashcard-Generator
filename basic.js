
var cardData = require("./basic.json");
var inquirer = require("inquirer")


//cunstructor function 
function BasicCards (front,back){
  this.front = front;
  this.back = back;
}




var cardArray = [];
for (var i=0; i<cardData.length; i++){
	var currentCard = new BasicCards (cardData[i].front,cardData[i].back);
	cardArray.push(currentCard);
};


startGame();

function startGame (){
	var card = cardArray[cardindex];
	var cardindex = 0;
   inquirer.prompt([{
	type:"input",
	name:"text",
	message:(cardArray[cardindex].front) + "\nAnswer: "
}]).then(function(answer){
	if (answer.text.trim().toLowerCase()=== card.back){
		console.log("you are correct!")
	}else{
		console.log("incorrect! the answer is :"+ card.back)
	}
	cardindex++;
});

if(cardindex>cardArray.length){
	startGame();
}
};



