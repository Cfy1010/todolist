let taskList = document.getElementById("taskList");

function addTask() {
  let inputTask = document.getElementById("inputTask");
  let taskText = inputTask.value;

  if (taskText === "") {
    alert("Veuillez ajouter une tâche");
  }

  let li = document.createElement("li");
  li.innerHTML = taskText;

  console.log(li);

  let editButton = document.createElement("button");
  editButton.innerHTML =
    '<ion-icon name="pencil-outline" class="modify"></ion-icon>';

  console.log(editButton);

  editButton.onclick = () => {
    editTask(li);
  };

  let deleteButton = document.createElement("button");
  deleteButton.innerHTML =
    '<ion-icon name="trash-outline" class="delete"></ion-icon>';

  deleteButton.onclick = () => {
    deleteTask(li);
  };

  console.log(deleteButton);

  li.appendChild(editButton);
  li.appendChild(deleteButton);

  taskList.appendChild(li);

  inputTask.value = "";
}
