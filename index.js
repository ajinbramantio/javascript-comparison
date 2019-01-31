const gradeA = 100
const gradeB = 89
const gradeC = 69
const gradeD = 49
const gradeE = 25

function gradeLevel(score) {
  let result = ''

  if (typeof score == 'number') {
    // Determine result grade if the score is a number
    if (score <= gradeA && score > gradeB) {
      result = 'GRADE A'
    } else if (score <= gradeB && score > gradeC) {
      result = 'GRADE B'
    } else if (score <= gradeC && score > gradeD) {
      result = 'GRADE C'
    } else if (score <= gradeD && score > gradeE) {
      result = 'GRADE D'
    } else if (score < gradeE && score >= 0) {
      result = 'GRADE E'
    } else if (score < 0 || score > gradeA) {
      result = 'Score Not Valid'
    }
  } else {
    // Will not determine the result grade
    // because the score is not a number
    result = 'not number'
  }

  return result
}

const gradeResult1 = gradeLevel(0)
const gradeResult2 = gradeLevel(99)
const gradeResult3 = gradeLevel(100)
const gradeResult4 = gradeLevel(40)
const gradeResult5 = gradeLevel(20)

console.log(gradeResult1)
console.log(gradeResult2)
console.log(gradeResult3)
console.log(gradeResult4)
console.log(gradeResult5)
