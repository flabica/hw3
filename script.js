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
function addC() 
{
    alert("Clicked Add Col")

    if(numRows==0)
    {
        return addR() 
    }
    for (let i=numCols++; i<numCols; i++)
    {
        for (let j=0; j<numRows; j++)
        {
            gird.rows[j].insertCell(i);
            //let newCell=grid.rows[j].insertCell(i); 
            // newCell.appendChild(newText); 
            // newCell.onclick=funtion()
            // {
            //     return changeColor(this.parentElement.rowIndex, this.cellIndex+1)
            // }
        }
    }
}

//Remove a row
function removeR() {
    alert("Clicked Remove Row")

    let table = document.getElementById('grid'); //get the grid element
    table.deleteRow(numRows-1) //call the built in deleteRow function to delete row
    numRows--; //decrement number of rows
}
//Remove a column
function removeC() {
    alert("Clicked Remove Col")

    let table =document.getElementById('grid')
    table.deleteCols[numCols-1]

    //col.remove()
    numCols--;
}

//sets global var for selected color
function selected(){
    colorSelected = document.getElementById("selectedID").value;
    console.log(colorSelected);
}

function fill(){
    alert("Clicked Fill All")

    if (colorSelected == null) //if no color was chosen (left on 'SELECT')
    {
        alert("Select a color first") //returns an alert that a color should be selected
    }
    else{
        let table = document.getElementsByTagName('td');
        for (let i=0; i<table.length; i++)
        {
            table[i].style.background = colorSelected; //fills the cell to the selected color
        }
    }
    
}

function clearAll(){
    alert("Clicked Clear All")

    let table = document.getElementsByTagName('td'); //get the cells
    for (let i=0; i<table.length; i++)
    {
        table[i].style.background = ''; //clears the cells by setting to empty/og color
    }   
}

function fillU(){
    alert("Clicked Fill All Uncolored")

    let table = document.getElementsByTagName('td'); //get the cells
    let color = document.getElementById("selectedID").value;
    for (let i=0; i<table.length; i++)
    {
        if (table[i].style.background == '')
        {
            table[i].style.background = color; //fills uncolored grid elements with selected color
        }
    }  
}
