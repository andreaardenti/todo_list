let assert = require('assert');
let todo = require('./index');

todo.addToDo('spesa', 'pasta', 'andrea');
todo.addToDo('meccanico', 'olio', 'caligola');

describe('Testiamo la todo list', function() {
    it('testiamo showToDo()', function(){
        assert.equal(typeof(todo.showToDo()), 'object');
    });

    it('testiamo addToDo()', function(){
        assert.equal(typeof(todo.addToDo('spesa', 'pasta', 'andrea')), 'undefined');
        assert.equal(typeof(todo.addToDo('meccanico', 'olio', 'caligola')), 'undefined');
    });

    it('testiamo resetToDo()', function(){
        assert.equal(typeof(todo.resetToDo()), 'undefined');
    });

    it('test dei deleteToDo()', function() {
        assert.equal(typeof(todo.deleteToDo(1)), 'undefined');
    });

    it('test di changeToDoState()', function() {
        assert.equal(typeof(todo.changeToDoState(1)), 'object');
    });

    it('test di findToDoByName()', function() {
        assert.equal(typeof(todo.findToDoByName(1)), 'object');
    });

    it('test di findToDoByState()', function(){
        assert.equal(typeof(todo.findToDoByState(false)), 'object');
    })
})


