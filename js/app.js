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
let feedTomagotchi = document.querySelector("#feedBtn")
function feedClick () {
    let energy = document.getElementById("energy")
    // allow us to access the value of the energy bar
    console.log(energy.value)
    energy.value += 5
}
feedTomagotchi.addEventListener("click", feedClick)



//when we click on the "let tomagotchi sleep" button it will increase his sleep level AND
// change the background image to night time
let sleepTomagotchi = document.querySelector("#sleepBtn")
function sleepClick () {
    let sleep = document.getElementById("sleep")
    //access the value of the sleep bar 
    console.log(sleep.value)
    sleep.value += 50
    console.log(sleep.value)
    // change the background to night time
    document.body.style.backgroundImage = "url(/images/night-background.gif)"
}
sleepTomagotchi.addEventListener("click", sleepClick)



// when we click "Play with lighsaber" baby yoda's happiness will increase
let playTomagotchi = document.querySelector("#playBtn")
function playClick () {
    let happiness = document.getElementById("happiness")
    //access the value of the happiness bar 
    console.log(happiness.value)
    happiness.value += 50
    console.log(happiness.value)
}
playTomagotchi.addEventListener("click", playClick)


// Every 5 seconds baby yoda's age will increase 
let ageTomagotchi = parseInt(document.querySelector("#ageNum").innerHTML) 
// console.log(ageTomagotchi)
// ageTomagotchi += 1
// document.querySelector("#ageNum").innerHTML = ageTomagotchi

// create a function that will increase the the age every few seconds
 function increaseAge(){
        ageTomagotchi += 1
        document.querySelector("#ageNum").innerHTML = ageTomagotchi
        
 }


 let interval = setInterval(increaseAge, 3000);
 //basically setTimeout has 2 arguments, a) the anymonous function to run(clearInterval) after b)amount of time
 // when yoda reaches 100 stop increasing the age
 setTimeout(function(){ clearInterval(interval)}, 300000);




