// Q1. Create a todo app
// list - to show all todos
// add - to add todo
// delete - to delete a task
// quit - to exit the todo

let todo = [];

let req = prompt("Enter: list, add, delete, quit");

while (true) {

    if (req === "quit") {
        console.log("quitting app");
        break;
    }

    if (req === "list") {
        console.log("__________");
        for (let i = 0; i < todo.length; i++) {
            console.log(`${i} - ${todo[i]}`);
        }
        console.log("__________");

    } else if (req === "add") {
        let task = prompt("Enter task");
        todo.push(task);

    } else if (req === "delete") {
        let idx = prompt("Enter index");
        todo.splice(idx, 1);

    } else {
        console.log("Invalid request");
    }

    req = prompt("Enter: list, add, delete, quit");
}
