// --------------------------------------------------------------------------
// 📌 .toString(radix?)
// --------------------------------------------------------------------------
// - 타입 변경 (문자열화)
// - 10진수를 다른 진수로 변경 (최소값: 2진수 / 최대값: 36진수)
// --------------------------------------------------------------------------

// 타입 변경
console.log('this is a string'.toString())
console.log((1004).toString())
console.log((true).toString())
console.log((false).toString())
// console.log((null).toString())

let n = 255 // 10진수
// 10진수 -> 2진수 변경
console.log(n.toString(2)) // 컴퓨터가 알아듣는 2진수

// 10진수 -> 8진수
console.log(n.toString(8)) // 컴퓨터가 알아듣는 8진수

// 10진수 -> 16진수 변경
console.log(n.toString(16)) // 컴퓨터가 알아듣는 16진수

// 10진수를 2진수 또는 16진수로 변경하는 함수 작성
// 함수의 기능 고민, 적절한 함수 이름, 기능 구현, 결과 값 설계, 함수 호출 정상 작동 테스트
function decimalToBaseN (decimal, base) {
  return decimal.toString(base)
}
console.log(decimalToBaseN(24, 2))
console.log(decimalToBaseN(24, 16))

// --------------------------------------------------------------------------
// 📌 parseInt(string, radix?), Number.parseFloat(string, radix?)
// --------------------------------------------------------------------------
// - 단위(예: px, rem, cm, mm 등) 제거
// - 2 또는 16진수 문자열을 10진수로 변경
// --------------------------------------------------------------------------

// 단위 제거
console.log(parseInt('24px'))
console.log(parseFloat('1.625rem'))
console.log(parseInt('277mm'))

// 단위 제거 함수 작성
const removeUnit = (unitValue) => {
  return parseFloat(unitValue)
}
console.log(removeUnit('24px') === 24)
console.log(removeUnit('1.5rem') === 1.5)

// 2진수 문자열 -> 10진수 변경
console.log(parseInt('10', 2))
console.log(parseInt('100', 2))

// 16진수 문자열 -> 10진수 변경
console.log(parseInt('00', 16))
console.log(parseInt('80', 16))
console.log(parseInt('a0', 16))
console.log(parseInt('a1', 16))
console.log(parseInt('ae', 16))
console.log(parseInt('ff', 16))

// 16진수 문자열을 10진수로 변경하는 함수 작성
const hexToDec = (hexValue) => {
  return parseInt(hexValue, 16)
}
console.log(hexToDec('00') === 0)
console.log(hexToDec('a0') === 160)
