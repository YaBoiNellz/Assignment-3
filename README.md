Name:Darnell Chambers Gordon
GitHub Username: YaBoiNellz
GitHub Repository Link: https://github.com/YaBoiNellz/Assignment-3.git
Group Members: None

Assignment 3: Grid Maker Process
I solved the assignment by implementing all the provided functions
and adding an extra function 'changeColor()' that changes the cell
color when clicked.

HOW THE FUNCTIONS WORK
1. addR()

The add row function adds a row to the table

This function begins by getting the grid element using the getElementByID() method.
Next, a tr element is created that will be the new row. The function loops through the 
number of columns and adds the td elements to the newly created row.
Finally, we add the newly created table row element and increment the number of rows.

2. addC()

Adds a new column to the grid

Similar to the add row function, this method first gets the grid element.
Once the grid element has been declared, the function loop over the rows and for
each row, a td element is added.

Finally, after the td has been added to all rows, the function increments the number of columns. 

3. removeR()

Removes a row from the grid

This function gets the table via getElementByID(). Once the table has been defined, the 
function removes the last tr using the remove() method.

Finally, the number of rows is decremented.

4. removeC()

Removes a column from the table

This method loops through all the rows of the table. For each row, it removes
the last td element. If the row remains empty after removing all the td elements, the 
tbody innerHTML is set to empty, otherwise, the number of columns is decremented.

5. fillU()

Fills all the uncolored cells

This method works by getting all the td cells using the document.getElementByTagName() function.
Once all the td cells have been, the function loops through each and checks if the 
background color has been set. If the color has not been set, the loop sets it.

6. fillAll()

Fills all the cells

This method works by getting all the td cells using the document.getElementByTagName() function.
Once all the td cells have been, the function loops through each and sets the background color to the selected
color.

7. clearAll()

Clears the color of all the cells

This method works by getting all the td cells using the document.getElementByTagName() function.
Once all the td cells have been, the function loops through each and sets the background color to transparent.

8. changeColor(e)

Changes the color of the clicked cell

This function is triggered by the onclick event and it sets the color of the cell to The
selected color
