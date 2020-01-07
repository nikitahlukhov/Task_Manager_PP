export default function profile() {
    let newTask_button = document.getElementById('newTask_button');
    let tasks_button = document.getElementById('tasks_button');
    let tasks = JSON.parse(window.localStorage.tasks);
    

    


    newTask_button.addEventListener('click', ()=> {
        showElement()
        document.getElementById('newTask_wrapper').style.display = 'block';
    })

    tasks_button.addEventListener('click', ()=> {
        showElement()
        document.getElementById('tasks_wrapper').style.display = 'block';
    })



    const list = document.querySelectorAll('.task-list ul');
    const forms = document.forms;


    //tasks from local storage

    function showTasks() {

        
  
        for (let i = 0; i < tasks.length; i++){
            for (let m = 0; m < list.length; m++){
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

            
            list[m].appendChild(li);
            
            }
            
          
          
        }

          
        
      }
  
    // delete tasks
    for (let m=0; m<list.length; m++ ){
        list[m].addEventListener('click', (e) => {
            if(e.target.className == 'delete'){
              const li = e.target.parentElement;
              li.parentNode.removeChild(li);
            }
          });
      }
    

  
    // add tasks
    const addForm = forms['add-task'];
    addForm.addEventListener('submit', function(e){
      e.preventDefault();
        
    


      // create elements
      const value = addForm.querySelector('input[type="text"]').value;
      const li = document.createElement('li');
      const taskName = document.createElement('span');
      const deleteBtn = document.createElement('span');

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
      for (let c=0; c<list.length; c++ ){
        list[c].appendChild(li);
      }
    });
  
    // filter tasks
    for (let i = 0; i < document.querySelectorAll('.search-tasks').length; i++){
        let searchBar = document.querySelectorAll('.search-tasks')[i].querySelector('input');
        searchBar.addEventListener('keyup', (e) => {
            const term = e.target.value.toLowerCase();
            list.forEach(element => {
                const tasks = element.getElementsByTagName('li');
            Array.from(tasks).forEach((task) => {
              const title = task.firstElementChild.textContent;
              if(title.toLowerCase().indexOf(e.target.value) != -1){
                task.style.display = 'block';
              } else {
                task.style.display = 'none';
              }
            });
            }) 
            
          })
    };
  
    function showElement(){
        let arr = document.querySelectorAll('main > *');
        for (let i=0; i<arr.length; i++){
            arr[i].style.display = 'none'; 
        }
        
    } 

    showTasks();
}