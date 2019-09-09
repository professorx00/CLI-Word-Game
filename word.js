let letter = require('./letter');

let Word = function(word){
    this.word = [];
    this.wordString = [];
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
            element.checkLetter(input);
            if(element.hasBeenGuessed === true && element.letter===input.toLowerCase()){
                this.wordString.splice(index,1,input);
            }
        });
        
        this.printWord();
    }
}



module.exports =  Word;
