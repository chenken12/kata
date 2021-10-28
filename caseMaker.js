const camelCase = function(input) {
  // Your code here
  let inputArr = input.toLowerCase().split(' ');
   for (let i = 0; i < inputArr.length; i++) {
    inputArr[i] = inputArr[i].charAt(0).toUpperCase() + inputArr[i].substring(1);     
   }

   return inputArr.join(''); 
}

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));