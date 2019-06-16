'use strict';

function readTodo(todo, request, response) {
  const id = request.params.id;
  todo
    .read()
    .then(todos => {
      for (todo of todos) {
        if (id === todo.id) {
          response.json(todo);
          response.end();
        }
      }
      response.json({ error: `The id ${id} couldn't found!` });
      response.end();
    })
    .catch(({ message }) => {
      response.status(500);
      response.json({ error: message });
    });
}

module.exports = readTodo;
