// ------------------------------------------
// JavaScript 객체(Object)
// ------------------------------------------

// 기본 타입(Primitive Types, 간단)
// 1. String - '문자값', new String('문자값')
// 2. Number - 101, new Number(101)
// 3. Boolean - false, new Boolean(false)
// 4. null - 비어있다.
// 5. undefined - 정의 되지 않음
// 6. Symbol - Symbol('yamoo9')
// 7. BigInt - 1000n, BigInt(1000)

// 객체 타입(Object Types, 복잡)
// 1. Function - () => {}
// 2. Object - {}
// 3. Array - []

// ------------------------------------------
// JavaScript 객체(Object)
// ------------------------------------------

// 객체 생성자(Constructor)를 사용해 객체 생성
// const 커피 = new Object()
// 커피.이름 = '아메리카노'
// 커피.브랜드 = '스타벅스'
// 커피.용량 = '600ml'

// 객체 리터럴을 사용해 객체 정의(쉬운 방법)
const 커피 = {
  용량: '600ml',
  브랜드: '스타벅스',
  이름: '아메리카노',
}

const 국어사전 = {
  결제: '대금을 주고받아 매매 당사자 사이의 거래 관계를 끝맺는 일',
  결재: '결정할 권한이 있는 상관이 부하가 제출한 안건을 검토하여 허가하거나 승인',
}

// console.log(커피)

const asus = {
  processor: '12th Gen Intel(R) Core(TM) i7-12700H   2.30 GHz',
  memory: 16,
  os: 'Windows 11 Pro',
}

// console.log(asus)

let processor = '12th Gen Intel(R) Core(TM) i7-12700H   2.30 GHz'
let memory = 16
let os = 'Windows 11 Pro'

// console.log('processor =', processor)
// console.log('memory =', memory)
// console.log('os =', os)

const 객체 = {
  숫자: 101,
  문자: '안녕!',
  불리언: false,
  널: null,
  언디파인드: undefined,
  심볼: Symbol('객체'),
  빅인트: 910n,
  배열: [],
  객체: {},
  함수: () => {},
}

const h1Camel = {
  fontWeight: 200,
  fontSize: '2.65rem',
}

const h1Kebab = {
  'font-weight': 200,
  "font-size": '2.65rem',
}

// 객체 속성 읽기(Read)
console.log(h1Kebab['font-weight']) // 200

// 객체 속성 쓰기(Write)
h1Kebab['font-weight'] = 700 // bold
h1Kebab['font-style'] = 'oblique'

// 수정된 객체 속성 읽기(Read)
console.log(h1Kebab['font-weight']) // 700
console.log(h1Kebab['font-style']) // 'oblique'

console.log(h1Kebab)

// 객체 속성 삭제(Delete)
delete h1Kebab['font-style']

console.log(h1Kebab)


// 객체의 속성(Object's Properties)
// h1Camel.fontSize
// h1Camel.fontWeight

// 객체의 메서드(Object's Methods: 객체의 속성 중 함수(동사) 형태의 것을 특별히 메서드라고 부른다.)
h1Camel.getFontSize = function() {
  return h1Camel.fontSize
}

console.log(h1Camel.getFontSize())

asus.getOS = function() {
  return asus.os
}

console.log(asus.getOS())
console.log(asus['getOS']())

// 메서드 정의 (매개변수 포함)
asus.playMusic = function(songTitle) {
  return '"' + songTitle + '" 재생을 시작합니다. 🎵'
}

// 메서드 사용 (함수처럼 호출, 객체를 통해 메서드에 접근)
console.log(asus.playMusic('첫 눈처럼 너에게 가겠다.'))


// ------------------------------------------
// 함수의 타입은?
// JavaScript 함수는 객체다.
// ------------------------------------------

function likeLion() {
  console.log('우리는 멋사 14기!')
}

likeLion.order = 14

console.log(likeLion.order)

delete likeLion.order

console.log(likeLion.order)


// "함수는 값이다."
// - 함수는 값이므로 함수에 인수로 전달할 수 있다. (일급 객체, 일급 함수)
{
  greeting(sayHello, '🌈 자바스크립트') // '안녕! 🌈 자바스크립트'

  function sayHello() {
    return '안녕! '
  }

  function greeting(helloMessage, name) {
    console.log(helloMessage() + name)
  }
}

// - 함수는 값이므로 함수가 값으로 반환할 수 있다. (고차 함수)
{
  const greeting = sayHello()
  greeting('🌈 자바스크립트') // '안녕! 🌈 자바스크립트'

  function sayHello() {
    return (name) => {
      console.log('안녕! ' + name)
    }
  }
}
