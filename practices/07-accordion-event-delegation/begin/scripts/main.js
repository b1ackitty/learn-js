;(() => {
  const accordions = Array.from(document.querySelectorAll('.accordion'))

  accordions.forEach((accordion) => {
    const button = accordion.querySelector('.accordion__header button')
    
    button.addEventListener('click', () => {
      accordion.classList.toggle('is-open')
    })
  })
})

// 이벤트 위임 방식으로 코드 개선
;(() => {
  const accordionContainer = document.querySelector('.accordion__container')

  accordionContainer.addEventListener('click', (e) => {
    const target = e.target
    const button = target.closest('.accordion__header button')

    if (button) {
      button.closest('.accordion').classList.toggle('is-open')
    }
  })
})()