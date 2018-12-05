let todos = [];
let COUNTER = 1;
let users = ['andrea', 'piero', 'giovanni', 'caligola'];

//console.log(users[0]);

//mostra tutti i todo's
exports.showToDo = function() {
    return todos;
}

//resetta tutti i todo's e il contatore
exports.resetToDo = function() {
    todos = [];
    COUNTER = 0;
} 

//aggiungere un nuovo todo
exports.addToDo = function(title, description, name) {
    var todo = {
        id: COUNTER++,
        name: title,
        description: description,
        completed: false,
        assignedTo: name
    }
    if (users.includes(todo.assignedTo)) {
        todos.push(todo);
    } else {
        return "spiacente l\'utente non è presente nella lista, impossibile assegnare il compito"
    }
}

//eliminare un todo in base all'ID
exports.deleteToDo = function(id) {
    for (var i=0; i<todos.length; i++) {
        if (todos[i].id === id) {
            return todos.splice(i ,1);
        }
    }
}

//cambia lo stato di un todo
exports.changeToDoState = function(id) {
    let filteredToDoState = [];
    for(let i=0; i<todos.length; i++) {
        if(todos[i].id === id) {
            todos[i].completed = true;
            filteredToDoState.push(todos);
        }
    } return filteredToDoState;
}

//mostrare la lista dei todo in base all'utente
exports.findToDoByName = function(param) {
    let filteredToDoByName = [];
    for (let todo of todos) {
        if (todo.assignedTo === param) {
            filteredToDoByName.push(todo);
        } 
    } return filteredToDoByName;
}

//mostrare la lista dei todo in base allo stato
exports.findToDoByState = function(param) {
    let filteredToDoByState = [];
    for (let todo of todos) {
        if (todo.completed === param) {
            filteredToDoByState.push(todo); 
        }
    } return filteredToDoByState;
}

//this.addToDo('SPESA', 'pasta, frutta, verdura', 'caligola');
//this.addToDo('MECCANICO', 'olio, punterie, filtro', 'andrea');
//this.addToDo('CINEMA', 'regista, attori, titoli di coda', 'piero');

//console.log(todos);
//console.log(this.showToDo());

//console.log(this.deleteToDo(1));
//console.log(this.showToDo());

//this.changeToDoState(1);
//console.log(this.showToDo());

//console.log(this.findToDoByName('piero'));
//console.log(this.showToDo());

//console.log(this.findToDoByState(true));
//console.log(this.showToDo());