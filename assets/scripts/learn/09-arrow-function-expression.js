// -------------------------------
// 화살표 함수 표현식(Arrow Function Expression)
// -------------------------------

// 함수를 만드는 방법 3가지
/*
// 1. 함수 선언
function showMeTheMoney() { console.log('show me the money') }

showMeTheMoney()

// 2. 함수 표현식
let lookAtMe = function() { console.log('look at me') }

lookAtMe()

// 3. 화살표 함수 표현식
let readABook = (bookName) => {
  console.log('"' + bookName + '"을 읽다.')
}

readABook('한 여름 밤의 꿈')
readABook('로미오와 줄리엣')
*/


// -------------------------------
// 다양한 화살표 함수 구문
// -------------------------------

// 1. 매개변수의 개수
//    0개(권장)
// let readABook = () => {
//   console.log('"책"을 읽다.')
// }

// 자바스크립트 월드 사람들의 관례
// 매개변수를 사용하지 않을 경우, 관례적으로 밑줄(_)을 사용한다.
// let readABook = _ => {
//   console.log('"책"을 읽다.')
// }

// readABook()

//    1개(권장)
// let readABook = (bookName) => {
//   console.log('"' + bookName + '"을 읽다.')
// }

// readABook('오만과 편견')

// 1개면 소괄호 생략 가능
// let readABook = bookName => {
//   console.log('"' + bookName + '"을 읽다.')
// }

// readABook('오만과 편견')


//    2개 이상인 경우, 소괄호 생략을 허용하지 않는다.
let readABook = (bookName, day) => {
  console.log(day + '일에 걸쳐 "' + bookName + '"을 읽다.')
}

readABook('오만과 편견', 21)

// 2. 암묵적 반환
//    return undefined(암묵적 반환, 기본 반환)
//    return 값 (명시적 반환)
const ROOT_FONT_SIZE = 16

// 함수 선언
// function px2rem(pxValue) {
//   return pxValue / ROOT_FONT_SIZE + 'rem'
// }

// 함수 표현식
// let px2rem = function px2rem(pxValue) {
//   return pxValue / ROOT_FONT_SIZE + 'rem'
// }

// 화살표 함수 표현식 변형 1 (기본 화살표 함수 표현식)
// let px2rem = (pxValue) => {
//   return pxValue / ROOT_FONT_SIZE + 'rem'
// }

// 화살표 함수 표현식 변형 2 (매개변수 1: 소괄호 생략)
// let px2rem = pxValue => {
//   return pxValue / ROOT_FONT_SIZE + 'rem'
// }

// 화살표 함수 표현식 변형 3 (암묵적 반환)
let px2rem = pxValue =>  pxValue / ROOT_FONT_SIZE + 'rem'

// console.log(px2rem(28))

// 객체
// let cssStyles = {
//   'display': 'grid',
//   'row-gap': 24
// }

// 객체를 반환하는 함수
// 함수 선언
// function getStyles() {
//   let cssStyles = {
//     'display': 'grid',
//     'row-gap': 24
//   }

//   return cssStyles
// }

// 함수 표현식
// let getStyles = function () {
//   let cssStyles = {
//     'display': 'grid',
//     'row-gap': 24
//   }

//   return cssStyles
// }

// 화살표 함수 표현식
// let getStyles = () => {
//   let cssStyles = {
//     'display': 'grid',
//     'row-gap': 24
//   }

//   return cssStyles
// }

// 화살표 함수 표현식: 객체는 값이기 때문에 그대로 return할 수 있다.
// let getStyles = () => {
//   return {
//     'display': 'grid',
//     'row-gap': 24
//   }
// }

// 화살표 함수 표현식: 암묵적 반환
let getStyles = () => ({ 'display': 'grid', 'row-gap': 24 })

console.log(getStyles())
