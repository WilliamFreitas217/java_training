var urlprefix = 'https://api.github.com/users/'
var urlposfix = '/repos'
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');
var listElement = document.querySelector('#app ul');

// var todos = JSON.parse(localStorage.getItem('list_todos')) ||
//  ['Fazer café', 'Estudar Javascript', 'Acessar github'];

function search(){
    var user = inputElement.value;
    var url = urlprefix+user+urlposfix;
    axios.get(url)
    .then(function(response){
        console.log(response.data);
        renderList(response.data);
    })
    .catch(function(error){
        console.warn(error);
    });
}

function renderList(data){
    todos = data;
    for (todo of todos){
        var todoElement = document.createElement('li');
        var todoText= document.createTextNode(todo.name);
        todoElement.appendChild(todoText);
        listElement.appendChild(todoElement);
    }
}

buttonElement.onclick = search;