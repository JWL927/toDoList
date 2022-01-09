const toDoForm = document.querySelector(".todo-form");
const toDoList = document.querySelector(".todo-list");
const toDoInput = toDoForm.querySelector("input");

const TODOS_KEY = "todos";

const toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function removeToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function showToDo(haveToDo) {
    const li = document.createElement("li");
    li.id = haveToDo.id;
    const span = document.createElement("span");
    span.innerText = haveToDo.text;
    const button = document.createElement("button");
    button.innerText = "x";
    button.addEventListener("click", removeToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoList(event) {
    event.preventDefault();
    const haveToDo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = {
        text: haveToDo,
        id: Date.now()
    }
    toDos.push(newToDoObj);
    showToDo(newToDoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoList);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    parsedToDos.forEach(showToDo);
}