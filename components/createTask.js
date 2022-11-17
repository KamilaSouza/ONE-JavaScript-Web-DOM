import FinishBotton from "./finishTask.js"
import DeleteBotton from "./deleteTask.js"
import { loadTask } from "./loadTask.js"

export const handleNewItem = (event) => {
    event.preventDefault()

    const tasks = JSON.parse(localStorage.getItem('tasks')) || []
    const input = document.querySelector('[data-form-input]')
    const newValue = input.value

    const calendar = document.querySelector('[data-form-date]')
    const date = moment(calendar.value)
    const time = date.format('HH:mm')

    const formatedDate = date.format('DD/MM/YYYY')

    const finished = false

    const data = {
        newValue, formatedDate, finished, time
    }

    const updatedTasks = [...tasks, data]

    localStorage.setItem("tasks", JSON.stringify(updatedTasks))

    input.value = " "

    loadTask()
}

export const Task = ({ newValue, time, finished }, id) => {

    const task = document.createElement('li')
    task.classList.add('task')
    const content = `<p class="content">${time} * ${newValue}</p>`

    if (finished) {
        task.classList.add('done')
    }
    task.classList.add('task')

    task.innerHTML = content

    task.appendChild(FinishBotton(loadTask, id))
    task.appendChild(DeleteBotton(loadTask, id))

    return task
}
