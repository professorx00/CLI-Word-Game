let Letter = function(letter){
    this.letter = letter.toLowerCase();
    this.hasBeenGuessed = false;
    
    this.createLetter =  function(){
       if(this.hasBeenGuessed){
           return(this.letter)
       }
       else{
           return("_");
       }
    }

    this.checkLetter =  function(input){
        if(this.letter===input.toLowerCase()){
            this.hasBeenGuessed = true;
            
        }
    }
};


module.exports = Letter;