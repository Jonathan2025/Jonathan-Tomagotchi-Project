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
let restartButton = document.querySelector("#restartBtn")

//SECTION 3 - Create the class that will house our tomagotchi properties and methods
class Tomagotchi {
    constructor(){
        this.name = prompt("What would you like to name Baby Yoda?")
        this.energy = document.getElementById("energy")
        this.sleep = document.getElementById("sleep")
        this.happiness = document.getElementById("happiness")
        this.age = document.querySelector("#ageNum")
        this.phases = document.querySelectorAll("#yodas")
        this.music = document.querySelector("#music")
        this.restart = document.querySelector("#restartBtn")
    }

    //getter methods 
    // Return the value of energy level
    getEnergy(){
        return this.energy.value
    }

    // return the value of sleep level
    getSleep(){
        return this.sleep.value
    }

    //return the value of happiness level
    getHappiness(){
        console.log(this.happiness.value)
        return this.happiness.value
    }

    // method to name the tomagotchi
    nameTomagotchi(){
        nameTomagotchi.innerHTML = this.name
    }

    // click feed button to increase tomagotchi's energy each time
    feedClick(){
        this.energy.value += 5
         //change the background to day time
        document.body.style.backgroundImage = "url(/images/day-background.gif)"
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
        //keep tomagotchi entertained by having them watch a lightsaber battle
        document.body.style.backgroundImage = "url(/images/entertainment-background.gif)"
    }

    // method that will change the tomagotchi's appearance when he hits certain ages
    changeTomagotchiPhase(){
        if (this.age.innerHTML <= 10){
            //access the children of #yodas
            this.phases[0].children[0].style.display = "block"
            this.phases[0].children[1].style.display = "none"
            this.phases[0].children[2].style.display = "none"
            this.phases[0].children[3].style.display = "none"
            this.phases[0].children[4].style.display = "none"
        } else if (this.age.innerHTML > 10 && this.age.innerHTML <= 20){
            this.phases[0].children[0].style.display = "none"
            this.phases[0].children[1].style.display = "block"
            this.phases[0].children[2].style.display = "none"
            this.phases[0].children[3].style.display = "none"
            this.phases[0].children[4].style.display = "none"
        } else if (this.age.innerHTML > 20 && this.age.innerHTML <= 30){
            this.phases[0].children[0].style.display = "none"
            this.phases[0].children[1].style.display = "none"
            this.phases[0].children[2].style.display = "block"
            this.phases[0].children[3].style.display = "none"
            this.phases[0].children[4].style.display = "none"
        } else if (this.age.innerHTML > 30 && this.age.innerHTML <= 40){
            this.phases[0].children[0].style.display = "none"
            this.phases[0].children[1].style.display = "none"
            this.phases[0].children[2].style.display = "none"
            this.phases[0].children[3].style.display = "block"
            this.phases[0].children[4].style.display = "none"
        } else if (this.age.innerHTML > 40 && this.age.innerHTML <= 100){
            this.phases[0].children[0].style.display = "none"
            this.phases[0].children[1].style.display = "none"
            this.phases[0].children[2].style.display = "none"
            this.phases[0].children[3].style.display = "none"
            this.phases[0].children[4].style.display = "block"
        }
    }

    //setter method to increase the age of the tomagotchi by 1, every few seconds
    increaseAge(){
        this.age.innerHTML = parseInt(this.age.innerHTML) + 1
    }

    //setter method to decrease the metrics of the tomagotchi every few seconds
    decreaseMetrics(){
        this.energy.value -= 12
        this.sleep.value -= 10
        this.happiness.value -= 13
    }

    // this method will return a boolean of whether the metrics have reached ZERO
    reachEnd(){
        if ((this.getEnergy() <= 0)||(this.getSleep() <= 0)||(this.getHappiness() <= 0)){
            return true
        } else {
            return false
        }
    }

     // When the game ends, remove tomagotchi display, display new background image and changed the background music
    endGame(){
        this.music.setAttribute("src", "/images/end-music.mp3")
        this.restart.disabled = false

        // loop through the yoda phases and set the display to each of them as "none"
        for (let i=0; i<this.phases[0].children.length; i++){
            this.phases[0].children[i].style.display = "none"
        }

        document.body.style.backgroundImage = "url(/images/end-background.gif)"
        alert("Your tomagotchi went to heaven. Brace yourself for planetary annihilation!")

    }
 }

// SECTION 4 - Start game function, encapsultate all of the functions inside here
function startGame(){
    //Disable the start button once the game restarts
    startButton.disabled = true

    // SECTION 5 - Instatiate the Tomagotchi
    const tomagotchiInstance = new Tomagotchi()
    //call the name method from the class to name the tomagotchi
    tomagotchiInstance.nameTomagotchi()
    //disable the restart button until the end
    tomagotchiInstance.restart.disabled = true

    //SECTION 6 - Event Listeners
    // in order to use a method from the class, we need to close over the new instance of the class with a function
    feedTomagotchi.addEventListener("click", function(){
        tomagotchiInstance.feedClick()})

    sleepTomagotchi.addEventListener("click", function(){
        tomagotchiInstance.sleepClick()})

    playTomagotchi.addEventListener("click", function(){
        tomagotchiInstance.playClick()})


    // SECTION 7 - using setinterval to run decreaseMetrics and increaseAge methods every 3 seconds
    // need to have explicit reference to the increaseAge method in order to work 
    let interval = setInterval(function(){
        tomagotchiInstance.decreaseMetrics()
        tomagotchiInstance.increaseAge()
        tomagotchiInstance.reachEnd()
        tomagotchiInstance.changeTomagotchiPhase()
        // SECTION 8 - if the method reachEnd is true, then stop the decreaseMetrics and increaseAge methods and end the game
         if (tomagotchiInstance.reachEnd() === true){
             clearInterval(interval)
             tomagotchiInstance.endGame()
             }
        }, 3000);
        
//Inside startGame function 
}

// call the start game function when we click on the start button 
startButton.addEventListener("click", startGame)


// Section 9 - Can restart the game -- will reload the page
restartButton.addEventListener("click", locationreload)

function locationreload(){
    location.reload()
}

