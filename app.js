const test = () => console.log("works");

const calculator_Div = document.getElementById("calculator_Div");

const screen_Div = document.getElementById("calculatorScreen_Div");
const keyboard_Div = document.getElementById("calculatorKeyboard_Div");

const CALCULATOR_WIDTH = 380;
const CALCULATOR_HEIGHT = CALCULATOR_WIDTH*2

const calculatorWidth = document.getElementById("calculator_Div").style.width = CALCULATOR_WIDTH+"px";
const calculatorHeight = document.getElementById("calculator_Div").style.height = CALCULATOR_HEIGHT+"px";

//......................CALCULATOR DIV..............................
//.......................KEYBOARD DIV...............................
//....................................................MAKE KEYBOARD
let symbols = [
    "AC", "⌫", "÷", 
    "7", "8", "9", "×", 
    "4", "5", "6", "−",
    "1", "2", "3", "+", 
    ".", "0", "="
]

createKeyboard();

function createKeyboard(){
    keyboard_Div.style.gridTemplateColumns = `repeat(4, 1fr)`;
    keyboard_Div.style.gridTemplateRows = `repeat(5, 1fr)`;

    for(let i=0; i<20; i++){
        const button = document.createElement("button");
        button.setAttribute("class", "keyBoardButton");
        button.setAttribute("id", "button"+i);
        keyboard_Div.insertAdjacentElement("beforeend", button);
        $("#button"+i).text(symbols[i])

        
        if(i>2 && i<17 && i != 6 && i != 10 && i != 14){
            button.setAttribute("class", "keyBoardButton digit");
        }
        if(i === 2 || i === 6 || i === 10 || i === 14){
            button.setAttribute("class", "keyBoardButton operator");
        };

    }
    document.getElementsByClassName("keyBoardButton")[18].style.display = "none";
    document.getElementsByClassName("keyBoardButton")[19].style.display = "none";
}

//....................................................ADD BUTTONS CONTENT 


//....................................................BUTTONS ARE CLICKED
const AC = $("#button0");
const DEL = $("#button1");
const SUM = $("#button17");

let upperOperand = document.getElementById("upperOperand");
let lowerOperand = document.getElementById("lowerOperand");

let processingNum = "";
let processingOp = "";
let previousNumber = "";
let currentNumber = "";
let operation = null;




/*
$(".digit").click(function(){
    let digitValue = $(this).text();
    processingNum += digitValue;
    currentNumber = processingNum;
    lowerOperand.innerHTML = currentNumber;
});


$(".operator").click(function(){
    let operandValue = $(this).text();
    processingOp = operandValue;

    processingNum += operandValue;



});
/*
$(".operator").click(function(){
    lowerOperand.innerHTML = "";
    previousNumber = currentNumber;
    
    let operandValue = $(this).text();
    processingNum += operandValue;

    upperOperand.innerHTML = currentNumber;
    lowerOperand.innerHTML = "0";
});

$("#button0").click(function(){
    processingNum = "0";
    lowerOperand.innerHTML = processingNum;
    upperOperand.innerHTML = "";
  });

$("#button1").click(function(){
    processingNum = processingNum.slice(0, -1);
    lowerOperand.innerHTML = processingNum;
});



function updateScreen(){
    lowerOpperand.innerHTML = currentNumber;
}

function clearCalculator(){
    currentNumber = "";
    previousNumber = "";
    operation = null;
}

function appendDigit(digit) {
    if (digit === "." && currentOperand.includes(".")) return;
    currentOperand += digit;
}
  
function chooseOperation(operator) {
    if (currentOperand === "") return;
    if (previousOperand !== "") {
        calculate();
    }
    operation = operator;
    previousOperand = currentOperand;
    currentOperand = "";
}

function calculate() {
    let result;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    switch (operation) {
      case "+":
        result = prev + current;
        break;
      case "-":
        result = prev - current;
        break;
      case "×":
        result = prev * current;
        break;
      case "÷":
        result = prev / current;
        break;
      default:
        return;
    }
    currentOperand = result.toString();
    operation = null;
    previousOperand = "";
  }
*/
//....................................................CSS BUTTON SHAPES, COLORS
document.getElementsByClassName("keyBoardButton")[0].style.cssText = 
"border-radius: 15% 0 0 0; background-color: rgba(255, 0, 0, 0.75); grid-column: 1/3";
document.getElementsByClassName("keyBoardButton")[1].style.backgroundColor = "rgba(255, 0, 0, 0.75)";
document.getElementsByClassName("keyBoardButton")[2].style.cssText = 
"border-radius: 0 20% 0 0; font-size: 2.1em; background-color: rgba(0, 205, 255, 0.75)";
document.getElementsByClassName("keyBoardButton")[6].style.cssText = 
"font-size: 1.8em; background-color: rgba(0, 205, 255, 0.75)";
document.getElementsByClassName("keyBoardButton")[10].style.cssText = 
"font-size: 1.8em; background-color: rgba(0, 205, 255, 0.75)";
document.getElementsByClassName("keyBoardButton")[14].style.cssText = 
"font-size: 1.8em; background-color: rgba(0, 205, 255, 0.75)";
document.getElementsByClassName("keyBoardButton")[15].style.borderRadius = "0 0 0 20%";
document.getElementsByClassName("keyBoardButton")[16].style.gridColumn = "2/4";
document.getElementsByClassName("keyBoardButton")[17].style.cssText = 
"border-radius: 0 0 20% 0; font-size: 1.8em; background-color: rgba(140, 45, 225, 0.75)";

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

