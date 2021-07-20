const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collections');
const clearBtn = document.querySelector('#clear-task');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('.input-task');

loadEventListner();

function loadEventListner() {
    form.addEventListener('submit', addTask);
    clearBtn.addEventListener('click', clearTask);
    taskList.addEventListener('click', removeTask);
    filter.addEventListener('keyup', filterTask);
    clearBtn.disabled = true;

}

function addTask(e) {
    if (taskInput.value == '') {
        alert('Add a Task');

    } else {
        const li = document.createElement('li');
        li.className = 'collections-item';
        console.log(taskInput.value);
        li.appendChild(document.createTextNode(taskInput.value));
        const link = document.createElement('a');
        link.className = 'delete-task';
        link.innerHTML = ' <i class="fas fa-trash-alt"></i> '
        li.appendChild(link);
        taskList.appendChild(li);
        clearBtn.disabled = false;
        taskInput.value = '';

    }

}

function removeTask(e) {
    if (e.target.parentElement.classList.contains('delete-task')) {
        e.target.parentElement.parentElement.remove();
    } else {
        clearBtn.disabled = true;
    }
}

function clearTask() {
    taskList.innerHTML = '';
    clearBtn.disabled = true;
}

function filterTask(e) {
    const text = e.target.value.toLocaleLowerCase();
    document.querySelectorAll('.collections-item').forEach(
        function(task) {
            const item = task.firstChild.textContent;
            if (item.toLocaleLowerCase().indexOf(text) != -1) {
                task.style.display = 'block';
            } else {
                task.style.display = 'none';
            }
        }
    );

}