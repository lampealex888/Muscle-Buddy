const muscleGroups = [
    {name: 'Head', soreness: 0},
    {name: 'Shoulder', soreness: 0},
    {name: 'Arm', soreness: 0},
    {name: 'Chest', soreness: 0},
    {name: 'Stomach', soreness: 0},
    {name: 'Legs', soreness: 0},
    {name: 'Hands', soreness: 0},
]
const headText = document.getElementsByClassName('headText')
const shoulderText = document.getElementsByClassName('shoulderText')
const armText = document.getElementsByClassName('armText')
const chestText = document.getElementsByClassName('chestText')
const stomachText = document.getElementsByClassName('stomachText')
const legsText = document.getElementsByClassName('legsText')
const handsText = document.getElementsByClassName('handsText')

piecesText = [headText, shoulderText, armText, chestText, stomachText, legsText, handsText]
const pieces = document.getElementsByTagName('svg')

for (let i = 0; i < pieces.length; i++) {
  let _piece = pieces[i]
  _piece.addEventListener('click', () => {
    if (muscleGroups[i].soreness < 90) {
      muscleGroups[i].soreness += 15
      piecesText[i][0].innerText = muscleGroups[i].soreness.toString()
      if (muscleGroups[i].soreness == 15) _piece.style.fill = '#c89696'
      if (muscleGroups[i].soreness == 30) _piece.style.fill = '#e19696'
      if (muscleGroups[i].soreness == 45) _piece.style.fill = '#fa6e64'
      if (muscleGroups[i].soreness == 60) _piece.style.fill = '#ff4b4b'
      if (muscleGroups[i].soreness == 75) _piece.style.fill = '#ff3232'
      if (muscleGroups[i].soreness == 90) _piece.style.fill = '#ff1919'
    }
  })

}

const resetBtn = document.getElementsByClassName('resetBtn')
resetBtn[0].addEventListener('click', () => {
  for (let i = 0; i < pieces.length; i++) {
    muscleGroups[i].soreness = 0
    pieces[i].style.fill = '#c8c8c8'
    piecesText[i][0].innerText = ''
  }
  humanBody[0].style.display = 'flex'
  instructions[0].style.display = 'block'
  submitBtn[0].style.display = 'inline'
  resultsContainer[0].innerHTML = '';
})

const submitBtn = document.getElementsByClassName('submitBtn')
submitBtn[0].addEventListener('click', () => {
  getResults()
})

const humanBody = document.getElementsByClassName('soreness-quiz')
const instructions = document.getElementsByClassName('instructions')
const resultsContainer = document.getElementsByClassName('results-container')
const headExercises = ['Deadlifts']
const shoulderExercises = ['Overhead press']
const armExercises = ['Reverse grip/close grip bench press', 'Dips', 'Close grip pull-up', 'Dumbbell curl', 'Wrist Curls']
const chestExercises = ['Bench press', 'Dips', 'Deadlifts', 'Pull-ups / Chin-ups']
const stomachExercises = ['Sit-ups', 'Pull-ups', 'Squats']
const legsExercises = ['Squats', 'Deadlifts', 'Jump rope', 'Dumbbell jump squat']
const handsExercises = ['Grip Strengthener']
const allExercises = [headExercises, shoulderExercises, armExercises, chestExercises, stomachExercises, legsExercises, handsExercises]
const bodyParts = ['Head:', 'Shoulder:', 'Arm:', 'Chest', 'Stomach:', 'Legs:', 'Hands:']

function getResults() {
  humanBody[0].style.display = 'none'
  instructions[0].style.display = 'none'
  submitBtn[0].style.display = 'none'
  
  let suggestedExercises = []
  let suggestedBodyParts = []
  for (let i = 0; i < allExercises.length; i++) {
    if (muscleGroups[i].soreness < 50) {
      suggestedExercises.push(allExercises[i])
      suggestedBodyParts.push(bodyParts[i])
    }
  }
  let results = document.createElement("p")
  if (suggestedExercises.length == 0) { 
    results.innerText = "You should take a rest day"
    resultsContainer[0].appendChild(results)
  } else {
    results.innerText = "Here are some possible exercises based on your given soreness: "
    resultsContainer[0].appendChild(results)
    for (let i = 0; i < suggestedExercises.length; i++) {
      let exerciseBody = document.createElement('ul')
      exerciseBody.innerText = suggestedBodyParts[i]
      resultsContainer[0].appendChild(exerciseBody)
      for (let j = 0; j < suggestedExercises[i].length; j++) {
        let exerciseItem = document.createElement('li')
        exerciseItem.innerText = suggestedExercises[i][j]
        exerciseBody.appendChild(exerciseItem)
      }
    }
  }
}