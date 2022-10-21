/*
A task:

You have a list of students who want to play the game:

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];
But teams can only be 3 to 3 people. Write a sortStudentsByGroups function that accepts an array of strings.

Inside, it first sorts the names alphabetically. Then distributes students of 3 people into 3 groups in 
alphabetical order. These groups must be arrays. As a result, the function returns a new array with three 
commands and a string as the 4th element.
*/


const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {
    const arrOfStudents = arr.sort();
    let subArray = [];

    const size = 3;

    for (let i = 0; i < Math.ceil(arr.length / size); i++) {
        subArray[i] = arrOfStudents.slice(i * size, i * size + size);
    }

    if (!Number.isInteger(arr.length / size)) {
        const last = subArray.pop();
        subArray.push(`The remaining students: ${last.join(', ')}`);
    } else {
        subArray.push(`The remaining students: -`);
    }
    return subArray;
}