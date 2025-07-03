// stopPropagation을 사용하는 방법
;(() => {
  const body = document.body
  const modal_open_button = document.querySelector('main .modal-open-button')

  const modal_overlay = document.querySelector('.modal-overlay')
  const modal_dialog = modal_overlay.querySelector('.modal-dialog')
  const modal_close_button = modal_overlay.querySelector('.modal-close-button')

  modal_open_button.addEventListener('click', () => {
    body.classList.add('modal-is-open')
  })

  modal_close_button.addEventListener('click', closeModalDialog)

  modal_overlay.addEventListener('click', closeModalDialog)

  modal_dialog.addEventListener('click', (e) => {
    e.stopPropagation()
  })

  function closeModalDialog() {
    body.classList.remove('modal-is-open')
  }
})

// stopPropagation을 사용하지 않는 방법
// 외부 프로그램 방해하지 않도록
;(() => {
  const body = document.body
  const modal_open_button = document.querySelector('main .modal-open-button')

  const modal_overlay = document.querySelector('.modal-overlay')
  const modal_close_button = modal_overlay.querySelector('.modal-close-button')

  modal_open_button.addEventListener('click', () => {
    body.classList.add('modal-is-open')
  })

  modal_close_button.addEventListener('click', closeModalDialog)

  modal_overlay.addEventListener('click', closeModalDialog)

  function closeModalDialog(e) {
    const target = e.target
    if (!target.closest('.modal-dialog') || target === modal_close_button) {
      body.classList.remove('modal-is-open')
    }
  }
})()