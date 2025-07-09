import { createInterface } from "node:readline";

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

async function questionAsync(query) {
    return new Promise(resolve => {
        rl.question(query, resolve);
    });
}

let todoList = [];

function getTodos() {
    let i = 1;
    todoList.forEach(todo => {
        console.log(`${i++}. ${todo}`);
    });
    console.log("\n");
}

async function addTodo() {
    let todo = await questionAsync("Enter the todo: ");
    while(todo.trim() == "") {
        todo = await questionAsync("Please enter a valid value: ");
    }

    todoList.push(todo);
    console.log("Todo Added Successfully\n");
}

async function editTodo() {
    let index = await questionAsync("Enter the todo number to edit: ");
    index = parseInt(index);
    while(isNaN(index) || index > todoList.length || index < 1) {
        index = await questionAsync("Enter a valid number: ");
    }

    let todo = await questionAsync("Enter the new todo: ");
    while(todo.trim() == "") {
        todo = await questionAsync("Please enter a valid value: ");
    }

    todoList[index - 1] = todo;
    console.log(`Todo ${index}. edited successfully\n`);
}

async function deleteTodo() {
    let index = await questionAsync("Enter the todo number to delete: ");
    index = parseInt(index);
    while(isNaN(index) || index > todoList.length || index < 1) {
        index = await questionAsync("Enter a valid number: ");
    }

    todoList.splice(index - 1, 1);
    console.log(`Todo ${index}. deleted successfully\n`);
}

function defaultInfo() {
    console.log("Choose the following options: ");
    console.log("1. Show All Todos");
    console.log("2. Add a Todo");
    console.log("3. Edit a Todo");
    console.log("4. Delete a Todo");
    console.log("5. Exit\n");
}

async function app() {
    console.log("Welcome to the Todo App!\n");

    while(true) {
        defaultInfo();
        let option = await questionAsync("Enter an option: ");
        
        switch (option) {
            case '1':
                getTodos();
                break;

            case '2':
                await addTodo();
                break;

            case '3':
                await editTodo();
                break;

            case '4':
                await deleteTodo();
                break;

            case '5':
                console.log("Thank You!");
                process.exit(0);
        
            default:
                console.log("Error! Please enter a valid option");
                break;
        }
    }
}

app();