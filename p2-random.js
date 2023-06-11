/* CIT 281 P2 
    Name: RJ Hendrix
*/



const getRandomInteger = function(min, max){
  return Math.floor(Math.random() * (max - min) + min);
}

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
let result = "";

// returns single, random, lowercase letter
  const getRandomLetter = function() {
    return alphabet[getRandomInteger(1, alphabet.length-1)];
    }
  
// returns a random length string between 10 and 20 characters
  const getRandomString = function (minLength, maxLength) {
    let str = ""; 
    let length = Math.floor(Math.random() * (maxLength - minLength + 1) + minLength);
    for (let i = 0; i <length; i++) {
      str =+ getRandomLetter();
    }
    return str
  }
   //generates a string in ascending order
   const getSortedString  = function(string) {return string.split('').sort().join('')};


   for (let i = 0; i < getRandomInteger (5, 26); ) {
      result += getRandomLetter();
}

console.log(getSortedString(getRandomString(10, 20)));