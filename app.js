
function containsSensitiveWords(text) {
  let keywords = [`xxx`, `sex`, `porn`]
  let lowerCase = text.toLowerCase()
  for(let keyword of keywords){
    if(lowerCase.includes(keyword)){
      return true
    }else{
      return false
    }
  }
}
  let text1 = "This is a sample text containing the word XXX.";
console.log(containsSensitiveWords(text1)); //true

let text2 = "This is a sample text without any sensitive words.";
console.log(containsSensitiveWords(text2)); //false
