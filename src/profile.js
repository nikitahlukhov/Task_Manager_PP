export default function profile() {
    let tasks_button = document.getElementById('tasks_button');
    let tasks = JSON.parse(window.localStorage.tasks);
    let users = JSON.parse(window.localStorage.users);
    let profileName = document.getElementById('nav_profile');

  let user;
  let userSentMessages;
  let userInboxMessages;

  
  if(users){
    for (let i = 0; i < users.length; i++){
      if (users[i].loggedIn == true){
      user = users[i];
      profileName.childNodes[0].textContent = user.name;
      userSentMessages = users[i].messages.sentMessages;
      userInboxMessages = users[i].messages.inboxMessages;
    } 
      
    }
    

  }
  

  
  
  

    tasks_button.addEventListener('click', ()=> {
        showElement('main')
        document.getElementById('tasks_wrapper').style.display = 'block';
        
    })

  
    


  const list = document.querySelector('#task-list ul');
  const forms = document.forms;
  const select_task = document.getElementById('select_task');


  

  showTasks();

  

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
        const taskProgress = document.createElement('span');
        taskProgress.style.color = 'red';
        const deleteBtn = document.createElement('span');
        const indexValue = tasks.indexOf(tasks[i]);
        li.setAttribute('value', indexValue);
        const contributors = document.createElement('li');
        const ul = document.createElement('ul');
        let checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        checkbox.classList.add('check');
        checkbox.checked = tasks[i].checked;

          

        tasks[i].contributors.forEach(e => {
          contributors.textContent += `${e} `;
        })


        if (user.name != 'admin')
        {for (let f = 0; f < tasks[i].contributors.length; f++){
          if (tasks[i].contributors[f] == user.name){
            break;
          }
          li.classList.add('invis_task');
        }}
        
        // add text content
        taskName.textContent = value;
        taskProgress.textContent = tasks[i].progress + '%';
        deleteBtn.textContent = 'delete';

        // add classes
        taskName.classList.add('name');
        deleteBtn.classList.add('delete');
        li.classList.add('task');
        li.classList.add(tasks[i].status);
        ul.classList.add('sub_task_invis');
        checkbox.setAttribute('value', '100');
        checkbox.classList.add('doneTask')

        if (tasks[i].subTasks.length > 0){
          let value = (100 / tasks[i].subTasks.length).toFixed();
         
          for (let f = 0; f < tasks[i].subTasks.length; f++){
              
              let li = document.createElement('li');
              let checkbox = document.createElement('input');
              checkbox.setAttribute('type', 'checkbox');
              checkbox.setAttribute('value', value);
              
              const taskName = document.createElement('span');
              const deleteBtn = document.createElement('span');
              taskName.textContent = tasks[i].subTasks[f].name;
              checkbox.checked = tasks[i].subTasks[f].checked;
              checkbox.classList.add('check');
              checkbox.classList.add('addValue');
              li.classList.add(tasks[i].subTasks[f].status);
              deleteBtn.textContent = 'delete';
              taskName.classList.add('name');
              deleteBtn.classList.add('delete');
              li.appendChild(taskName);
              li.appendChild(checkbox);
              li.appendChild(deleteBtn);
              ul.appendChild(li);
            
          }
        }
        

        // append to DOM
        
        li.appendChild(taskName);
        li.appendChild(checkbox);
        li.appendChild(taskProgress);
        li.appendChild(deleteBtn);       
        list.appendChild(li)
        li.appendChild(ul);
        if (contributors.textContent) {
          ul.appendChild(contributors);
        }
      
        if (user.name !== 'admin') {
          showElement('#tasks_wrapper header .page-banner');
          forms['search-tasks'].style.display = 'block';
          let a = document.querySelectorAll('.check');
          let b = document.querySelectorAll('.delete');

          b.forEach(e => {
            e.style.display = 'none';
          })
          
          a.forEach(e => {
            e.classList.remove('check')
          })

        }
    }

      
    
  }
  // delete tasks
  list.addEventListener('click', (e) => {
    if(e.target.className == 'delete'){
      const li = e.target.parentElement;
      const ul = li.parentElement;
      const index = li.getAttribute('value');
      if (li.className == 'task undone' || li.className == 'task done'){
        tasks.splice(index, 1);
      } else if (li.className != 'task undone' || li.className != 'task done'){
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
    } else if (e.target.className == 'task undone' || e.target.className == 'task done') {
      
        e.target.lastChild.classList.toggle('sub_task_invis');
    
    } else if (e.target.className == 'addValue'){
      
      const li = e.target.parentElement.parentElement.parentElement;
      const ul = li.childNodes[4].childNodes;
      let prevVal = +(li.childNodes[2].innerText.slice(0, -1));
      let value = +(e.target.getAttribute('value'));
      const indexUl = li.getAttribute('value');
      const index = Array.from(e.target.parentElement.parentElement.children).indexOf(e.target.parentElement);
      if (e.target.checked){
        console.log(index)
        e.target.parentElement.className = 'done';
        tasks[indexUl].subTasks[index].status = 'done';
        tasks[indexUl].subTasks[index].checked = true;
        tasks[indexUl].progress = value;
        window.localStorage.tasks = JSON.stringify(tasks);
        let num = 0;
        for (let i = 0; i < ul.length - 1; i++){
         
          if (!ul[i].childNodes[1].checked) {
            num += 1;
          }
          
        }
        if (num == 0){
          li.childNodes[1].checked = true 
          li.childNodes[2].innerText = '100%';
          li.className = 'task done'
          tasks[indexUl].status = 'done';
          tasks[indexUl].progress = 100;
          tasks[indexUl].checked = true;
          window.localStorage.tasks = JSON.stringify(tasks);

        } else {
          li.childNodes[2].innerText = prevVal +  value + '%';
          tasks[indexUl].progress = prevVal +  value;
           window.localStorage.tasks = JSON.stringify(tasks);
        }
        

        
      } else if (!e.target.checked) {
        e.target.parentElement.className = 'undone'
        tasks[indexUl].subTasks[index].status = 'undone';
        tasks[indexUl].subTasks[index].checked = false;
        tasks[indexUl].progress = prevVal - value;
        window.localStorage.tasks = JSON.stringify(tasks);
        let num = 0;
        for (let i = 0; i < ul.length - 1; i++){
         
          if (ul[i].childNodes[1].checked) {
            num += 1;
          }
          
        }
        if (num == 0){
          
          li.childNodes[2].innerText = '0%';
          li.className = 'task undone'
          tasks[indexUl].status = 'undone';
          tasks[indexUl].checked = false;
          tasks[indexUl].progress = 0;
          window.localStorage.tasks = JSON.stringify(tasks);
        } else {
          li.childNodes[1].checked = false;
          tasks[indexUl].checked = false;
          window.localStorage.tasks = JSON.stringify(tasks);
        li.childNodes[2].innerText = prevVal -  value + '%';
        }
        
        
      }
      
      
    } else if (e.target.className == 'doneTask'){
      
      const li = e.target.parentElement;
      const index = li.getAttribute('value');
      if(e.target.checked){
        let ul = li.childNodes[4].childNodes;
        for (let i = 0; i < ul.length - 1; i++){
          ul[i].childNodes[1].checked = true;
          ul[i].childNodes[1].parentElement.className = 'done';
          
        }
        tasks[index].subTasks.forEach(e => (
          e.checked = true,
          e.status = 'done'
        ))    
        li.className = 'task done'
        li.childNodes[2].innerText = '100%';
        li.className = 'task done'
        tasks[index].progress = 100;
        tasks[index].status = 'done';
        tasks[index].progress = 100;
        tasks[index].checked = true;
        window.localStorage.tasks = JSON.stringify(tasks);
        
      } else if (!e.target.checked) {
        let ul = li.childNodes[4].childNodes;
        for (let i = 0; i < ul.length - 1; i++){
          ul[i].childNodes[1].checked = false;
          ul[i].childNodes[1].parentElement.className = 'undone'
        }
        tasks[index].subTasks.forEach(e => (
          
          e.status = 'undone',
          e.checked = false 
        )) 
        
        li.className = 'task undone'
        li.childNodes[2].innerText = '0%';
        tasks[index].progress = 0;
        tasks[index].status = 'undone';
        tasks[index].checked = false;
        tasks[index].progress = 0;
        window.localStorage.tasks = JSON.stringify(tasks);
        
      }
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
    const taskProgress = document.createElement('span');
    taskProgress.style.color = 'red';
    const deleteBtn = document.createElement('span');
    const ul = document.createElement('ul');
    let selected = Array.from(select_task.options)
    .filter(option => option.selected)
    .map(option => option.value);

    if (value && selected.length > 0){
      let task = {}
      task.name = value;
      task.progress = 0;
      task.subTasks = [];
      task.contributors =[];
      task.status = 'undone';
      task.checked = false;

      // add text content
      taskName.textContent = value;
      taskProgress.textContent = 0 + '%';
      deleteBtn.textContent = 'delete';
    
    
    
      

    selected.forEach(option => {

      

      task.contributors.push(option);
      contributors.textContent += `${option} `;
    });
      
      
      // add classes
      deleteBtn.classList.add('delete');
      li.classList.add('task');
      li.classList.add('undone');
      ul.classList.add('sub_task_invis');
  
      // append to DOM
      

      for (let i = 1; i < subValue.length; i++){
        if(subValue[i].value){
          let tempSubtask = {};
          tempSubtask.name = subValue[i].value;
          tempSubtask.status = 'undone';
          tempSubtask.checked = false;
          task.subTasks.push(tempSubtask);
          let li = document.createElement('li');
          const taskName = document.createElement('span');
          const deleteBtn = document.createElement('span');
          taskName.textContent = subValue[i].value;
          deleteBtn.textContent = 'delete';
          taskName.classList.add('name');
          deleteBtn.classList.add('delete');
          li.appendChild(taskName);
          li.appendChild(deleteBtn);
          li.classList.add('undone');
          ul.appendChild(li);
        }
      }
      
      li.appendChild(taskName);
      li.appendChild(taskProgress);
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
    const tasks = Array.from(list.getElementsByTagName('li'));
    for (let i = 0; i < tasks.length - 1; i++) {
      const title = tasks[i].firstElementChild.textContent;
      
      if(title.toLowerCase().indexOf(e.target.value) != -1){
        tasks[i].style.display = 'block';
      } else {
        tasks[i].style.display = 'none';
      }
    }
  });



// MESSAGES MESSAGES MESSAGES MESSAGES MESSAGES MESSAGES MESSAGES MESSAGES
const messages_sent = document.getElementById('message-list_sent');
const messages_inbox = document.getElementById('message-list_inbox');
const message_list_sent = document.querySelector('#message-list_sent ul');
const message_list_inbox = document.querySelector('#message-list_inbox ul');
const select_message = document.getElementById('select_message');




let messages_button = document.getElementById('messages_button');
// let tasks = JSON.parse(window.localStorage.tasks);
// let users = JSON.parse(window.localStorage.users);
    

    


  messages_button.addEventListener('click', ()=> {
        showElement('main')
        document.getElementById('messages_wrapper').style.display = 'block';
        
    })

    showMessages(userSentMessages, message_list_sent);
    showMessages(userInboxMessages, message_list_inbox);
    



    

// delete message
message_list_sent.addEventListener('click', (e) => {
 del(userSentMessages, e);
  });

message_list_inbox.addEventListener('click', (e) => {
    del(userInboxMessages, e);
     });

  function del (userMessages, e) {
    if(e.target.className == 'delete'){
      const li = e.target.parentElement;
      const ul = li.parentElement;
      const index = Array.from(ul.children).indexOf(li);
      li.parentNode.removeChild(li); 
      userMessages.splice(index, 1);
      window.localStorage.users = JSON.stringify(users);
    } else if (e.target.className == 'message unseen') {
      const li = e.target.parentElement;
      const index = Array.from(li.children).indexOf(e.target)
      
      console.log(li.parentElement.getAttribute('id') == 'message-list_inbox')
      if (li.parentElement.getAttribute('id') == 'message-list_inbox'){
        e.target.classList.remove('unseen');
        e.target.classList.add('seen');
        userMessages[index].status = 'seen';
      }
      
      e.target.childNodes[1].classList.toggle('sub_task_invis');
      e.target.lastChild.classList.toggle('sub_task_invis');
      window.localStorage.users = JSON.stringify(users);

    } else if (e.target.className == 'message seen'){
      e.target.lastChild.classList.toggle('sub_task_invis')
      e.target.childNodes[1].classList.toggle('sub_task_invis');
    }
  }
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
    const date = document.createElement('span');
    let options = {
      month: 'short',
      day: 'numeric',
      timezone: 'UTC',
      hour: 'numeric',
      minute: 'numeric',
      hour12: false
    };
    const dateTime = new Date().toLocaleString("en-US", options).toString();
    const deleteBtn = document.createElement('span');
    let message_body = document.createElement('div');
    let selected = Array.from(select_message.options)
    .filter(option => option.selected)
    .map(option => option.value);

    if (message && selected.length > 0){
      let tempMessage = {};
      tempMessage.contributors = [];
      tempMessage.status = 'unseen';
      tempMessage.fromWhom = user.name;
      tempMessage.date = dateTime;
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
      date.textContent = dateTime;
      deleteBtn.textContent = 'delete';
      
    
      
    selected.forEach(option => {
      
      for (let i = 0; i < users.length; i++){
        if (users[i].name == option){
          users[i].messages.inboxMessages.push(tempMessage);
        }
      }
      tempMessage.contributors.push(option);
      contributors.textContent += `${option} `;
    });
      
      
      // add classes
      deleteBtn.classList.add('delete');
      li.classList.add('message');
      li.classList.add('unseen');
      message_body.classList.add('sub_task_invis');
  
      // append to DOM
      

      
      li.appendChild(subjectName);
      li.appendChild(messageName);
      li.appendChild(date);
      li.appendChild(deleteBtn); 
      message_body.appendChild(contributors)
      message_body.appendChild(para)
      li.appendChild(message_body)   
      message_list_sent.appendChild(li);
      
      
      document.getElementById('message_text').value = '';
      document.getElementById('message_subject').value = '';

    

      user.messages.sentMessages.push(tempMessage);
      window.localStorage.users = JSON.stringify(users);
      
      
    }
    
  });



  let sentButton = document.getElementById('sent_message_button');
  let inboxButon = document.getElementById('inbox_message_button');

  sentButton.addEventListener('click', () => {
    
    messages_inbox.className = 'sub_task_invis';
    messages_sent.className = '';
    event.preventDefault();
    })

    inboxButon.addEventListener('click', () => {
    
      messages_sent.className = 'sub_task_invis';
      messages_inbox.className = '';
      event.preventDefault();
      })

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
// filter messages
const searchBarMessages = forms['search-messages'].querySelector('input');
searchBarMessages.addEventListener('keyup', (e) => {
  const term = e.target.value.toLowerCase();
  
  let messages = Array.from(message_list_sent.getElementsByTagName('li'));
  const messages_inbox = Array.from(message_list_inbox.getElementsByTagName('li'));
  messages = messages.concat(messages_inbox)
  messages.forEach((message) => {
    const title = message.firstElementChild.textContent.slice(9);
    const body = message.childNodes[1].textContent;

    if(title.toLowerCase().indexOf(e.target.value) != -1 ||
    body.toLowerCase().indexOf(e.target.value) != -1){
      message.style.display = 'block';
    } else {
      message.style.display = 'none';
    }
  });
});

  
  const unseenCheckBox = document.getElementById('unseen');
  const seenCheckBox = document.getElementById('seen');
  
  unseenCheckBox.addEventListener('click', () => {
    let messages = Array.from(message_list_inbox.getElementsByTagName('li'));
    if (unseenCheckBox.checked){
      messages.forEach((message) => {
        if (message.className == 'message unseen'){
        message.style.display = 'block';}
      });
    } else if (!unseenCheckBox.checked) {
      messages.forEach((message) => {
        if (message.className == 'message unseen'){
          message.style.display = 'none';}
      });
    }
  })

  seenCheckBox.addEventListener('click', () => {
    let messages = Array.from(message_list_inbox.getElementsByTagName('li'));
    if (seenCheckBox.checked){
      messages.forEach((message) => {
        if (message.className == 'message seen'){
        message.style.display = 'block';}
      });
    } else if (!seenCheckBox.checked) {
      messages.forEach((message) => {
        if (message.className == 'message seen'){
          message.style.display = 'none';}
      });
    }
  })
 

  function showMessages(userMessages, inbox_or_sent) {

       

    
  if (userMessages) {
    for (let i = 0; i < userMessages.length; i++){
      
  let fromWhom;

  
  if(userMessages[i].fromWhom !== user.name){
    fromWhom = document.createElement('p');
    fromWhom.textContent = `From: ${userMessages[i].fromWhom}`;

  }
      // create elements
  let subject = userMessages[i].subject;
  const li = document.createElement('li');
  const contributors = document.createElement('p');
  contributors.textContent = 'To: ';
  const subjectName = document.createElement('span');
  const para = document.createElement('p');
  let message = userMessages[i].message;
  const messageName = document.createElement('span');
  const deleteBtn = document.createElement('span');
  let message_body = document.createElement('div');
  const date = document.createElement('span');

// add text content
  if(subject){
    subjectName.textContent =`Subject: ${subject}`;}
  else if (!subject){
    subjectName.textContent = '(no subject)';
  }

  para.textContent = message;
  messageName.textContent = message;
  deleteBtn.textContent = 'delete';
  date.textContent = userMessages[i].date;



userMessages[i].contributors.forEach(option => {
  contributors.textContent += `${option} `;
});

    // add classes
    deleteBtn.classList.add('delete');
    li.classList.add('message');
    li.classList.add(userMessages[i].status);
    message_body.classList.add('sub_task_invis');

// append to DOM
  li.appendChild(subjectName);
  li.appendChild(messageName);
  li.appendChild(date);
  li.appendChild(deleteBtn); 
  if(fromWhom){
    message_body.appendChild(fromWhom)
  }
  message_body.appendChild(contributors)
  message_body.appendChild(para)
  li.appendChild(message_body)   
  inbox_or_sent.appendChild(li);
    
    
  }
    
  }
    

      
    
  }


  function showElement(section){
    let arr = document.querySelectorAll(section + ' > *');
    for (let i=0; i<arr.length; i++){
        arr[i].style.display = 'none'; 
    }
    
} 

    
    
}