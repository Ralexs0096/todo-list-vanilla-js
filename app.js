document.addEventListener('DOMContentLoaded', () => {
  const input = document.querySelector('.input');
  const addButton = document.querySelector('.add-todo');
  const todoList = document.querySelector('.todo-list');

  addButton.addEventListener('click', () => {
    const todoText = input.value.trim();

    if (todoText) {
      // text container
      const todoItem = document.createElement('li');
      todoItem.classList.add('todo-item');

      // Text
      const todoContent = document.createElement('span');
      todoContent.textContent = todoText;
      todoItem.appendChild(todoContent);

      // Delete Button
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'X';
      deleteButton.classList.add('delete-btn');
      todoItem.appendChild(deleteButton);

      deleteButton.addEventListener('click', () => {
        todoItem.remove();
      });

      todoContent.addEventListener('click', () => {
        todoItem.classList.toggle('completed');
      });

      // List
      todoList.appendChild(todoItem);
      input.value = '';
    }
  });
});
