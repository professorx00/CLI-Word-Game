let letter = require('./letter');

let Word = function(word){
    this.word = [];
    this.wordString = [];
    this.isWordSolved = false;
    this.turn = 1;
    for(let x=0; x<word.length;x++){
        let a = new letter(word[x]);
        this.word.push(a);     
    }
    for(let i=0;i<this.word.length;i++){
            this.wordString.push(this.word[i].createLetter());
        }
    this.printWord = function(){
        console.log(this.wordString.join(" "));
    }
    this.guess =  function(input){
        this.word.forEach((element,index) => {
            if(element.letter === input.toLowerCase()){
                this.turn--;
            }
            element.checkLetter(input);
            if(element.hasBeenGuessed === true && element.letter===input.toLowerCase()){
                console.log(`${input} was found`)
                this.wordString.splice(index,1,input);
            }
        });
        
        this.turn++;
        this.printWord();
    }
    this.checkSolution = function(){
        let check = this.wordString.filter((letter)=> letter==="_" ? true:false)
        if(check.length>0){
            this.isWordSolved = false
        }
        else{
            this.isWordSolved = true
        }
    }
}


module.exports =  Word;
