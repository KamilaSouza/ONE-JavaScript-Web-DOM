const FinishBotton = () => {
    const finishBotton = document.createElement('button')

    finishBotton.classList.add('check-button')
    finishBotton.innerText = 'concluir'
    finishBotton.addEventListener('click', finishTask)

    return finishBotton
}

const finishTask = (event) => {
    const finishBotton = event.target

    const finishedTask = finishBotton.parentElement

    finishedTask.classList.toggle('done')

}

export default FinishBotton