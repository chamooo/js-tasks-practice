# js-tasks-practice
Here are my small programs, solutions of some tasks for practicing JavaScript ES6


file: divide-into-groups.js

Working with arrays.

Task:
You have a list of students who want to play the game:
const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];
But teams can only be 3 to 3 people. Write a sortStudentsByGroups function that accepts an array of strings.
Inside, it first sorts the names alphabetically. Then distributes students of 3 people into 3 groups in 
alphabetical order. These groups must be arrays. 
As a result, the function returns a new array with three 
commands and a string as the 4th element.

Solution: 
Dividing sorted array using "for" cycle and "slice()" method. If the number of students is divisible by 3 with 
a remainder, then we cut the last element of the array using the "pop()" method and push it to the end of array 
using "push()" method.


file: calc-heating-costs.js

Working with objects.

Task:
You have a small piece of mall data stored in the shoppingMallData object. They contain an array with data 
about stores, where the length and width of the room are indicated; room height; the cost of heating per 1 
cubic meter and the budget for paying for heating per month.

The main task is to write an isBudgetEnough function that will return a string. If the budget is enough to 
heat the entire volume of the shopping center - 'Budget is enough' is displayed, if not - 'Budget is not enough'. 

Solution:
We loop through the array of shops objects using "forEach" cycle and with each iteration calculate the area of each store.
Then we calculating capacity of whole shopping mall 
