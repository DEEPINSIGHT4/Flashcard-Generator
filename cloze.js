function ClozeCard (partial,fulltext){
	this.partial = partial;
	this.fulltext = fulltext;
};


var inquirer = require("inquirer");
var clozeData = require("./cloze.json");


var cardArray = [];
for(var i =0; i<clozeData.length; i++){
	var
}