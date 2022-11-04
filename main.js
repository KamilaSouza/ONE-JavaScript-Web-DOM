import FinishBotton from "./components/finishTask.js"
import DeleteBotton from "./components/deleteTask.js"

const createTask = (event) => {

    event.preventDefault()

    const list = document.querySelector('[data-list]')
    const input = document.querySelector('[data-form-input]')
    const newValue = input.value

    const task = document.createElement('li')
    task.classList.add('task')
    const content = `<p class="content">${newValue}</p>`

    task.innerHTML = content

    task.appendChild(FinishBotton())
    task.appendChild(DeleteBotton())
    list.appendChild(task)
    input.value = " "
}

const newTask = document.querySelector('[data-form-button]')

newTask.addEventListener('click', createTask)

