function changeProgressTask(checked, taskClass, percents, index, ulSubTasks, liTask){
    for (let i = 0; i < ulSubTasks.length - 1; i++) {
        ulSubTasks[i].childNodes[1].checked = checked;
        ulSubTasks[i].className = taskClass;
    }
    tasks[index].subTasks.forEach(el => (
        el.checked = checked,
        el.status = taskClass
    ))
    liTask.className = 'task' + taskClass
    liTask.childNodes[2].innerText = percents + '%';
    liTask.className = 'task' + taskClass
    tasks[index].progress = percents;
    tasks[index].status = taskClass;
    tasks[index].progress = percents;
    tasks[index].checked = checked;
    window.localStorage.tasks = JSON.stringify(tasks);
}

changeProgressTask(true, 'undone', 0)