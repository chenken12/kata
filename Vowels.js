const numberOfVowels = function(data) {
  // Put your solution here
  let vowels = ["a", "e", "i", "o", "u"];
  let count = 0;

  for (let i = 0; i < data.length; i++) {
    for (let v = 0; v < data.length; v++) {
      if (data[i] === vowels[v]) {
        count++;
        break;
      }
    }
  }
 return count;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));