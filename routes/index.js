var express = require('express');
var router = express.Router();
let todoData = require("../data/todo");

/* GET home page. */
router.get('/', function(req, res, next) {
    let todos = todoData
    let header = ""
    if (todos.length == 0) {
        todos = [];
    }

    res.render('index', { 
        title: 'Unit 2 Assessment',
        todos,
    });
});

router.post('/add', function(req, res, next) {
    if(req.body.todo !== "") {
        todoData.push({
            todo: req.body.todo,
            done: false
        })
    }
        
    res.render('index', { 
        title: 'Unit 2 Assessment',
        todos: todoData
    });
});

router.get('/delete/:item', function(req, res, next) {
    let todos = todoData
    for (let i = 0; i < todos.length; i++) {
        if (req.params.item == todos[i].todo) {
            todos.splice(i ,1);
        }
    }
    res.render('index', { 
        title: 'Unit 2 Assessment',
        todos: todoData
    });
});


module.exports = router;
