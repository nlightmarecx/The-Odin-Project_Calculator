const calculator_Div = document.getElementById("calculator_Div");

const screen_Div = document.getElementById("calculatorScreen_Div");
const keyboard_Div = document.getElementById("calculatorKeyboard_Div");

const CALCULATOR_WIDTH = 380;
const CALCULATOR_HEIGHT = CALCULATOR_WIDTH*2

const calculatorWidth = document.getElementById("calculator_Div").style.width = CALCULATOR_WIDTH+"px";
const calculatorHeight = document.getElementById("calculator_Div").style.height = CALCULATOR_HEIGHT+"px";

//let SIZE_BOARD_X = boardSizeSlider.value;
//let SIZE_BOARD_Y = SIZE_BOARD_X*2;

//let COLOR_BORDER = "rgba(211, 211, 211, 0.25)";
//let SIZE_BORDER = 1;

//let SIZE_SQUARE_X = BOARD_WIDTH/SIZE_BOARD_X-SIZE_BORDER;
//let SIZE_SQUARE_Y = BOARD_HEIGHT/SIZE_BOARD_Y-SIZE_BORDER;

//......................CALCULATOR DIV..............................
//.......................KEYBOARD DIV...............................
//....................................................MAKE KEYBOARD
let symbols = [
    "AC", "-/+", "%", "/", 
    "7", "8", "9", "x", 
    "4", "5", "6", "-",
    "1", "2", "3", "+", 
    "", "0", ".", "="
]

createKeyboard();

function createKeyboard(){
    keyboard_Div.style.gridTemplateColumns = `repeat(4, 1fr)`;
    keyboard_Div.style.gridTemplateRows = `repeat(5, 1fr)`;

    for(let i=0; i<20; i++){
        const button = document.createElement("div");
        button.setAttribute("class", "keyBoardButton");
        button.setAttribute("id", "button_"+i);
        keyboard_Div.insertAdjacentElement("beforeend", button);
        
        $("#button_"+i).text(symbols[i])
        //button.addEventListener('mouseover', colorDiv);
    }
}

//....................................................ADD BUTTONS CONTENT 

/*
for (let i=0; i<9; i++){
    let digitButton = document.getElementsByClassName("digitButton")[i];
    digitButton.innerHTML = i+1;

    digitButton.setAttribute("id", "button"+i+1);
}

document.getElementsByClassName("keyBoardButton")[17].setAttribute("id", "0");
$("#0").text("0");

document.getElementsByClassName("keyBoardButton")[0].setAttribute("id", "AC");
$("#AC").text("AC");

document.getElementsByClassName("keyBoardButton")[1].setAttribute("id", "AC");
$("#AC").text("AC");
*/

//....................................................ROUND BUTTON CORNERS
const topLeftButton = document.getElementsByClassName("keyBoardButton")[0];
const topRightButton = document.getElementsByClassName("keyBoardButton")[3];
const bottomRightButton = document.getElementsByClassName("keyBoardButton")[19];
const bottomLeftButton = document.getElementsByClassName("keyBoardButton")[16];

topLeftButton.style.borderRadius = "20% 0 0 0";
topRightButton.style.borderRadius = "0 20% 0 0";
bottomRightButton.style.borderRadius = "0 0 20% 0";
bottomLeftButton.style.borderRadius = "0 0 0 20%";

//....................................................CSS BUTTONS ARE CLICKED
$('.keyBoardButton').mousedown(function(){
    $(this).css({'scale': '1', 'box-shadow': '0 0 7px, 0 0 20px cyan inset'});   
})
$('.keyBoardButton').mouseup(function(){
    $(this).css({'scale': '1.02', 'box-shadow': '0 0 7px, 0 0 15px royalblue inset'});
})
$('.keyBoardButton').mouseenter(function(){
    $(this).css({'scale': '1.02', 'box-shadow': '0 0 7px, 0 0 15px royalblue inset'});
})
$('.keyBoardButton').mouseleave(function(){
    $(this).css({'scale': '1', 'box-shadow': 'none'});
})