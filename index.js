const app = "I don't do much."

var dodger = document.getElementById('dodger')

function moveDodgerRight(){
<<<<<<< HEAD
  var leftNumbers = dodger.style.left.replace('px', '')
  var left = parseInt(leftNumbers, 10)
  
  if(left < 360){
    dodger.style.left = `${left + 1}px`
=======
  var rightNumbers = dodger.style.right.replace('px', '')
  var right = parseInt(rightNumbers, 10)
  
  if(right > 0){
    dodger.style.right = `${right - 1}px`
>>>>>>> 81aad59b7251403b4112f8cc7a4a4a31f4c02a48
  }
}

function moveDodgerLeft(){
  var leftNumbers = dodger.style.left.replace('px', '')
  var left = parseInt(leftNumbers, 10)
  
  if(left > 0){
    dodger.style.left = `${left - 1}px`
  }
}

document.addEventListener('keydown', function(e){
  if(e.which === 39){
    moveDodgerRight()
  }
  
  else if(e.which === 37){
    moveDodgerLeft()
  }
})