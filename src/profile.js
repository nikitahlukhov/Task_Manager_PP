export default function profile() {
    let tasks_button = document.getElementById('tasks_button');
    let tasks = JSON.parse(window.localStorage.tasks);
    

    


    tasks_button.addEventListener('click', ()=> {
        showElement()
        document.getElementById('tasks_wrapper').style.display = 'block';
    })

  



  const list = document.querySelector('#task-list ul');
  const forms = document.forms;


  function showTasks() {

        
  
    for (let i = 0; i < tasks.length; i++){
        
        // create elements
        const value = tasks[i];
        const li = document.createElement('li');
        const taskName = document.createElement('span');
        const deleteBtn = document.createElement('span');

        // add text content
        taskName.textContent = value;
        deleteBtn.textContent = 'delete';

        // add classes
        taskName.classList.add('name');
        deleteBtn.classList.add('delete');



        // append to DOM
        li.appendChild(taskName);
        li.appendChild(deleteBtn);       
        list.appendChild(li)
        
      
      
    }

      
    
  }
  // delete tasks
  list.addEventListener('click', (e) => {
    if(e.target.className == 'delete'){
      const li = e.target.parentElement;
      let index = tasks.indexOf(li.firstElementChild.innerText)
      li.parentNode.removeChild(li);
      tasks.splice(index, 1);
      window.localStorage.tasks = JSON.stringify(tasks);
    }
  });

  // add tasks
  const addForm = forms['add-task'];
  addForm.addEventListener('submit', function(e){
    e.preventDefault();

    // create elements
    const value = addForm.querySelector('input[type="text"]').value;
    const li = document.createElement('li');
    const taskName = document.createElement('span');
    const deleteBtn = document.createElement('span');

    if (value){
      tasks.push(value);
      window.localStorage.tasks = JSON.stringify(tasks);
      // add text content
      taskName.textContent = value;
      deleteBtn.textContent = 'delete';
  
      // add classes
      taskName.classList.add('name');
      deleteBtn.classList.add('delete');
  
      // append to DOM
      li.appendChild(taskName);
      li.appendChild(deleteBtn);
      list.appendChild(li);
  
      addForm.querySelector('input[type="text"]').value = '';
    }
    
  });


  // filter tasks
  const searchBar = forms['search-tasks'].querySelector('input');
  searchBar.addEventListener('keyup', (e) => {
    const term = e.target.value.toLowerCase();
    const tasks = list.getElementsByTagName('li');
    Array.from(tasks).forEach((task) => {
      const title = task.firstElementChild.textContent;
      if(title.toLowerCase().indexOf(e.target.value) != -1){
        task.style.display = 'block';
      } else {
        task.style.display = 'none';
      }
    });
  });


  function showElement(){
    let arr = document.querySelectorAll('main > *');
    for (let i=0; i<arr.length; i++){
        arr[i].style.display = 'none'; 
    }
    
} 

    showTasks();
}