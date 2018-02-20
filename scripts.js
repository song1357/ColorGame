

var numSquares = 6;
var colors = [];
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var pickedColor;
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
colorDisplay.textContent = pickedColor;
var resetButton = document.querySelector("button");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
    setUpModebuttons();
    setUpSquares();
    reset();
}

function setUpModebuttons() {
    //mode buttons event listeners
    for(var i=0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click",function () {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
            reset();
        });
    }
}

function setUpSquares() {
    for(var i = 0; i < squares.length; i++) {
        //add initial colors to squares
        squares[i].style.backgroundColor = colors[i];
        //add click listeners to squares
        squares[i].addEventListener("click",function () {
            //compare color to pickedColor
            if(this.style.backgroundColor === pickedColor) {
                messageDisplay.textContent = "Correct!";
                changeColor(pickedColor);
                h1.style.backgroundColor = pickedColor;
                resetButton.textContent = "Play Again?";
            }else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    }
}
function reset() {
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = " ";
    //change colors of squares
    for(var i = 0; i < squares.length; i++) {
        if(colors[i]) {
            squares[i].style.display = "block";
           squares[i].style.backgroundColor = colors[i];
       }else {
           squares[i].style.display = "none";
       }
    }
    h1.style.backgroundColor = "steelblue";
}


resetButton.addEventListener("click",function(){
   reset();
});



function changeColor(color) {
    for(var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    var arr = [];
    for(var i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}

function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", "  + g + ", " + b + ")";
}