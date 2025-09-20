document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");
  
    // Temporary in-memory array to store tasks
    const tasks = [];
  
    addTaskBtn.addEventListener("click", () => {
      const taskText = taskInput.value.trim();
      if (taskText === "") return;
  
      // Add task to memory (array)
      tasks.push(taskText);
      console.log("Current tasks:", tasks); // For debugging
  
      // Create <li> element
      const li = document.createElement("li");
      li.textContent = taskText;
  
      // Toggle completed style on click
      li.addEventListener("click", () => {
        li.classList.toggle("completed");
      });
  
      // Create delete button
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "✕";
      deleteBtn.style.background = "none";
      deleteBtn.style.border = "none";
      deleteBtn.style.cursor = "pointer";
      deleteBtn.style.color = "red";
      deleteBtn.addEventListener("click", () => {
        li.remove();
  
        // Optional: remove from memory array
        const index = tasks.indexOf(taskText);
        if (index !== -1) tasks.splice(index, 1);
        console.log("After delete:", tasks);
      });
  
      li.appendChild(deleteBtn);
      taskList.appendChild(li);
  
      // Clear the input field
      taskInput.value = "";
    });
  });
  