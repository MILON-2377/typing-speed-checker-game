
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
    
    displayInput(letter);
    return letter;
}

function toDisplayLetter(inputId){

    const displayLetter = makeAlphabetArray();
    const display = document.getElementById(inputId);
    display.innerText = displayLetter;

    const button = document.getElementById(`${displayLetter}`);
    button.classList.add("bg-orange-500");
    
}

function displayInput(word){
    const displayInputText = document.getElementById("display-input");
    displayInputText.value = `${word}`;

    displayInputText.addEventListener("keyup", function(e){
        console.log(e);
    })
}


