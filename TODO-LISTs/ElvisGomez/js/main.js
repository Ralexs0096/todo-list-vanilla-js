document.addEventListener("DOMContentLoaded", () => {
  const inputToDo = document.querySelector(".input-todo");
  const addBtn = document.querySelector(".add-btn");
  const listTodo = document.querySelector(".todo-list");
  const title = document.querySelector(".title");

  addBtn.addEventListener("click", () => {
    const input = inputToDo.value.trim();

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
        updateData();
      });

      todoContent.addEventListener("click", (e) => {
        todoItem.classList.toggle("completed");
        updateData();
      });

      listTodo.appendChild(todoItem);
      inputToDo.value = "";
      updateData();
      document.querySelector(".input-todo").focus();
    }
  });

  function updateData() {
    const total = listTodo.querySelectorAll("li").length;
    const completed = listTodo.querySelectorAll("li.completed").length;
    const pending = total - completed;

    const replaceData = document.querySelector(".data");
    if (replaceData) replaceData.remove();

    if (total > 0) {
      const dataDiv = document.createElement("div");
      dataDiv.classList.add("data");

      const label = document.createElement("label");
      label.textContent = `${pending} Pending tasks`;

      const span = document.createElement("span");
      span.textContent = `${completed} Completed`;

      dataDiv.appendChild(label);
      dataDiv.appendChild(span);

      title.insertAdjacentElement("afterend", dataDiv);
    } else {
      replaceData.remove();
    }
  }
});
