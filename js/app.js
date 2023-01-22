// define the game variables and metrics here 
// first we will try using a class WITH the feed crickets 
let feedTomagotchi = document.querySelector("#feedBtn")

class Tomagotchi {
    constructor(){
        this.energy = document.getElementById("energy")
    }


    feedClick(){
        this.energy.value -= 5
        console.log(this.energy.value)
    }
}


const instance = new Tomagotchi()
//instance.feedClick()

// in order to use a method from the class, we need to close over the new instance of the class with a function
feedTomagotchi.addEventListener("click", function(){
    instance.feedClick()})





// ------------------------------------------------------------------


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
// let feedTomagotchi = document.querySelector("#feedBtn")
// let energy = document.getElementById("energy")
// function feedClick () {
//     //let energy = document.getElementById("energy")
//     // allow us to access the value of the energy bar
//     console.log(energy.value)
//     energy.value += 5
// }
//feedTomagotchi.addEventListener("click", feedClick)



//when we click on the "let tomagotchi sleep" button it will increase his sleep level AND
// change the background image to night time
let sleepTomagotchi = document.querySelector("#sleepBtn")
let sleep = document.getElementById("sleep")
function sleepClick () {
    
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
let happiness = document.getElementById("happiness")
function playClick () {
    
    //access the value of the happiness bar 
    console.log(happiness.value)
    happiness.value += 50
    console.log(happiness.value)
}
playTomagotchi.addEventListener("click", playClick)


// Every 5 seconds baby yoda's age will increase 
let ageTomagotchi = parseInt(document.querySelector("#ageNum").innerHTML) 

// create a function that will increase the the age every few seconds
 function increaseAge(){
        ageTomagotchi += 1
        document.querySelector("#ageNum").innerHTML = ageTomagotchi
       //call the changeTomagotchi function 
       changeTomagotchi()
 }


let interval = setInterval(increaseAge, 3000);
// basically setTimeout has 2 arguments, a) the anymonous function to run(clearInterval) after b)amount of time
// when yoda reaches 100 stop increasing the age
setTimeout(function(){ clearInterval(interval)}, 300000);


// create a function that will change the yoda's appearance when he hits a certain age
function changeTomagotchi(){
    const yodas = document.querySelectorAll("#yodas")
    if (ageTomagotchi <= 10){
        //access the children of #yodas
        yodas[0].children[0].style.display = "block"
        yodas[0].children[1].style.display = "none"
        yodas[0].children[2].style.display = "none"
    } else if (ageTomagotchi > 10 && ageTomagotchi <= 20){
        yodas[0].children[0].style.display = "none"
        yodas[0].children[1].style.display = "block"
        yodas[0].children[2].style.display = "none"
    } else if (ageTomagotchi > 20 && ageTomagotchi <= 100){
        yodas[0].children[0].style.display = "none"
        yodas[0].children[1].style.display = "none"
        yodas[0].children[2].style.display = "block"
    }
 }


// As time passes, baby yoda's energy, sleep and happiness will decrease
function decreaseMetrics(){
    //energy.value -= 10
    sleep.value -= 10
    happiness.value -= 10
}


// call the decreaseMetrics function every 5 seconds
let intervalDecrease = setInterval(decreaseMetrics, 5000);
// basically setTimeout has 2 arguments, a) the anymonous function to run(clearInterval) after b)amount of time
// when yoda reaches 100 stop increasing the age
setTimeout(function(){ clearInterval(intervalDecrease)}, 300000);
