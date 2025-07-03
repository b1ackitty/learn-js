/* global mouseenter, mouseleave, click */

const body = document.body
const button1 = document.querySelector('.button-1')
const button2 = document.querySelector('.button-2')

// Mouse Event
// - click
// - dblclick
// - mousedown
// - mousemove
// - mouseup
// - mouseenter(element, listener)
// - mouseleave(element, listener)

const handleActive = () => {
  body.classList.add('is-active')
  button1.classList.add('is-active')
  button2.classList.add('is-active')
  // console.log('enter')
}

const handleInactive = () => {
  body.classList.remove('is-active')
  button1.classList.remove('is-active')
  button2.classList.remove('is-active')
  // console.log('leave')
}

mouseenter(button1, handleActive)
mouseleave(button1, handleInactive)
mouseenter(button2, handleActive)
mouseleave(button2, handleInactive)

// button1.addEventListener('mouseenter', handleActive)
// button1.addEventListener('mouseleave', handleInactive)

// button2.addEventListener('mouseenter', handleActive)
// button2.addEventListener('mouseleave', handleInactive)

// function mouseenter(element, listener) {
//   element.addEventListener('mouseenter', listener)
// }

// function mouseleave(element, listener) {
//   element.addEventListener('mouseleave', listener)
// }

// -------------------------------------------------------

// const handleClick = () => console.log('button clicked')

// button.addEventListener('click', handleClick)

// click(button1, handleClick)
// click(button2, handleClick)

click(document.querySelector('.button-1'), () => console.log('button 1'))
click(document.querySelector('.button-2'), () => console.log('button 2'))

// function click(element, listener) {
//   element.addEventListener('click', listener)
// }

// -------------------------------------------------------

function callToAction(callback) {
  callback()
}

// function thisIsCallback() {
//   console.log('this is a callback')
// }

// thisIsCallback()
// callToAction(thisIsCallback)

callToAction(() => {
  // console.log('콜백은 다른 함수에 인수로 전달되는 함수를 말합니다.')
})