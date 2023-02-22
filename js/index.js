console.clear();

const form = document.querySelector('[data-js="form"]');
const todoList = document.querySelector('[data-js="todoList"]');
//const headline = document.querySelector("#headline");

// Task 1:
//- Write an event listener for the form submit.
//- Log the user data to the console (we will use the data later in this exercise).
//- After submit, reset the form and focus the input field with the name `headline`.

form.addEventListener("submit", (event) => {
  //magic begins:
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  //magic ends
  console.log(data);

  addFunction(data);

  form.reset();

  form.elements.headline.focus();
  //Alternative: event.target.headline.focus();
});

const listItem = document.createElement("li");
const title = document.createElement("h2");
const task = document.createElement("p");

title.textContent = "Überschrift";
task.textContent = "to do";

todoList.append(listItem);
listItem.append(title, task);

function addFunction(data) {
  const listItem = document.createElement("li");
  const title = document.createElement("h2");
  const task = document.createElement("p");

  title.textContent = data.headline;
  task.textContent = data.task;

  todoList.append(listItem);
  listItem.append(title, task);
}
