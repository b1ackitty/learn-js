// 문서에 있는 버튼 요소에 접근(찾기)
// 전역 변수에 참조 (왜? 객체 타입이니까!)
const button = document.querySelector('button.clickable')

// 버튼 요소에 이벤트 리스너(함수) 추가
// 콜백 = 다른 함수에 인수로 전달될 함수(나중에 실행되도록)
// 이벤트 = 언제 발생할 지 알 수 없음(비동기)
button.addEventListener('click', () => {
  document.body.classList.toggle('is-active')
})

// addEventListener()를 사용해 리스너를 추가하는 것은 x N회 가능
button.addEventListener('click', () => {
  button.classList.toggle('is-active')
})

// 함수 이중 중첩 예시
// function fn1() {
//   function fn2() {

//   }
// }

// 콜백 예시
fn1(fn2)

function fn1(callback) {
  // [1]
  // console.log('fn1')
  callback()
}

function fn2() {
  // [2]
  // console.log('fn2')
}

// 동기 방식은 코드 실행 완료될 때까지 다음 코드를 차단(블로킹)
// 비동기 방식은 바로 실행되지 않고(다음 코드를 차단하지 않고) 나중에 코드가 호출(콜백)

// JS 쓰레드 1개 (단 하나의 일만 처리 가능)

// 할 일 1
// console.log('코드 블로킹!')

// while (true) {
//   console.log('코드 블로킹!')
// }

// 할 일 2
console.log('이 코드는 절대 실행되지 않습니다.')