const FinishBotton = (update, id) => {
    const finishBotton = document.createElement('button')

    finishBotton.classList.add('check-button')
    finishBotton.innerText = 'concluir'
    finishBotton.addEventListener('click', () => finishTask(update, id))

    return finishBotton
}

const finishTask = (update, id) => {
    const registeredTasks = JSON.parse(localStorage.getItem('tasks'))

    registeredTasks[id].finished = !registeredTasks[id].finished
    localStorage.setItem('tasks', JSON.stringify(registeredTasks))

    update()
}

export default FinishBotton