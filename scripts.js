

//let todos = ['Get groceries', 'Wash car', 'Make dinner'];
let todos = [' '];

todos.push('another todo');

render();

function addTodo() {
    let textbox = document.getElementById('todo-title');
    let title = textbox.value;
    todos.push(title);

    render();
}

function render(){

    // reset list and re-render
    
    todos.forEach(function (todoTitle) {

        let element = document.createElement('div');
        element.innerText = todoTitle;
        document.body.appendChild(element);
    

});
}

//   todos.pop(); .something is a method

