// Declare global variables
let numRows = 2;
let numCols = 3;
let colorSelected; 

// Add a row
function addR() {
    // get the grid table element
    let gridTable = document.getElementById("grid");

    // create a new row element
    let row = document.createElement("tr");

    // loop to add cells to the row
    for(let i = 0; i < numCols; i++){
        // create a cell td element and add the on click event to it
        let td = document.createElement('td');
        td.onclick = function(){
            changeColor(td);
        };

        // append the cell to the row
        row.appendChild(td);
    }

    // append the row to the table
    gridTable.getElementsByTagName('tbody')[0].append(row);

    // increment the number or rows
    numRows += 1;
}

// Add a column
function addC() {
    let gridTable = document.getElementById("grid");
    let rows = gridTable.getElementsByTagName('tbody')[0].children;

    // loop through the rows to add columns
    for(let i = 0; i < rows.length; i++){
        // create a cell td element and add the on click event to it
        let td = document.createElement('td');
        td.onclick = function(){
            changeColor(td);
        };

        // add the cell to the row
        rows[i].appendChild(td);
    }

    // decrement the number of columns
    numCols += 1;
}

// Remove a row
function removeR() {
    // only remove row if there are rows
    if(numRows > 0){
        let gridTable = document.getElementById("grid");
        gridTable.getElementsByTagName('tbody')[0].lastElementChild.remove();

        // decrement the number of rows
        numRows -= 1;
    }
    
}

// Remove a column
function removeC() {
    // only remove column if there are rows and columns
    if(numCols > 0 && numRows > 0){
        let gridTable = document.getElementById("grid");
        let rows = gridTable.getElementsByTagName('tbody')[0].children;

        // loop through the rows to remove columns
        for(let i = 0; i < rows.length; i++){
            rows[i].lastElementChild.remove();
        }

        // decrement the number of columns
        numCols -= 1;

        // clear the table if the rows are empty
        if(numCols == 0){
            gridTable.getElementsByTagName('tbody')[0].innerHTML = "";
        }
    }
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    let cells = document.getElementsByTagName('td');

    // only fill if the color has been selected
    if(colorSelected != undefined){
        // loop through the cells to fill the uncolored cells
        for(let i = 0; i < cells.length; i++){
            // only apply color to uncolored cell
            if(cells[i].style.backgroundColor == "transparent" || cells[i].style.backgroundColor == ""){
                cells[i].style.backgroundColor = colorSelected;
            }
        };
    }
}

// Fill all cells
function fillAll(){
    let cells = document.getElementsByTagName('td');

    // only fill if the color has been selected
    if(colorSelected != undefined){
        // loop through the cells to fill the color
        for(let i = 0; i < cells.length; i++){
            cells[i].style.backgroundColor = colorSelected;
        };
    }
    
}

// Clear all cells
function clearAll(){
    let cells = document.querySelectorAll('td');

    // loop through the cells to remove the color
    cells.forEach(function(cell){
        cell.style.backgroundColor = "transparent";
    });
    
}

// change cell color
function changeColor(e){
    if(colorSelected != undefined){
        e.style.backgroundColor = colorSelected;
    }
}
