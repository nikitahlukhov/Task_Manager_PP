export default function profile() {
    let tasks_button = document.getElementById('tasks_button');
    let tasks = JSON.parse(window.localStorage.tasks);
    let users = JSON.parse(window.localStorage.users);
    
  let user;
  let userSentMessages;
  for (let i = 0; i < users.length; i++){
    if (users[i].loggedIn == true){
    user = users[i];
    userSentMessages = users[i].messages.sentMessages;
  } 
    
  }

  

    tasks_button.addEventListener('click', ()=> {
        showElement()
        document.getElementById('tasks_wrapper').style.display = 'block';
    })

  



  const list = document.querySelector('#task-list ul');
  const forms = document.forms;
  const select_task = document.getElementById('select_task');



  function showTasks() {

    for (let i = 0; i < users.length; i++){
      if (users[i].name != 'admin' && users.length <= 23){
      let option = document.createElement('option');
      option.innerText = users[i].name;
      select_task.appendChild(option);
      select_task.setAttribute('size', users.length - 1);
    } else if (users[i].name != 'admin' && users.length > 22){
      let option = document.createElement('option');
      option.innerText = users[i].name;
      select_task.appendChild(option);
      select_task.setAttribute('size', '22');
    }
      
    }    

    
  
    for (let i = 0; i < tasks.length; i++){
        
        // create elements
        const value = tasks[i].name;
        const li = document.createElement('li');
        const taskName = document.createElement('span');
        const deleteBtn = document.createElement('span');
        const contributors = document.createElement('li');
        const ul = document.createElement('ul');


        tasks[i].contributors.forEach(e => {
          contributors.textContent += e
        })
        // add text content
        taskName.textContent = value;
        deleteBtn.textContent = 'delete';

        // add classes
        taskName.classList.add('name');
        deleteBtn.classList.add('delete');
        li.classList.add('task');
        ul.classList.add('sub_task_invis');

        if (tasks[i].subTasks.length > 0){
          for (let f = 0; f < tasks[i].subTasks.length; f++){
            
              let li = document.createElement('li');
              const taskName = document.createElement('span');
              const deleteBtn = document.createElement('span');
              taskName.textContent = tasks[i].subTasks[f];
              deleteBtn.textContent = 'delete';
              taskName.classList.add('name');
              deleteBtn.classList.add('delete');
              li.appendChild(taskName);
              li.appendChild(deleteBtn);
              ul.appendChild(li);
            
          }
        }
        

        // append to DOM
        li.appendChild(taskName);
        li.appendChild(deleteBtn);       
        list.appendChild(li)
        li.appendChild(ul);
        if (contributors.textContent) {
          ul.appendChild(contributors);
        }
      
      
    }

      
    
  }
  // delete tasks
  list.addEventListener('click', (e) => {
    if(e.target.className == 'delete'){
      const li = e.target.parentElement;
      const ul = li.parentElement;
      const index = Array.from(ul.children).indexOf(li);
      if (li.className == 'task'){
        tasks.splice(index, 1);
      } else if (li.className != 'task'){
        const li = e.target.parentElement.parentElement.parentElement;
        const ul = li.parentElement;
        const index = Array.from(ul.children).indexOf(li);
        const li_sub = e.target.parentElement;
        const ul_sub = li_sub.parentElement;
        const index_sub = Array.from(ul_sub.children).indexOf(li_sub);
        tasks[index].subTasks.splice(index_sub, 1)
      }
      
      li.parentNode.removeChild(li);
      window.localStorage.tasks = JSON.stringify(tasks);
    } else if (e.target.className == 'task') {
      
        e.target.lastChild.classList.toggle('sub_task_invis');
      
        
      
      
      
    }
  });


  forms['add-task'].addEventListener('click', (e) => {
    if(e.target.className == 'delete_subtask'){
      const parent = e.target.parentNode;
      const input = e.target.previousElementSibling;
      const delete_button =  e.target;
      parent.removeChild(input);
      parent.removeChild(delete_button);
      e.preventDefault();
    }
  })

  // add tasks
  const addForm = forms['add-task'];
  const addTask = document.getElementById('add_task_button');
  const addSubTask = document.getElementById('add_subtask_button');


  addSubTask.addEventListener('click', function(e){
    const input = document.createElement('input');
    input.setAttribute('placeholder', 'Add a subtask...');
    input.setAttribute('type', 'text')
    const button = document.createElement('button');
    button.innerText = 'delete';
    button.setAttribute('class', 'delete_subtask')
    addForm.appendChild(input);
    addForm.appendChild(button);
    e.preventDefault();
  })

  addTask.addEventListener('click', function(e){
    e.preventDefault();

    // create elements
    const value = addForm.querySelector('input[type="text"]').value;
    const subValue = addForm.querySelectorAll('input[type="text"]');
    const li = document.createElement('li');
    const contributors = document.createElement('li');
    const taskName = document.createElement('span');
    const deleteBtn = document.createElement('span');
    const ul = document.createElement('ul');

    if (value){
      let task = {}
      task.name = value;
      task.subTasks = [];
      task.contributors =[];

      // add text content
      taskName.textContent = value;
      deleteBtn.textContent = 'delete';
    
    
    let selected = Array.from(select_task.options)
    .filter(option => option.selected)
    .map(option => option.value);

    selected.forEach(option => {
      task.contributors.push(option);
      contributors.textContent += `${option} `;
    });
      
      
      // add classes
      deleteBtn.classList.add('delete');
      li.classList.add('task');
      ul.classList.add('sub_task_invis');
  
      // append to DOM
      

      for (let i = 1; i < subValue.length; i++){
        if(subValue[i].value){
          task.subTasks.push(subValue[i].value);
          let li = document.createElement('li');
          const taskName = document.createElement('span');
          const deleteBtn = document.createElement('span');
          taskName.textContent = subValue[i].value;
          deleteBtn.textContent = 'delete';
          taskName.classList.add('name');
          deleteBtn.classList.add('delete');
          li.appendChild(taskName);
          li.appendChild(deleteBtn);
          ul.appendChild(li);
        }
      }
      
      li.appendChild(taskName);
      li.appendChild(deleteBtn);      
      list.appendChild(li);
      li.appendChild(ul);
      if (contributors.textContent) {
        ul.appendChild(contributors);
      }
      
      addForm.querySelectorAll('input[type="text"]').forEach(e=>{
        e.value = '';
      })


      
      
      
      tasks.push(task);
      window.localStorage.tasks = JSON.stringify(tasks);
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



// MESSAGES MESSAGES MESSAGES MESSAGES MESSAGES MESSAGES MESSAGES MESSAGES
const message_list = document.querySelector('#message-list ul');
const select_message = document.getElementById('select_message');




let messages_button = document.getElementById('messages_button');
// let tasks = JSON.parse(window.localStorage.tasks);
// let users = JSON.parse(window.localStorage.users);
    

    


  messages_button.addEventListener('click', ()=> {
        showElement()
        document.getElementById('messages_wrapper').style.display = 'block';
    })

  



    

// delete message
message_list.addEventListener('click', (e) => {
  const li = e.target.parentElement;
    if(e.target.className == 'delete'){
      
      const ul = li.parentElement;
      const index = Array.from(ul.children).indexOf(li);
      li.parentNode.removeChild(li); 
      userSentMessages.splice(index, 1);
      window.localStorage.users = JSON.stringify(users);
    } else if (e.target.className == 'message unseen') {
      const index = Array.from(li.children).indexOf(e.target)
      e.target.classList.remove('unseen');
      e.target.classList.add('seen');
      
      userSentMessages[index].status = 'seen';
      e.target.childNodes[1].classList.toggle('sub_task_invis');
      e.target.lastChild.classList.toggle('sub_task_invis');
      window.localStorage.users = JSON.stringify(users);

    } else if (e.target.className == 'message seen'){
      e.target.lastChild.classList.toggle('sub_task_invis')
      e.target.childNodes[1].classList.toggle('sub_task_invis');
    }
  });


  // add tasks
  const addForm_message = forms['add-message'];
  const addMessage = document.getElementById('add_message_button');







  addMessage.addEventListener('click', function(e){
    e.preventDefault();

    // create elements
    let subject = document.getElementById('message_subject').value;
    const li = document.createElement('li');
    const contributors = document.createElement('p');
    contributors.textContent = 'To: ';
    const subjectName = document.createElement('span');
    const para = document.createElement('p');
    let message = document.getElementById('message_text').value;
    const messageName = document.createElement('span');
    const deleteBtn = document.createElement('span');
    let message_body = document.createElement('div');
    let selected = Array.from(select_message.options)
    .filter(option => option.selected)
    .map(option => option.value);

    if (message && selected.length > 0){
      let tempMessage = {};
      tempMessage.contributors = [];
      tempMessage.status = 'unseen';
      // add text content
      if(subject){
        subjectName.textContent =`Subject: ${subject}`;}
      else if (!subject){
        subjectName.textContent = '(no subject)';
      }
      tempMessage.subject = subject;
      tempMessage.message = message;
      para.textContent = message;
      messageName.textContent = message;
      deleteBtn.textContent = 'delete';
      
    

    selected.forEach(option => {
      tempMessage.contributors.push(option);
      contributors.textContent += `${option} `;
    });
      
      
      // add classes
      deleteBtn.classList.add('delete');
      li.classList.add('message', 'unseen');
      message_body.classList.add('sub_task_invis');
  
      // append to DOM
      

      
      li.appendChild(subjectName);
      li.appendChild(messageName);
      li.appendChild(deleteBtn); 
      message_body.appendChild(contributors)
      message_body.appendChild(para)
      li.appendChild(message_body)   
      message_list.appendChild(li);
      
      
      document.getElementById('message_text').value = '';
      document.getElementById('message_subject').value = '';


      user.messages.sentMessages.push(tempMessage);
      window.localStorage.users = JSON.stringify(users);
      
      
    }
    
  });

  function showMessages() {

    for (let i = 0; i < users.length; i++){
      if (users[i].loggedIn == false && users.length <= 23){
      let option = document.createElement('option');
      option.innerText = users[i].name;
      select_message.appendChild(option);
      select_message.setAttribute('size', users.length - 1);
    } else if (users[i].loggedIn == false && users.length > 22){
      let option = document.createElement('option');
      option.innerText = users[i].name;
      select_message.appendChild(option);
      select_message.setAttribute('size', '22');
    }
      
    }     

    
  
    for (let i = 0; i < userSentMessages.length; i++){
        
        // create elements
    let subject = userSentMessages[i].subject;
    const li = document.createElement('li');
    const contributors = document.createElement('p');
    contributors.textContent = 'To: ';
    const subjectName = document.createElement('span');
    const para = document.createElement('p');
    let message = userSentMessages[i].message;
    const messageName = document.createElement('span');
    const deleteBtn = document.createElement('span');
    let message_body = document.createElement('div');

// add text content
    if(subject){
      subjectName.textContent =`Subject: ${subject}`;}
    else if (!subject){
      subjectName.textContent = '(no subject)';
    }

    para.textContent = message;
    messageName.textContent = message;
    deleteBtn.textContent = 'delete';
    
  

  userSentMessages[i].contributors.forEach(option => {
    contributors.textContent += `${option} `;
  });

      // add classes
      deleteBtn.classList.add('delete');
      li.classList.add('message', userSentMessages[i].status);
      message_body.classList.add('sub_task_invis');

 // append to DOM
    li.appendChild(subjectName);
    li.appendChild(messageName);
    li.appendChild(deleteBtn); 
    message_body.appendChild(contributors)
    message_body.appendChild(para)
    li.appendChild(message_body)   
    message_list.appendChild(li);
      
      
    }

      
    
  }


  function showElement(){
    let arr = document.querySelectorAll('main > *');
    for (let i=0; i<arr.length; i++){
        arr[i].style.display = 'none'; 
    }
    
} 

    showTasks();
    showMessages()
}