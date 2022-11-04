const DeleteBotton = () => {
    const deleteBotton = document.createElement('button')

    deleteBotton.innerText = 'deletar'
    deleteBotton.addEventListener('click', (deleteTask)
    )

    return deleteBotton

}

const deleteTask = (event) => {
    const deleteBotton = event.target

    const completedTask = deleteBotton.parentElement

    completedTask.remove()

    return deleteBotton
}

export default DeleteBotton