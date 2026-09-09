const inputBox = document.querySelector("#input-box");
const addTaskBtn = document.querySelector("#add-task-btn");
const taskContainer = document.querySelector("#task-container");

addTaskBtn.addEventListener("click", () => {
  // creating elements
  const div = document.createElement("div");

  const newTaskInput = document.createElement("input");
  newTaskInput.classList.add("new-task-input");
  newTaskInput.value = inputBox.value;
  newTaskInput.readOnly = true;

  const editBtn = document.createElement("button");
  editBtn.innerText = "Edit";

  // step1: create a state varible
  let isEdit = false;

  editBtn.addEventListener("click", () => {
    if (isEdit === false) {
      isEdit = true;
      newTaskInput.readOnly = false; // now, you can edit the newTaskInput
      newTaskInput.focus();
      editBtn.innerText = "Save";
    } else {
      isEdit = false;
      newTaskInput.readOnly = true; // now, you cannot edit the newTaskInput
      editBtn.innerText = "Edit";
    }
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";

  deleteBtn.addEventListener("click", () => {
    deleteBtn.parentElement.remove();
  });

  div.insertAdjacentElement("afterbegin", deleteBtn);
  div.insertAdjacentElement("afterbegin", editBtn);
  div.insertAdjacentElement("afterbegin", newTaskInput);

  taskContainer.insertAdjacentElement("beforeend", div);

  inputBox.value = "";
});
