let randomNumber = parseInt(Math.random()*100 + 1);
 const submit = document.querySelector('#subt')
 const userInput = document.querySelector('#guessField')


 const guessSlot = document.querySelector('.guesses')
 const remaining = document.querySelector('.lastResult')
 const lowOrHi = document.querySelector('.lowOrHi')
 const startOver = document.querySelector('.resultParas')
 


 let prevGuess = []
 let numGuess = []
 let playgame = true

const p = document.createElement('p')


if( playgame){
 submit.addEventListener('click',function(e){
   e.preventDefault()
   const guess = parseInt(userInput.value)
   console.log(guess)
   validGuess(guess)
   
 })
}


 function validGuess(guess){
   if(isNaN(guess)){
    console.log('Please enter a  valid number')
   }else if (guess< 1){
    console.log('Please enter a number more than 1')
   }else if (guess > 100){
    console.log('Please enter a number less than 100')
   }else{
     prevGuess.push()
     if(numGuess === 11){
     displayGuess(guess)
     displaymessage(`Game Over . Random number was a ${randomNumber}`)
       endGame()
     }else{
      displayGuess(guess)
      checkGuess(guess)
     }
   }
 }

 function checkGuess(guess){
if(guess === randomNumber){
  displaymessage(`you right guess a number`)
}else if (guess <randomNumber){
  displaymessage(`Number is TOOO low`)
}else if (guess > randomNumber){
  displaymessage(`Number is TOOO High`)
}
}


function displayGuess(guess){
userInput.value = ''
guessSlot.innerHTML += `${guess}, `
numGuess++;
remaining.innerHTML = `${11-numGuess}`
}
function displaymessage(message){
  lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
 userInput.value = ''
 userInput.setAttribute('disabled', '')
 p.classList.add('button') 
 p.innerHTML = `<h2 id = "newGame">Game Over </h2>`
 startOver.appendChild(p)
 playgame = false
 newGame()

}
function newGame(){
  const newGameButton = document.querySelector('#newGame')
  newGameButton.addEventListener('click', function(e){
    randomNumber = parseInt(Math.random()*100 + 1);
    prevGuess =[]
    numGuess = 1
    guessSlot.innerHTML = ''
    remaining.innerHTML = `${11-numGuess}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    playgame = true
  })
}
 



