const DeleteBotton = (update, id) => {
    const deleteBotton = document.createElement('button')

    deleteBotton.classList.add('delete-button')
    deleteBotton.innerText = 'deletar'
    deleteBotton.addEventListener('click', () => deleteTask(update, id)
    )

    return deleteBotton

}

const deleteTask = (update, id) => {

    const index = id
    const registeredTasks = JSON.parse(localStorage.getItem('tasks'))

    registeredTasks.splice(index, 1)

    localStorage.setItem('tasks', JSON.stringify(registeredTasks))
    update()
}

export default DeleteBotton