const WordCreator = require("./word");
const axios = require("axios");
require('dotenv').config();
const randomWord = require("./randomWords.js")


let word = randomWord();
console.log(word)