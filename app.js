const todoContainer = document.getElementById("todo-container");
todoInput = document.getElementById("todo-input");
todoButton = document.getElementById("todo-button");
deleteButton = document.getElementsByClassName('delete-button')
let todoList = [1, 3];


// EVENT LISTENERS

todoButton.addEventListener("click", (e) => {
  e.preventDefault();
  let newInput = { title: todoInput.value, "completed":false};
  todoList.unshift(todoInput.value);
  todoContainer.insertBefore(
    createToDoCard(newInput),
    todoContainer.firstChild
  );
});
console.log(deleteButton)

// handle delete todo
todoContainer.addEventListener('click',(e)=>{
e.preventDefault()
console.log(e.target)
console.log('clicked')
console.log(e.target.classList.value)
e.target.classList.value===`class="fa-solid fa-trash"`
})


// FUNCTIONS
// fetch data from the json placeholder
async function fetchData() {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5");
  const response = await data.json();

  response.map((todo) => {
    todoContainer.appendChild(createToDoCard(todo));
  });

 
}


// create todo cards
function createToDoCard(todoObj) {
  const card = document.createElement("div");

  const title = document.createElement("h1");
  title.innerHTML = `${todoObj.title}`;
  card.appendChild(title);

  const trashButton = document.createElement("span");
  trashButton.classList.add('delete-button')
  trashButton.innerHTML =`
  <i class="fa-solid fa-trash" ></i>`;
  card.appendChild(trashButton);

  const completedButton = document.createElement("span");
  completedButton.classList.add('completed-button')
  completedButton.innerHTML =
    '<i class="fa-solid fa-square-check"></i>';
  card.appendChild(completedButton);
  return card;
}


// handle delete


// FUNCTION CALLS
fetchData();
