let taskList = document.getElementById("taskList");

function addTask() {
  let inputTask = document.getElementById("inputTask");
  let taskText = inputTask.value;

  if (taskText === "") {
    return;
  }

  let li = document.createElement("li");
  li.innerHTML = taskText;

  let editButton = document.createElement("button");
  editButton.innerHTML =
    '<ion-icon name="pencil-outline" class="modify"></ion-icon>';

  //   console.log(editButton);

  editButton.onclick = () => {
    editTask(li);
  };

  let deleteButton = document.createElement("button");
  deleteButton.innerHTML =
    '<ion-icon name="trash-outline" class="delete"></ion-icon>';

  deleteButton.onclick = () => {
    deleteTask(li);
  };

  li.appendChild(editButton);
  li.appendChild(deleteButton);

  taskList.appendChild(li);

  inputTask.value = "";
}

editTask = (task) => {
  taskTextElement = task.firstChild;
  textTask = taskTextElement.textContent;

  let newTaskText = prompt("Modifier la tâche", textTask);

  if (newTaskText === null || newTaskText === "") {
    return;
  }

  taskTextElement.textContent = newTaskText;
};

deleteTask = (task) => {
  taskList.removeChild(task);
};
