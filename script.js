//grab input   
const input = document.querySelector('input');
//grab colorPicker button
const colorPicker = document.querySelector('#colorPicker');
//grab Pick Color button
const pickColor = document.querySelector('#pickColor');
//grab random button
const random = document.querySelector('#random');
//grab eraser button
const eraserButton = document.querySelector('#eraser');
//grab clear button
const clearButton = document.querySelector('#clear');
//grab div with id of "container"
let container = document.getElementById("container");


//set width and height of container
container.style.width = "600px";
container.style.height = "600px";
let x = 600;

//if screen is less than 600px, set width and height of container to 350px
if (window.innerWidth < 600) {
    container.style.width = "350px";
    container.style.height = "350px";
    x = 350;
}

//read value of id my range
let range = document.getElementById("myRange");
//call createGrid function with 16 squares per side
createGrid(16);
//select all id rangeDisplay
let rangeDisplay = document.querySelectorAll("#rangeDisplay");
//inner html of rangeDisplay is range.value
rangeDisplay.forEach(function(rangeDisplay) {
    rangeDisplay.innerHTML = 16;
});

//event listener for range slider
range.addEventListener("input", function() {
    squaresPerSide = range.value;
    //clear grid
    container.innerHTML = "";
    //create new grid
    createGrid(squaresPerSide);
    //select all id rangeDisplay
    let rangeDisplay = document.querySelectorAll("#rangeDisplay");
    //inner html of rangeDisplay is range.value
    rangeDisplay.forEach(function(rangeDisplay) {
        rangeDisplay.innerHTML = range.value;
    });
});

//create grid
function createGrid(squaresPerSide) {
    //calculate square size based on number of squares per side and size of container div 600px and border 2px
    let squareSize = (x - (squaresPerSide * 2)) / squaresPerSide;
        //create grid of squares squaresPerSide x squaresPerSide
        for (let i = 0; i < squaresPerSide; i++) {
            for (let j = 0; j < squaresPerSide; j++) {
                let square = document.createElement("div");
                square.classList.add("square");
                square.style.width = squareSize + "px";
                square.style.height = squareSize + "px";
                //add border to each square
                square.style.border = "1px solid black";
                container.appendChild(square);
            }
        }
    paint();
}

let trigger = false;
let value;
let randomLoop;

//function on mouse click and mouseover
function paint() {
    let squares = document.querySelectorAll(".square");
    //change color of div on mousedown and mouseover
    for (var i = 0; i < squares.length; i++) {
        squares[i].addEventListener('mousedown', function () {
            trigger = true;
            this.style.backgroundColor = value;
        });
        squares[i].addEventListener('mouseup', function () {
            trigger = false;
        });
        squares[i].addEventListener('mouseover', function () {
            if (trigger) {
                this.style.backgroundColor = value;
            }
        });
    }
}

//loop through all buttons
const buttons = document.querySelectorAll('button');
for (let i = 0; i < buttons.length; i++) {
    //add event listener to each button
    buttons[i].addEventListener('click', function () {
        //for button clicked change color to rgba(0, 136, 169, 0.5)
        this.style.backgroundColor = 'rgba(0, 136, 169, 0.5)';
        //for all other buttons change color to white
        for (let j = 0; j < buttons.length; j++) {
            if (buttons[j] !== this) {
                buttons[j].style.backgroundColor = 'white';
            }
        }
    //button clear white background
    clearButton.style.backgroundColor = 'white';
    });
}
