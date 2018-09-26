var input = process.argv[2];
function countletters(inputString){
  var length = inputString.length;
  var letters = {};
  for(var i = 0; i < length; i++){
    if(inputString[i] in letters){
      letters[inputString[i]].push(i);
    } else if (inputString[i] === ' ') {
    }
    else {
      var indiceArray = [];
      indiceArray.push(i);
      letters[inputString[i]] = indiceArray;
    }
  }
  return letters;
}
console.log(countletters(input));



