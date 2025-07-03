// Modal Dialog 구현 실습

// const body = document.body
// const modal_open_button = document.querySelector('main .modal-open-button')

// const modal_overlay = document.querySelector('.modal-overlay')
// const modal_close_button = document.querySelector('.modal-overlay .modal-close-button')

// // 접근성 4 원칙
// // 1원칙: 인식의 용이성 recognizable
// // 2원칙: 운용의 용이성
// // 3원칙: 이해의 용이성 understandable
// // 4원칙: 견고성

// modal_open_button.addEventListener('click', () => {
//   body.classList.add('modal-is-open')
// })

// // modal_overlay.addEventListener('click', closeModalDialog)
// modal_close_button.addEventListener('click', closeModalDialog)

// function closeModalDialog() {
//   body.classList.remove('modal-is-open')
// }

// 스스로에게 클래스를 추가/제거해서 모달 창 여닫기
const openButton = document.querySelector('.modal-open-button')
const modalOverlay = document.querySelector('.modal-overlay')
const closeButton = modalOverlay.querySelector('.modal-close-button')

closeButton.addEventListener('click', () => {
  modalOverlay.classList.remove('is-open')
})

openButton.addEventListener('click', () => {
  modalOverlay.classList.add('is-open')
})