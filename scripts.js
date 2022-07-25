

const todos = [{
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


todos.push('another todo');

render();

function addTodo() {
    const textbox = document.getElementById('todo-title');
    const title = textbox.value;
	
	const datePicker = document.getElementById('date-picker');
	const dueDate = datePicker.value;
    
	const itemId = new Date().getTime();
	
	todos.push({
		title: title,
		dueDate: dueDate,
		id: itemId
    });

    render();
}

function deleteTodo (event){
	const deleteButton = event.target;
	const idToDelete = deleteButton.id;
	
	todos.filter(function (todo) {
		// if the id of this todo matches idToDelete, return false
		//for everything else, return true

	});
}



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

