var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function render(){
    listElement.innerHTML = '';
    for(todo of todos){
        var liElement = document.createElement('li');
        var textElement = document.createTextNode(todo);

        var pos = todos.indexOf(todo);

        var linkElement = document.createElement('a');
        linkElement.setAttribute('href','#');
        linkElement.setAttribute('onclick', 'deleteToDo(' + pos + ')');
        var linkTextElement = document.createTextNode(" Delete");
        linkElement.appendChild(linkTextElement);

        

        liElement.appendChild(textElement);
        liElement.appendChild(linkElement);
        listElement.appendChild(liElement);
    }
}
render();
    

function addToDo(){
    var toDoText = inputElement.value;
    todos.push(toDoText);
    inputElement.value = '';
    render();
    saveToStorage();
}

buttonElement.onclick = addToDo;

function deleteToDo(pos){
    todos.splice(pos,1);
    render();
    saveToStorage();
}

function saveToStorage(){
    localStorage.setItem('list_todos',JSON.stringify(todos));
}

