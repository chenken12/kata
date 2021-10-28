const urlEncode = function(text) {
  // Put your solution here
  text = text.trim();
  let newT = '';
  for(let letter in text) {
    if (text[letter] === " ") {
      newT += "%20";
    } else {
      newT += text[letter];
    }
  }
  return newT;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));