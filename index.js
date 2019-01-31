const gradeA = 100
const gradeB = 89
const gradeC = 69
const gradeD = 49
const gradeE = 25

function gradeLevel(score) {
  let result = ''
  if (typeof score == 'number') {
    if (score <= gradeA && score > gradeB) {
      result = 'GRADE  A'
    } else if (score <= gradeB && score > gradeC) {
      result = 'GRADE B'
    } else if (score <= gradeC && score > gradeD) {
      result = 'GRADE C'
    } else if (score <= gradeD && score > gradeE) {
      result = 'GRADE D'
    } else if (score < gradeE && score >= 0) {
      result = 'GRADE E'
    } else if (score < 0 || score > gradeA) {
      result = 'score Not Valid'
    }
    return result
  } else {
    return (result = 'not number')
  }
}
console.log(gradeLevel(0))
