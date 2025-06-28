const btnsOpenModal = document.querySelectorAll('[data-open-modal]')
const backdrop = document.querySelector('.backdrop')
const btnCloseModal = document.querySelector('.modal-close')
const modal = document.querySelector('.modal')

btnsOpenModal.forEach((btn) => {
    btn.addEventListener('click', () => {
        backdrop.classList.remove('is-hidden')
        document.body.style.overflow = 'hidden'
        modal.classList.add('rotate')
    })
})

btnCloseModal.addEventListener('click', () => {
    backdrop.classList.add('is-hidden')
    document.body.style.overflow = 'auto'
    modal.classList.remove('rotate')
})