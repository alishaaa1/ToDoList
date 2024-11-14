document.addEventListener('DOMContentLoaded', function(){
    const todoInput = document.getElementById('todoInput');
    const addTodoBtn = document.getElementById('addTodoBtn');
    const todoList = document.getElementById('todoList');

    function addTodo(){
        const todoText = todoInput.value.trim();
        if(todoText===""){
            alert('Please enter a todo item.');
            return;
        }
        const todoItem = document.createElement('li')
        todoItem.innerHTML = `
            <input type="text" class="todo-text" value="${todoText}" readOnly />
            <span class="edit-btn">Edit</span>
            <span class="delete-btn">Delete</span>
        `
        todoList.appendChild(todoItem);
        todoInput.value='';
    }
    addTodoBtn.addEventListener('click',addTodo);

    todoInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            addTodo();
        }
    });

    todoList.addEventListener('click',function(e){
        const target = e.target;
        const todoItem = target.parentElement;
        if(target.classList.contains('edit-btn')){
            const todoText = todoItem.querySelector('.todo-text');
            if(target.textContent === 'Edit'){
                todoText.removeAttribute('readonly');
                todoText.focus();
                target.textContent = 'Save';
            }else{
                todoText.setAttribute('readonly', true);
                 target.textContent = 'Edit'
            }
        }else if(target.classList.contains('delete-btn')){
            todoItem.remove();
        }
    })

});