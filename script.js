let numRows = 0;
let numCols = 0;
let colorSelected; 

//Add a row
function addR() {
    alert("Clicked Add Row")
    // if columns is 0, we increment numCols since the first row is also first column 
    if(numCols == 0){
        numCols++;
    }
       
    let table = document.getElementById('grid'); //get the grid
    let row = table.insertRow(); // insert row
    
    // insert cells by looping through the amount of columns 
    for (let i = 0; i < numCols; i++) {
        row.insertCell(i); 
    }   
    numRows++; //increment the number of rows
}
//Add a column
function addC() {
    alert("Clicked Add Col")
}

//Remove a row
function removeR() {
    alert("Clicked Remove Row")
}
//Remove a column
function removeC() {
    alert("Clicked Remove Col")
}
//sets global var for selected color
function selected(){
    colorSelected = document.getElementById("selectedID").value;
    console.log(colorSelected);
}

function fill(){
    alert("Clicked Fill All")
}

function clearAll(){
    alert("Clicked Clear All")
}

function fillU(){
    alert("Clicked Fill All Uncolored")
}
