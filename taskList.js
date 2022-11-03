const createTask = (event) => {

    event.preventDefault()

    const list = document.querySelector('[data-list]')
    const input = document.querySelector('[data-form-input]')
    const newValue = input.value

    const task = document.createElement('li')
    task.classList.add('task')
    const content = `<p class="content">${newValue}</p>`

    task.innerHTML = content

    list.appendChild(task)
    input.value = " "
}

const newTask = document.querySelector('[data-form-button]')

newTask.addEventListener('click', createTask)
