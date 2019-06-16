'use strict';

function clearTodos(request, response) {
  const id = request.params.id;

  todo
    .clearAll_()
    .then(() => {
      response.status(204); // Todo: Check this line
      response.end();
    })
    .catch(({ message }) => {
      response.status(500);
      response.json({ error: message });
    });
}

module.exports = clearTodos;
