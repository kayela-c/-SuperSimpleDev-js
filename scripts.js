/* MVC
 Model -Contains all code that saves and manages data
 View - contains all code that manages visuals. renders visuals using daa in model
 Controller - connects model and view together:
 1) responds to events from the view (e.g. button clicks)
 2) tells the model to update its data (and the view to re-render)
*/


// ------------Model-------------
//if localstorage has a todos array, then us it
// else use default array

let todos;


//retrieve local storage
const savedTodos = 	JSON.parse(localStorage.getItem('todos'));

//check if array
if (Array.isArray(savedTodos)) {
	todos = savedTodos;
	
}

else {
todos = [{
	title: 'Get groceries',
	dueDate: '2021-10-04',
	id: 'id1'
}, {
	title: 'Wash car',
	dueDate: '2021-02-04',
	id: 'id2'
}, {
	title: 'Make Dinner',
	dueDate: '2021-02-04',
	id: 'id3'
}];	

}


render();

// ---Creates a todo

function createTodo (title, dueDate){
	
	const id = '' + new Date().getTime();
	
	todos.push({
		title: title,
		dueDate: dueDate,
		id: id
    });
 saveTodos();
}

// ---Deletes a todo


function removeTodo(idToDelete) {
	todos = todos.filter(function (todo) {
		// if the id of this todo matches idToDelete, return false
		//for everything else, return true
	if (todo.id === idToDelete) {
		return false;	
	}
	
	else {
		return true;
	}
});

saveTodos();
}


//--- saves data

function saveTodos() {
localStorage.setItem('todos', JSON.stringify(todos));	
}

// controller 
function addTodo() {
    const textbox = document.getElementById('todo-title');
    const title = textbox.value;
	
	const datePicker = document.getElementById('date-picker');
	const dueDate = datePicker.value;
    
	createTodo(title, dueDate);

    render();
}

function deleteTodo (event){
	const deleteButton = event.target;
	const idToDelete = deleteButton.id;
	
	removeTodo(idToDelete);
	
	render();
}

//view

function render() {                  

    	// reset list and re-render
    	document.getElementById('todo-list').innerHTML = ' ';
	
	   	//instructions 
		todos.forEach(function (todo) {

        const element = document.createElement('div');
        element.innerText = todo.title + ' ' + todo.dueDate;
		
		const deleteButton = document.createElement('button');
		deleteButton.innerText = 'Delete';
		deleteButton.style = 'margin-left: 12px';
		deleteButton.onclick = deleteTodo;
		deleteButton.id = todo.id;
		element.appendChild(deleteButton);	
		
		const todoList = document.getElementById('todo-list');
        todoList.appendChild(element);
    

		});
	}

//   todos.pop(); .something is a method

