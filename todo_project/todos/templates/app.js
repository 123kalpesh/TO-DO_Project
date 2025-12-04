const API_URL = "http://127.0.0.1:8000/api/todos/";

async function loadTodos() {
    let res = await fetch(API_URL);
    let data = await res.json();

    document.getElementById("todoList").innerHTML =
        data.map(t => `<li>${t.task}</li>`).join("");
}

async function addTask() {
    const task = document.getElementById("taskInput").value;

    await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ task })
    });

    loadTodos();
}

loadTodos();
