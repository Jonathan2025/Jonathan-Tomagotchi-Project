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
let startButton = document.querySelector("#start")


//SECTION 3 - Create the class that will house our tomagotchi properties and methods
class Tomagotchi {
    constructor(){
        this.name = prompt("What would you like to name Baby Yoda?")
        this.energy = document.getElementById("energy")
        this.sleep = document.getElementById("sleep")
        this.happiness = document.getElementById("happiness")
        //this.age = parseInt(document.querySelector("#ageNum").innerHTML)
        this.age = document.querySelector("#ageNum")
        this.phases = document.querySelectorAll("#yodas")
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

    // method that will change the tomagotchi's appearance when he hits certain ages
    changeTomagotchiPhase(){
        if (this.age.innerHTML <= 10){
            //access the children of #yodas
            this.phases[0].children[0].style.display = "block"
            this.phases[0].children[1].style.display = "none"
            this.phases[0].children[2].style.display = "none"
        } else if (this.age.innerHTML > 10 && this.age.innerHTML <= 20){
            this.phases[0].children[0].style.display = "none"
            this.phases[0].children[1].style.display = "block"
            this.yodas[0].children[2].style.display = "none"
        } else if (this.age.innerHTML > 20 && this.age.innerHTML <= 100){
            this.phases[0].children[0].style.display = "none"
            this.phases[0].children[1].style.display = "none"
            this.phases[0].children[2].style.display = "block"
        }
    }


    //setter method to increase the age of the tomagotchi by 1, every few seconds
    increaseAge(){
        this.age.innerHTML = parseInt(this.age.innerHTML) + 1
        // also call to the change tomagotchi phase
        this.changeTomagotchiPhase()
    }

    //setter method to decrease the metrics of the tomagotchi every few seconds
    decreaseMetrics(){
        energy.value -= 7
        sleep.value -= 6
        happiness.value -= 10
    }

 }



// SECTION 7 - Start game function, encapsultate all of the functions inside here
function startGame(){
    //Disable the start button once the game restarts
    startButton.disabled = true

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
    // need to have explicit reference to the increaseAge method in order to work 
    let interval = setInterval(function(){tomagotchiInstance.increaseAge()}, 3000);
    //let interval = setInterval(function(){tomagotchiInstance.increaseAge()}, 3000);
        // basically setTimeout has 2 arguments, a) the anymonous function to run(clearInterval) after b)amount of time
        // when tomagotchi reaches 100 stop increasing the age
    setTimeout(function(){ clearInterval(interval)}, 300000);


    // Decrease the metrics of the tomagotchi every few seconds
    // call the decreaseMetrics function every 5 seconds
    let intervalDecrease = setInterval(function(){tomagotchiInstance.decreaseMetrics()}, 5000);
    setTimeout(function(){ clearInterval(intervalDecrease)}, 300000);



//Inside startGame function 
}



// call the start game function when we click on the start button 
startButton.addEventListener("click", startGame)

