

const letters = "qwertyuioplkjhgfdsazxcvbnm";
const letterArray = letters.split("");

const randomNum = Math.random()*25;
const randomNumber = Math.round(randomNum);

const letter = letterArray[randomNumber];

const display = document.getElementById("display");
display.innerText = letter;

const innerText = display.innerText;



document.addEventListener("keyup", function(e){

    const score = document.getElementById("score");
    scoreInnerText = score.innerText;
    const innerValue = parseInt(scoreInnerText);
    
    const pressKey = e.key;

    if(pressKey === innerText){
        const value = innerValue + 1;
       console.log(value)
    }
})
