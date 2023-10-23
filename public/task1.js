const todoList = []; // we use this to store our todo tasks
let id = 0;
function addTask() {
  const taskText = document.getElementById("new-task"); // we get the text of the task from the input field
  const taskList = document.getElementById("todo-list");

  if (taskText.value.trim() !== "") {
    // we check if the task text is not empty
    const newTask = {
      text: taskText.value,
      completed: false,
      id: ++id + taskText.value, // we create a unique id for each task
    };

    todoList.push(newTask);

    const listItem = document.createElement("li"); // here we create the todo list item
    listItem.innerHTML = `
            <input type="checkbox" onclick="toggleComplete(this)">
            <span id="${newTask.id}">${newTask.text}</span>
            <button onclick="deleteTask(this)">Delete</button> 
        `; // here we add the todo list item to the todo list
    // we pass "this" to the functions to get the object of their "tags"

    taskList.appendChild(listItem);
    taskText.value = ""; // we clear the input field
  }
}

function toggleComplete(checkbox) {
  const listItem = checkbox.parentElement; // we get "li" parent element
  const textElement = listItem.querySelector("span");
  todoList.find((task) => task.id === textElement.id).completed = // we check if the checkbox is checked or not
    checkbox.checked;
  textElement.classList.toggle("completed", checkbox.checked); // here we toggle the class of the span element
}

function deleteTask(button) {
  const listItem = button.parentElement; // we get "li" parent element
  const index = Array.from(listItem.parentElement.children).indexOf(listItem); // we get the index of the parent element in the todoList array
  todoList.splice(index, 1); // we remove the task from the todoList array
  listItem.remove(); // here we remove the task from the site
}
