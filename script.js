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