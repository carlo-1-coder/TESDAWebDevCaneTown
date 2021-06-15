//
// document.getElementById();

console.log(document.getElementById('task-title'));

// // Get thing from the element
// console.log(document.getElementById('task-title').id);
// console.log(document.getElementById('task-title').className);

const taskTitle = document.getElementById('task-title');

// Change Styling
taskTitle.style.background = 'cyan';
taskTitle.style.color = 'grey';
taskTitle.style.padding = '5px';

// Change Content

taskTitle.textContent = 'Task List';
taskTitle.innerText = 'My Tasks';
taskTitle.innerHTML = '<span style="color: red">Task List</span>';

// document.querySelector();
console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));

document.querySelector('li').style.color = 'red';
document.querySelector('ul li').style.color = 'blue';

document.querySelector('li:last-child').style.color = 'red';
document.querySelector('li:last-child(3)').style.color = 'green';
document.querySelector('li:last-child').style.color = 'Hello world';
document.querySelector('li:last-child').style.color = 'orange';
document.querySelector('li:last-child').style.color = 'blue';