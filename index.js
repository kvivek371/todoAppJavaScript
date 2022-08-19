window.addEventListener('load',()=>{
    const form = document.querySelector('#new-task-list');
    const input = document.querySelector('#newTaskInput');
    const list = document.querySelector('#tasks');
    
    form.addEventListener('submit',(e)=>{
        e.preventDefault();
        
        const task = input.value;
        if(!task){
            alert('please fill out the task')
            return;
        }


        const taskList = document.createElement("div");
        taskList.setAttribute('id',"tasks");

        const taskListMain = document.createElement("div");
        taskListMain.classList.add("task");


        const task_content = document.createElement("div")
        task_content.classList.add("content");        

        const inputText = document.createElement("input");
        inputText.classList.add('text');
        inputText.type="text";
        inputText.value = task;
        inputText.setAttribute('readonly','readonly')
        task_content.appendChild(inputText);

        taskListMain.appendChild(task_content);

        const taskButton = document.createElement("div");
        taskButton.classList.add("actions")

        const editButton = document.createElement('button');
        editButton.classList.add('edit');
        editButton.innerText="edit";
        taskButton.appendChild(editButton);

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete');
        deleteButton.innerText="delete";
        taskButton.appendChild(deleteButton);

        taskListMain.appendChild(taskButton)

        taskList.appendChild(taskListMain)
        list.appendChild(taskList);
        console.log(list)

        input.value='';

        editButton.addEventListener('click',()=>{
            if(editButton.innerText.toLowerCase()=="edit"){
                inputText.removeAttribute('readonly','readonly');
                inputText.focus();
                editButton.innerText="SAVE"  
            }else{
                inputText.setAttribute('readonly','readonly');
                editButton.innerText="EDIT"  
            }
        })

        deleteButton.addEventListener('click',()=>{
            taskList.removeChild(taskListMain);
        })
    })
});