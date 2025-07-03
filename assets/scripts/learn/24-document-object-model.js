// ----------------------------------------
// DOM(문서 객체 모델)
// - 문서 요소 선택(접근)하는 함수들(Web APIs)
// ----------------------------------------

// Document.getElementsByTagName(tagName)
// console.log(document.getElementsByTagName('h1'))
// console.log(document.getElementsByTagName('li'))

// Document.getElementById(idName)
const emailInput = document.getElementById('useremail')
// console.log(emailInput)

// Document.getElementsByName(name)
// console.log(document.getElementsByName('email'))

// Document.getElementsByClassName(className)
// const items = document.getElementsByClassName('item')
// console.log(items)

const elementById = document.querySelector('#useremail')
// console.log(elementById)

const elementByName = document.querySelector('[name="email"]')
// console.log(elementByName)

const firstElementByClassName = document.querySelector('.item')
// console.log(firstElementByClassName)

const elementByTagName = document.querySelector('h1')
// console.log(elementByTagName)

const items = document.querySelectorAll('.item')
// console.log(items)

// Document {}
const app = document.getElementById('app') // 성능 면에서 더 낫다(더 빠르다)
// const appElement = document.querySelector('#app')

// Element.querySelector(selector)
const appFirstListItem = app.querySelector('li.item')

console.log(appFirstListItem)
