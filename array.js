// var vowels =['a', 'e', 'i', 'o', 'u'];
// console.log(vowels);

// var s=['mango', 'papaya', 'banana'];
// s.push('jackfruite');
// s.push('bird');

// console.log(s);

// s.pop('s');
// console.log(s);

//problem grading

const yourScore = 85;
const tomScore = 66;
const janeScore = 95;
const peterScore = 56;
const johnScore = 40;


function calculateGrade(score) {
  if (score >= 80) {
    return 'A';
  } else if (score >= 60) {
    return 'B';
  } else if (score >= 50) {
    return 'C';
  } else if (score >= 40) {
    return 'D';
  } else {
    return 'F';
  }
}


console.log(`Your grade: ${calculateGrade(yourScore)}`);
console.log(`Tom's grade: ${calculateGrade(tomScore)}`);
console.log(`Jane's grade: ${calculateGrade(janeScore)}`);
console.log(`Peter's grade: ${calculateGrade(peterScore)}`);
console.log(`John's grade: ${calculateGrade(johnScore)}`);


