document.addEventListener("DOMContentLoaded", () => {
  const inputToDo = document.querySelector(".input-todo");
  const addBtn = document.querySelector(".add-btn");
  const listTodo = document.querySelector(".todo-list");

  addBtn.addEventListener("click", () => {
    const input = inputToDo.value.trim();
    console.log(input);
    if (input) {
      const todoItem = document.createElement("li");
      todoItem.classList.add("todo-item");

      const todoContent = document.createElement("span");
      todoContent.textContent = input;
      todoItem.appendChild(todoContent);

      const delButton = document.createElement("button");
      delButton.textContent = "X";
      delButton.classList.add("delete-btn");
      todoItem.appendChild(delButton);

      delButton.addEventListener("click", () => {
        todoItem.remove();
      });

      todoContent.addEventListener("click", () => {
        todoItem.classList.toggle("completed");
      });

      listTodo.appendChild(todoItem);
      inputToDo.value = "";
    }
  });
});
