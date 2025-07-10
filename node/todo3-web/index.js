let todoList = ["Wash the dishes", "Water the plants", "Clean your room"];
let container = document.getElementById("list");

function showTodos() {
    container.innerHTML = "";
    todoList.forEach((todo, index) => {
        let todoContainer = document.createElement("div");
        let item = document.createElement("span");
        let edit = document.createElement("button");
        let del = document.createElement("button");

        edit.textContent = "Edit";
        edit.onclick = () => editTodo(index);
        del.textContent = "Delete";
        del.onclick = () => deleteTodo(index);
        item.textContent = todo;

        todoContainer.append(item);
        todoContainer.append(edit);
        todoContainer.append(del);

        container.append(todoContainer);
    });
}

function addTodo() {
    let todo = document.getElementById("inputTodo").value.trim();
    if(todo) {
        todoList.push(todo);
        showTodos();
    }
    else {
        alert("Please enter a valid todo");
    }
}

function editTodo(index) {
    let newTodo = prompt("Enter the new Todo:");
    todoList[index] = newTodo;

    showTodos();
}

function deleteTodo(index) {
    todoList.splice(index, 1);
    showTodos();
}

document.getElementById("add").onclick = () => addTodo();
showTodos();