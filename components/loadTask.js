import { createDate } from "./createDate.js"
import { orderDate, removeDuplicatedDates } from "./service/date.js"

export const loadTask = () => {
    const list = document.querySelector('[data-list]')

    const registeredTasks = JSON.parse(localStorage.getItem('tasks')) || []

    list.innerHTML = " "

    const uniqueDates = removeDuplicatedDates(registeredTasks)

    orderDate(uniqueDates)

    uniqueDates.forEach((day) => {
        list.appendChild(createDate(day))
    })

}