var input = process.argv[2];
function countletters(inputString){
  var length = inputString.length;
  var letters = {};
  for(var i = 0; i < length; i++){
    if(inputString[i] in letters){
      letters[inputString[i]] += 1;
    } else if (inputString[i] === ' ') {
    }
    else {
      letters[inputString[i]] = 1;
    }
  }
  return letters;
}
console.log(countletters(input));