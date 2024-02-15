
function playGame(){
    homePageHidden("home-page");
    toShowPlayGroundPage("play-ground");

    toDisplayLetter("display-letter");

}

function homePageHidden(inputId){
    const homePage = document.getElementById(inputId);
    homePage.classList.add("hidden");
}

function toShowPlayGroundPage(inputId){
    const playGround = document.getElementById(inputId);
    playGround.classList.remove("hidden");
}

function makeRandomNumber(){
    const randomNum = Math.random()*25;
    const randomNumber = Math.round(randomNum);

    return randomNumber;
}

function makeAlphabetArray(){
    const arr = "qwertyuioplkjhgfdsazxcvbnm";
    const letterArray = arr.split("");

    const randomNumberRond = makeRandomNumber();
    const letter = letterArray[randomNumberRond];
   
    const takeButtonId = document.getElementById(`${letter}`);
    takeButtonId.classList.add("bg-orange-500");
    
    return letter;
}

function toDisplayLetter(inputId){
    const displayText = document.getElementById(inputId);
    
    displayText.innerText = makeAlphabetArray()
}

function toTakeDisplayLetter(inputId){
    const display = document.getElementById(inputId);
    const innerText = display.innerText;
    
    return innerText
}

function takeButtonId(id){
    const buttonId = document.getElementById(id);
    buttonId.classList.remove("bg-orange-500");
}

function indicateDisplayButton(){
    const innerLetter = toDisplayLetter("display-letter");
    const lowerCaseLetter = innerLetter.toLowerCase();

}

function scroeInscrease(input){
    const scoreId = document.getElementById(input);
    const scoreValue = scoreId.innerText;
    const scoreFinalValue = parseInt(scoreValue);
    
    const value = scoreFinalValue + 1;
    return value;
}

function updateScore (input, value){
    const scoreValue = takeButtonId(input);
    scoreValue.innerText = value;

}

    const displayrInnerLette = toTakeDisplayLetter("display-letter");
    const lowerCaseInnerText = displayrInnerLette.toLowerCase();

document.addEventListener("keyup", (e) => {
    const pressKey = e.key;

    const life = document.getElementById("life-score");
    const innerVal = parseInt(life.innerText);


    if(pressKey === "Escape"){
        homePageHidden("play-ground");
        toShowPlayGroundPage("score-section");
    }

    if(pressKey === lowerCaseInnerText){
        playGame()
        takeButtonId(`${lowerCaseInnerText}`);
    }else{
        const lifeScore = innerVal - 1;
        life.innerText = lifeScore;

        if(lifeScore === 0){
            homePageHidden("play-ground");
            toShowPlayGroundPage("score-section");
            takeButtonId(`${lowerCaseInnerText}`);
        }

    }

}, false)

function playAgain(){
    playGame();
    homePageHidden("score-section")
    takeButtonId(`${lowerCaseInnerText}`);
}