// First Task //

let firstTask = prompt("Enter task 1 title:");
console.log(firstTask)

let taskDescription = prompt("Enter task description:");
console.log(taskDescription)

let status = prompt("Enter status of completion").toLowerCase();
console.log(status)

while (status !== "todo" && status !== "doing" && status !== "done") {
    alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
    status = prompt("Enter status of completion:").toLowerCase();
  }

if (status === "todo" || status === "doing") {
    console.log("No task completed, lets get to work!");
} else if (status === "done") {
    console.log(" Title: " + firstTask + " status: done. ");
} else {
    console.log("Invalid status, please enter 'todo', 'doing' or 'done'" )
}

// Second Task //

let secondTask = prompt("Enter task 2 title:");
console.log(secondTask)

let taskDescription2 = prompt("Enter task description:");
console.log(taskDescription2)

let status2 = prompt("Enter status of completion");
console.log(status2)

while (status2 !== "todo" && status2 !== "doing" && status2 !== "done") {
    alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
    status2 = prompt("Enter status of completion:").toLowerCase();
  }

if (status2 === "todo" || status2 === "doing") {
    console.log("No task completed, lets get to work!");
} else if (status2 === "done") {
    console.log(" Title: " + secondTask + " status: done. ");
} else {
    console.log("Invalid status, please enter 'todo', 'doing' or 'done'" )
}
