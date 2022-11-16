import FinishBotton from "./finishTask.js"
import DeleteBotton from "./deleteTask.js"

export const handleNewItem = (event) => {
    event.preventDefault()

    const tasks = JSON.parse(localStorage.getItem('tasks')) || []
    const list = document.querySelector('[data-list]')
    const input = document.querySelector('[data-form-input]')
    const newValue = input.value

    const calendar = document.querySelector('[data-form-date]')
    const date = moment(calendar.value)

    const formatedDate = date.format('DD/MM/YYYY')

    const data = {
        newValue, formatedDate
    }

    const updatedTasks = [...tasks, data]

    const createTask = Task(data)

    list.appendChild(createTask)

    localStorage.setItem("tasks", JSON.stringify(updatedTasks))

    input.value = " "
}

export const Task = ({ newValue, formatedDate }) => {

    const task = document.createElement('li')
    task.classList.add('task')
    const content = `<p class="content">${newValue} * ${formatedDate}</p>`

    task.innerHTML = content

    task.appendChild(FinishBotton())
    task.appendChild(DeleteBotton())

    return task
}
