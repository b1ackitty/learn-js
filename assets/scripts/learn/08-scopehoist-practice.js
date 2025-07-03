// 실습
// 함수를 선언하는 방법을 연습합니다. 실제 코딩할 때 함수는 매우 많이 사용됩니다.

// 1. logger 이름의 함수를 선언하고, logMessage 매개변수로 받아 콘솔 패널에 출력하도록 작성합니다.
function logger(logMessage) {
  console.log('로그 메시지:', logMessage)
}

logger('실습을 통한 연습은 언제나 옳습니다. 😊')

// 2. px 값을 rem 단위 값으로 변경하는 pxToRem 함수를 선언하고, 계산된 값을 반환하도록 작성하세요.
function pxToRem(px) {
  let rem = px / 16 + 'rem'
  return rem
}

console.log(pxToRem(24))
console.log(pxToRem(16))

// 3. rem 단위 값을 px 값으로 변경하는 remToPx 함수를 선언하고, 계산된 값을 반환하도록 작성해보세요.
function remToPx(rem) {
  return rem * 16 + 'px'
}

console.log(remToPx(1.5))
console.log(remToPx(1))

// 4. 피자 한 판 가격 계산 함수 만들기
// 피자 한 판이 얼마인지 알고 있고, 몇 판을 살 건지도 알 때, 총 금액을 계산하는 함수
function pizzaCost(aPizzaCost, pizzaAmount) {
  console.log(aPizzaCost + '원의 피자 ' + pizzaAmount + '판은 ' + aPizzaCost * pizzaAmount + '원입니다.')
}

pizzaCost(18_000, 2)

// 5. 주차 요금 계산 함수 만들기
// 주차장에 몇 시간 있었는지를 입력하면, 1시간에 1,000원씩 계산하는 함수
const HOUR_PARKING_FEE = 1000

let parkingCost = function (parkHour) {
  console.log(parkHour + '시간 주차 요금은 ' + parkHour * HOUR_PARKING_FEE + '원입니다.')
}

parkingCost(3)

// 6. 짝수인지 확인하는 함수 만들기
// 어떤 숫자가 짝수인지 아닌지를 확인하는 함수. 짝수면 `true`, 홀수면 `false`
function isEven(num) {
  // if (num % 2 == 0) {
  //   return true
  // }
  // if (num % 2 == 1) {
  //   return false
  // }
  // 비교 연산자: ==
  return num % 2 == 0
}

console.log('4는 짝수일까요?', isEven(4))
console.log('9는 짝수일까요?', isEven(9))

// 7. 생일 축하 메시지 출력 함수 만들기
// 이름만 알려주면 자동으로 축하 메시지를 만들어주는 자동 응답기 같은 함수
function bDayMessage(name) {
  console.log(name + ', 생일 축하해!')
}

bDayMessage('지은')

// 8. 올해 남은 날짜 계산 함수 만들기
// 오늘이 120일째라면, 1년(365일)에서 얼마나 남았는지 알려주는 함수
const DAYS_IN_A_YEAR = 365

function daysLeft(day) {
  return DAYS_IN_A_YEAR - day
}

console.log('올해 남은 날은 ' + daysLeft(120) + '일입니다.')

// 9. 세금 포함 가격 계산 함수 만들기
// 상품 가격에 부가세를 붙여서 최종 금액을 계산하는 함수
const TAX_RATE = 0.0333
function taxAddedCost(cost) {
  return cost + cost * TAX_RATE
}

console.log(taxAddedCost(30_000))

// 10. 나이가 성인인지 판별하는 함수 만들기
// 놀이공원 입장 시, 성인(19+) 구역에 들어갈 수 있는 나이인지 확인해주는 함수
const ADULT_AGE = 19

function isAdult(age) {
  // if (age >= 19) {
  //   console.log('입장하세요.')
  // }
  // if (age < 19) {
  //   console.log('입장할 수 없습니다.')
  // }
  return age >= ADULT_AGE
}

console.log('나이가 성인입니다.', isAdult(30))
console.log('나이가 성인입니다.', isAdult(14))
