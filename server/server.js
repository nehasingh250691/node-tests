const express = require('express');

var app = express();

app.get('/',(req,res) => {
    res.status(404).send({
        error: 'Page not found.',
        name: 'Todo App v1.0'
      });
});

app.get('/users',(req,res) =>{
    res.send([{
        name:'Neha',
        age:24
    },
    {
        name:'Divya',
        age:21
    },{
        name:'Priya',
        age:21
    },{
        name:'Priti',
        age:17
    }]);
})

app.listen(3000, () => {
    console.log('Server is up on port 3000');
});

module.exports.app = app;