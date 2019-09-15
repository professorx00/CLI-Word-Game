const WordCreator = require("./word.js");
require('dotenv').config();
const randomWord = require("./randomWords.js")
const inquirer = require("inquirer")

let turn=0;

let word = new WordCreator(randomWord());
word.printWord();

function getGuess(){
    return inquirer.prompt([
    {
        "message": "Please enter a letter to guess",
        "type": "input",
        "name": "guess",
        validate:function(value){
            if(value.length>1){
                return false
            }
            return true
        }
    }]).then((answer)=>{
        
        word.guess(answer.guess)
        console.log(`Turn: ${word.turn}`)
        word.checkSolution()
        if(word.isWordSolved){
            console.log("You Won")
        }
        else{
            if(word.turn>15){
                let correctWord = []
                word.word.forEach((element=>{
                    correctWord.push(element.letter)
                }))
                console.log("You Lose! You are out of Turns")
                console.log(correctWord.join("") + " is the word.")
            }
            else{
                startGame();
            }
        }
        
        
    })
}


function startGame(){
    
    if(word.isWordSolved){
        console.log("new game")
    }
    else{
        console.log("Can you guess the word in 15 turns?")
        getGuess()
    }
}

startGame();