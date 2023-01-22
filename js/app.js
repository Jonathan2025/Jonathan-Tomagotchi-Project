// SECTION 1 Instructions for the Tomagotchi Game 
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



// SECTION 2 - DEFINE the variables that select the buttons we need, our query selectors
let feedTomagotchi = document.querySelector("#feedBtn")
let nameTomagotchi = document.querySelector("#name")
let sleepTomagotchi = document.querySelector("#sleepBtn")
let playTomagotchi = document.querySelector("#playBtn")
//let ageTomagotchi = parseInt(document.querySelector("#ageNum").innerHTML) 



//SECTION 3 - Create the class that will house our tomagotchi properties and methods
class Tomagotchi {
    constructor(){
        this.name = prompt("What would you like to name Baby Yoda?")
        this.energy = document.getElementById("energy")
        this.sleep = document.getElementById("sleep")
        this.happiness = document.getElementById("happiness")
        //this.age = parseInt(document.querySelector("#ageNum").innerHTML)
        this.age = document.querySelector("#ageNum")
    }

    // method to name the tomagotchi
    nameTomagotchi(){
        nameTomagotchi.innerHTML = this.name
    }

    // click feed button to increase tomagotchi's energy each time
    feedClick(){
        this.energy.value += 5
    }

    // method to allow tomagotchi to sleep 
    sleepClick () {
        this.sleep.value += 5
        // change the background to night time
        document.body.style.backgroundImage = "url(/images/night-background.gif)"
    }

    // method to play with tomagotchi 
    playClick () {
        this.happiness.value += 5
    }

    //setter method to increase the age of the tomagotchi every few seconds
    increaseAge(){
        this.age.innerHTML = parseInt(this.age.innerHTML) + 1
        //console.log(this.age.innerHTML)
        //console.log(parseInt(this.age.innerHTML))
        //this.age.innerHTML += 1
        //console.log(parseInt(this.age.innerHTML))
    }


}



// SECTION 4 - Instatiate the Tomagotchi
const tomagotchiInstance = new Tomagotchi()
//call the name method from the class to name the tomagotchi
tomagotchiInstance.nameTomagotchi()




//SECTION 5 - Event Listeners
// in order to use a method from the class, we need to close over the new instance of the class with a function
feedTomagotchi.addEventListener("click", function(){
    tomagotchiInstance.feedClick()})

sleepTomagotchi.addEventListener("click", function(){
    tomagotchiInstance.sleepClick()})

playTomagotchi.addEventListener("click", function(){
    tomagotchiInstance.playClick()})


// SECTION 6 - Calling class methods that dont use event listeners

// Increase age of tomagotchi
// need to have explicit reference in order to work 
let interval = setInterval(function(){tomagotchiInstance.increaseAge()}, 3000);
//let interval = setInterval(function(){tomagotchiInstance.increaseAge()}, 3000);
    // basically setTimeout has 2 arguments, a) the anymonous function to run(clearInterval) after b)amount of time
    // when tomagotchi reaches 100 stop increasing the age
setTimeout(function(){ clearInterval(interval)}, 300000);


// ------------------------------------------------------------------






// Every 5 seconds baby yoda's age will increase 
//let ageTomagotchi = parseInt(document.querySelector("#ageNum").innerHTML) 

// create a function that will increase the the age every few seconds
//  function increaseAge(){
//         ageTomagotchi += 1
//         document.querySelector("#ageNum").innerHTML = ageTomagotchi
//        //call the changeTomagotchi function 
//        changeTomagotchi()
//  }


// let interval = setInterval(increaseAge, 3000);
// // basically setTimeout has 2 arguments, a) the anymonous function to run(clearInterval) after b)amount of time
// // when yoda reaches 100 stop increasing the age
// setTimeout(function(){ clearInterval(interval)}, 300000);


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
    energy.value -= 10
    sleep.value -= 10
    happiness.value -= 10
}


// call the decreaseMetrics function every 5 seconds
let intervalDecrease = setInterval(decreaseMetrics, 5000);
// basically setTimeout has 2 arguments, a) the anymonous function to run(clearInterval) after b)amount of time
// when yoda reaches 100 stop increasing the age
setTimeout(function(){ clearInterval(intervalDecrease)}, 300000);
