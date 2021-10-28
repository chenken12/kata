const repeatNumbers = function(data) {
  // Put your solution here
  let str = "";
  for (let i of data) {
    for (let j = 0; j < i[1]; j++) {
      str += i[0];
    }
    //console.log(i);
    str += ", ";
  }
  return str.slice(0, -2);
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));