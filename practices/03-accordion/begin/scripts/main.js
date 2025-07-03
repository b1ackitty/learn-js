const accordionContainer = document.querySelector('.accordion__container')
const accordionList = accordionContainer.querySelectorAll('.accordion')
const buttons = document.querySelectorAll('button')


for (let i = 0, l = accordionList.length; i < l; i++) {
  buttons[i].addEventListener('click', () => {
    accordionList[i].classList.toggle('isOpen')
  })
}

;(() => {
  const accordionContainer = document.querySelector('.accordion__container')
  const accordions = accordionContainer.querySelectorAll('.accordion')

  for(const accordion of accordions) {  
    const accordionButton = accordion.querySelector('button')
    accordionButton.addEventListener('click', () => {
      accordion.classList.toggle('is-open')
    })
  }
})

;(() => {
  const accordionContainer = document.querySelector('.accordion__container')
  const accordions = accordionContainer.querySelectorAll('.accordion')

  accordions.forEach((accordion) => {
    const accordionButton = accordion.querySelector('button')
    accordionButton.addEventListener('click', () => {
      accordion.classList.toggle('is-open')
    })
  })
})