const instructorWithLongestName = function(instructors) {
  // Put your solution here
  let slot = 0, len = 0;
  for (let i = 0; i < instructors.length; i++) {
    //use only greater so return the first one
    if (instructors[i].name.length > len) {
      len = instructors[i].name.length;
      slot = i;
    }
  }
  return instructors[slot];
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));