// define the game variables and metrics here 


// When we click on the instructions button, it will show the instructions
let instructions = document.querySelector("#instructionsBtn")
function instructionsClick () {
    let instructionsModule = document.getElementsByTagName("aside")
    instructionsModule[0].style.display = "block"
}
instructions.addEventListener("click", instructionsClick)

// when we out of it, it will remove the instructions from the screen 
let xout = document.querySelector("#closeInstructions")
function instructionsClose () {
    let instructionsModule = document.getElementsByTagName("aside")
    instructionsModule[0].style.display = "none"
}
xout.addEventListener("click", instructionsClose)



//when we click on the "Feed Crickets" button, it will increase the energy for baby yoda
let feedTomagotchi = document.querySelector("#feed")
function feedClick () {
    let energy = document.getElementById("energy")
    // allow us to access the value of the energy bar
    console.log(energy.value)
    energy.value += 5
}
feedTomagotchi.addEventListener("click", feedClick)