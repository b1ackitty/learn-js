
// -------------------------------------
// 함수
// -------------------------------------

// 전역 변수
let name = '전역'
let nickname = '꼬리'

// 함수(Function Scope)
function 함수() {
  // 함수의 지역 변수
  let name = '함수'

  // 중첩된 함수(Nested Function Scope)
  function 중첩된함수() {
    let name = '중첩된 함수'

    console.log(1, name)
    console.log(1, nickname)
  }

  중첩된함수()

  console.log(2, name)
}

함수()
console.log(3, name)

