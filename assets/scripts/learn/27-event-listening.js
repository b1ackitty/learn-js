const clickableButton = document.querySelector('.clickable')
const body = document.body

clickableButton.addEventListener('click', (e) => {
  if (body.classList.contains('is-active')) {
    // addEventListener()에 전달됨 함수(값)
    // 즉, 이벤트 리스너는 event 객체를 매개변수로 전달 받는다.
    // Event { x, y, target, type, pointerType, ... }
    console.log('이벤트 객체 =', e)

    // <body> 와 .clickable 요소 모두 is-active 클래스 토글(on <-> off)
    body.classList.toggle('is-active')
    clickableButton.classList.toggle('is-active')
  }
})

// clickableButton.addEventListener('click', () => {
//   // 조건 확인('is-active' 클래스 이름을 가지는가?)
//   if (body.classList.contains('is-active')) {
//     // 클래스 이름 제거 --------------------------------------------
//     // <body> 요소에 is-active 클래스 이름 제거
//     body.classList.remove('is-active')

//     // .clickable 요소에 is-active 클래스 이름 제거
//     clickableButton.classList.remove('is-active')
//   } else {
//     // 클래스 이름 추가 --------------------------------------------
//     // <body> 요소에 is-active 클래스 이름 추가
//     body.classList.add('is-active')

//     // .clickable 요소에 is-active 클래스 이름 추가
//     clickableButton.classList.add('is-active')
//   }
// })

// console.log(clickableButton)

// clickableButton.addEventListener(
//   'click'/* event type(string) */,
//   // function() {} /* event listener(function) */
//   () => {
//     console.log('clicked clickable button')
//   }
// )