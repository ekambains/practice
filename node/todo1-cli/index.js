import { createInterface } from 'node:readline';

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

function questionAsync(query){
    return new Promise(resolve => {
        rl.question(query, resolve);
    });
}

let todoList = [];

async function addTodo() {
    let todo = await questionAsync("Enter the todo: ");
    while(todo == "") {
        todo = await questionAsync("Please enter a valid value: ");
    }
    todoList.push(todo);
    console.log("Todo Added Successfully.");
}

async function editTodo() {
    let index = await questionAsync("Enter the todo number you want to edit: ");
    index = parseInt(index);
    while(isNaN(index) || index > todoList.length) {
        index = await questionAsync("Please enter a valid number: ");
    }
    let changedTodo = await questionAsync("Enter the new value: ");
    while(changedTodo == "") {
        changedTodo = await questionAsync("Please enter a valid value: ");
    }
    todoList[index - 1] = changedTodo;
    console.log(`${index}. edited successfully.`);
}

async function deleteTodo() {
    let index = await questionAsync("Enter the todo number you want to delete: ");
    while(isNaN(index) || index >= todoList.length) {
        index = await questionAsync("Please enter a valid number: ");
    }
    todoList.splice(index - 1, 1);
    console.log(`${index}. deleted successfully.`);
}

function getTodos() {
    let i = 1;
    todoList.forEach((todo) => {
        console.log(`${i++}. ${todo}`);
    });
}

function defaultInfo() {
    console.log("Choose the following options:");
    console.log("1. Show All items.");
    console.log("2. Add an item.");
    console.log("3. Edit an item");
    console.log("4. Delete an item");
    console.log("5. Exit");
}

async function app() {

    console.log("Welcome to the Todo App");

    while(true) {
        defaultInfo();
        let option = await questionAsync("Choose an option: ");

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
                option = await questionAsync("Please enter a valid option: ");
                break;
        }
    }
}

app();