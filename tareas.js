const button = document.getElementById("button");
const form = document.getElementById("form");
const editButton=document.getElementById("editButton");
const deleteBtn = document.getElementById("deleteButton")

button.addEventListener("click",(e)=>{
  let title = document.getElementById("task").value;

  let description = document.getElementById("description").value;


  if (title==""||description=="") {
    return
  }

  let task ={
     title,
     description
   }
  
  if (localStorage.getItem("tasks")==null) {
    let arrayTasks =[];
    arrayTasks.push(task);
    localStorage.setItem("tasks",JSON.stringify(arrayTasks));
  } else {
    let arrayTasks = JSON.parse(localStorage.getItem('tasks'));
    arrayTasks.push(task);
    localStorage.setItem("tasks",JSON.stringify(arrayTasks));
  }

  showTasks()
  form.reset();
  e.preventDefault()
});


let showTasks=()=>{  
  let arrayTasks = JSON.parse(localStorage.getItem('tasks'));
  taskShowed = document.getElementById("taskShowed")
  taskShowed.innerHTML = '';

  const fragment = document.createDocumentFragment()

  for (let i = 0; i < arrayTasks.length; i++) {
    let title = arrayTasks[i].title;
    let description = arrayTasks[i].description;
    
    let taskList =  document.createElement("li");
    taskList.innerHTML = `${title} - ${description}
    <button id="editButton" class="far fa-edit editBtn" onclick="editTask('${title}')">  Edit</button>
    
    <button id="deleteButton" class="fas fa-trash-alt crashBtn" onclick="deleteTask('${title}')" >  Delete</button><br> <br>
    `;

    fragment.appendChild(taskList) 
  }
  taskShowed.appendChild(fragment)
}
showTasks();


let deleteTask = (title)=>{
  let arrayTasks = JSON.parse(localStorage.getItem('tasks'));
  for (let i = 0; i < arrayTasks.length; i++) {
     if(arrayTasks[i].title==title){
         arrayTasks.splice(i,1);
     }  
  }

  localStorage.setItem("tasks",JSON.stringify(arrayTasks)); 

  showTasks();

}

let editTask = (title)=>{
  let arrayTasks = JSON.parse(localStorage.getItem('tasks'));
  for (let i = 0; i < arrayTasks.length; i++) {
     if(arrayTasks[i].title==title){
        
      task.value=(arrayTasks[i].title);
      description.value=(arrayTasks[i].description);
      arrayTasks.splice(i,1);
     }  
  }

  localStorage.setItem("tasks",JSON.stringify(arrayTasks)); 

  showTasks();
  
}


























