
function play(){
    hideElementById("home-page");
    toShowPlayGround("play-ground");
    toDisplay("display-letter");
}

function hideElementById(idName){
    const hideTagName = document.getElementById(idName);
    hideTagName.classList.add("hidden");
}

function toShowPlayGround(idName){
    const showPlayGround = document.getElementById(idName);
    showPlayGround.classList.remove("hidden");
}

function makeRandomNum(){
    const random = Math.random()*25;
    const randomNumber = Math.round(random);

    return randomNumber
}

function makeAlphabetArr(){
    const letters = "qwertyuiopasdfghjklmnbvcxz";
    const lettersArray = letters.split("");

    const randomNum = makeRandomNum();
    const alphaBetLetter = lettersArray[randomNum];

    getButtonId(`${alphaBetLetter}`);
    return alphaBetLetter;
}

function toDisplay(idName){
    const displayTag = document.getElementById(idName);
    displayTag.innerText = makeAlphabetArr();
}

function getButtonId(idName){
    const buttonTag = document.getElementById(idName);
    buttonTag.classList.add("bg-orange-500");
}

function score(idName){
    const score = document.getElementById(idName);
    const scoreVal = parseInt(score.innerText);
    
    const value = scoreVal + 1;
    score.innerText = value;
    return value;
}
function scoreLife(idName){
    const score = document.getElementById(idName);
    const scoreVal = parseInt(score.innerText);
    
    const value = scoreVal - 1;
    score.innerText = value;
    return value;
}

function toRemoveButtonStyle(idName){
    const buttonTag = document.getElementById(idName);
    buttonTag.classList.remove("bg-orange-500");
}
function finalScore(idName){
    const finalScoreTag = document.getElementById(idName);
    const gameOverScore = document.getElementById("score-container").innerText;
    finalScoreTag.innerText = gameOverScore;
}

document.addEventListener("keyup", (e) => {
    const keyPress = e.key;
    const scoreInnerText = document.getElementById("display-letter");
    const letter = (scoreInnerText.innerText).toLowerCase();
    
    // const value = score("score-container");

    if(keyPress === "Escape"){
        hideElementById("play-ground");
        toShowPlayGround("score-section");
        finalScore("final-score");
    }

    if(keyPress === letter){
        score("score-container");
        play();
        toRemoveButtonStyle(`${letter}`);
    }else{
        const lifeScore = scoreLife("life-score");
        if(lifeScore === 0){
            hideElementById("play-ground");
            toShowPlayGround("score-section");
            finalScore("final-score");
        }
    }

})


function playAgaing(){
    const displayLetter = document.getElementById("display-letter");
    const letter = (displayLetter.innerText).toLowerCase();

    play();
    toRemoveButtonStyle(`${letter}`);

    const scorReset = document.getElementById("score-container");
    scorReset.innerText = 0;

    const lifeScoreReset = document.getElementById("life-score");
    lifeScoreReset.innerText = 5;

    hideElementById("score-section");


}

