export default function tasks() {
    const tasksButton = document.querySelectorAll('.tasks_button');
    let tasks = JSON.parse(window.localStorage.tasks);
    const users = JSON.parse(window.localStorage.users);
    const profileName = document.getElementById('nav_profile');
    const employeesButton = document.querySelector('.employees_button')

    let user;
    
    const tasksList = document.querySelector('#task-list ul');
    const forms = document.forms;
    const selectListTask = document.getElementById('select_task');

//check if users exist
    if (users) {
        for (let i = 0; i < users.length; i++) {
            if (users[i].loggedIn == true) {
                if(users[i].isAdmin){
                    employeesButton.style.display = 'block'
                }
                user = users[i];
                profileName.childNodes[0].textContent = user.name.charAt(0).toUpperCase() + user.name.slice(1) ;              
                hideElements('main')
                document.getElementById('tasks_wrapper').style.display = 'block';
                showTasks();
                break;
            }
        }
    }

    
    

    for (let i = 0; i < tasksButton.length; i++) {
        tasksButton[i].addEventListener('click', () => {
             hideElements('main')
        document.getElementById('tasks_wrapper').style.display = 'block';
        });
    }

    //fill select forms
    for (let i = 0; i < users.length; i++) {
        if (!users[i].isAdmin && users.length <= 23) {
            fillSelectList(selectListTask, i)
        } else if (!users[i].isAdmin && users.length > 22) {
            fillSelectList(selectListTask, i)
        }
    }
    
    const addForm = forms['add-task'];
    const addTask = document.getElementById('add_task_button');
    const addSubTask = document.getElementById('add_subtask_button');

    //add subtasks
    addSubTask.addEventListener('click', function (e) {
        const inputSubTask = document.createElement('input');
        inputSubTask.setAttribute('placeholder', 'Add a subtask...');
        inputSubTask.setAttribute('type', 'text')
        inputSubTask.classList.add('subtask')

        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'delete';
        deleteButton.classList.add('delete_subtask')
        addForm.appendChild(inputSubTask);
        addForm.appendChild(deleteButton);
        e.preventDefault();
    })

    // add tasks
    addTask.addEventListener('click', (e) => {
        e.preventDefault();
        // create elements
        const taskNameValue = addForm.querySelector('input[type="text"]').value;
        const taskName = document.createElement('span');
        const taskProgress = document.createElement('span');
        taskProgress.style.color = 'red';
        const subTasks = addForm.querySelectorAll('.subtask');
        
        const contributors = document.createElement('li');
        const contributorsValue = document.createElement('span');
        
        const li = document.createElement('li');
        const deleteButton = document.createElement('span');
        const ul = document.createElement('ul');
        const selected = Array.from(selectListTask.options)
            .filter(option => option.selected)
            .map(option => option.value.slice(0, option.value.indexOf('Core Skill:') - 1));

        if (taskNameValue && selected.length > 0) {
            // add text content and create task for localstorage
            let task = {}
            task.name = taskNameValue;
            task.progress = 0;
            task.subTasks = [];
            task.contributors = [];
            task.status = 'undone';
            task.checked = false;
            taskName.textContent = taskNameValue;
            taskProgress.textContent = 0 + '%';
            deleteButton.textContent = 'delete';

            selected.forEach(option => {
                task.contributors.push(option.charAt(0).toLowerCase() + option.slice(1));
                contributorsValue.textContent += `${option} `;
            });

            // add classes
            deleteButton.classList.add('delete');
            li.classList.add('task');
            li.classList.add('undone');
            ul.classList.add('sub_task_invis');

            // create subtasks
            for (let i = 1; i < subTasks.length; i++) {
                if (subTasks[i].value) {
                    let tempSubtask = {};
                    tempSubtask.name = subTasks[i].value;
                    tempSubtask.status = 'undone';
                    tempSubtask.checked = false;
                    task.subTasks.push(tempSubtask);

                    const li = document.createElement('li');
                    const subTaskName = document.createElement('span');
                    const deleteButton = document.createElement('span');
                    subTaskName.textContent = subTasks[i].value;

                    deleteButton.textContent = 'delete';
                    subTaskName.classList.add('name');
                    deleteButton.classList.add('delete');

                    li.appendChild(subTaskName);
                    li.appendChild(deleteButton);
                    li.classList.add('undone');
                    ul.appendChild(li);
                }
            }

            //append to DOM
            li.appendChild(taskName);
            li.appendChild(taskProgress);
            li.appendChild(deleteButton);
            tasksList.appendChild(li);
            li.appendChild(ul);
            contributors.appendChild(contributorsValue)
            if (contributorsValue.textContent) {
                ul.appendChild(contributors);
            }

            addForm.querySelectorAll('input[type="text"]').forEach(el => {
                el.value = '';
            })

            tasks.push(task);
            window.localStorage.tasks = JSON.stringify(tasks);
        }
    });

    // tasks list actions
    tasksList.addEventListener('click', (e) => {
        // tasks and subtasks delete
        if (e.target.className == 'delete') {
            const liTask = e.target.parentElement;
            const index = liTask.getAttribute('value');
            if (liTask.className == 'task undone' || liTask.className == 'task done') {
                tasks.splice(index, 1);
            } else if (liTask.className != 'task undone' || liTask.className != 'task done') {
                const liSubTask = e.target.parentElement;
                const ulSubTasks = liSubTask.parentElement;
                const liTask = ulSubTasks.parentElement;
                const ulTasks = liTask.parentElement;
                const index = Array.from(ulTasks.children).indexOf(liTask);
                const index_sub = Array.from(ulSubTasks.children).indexOf(liSubTask);
                tasks[index].subTasks.splice(index_sub, 1)
            }

            liTask.parentNode.removeChild(liTask);
            window.localStorage.tasks = JSON.stringify(tasks);
        }

        //hide subtasks
        else if (e.target.className == 'task undone' || e.target.className == 'task done') {
            e.target.lastChild.classList.toggle('sub_task_invis');
        }

        //tasks progress with subtasks

        //add progress with single subtask
        else if (e.target.className == 'addValue') {
            const liSubTask = e.target.parentElement;
            const ulSubTasks = liSubTask.parentElement;
            const liTask = ulSubTasks.parentElement;
            const ulTasks = liTask.lastChild.childNodes;
            const prevVal = +(liTask.childNodes[2].innerText.slice(0, -1));
            const value = +(e.target.getAttribute('value'));
            const indexUl = liTask.getAttribute('value');
            const index = Array.from(ulSubTasks.children).indexOf(liSubTask);

            if (e.target.checked) {
                liSubTask.className = 'done';
                tasks[indexUl].subTasks[index].status = 'done';
                tasks[indexUl].subTasks[index].checked = true;
                tasks[indexUl].progress = value;
                window.localStorage.tasks = JSON.stringify(tasks);
                let num = 0;
                for (let i = 0; i < ulTasks.length - 1; i++) {
                    if (!ulTasks[i].childNodes[1].checked) {
                        num += 1;
                    }
                }
                //if last one unchecked change task 
                if (num == 0) {
                    liTask.childNodes[1].checked = true
                    liTask.childNodes[2].innerText = '100%';
                    liTask.className = 'task done'
                    tasks[indexUl].status = 'done';
                    tasks[indexUl].progress = 100;
                    tasks[indexUl].checked = true;
                    window.localStorage.tasks = JSON.stringify(tasks);

                } else {
                    liTask.childNodes[2].innerText = prevVal + value + '%';
                    tasks[indexUl].progress = prevVal + value;
                    window.localStorage.tasks = JSON.stringify(tasks);
                }

            } else if (!e.target.checked) {
                liSubTask.className = 'undone'
                liTask.className = 'task undone'
                tasks[indexUl].status = 'undone';
                tasks[indexUl].subTasks[index].status = 'undone';
                tasks[indexUl].subTasks[index].checked = false;
                tasks[indexUl].progress = prevVal - value;
                window.localStorage.tasks = JSON.stringify(tasks);
                let num = 0;
                for (let i = 0; i < ulTasks.length - 1; i++) {
                    if (ulTasks[i].childNodes[1].checked) {
                        num += 1;
                    }
                }
                //if last one checked change task
                if (num == 0) {
                    liTask.childNodes[2].innerText = '0%';
                    liTask.className = 'task undone'
                    tasks[indexUl].status = 'undone';
                    tasks[indexUl].checked = false;
                    tasks[indexUl].progress = 0;
                    window.localStorage.tasks = JSON.stringify(tasks);
                } else {
                    liTask.childNodes[1].checked = false;
                    tasks[indexUl].checked = false;
                    window.localStorage.tasks = JSON.stringify(tasks);
                    liTask.childNodes[2].innerText = prevVal - value + '%';
                }
            }

            //tasks progress when click on task
        } else if (e.target.className == 'doneTask') {
            const liTask = e.target.parentElement;
            const index = liTask.getAttribute('value');
            const ulSubTasks = liTask.lastChild.childNodes;
            if (e.target.checked) {

            changeProgressTask(true, 'done', 100, index, ulSubTasks, liTask)

            } else if (!e.target.checked) {

            changeProgressTask(false, 'undone', 0, index, ulSubTasks, liTask)

            }
        }
    });

    function changeProgressTask(checked, taskClass, percents, index, ulSubTasks, liTask){
        for (let i = 0; i < ulSubTasks.length - 1; i++) {
            ulSubTasks[i].childNodes[1].checked = checked;
            ulSubTasks[i].className = taskClass;
        }
        tasks[index].subTasks.forEach(el => (
            el.checked = checked,
            el.status = taskClass
        ))
        liTask.className = 'task ' + taskClass
        liTask.childNodes[2].innerText = percents + '%';
        liTask.className = 'task ' + taskClass
        tasks[index].progress = percents;
        tasks[index].status = taskClass;
        tasks[index].progress = percents;
        tasks[index].checked = checked;
        window.localStorage.tasks = JSON.stringify(tasks);
    }

    //delete subtask in form
    forms['add-task'].addEventListener('click', (e) => {
        if (e.target.className == 'delete_subtask') {
            e.preventDefault();
            const parent = e.target.parentNode;
            const inputSubTask = e.target.previousElementSibling;
            const deleteButton = e.target;
            parent.removeChild(inputSubTask);
            parent.removeChild(deleteButton);           
        }
    })

    // filter tasks
    const searchBarTasks = forms['search-tasks'].querySelector('input');
    searchBarTasks.addEventListener('keyup', (e) => {
        const searchInput = e.target.value.toLowerCase();
        let tasks = Array.from(tasksList.querySelectorAll('li.task'));
        console.log(searchInput)
        //loop of tasks
        for (let i = 0; i < tasks.length; i++) {
            const taskName = tasks[i].firstElementChild.textContent;
            const subTasks = Array.from(tasks[i].getElementsByTagName('li'))
            if (taskName.toLocaleLowerCase().indexOf(searchInput) != -1) {
                tasks[i].style.display = 'block';
            } else {
                //if no matches loop in subtasks
                for (let f = 0; f < subTasks.length; f++) {
                    const subTaskName = subTasks[f].firstElementChild.textContent;
                    if (!subTasks[f].classList.contains('task')) {
                        if (subTaskName.toLocaleLowerCase().indexOf(searchInput) != -1) {
                            subTasks[f].parentElement.parentElement.style.display = 'block';
                            break;
                        } else {
                            subTasks[f].parentElement.parentElement.style.display = 'none';
                        }
                    }
                }
            }
        }
    });

    //show and hide done and undone tasks
  const undoneCheckBox = document.getElementById('undone');
  const doneCheckBox = document.getElementById('done');

  undoneCheckBox.addEventListener('click', () => {
    hideTasks(undoneCheckBox, 'undone');
  });

  doneCheckBox.addEventListener('click', () => {
    hideTasks(doneCheckBox, 'done');
  });

  function hideTasks(checkBox, status) {
    const messages = Array.from(tasksList.getElementsByTagName('li'));
    if (checkBox.checked) {
      messages.forEach(message => {
        if (message.className == 'task ' + status) {
          message.style.display = 'block';
        }
      });
    } else if (!checkBox.checked) {
      messages.forEach(message => {
        if (message.className == 'task ' + status) {
          message.style.display = 'none';
        }
      });
    }
  }

    function fillSelectList(selectList, i) {
        const option = document.createElement('option');
        const userName = users[i].name.charAt(0).toUpperCase() + users[i].name.slice(1)
        option.innerText = `${userName} Core Skill: ${users[i].coreSkill}`;
        selectList.appendChild(option);
        if (users.length <= 23) {
            selectList.setAttribute('size', users.length - 1);
        } else if (users.length > 22) {
            selectList.setAttribute('size', '22');
        }
    }

    function showTasks() {
        //if user no admin create tasks and show them
        if (!user.isAdmin) {
            createElements(false)
            hideElements('#tasks_wrapper header .page-banner');
            forms['search-tasks'].style.display = 'block';
            const checkBox = document.querySelectorAll('.check');
            const deleteButton = document.querySelectorAll('.delete');
            //hide delete button
            deleteButton.forEach(el => {
                el.style.display = 'none';
            })
            //and show checkboxes
            checkBox.forEach(el => {
                el.classList.remove('check')
            })
        //if user admin create tasks and show all tasks 
        } else if (user.isAdmin) {
            createElements(true)
        }
    }

    //func for creating tasks from localstorage
    function createElements(admin) {
        for (let i = 0; i < tasks.length; i++) {

            // create elements
            const taskNameValue = tasks[i].name;
            const li = document.createElement('li');
            const taskName = document.createElement('span');
            const taskProgress = document.createElement('span');

            const deleteButton = document.createElement('span');
            const indexValue = tasks.indexOf(tasks[i]);

            const contributors = document.createElement('li');
            const contributorsValue = document.createElement('span');

            const ul = document.createElement('ul');
            const checkbox = document.createElement('input');
            checkbox.setAttribute('type', 'checkbox');
            checkbox.classList.add('check');
            checkbox.checked = tasks[i].checked;


            // add text content
            tasks[i].contributors.forEach(el => {
                contributorsValue.textContent += `${el.charAt(0).toUpperCase() + el.slice(1)} `;
            })

           
            taskName.textContent = taskNameValue;
            taskProgress.textContent = tasks[i].progress + '%';
            deleteButton.textContent = 'delete';

            // add classes

            taskName.classList.add('name');
            taskProgress.style.color = 'red';
            deleteButton.classList.add('delete');
            li.setAttribute('value', indexValue);
            li.classList.add('task');
            li.classList.add(tasks[i].status);
            ul.classList.add('sub_task_invis');
            checkbox.setAttribute('value', '100');
            checkbox.classList.add('doneTask')


            //creatin subtasks
            if (tasks[i].subTasks.length > 0) {
                let subTaskValue = (100 / tasks[i].subTasks.length).toFixed();

                for (let f = 0; f < tasks[i].subTasks.length; f++) {

                    const li = document.createElement('li');
                    const checkbox = document.createElement('input');
                    checkbox.setAttribute('type', 'checkbox');
                    checkbox.setAttribute('value', subTaskValue);

                    const subTaskName = document.createElement('span');
                    const deleteButton = document.createElement('span');
                    subTaskName.textContent = tasks[i].subTasks[f].name;
                    checkbox.checked = tasks[i].subTasks[f].checked;
                    checkbox.classList.add('check');
                    checkbox.classList.add('addValue');
                    li.classList.add(tasks[i].subTasks[f].status);
                    deleteButton.textContent = 'delete';
                    subTaskName.classList.add('name');
                    deleteButton.classList.add('delete');
                    li.appendChild(subTaskName);
                    li.appendChild(checkbox);
                    li.appendChild(deleteButton);
                    ul.appendChild(li);

                }
            }


            // append to DOM
            if (contributorsValue.textContent) {
                contributors.appendChild(contributorsValue)
                ul.appendChild(contributors);
            }

            li.appendChild(taskName);
            li.appendChild(checkbox);
            li.appendChild(taskProgress);
            li.appendChild(deleteButton);
            li.appendChild(ul);
            if (!admin) {
                for (let f = 0; f < tasks[i].contributors.length; f++) {
                    if (tasks[i].contributors[f] == user.name) {
                        tasksList.appendChild(li)
                    }
                }
            } else {
                tasksList.appendChild(li)
            }
        }
    }

    //function for showing tasks
    function hideElements(section) {
        let arr = document.querySelectorAll(section + ' > *');
        for (let i = 0; i < arr.length; i++) {
            arr[i].style.display = 'none';
        }
    }
}