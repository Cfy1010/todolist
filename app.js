let taskList = document.getElementById("taskList");

function addTask() {
  const inputTask = document.getElementById("inputTask");
  const taskText = inputTask.value.trim();

  if (!taskText) {
    return;
  }

  const li = document.createElement("li");
  li.textContent = taskText;

  const editButton = createButton(
    "pencil-outline",
    "modify",
    editTask.bind(null, li)
  );
  const deleteButton = createButton(
    "trash-outline",
    "delete",
    deleteTask.bind(null, li)
  );

  li.appendChild(editButton);
  li.appendChild(deleteButton);

  taskList.appendChild(li);

  inputTask.value = "";
}

function createButton(iconName, Class, onClick) {
  const button = document.createElement("button");
  button.innerHTML = `<ion-icon name="${iconName}", class="${Class}"></ion-icon>`;
  button.onclick = onClick;
  return button;
}

editTask = (task) => {
  const taskTextElement = task.firstChild;
  const textTask = taskTextElement.textContent;

  const newTaskText = prompt("Modifier la tâche", textTask);

  if (newTaskText !== null && newTaskText !== "") {
    taskTextElement.textContent = newTaskText;
  }
};

deleteTask = (task) => {
  taskList.removeChild(task);
};
