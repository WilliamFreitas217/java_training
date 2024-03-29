var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');


var todos = JSON.parse(localStorage.getItem('list_todos')) || ['Fazer café', 'Estudar Javascript', 'Acessar github'];

function renderTodos(){
    listElement.innerHTML = '';
    for (todo of todos){
        var todoElement = document.createElement('li');
        var todoText= document.createTextNode(todo);

        var linkElement = document.createElement('a');

        linkElement.setAttribute('href', '#');

        var pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'deleteTodo('+pos+')');

        var linkText = document.createTextNode(' Excluir');

        linkElement.appendChild(linkText);

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);
    }
}

renderTodos();

function addTodo(){
    var todoText = inputElement.value;
    todos.push(todoText);
    inputElement.value = '';
    renderTodos();
    saveStorage();
}

function deleteTodo(pos){
    todos.splice(pos, 1);
    renderTodos();
    saveStorage();
}

buttonElement.onclick = addTodo;

function saveStorage(){
    localStorage.setItem('list_todos', JSON.stringify(todos));
}