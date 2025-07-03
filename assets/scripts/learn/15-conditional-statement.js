// -----------------------------------
// 조건문 - if ... else
// -----------------------------------

// 프로그래밍 조건문

// 조건 = 참 같은 값(truthy)으로 평가. 
// 조건 = 거짓 같은 값(falsey)으로 평가. 
// 거짓 같은 값으로 평가되는 것들
// - false(boolean)
// - 0(number)
// - ''(string)
// - null
// - undefined
// - NaN(숫자 + undefined)

{
  let 조건 = 10
  let 값 = 9

  if (조건 == 값) {
    console.log('참 같은 값이군요!')
  } else {
    console.log('거짓 같은 값이군요!')
  }
}

let 신호등_색상 = 'green'
let 신호 = 'red'

if (신호등_색상 == 신호) {
  console.log('건너면 안 돼요')
} else {
  console.log('좌우를 살피고 걸어요')
}

// 불리언 타입 변경
console.log(Boolean(-1))
console.log(Boolean(0))
console.log(Boolean(1))

console.log(Boolean(''))
console.log(Boolean(' '))
console.log(Boolean('hi'))

console.log(Boolean(true))
console.log(Boolean(false))

console.log(Boolean(null))
console.log(Boolean(undefined))

console.log(Boolean(Symbol('y9')))
console.log(Boolean(101n))

console.log(Boolean(() => {}))
console.log(Boolean({}))
console.log(Boolean([]))

if (0) {
  console.log('this is truethhy')
}


x = 10
y = 5

// JavaScript는 상황에 따라 타입을 자동으로 변환한다.

if(x == y) { console.log('this is truthy') }  // 동등(유사)
if(x === y) { console.log('this is truthy') } // 동치(일치)
if(x != y) { console.log('this is truthy') }  // 다름(유사)
if(x !== y) { console.log('this is truthy') } // 완전히 다름(일치)
if(x < y) { console.log('this is truthy') }   // 보다 작다
if(x <= y) { console.log('this is truthy') }  // 보다 작거나 같다
if(x > y) { console.log('this is truthy') }   // 보다 크다
if(x >= y) { console.log('this is truthy') }  // 보다 크거나 같다

// 개발자 작성
console.log(Boolean(24 == '24'))
// JavaScript 엔진 처리 (타입 자동 변환, 느슨한 비교)
console.log(Boolean('24' == '24'))

// 개발자 작성
console.log(Boolean(24 === '24'))
// JavaScript 엔진 처리 (타입 변환 안 함, 엄격한 비교)
console.log(Boolean(24 === '24'))


let condition = true

// 조건 (참이다, 아니다)
if (condition) {}
else {}

let 신호등불빛색 = '보라색'

// 조건 1 (신호등 불이 빨간색)
if (신호등불빛색 === '빨간색') {
  console.log('건너면 안 돼요!')
}
// 조건 2 (신호등 불이 노란색)
else if (신호등불빛색 === '노란색') {
  console.log('안전을 생각하면 그 자리에 멈추는 게 좋아요.')
}
// 조건 3 (신호등 불이 초록색)
else if (신호등불빛색 === '초록색') {
  console.log('좌우 살피고 건너세요!')
}
// 이도 저도 아니면...
else {
  console.log(신호등불빛색 + '은 신호등 불빛 색 중에 없어요.')
}


{
  // 신호등 예시에서

  let lightColor = '노란색'
  let car ='stop'

  // let 조건A = lightColor === '노란색'
  // let 조건Z = car === 'stop'

  // 조건A 그리고(and, &&) 조건Z -> '안경도 썻고, 키도 컸어요.'
  // 조건A 또는(or, ||) 조건Z  -> '안경을 썻거나, 키가 크거나.'

  // 이런식으로 두 조건을 만족 해야만 
  // true값이 나오게 하려면 어떻게 할까요...
  // if(조건A && 조건Z) {
  if(lightColor === '노란색' && car === 'stop') {
    console.log('차가 멈췄고, 신호등 불빛색이 노란색이니까 서둘러 이동합시다.')
  }
}