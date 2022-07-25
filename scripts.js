

const todos = [{
	title: 'Get groceries',
	dueDate: '2021-10-04'
}, {
	title: 'Wash car',
	dueDate: '2021-02-04'
}, {
	title: 'Make Dinner',
	dueDate: '2021-02-04'
}];


todos.push('another todo');

render();

function addTodo() {
    const textbox = document.getElementById('todo-title');
    const title = textbox.value;
	
	const datePicker = document.getElementById('date-picker');
	const dueDate = datePicker.value;
    
	
	todos.push({
		title: title,
		dueDate: dueDate
    });

    render();

	
}

function render() {

    // reset list and re-render
    document.getElementById('todo-list').innerHTML = ' ';
	
    todos.forEach(function (todo) {

        const element = document.createElement('div');
        element.innerText = todo.title + ' ' + todo.dueDate;
		const todoList = document.getElementById('todo-list');
        todoList.appendChild(element);
    

});
}

//   todos.pop(); .something is a method

