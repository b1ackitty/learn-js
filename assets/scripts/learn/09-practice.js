// 실습
// 화살표 함수 표현식은 매우 중요하니, 화살표 함수 표현식에 익숙해져야 합니다.

// 1. 매개변수 없이, 값 `10`을 반환하는 `ten` 함수를 화살표 함수 표현식으로 작성해보세요.
const ten = () => 10

// 2. 하나의 매개변수를 받는 logger 함수를 화살표 함수 표현식으로 작성해보세요. (괄호 사용 또는 사용 안함)
const logger = (message) => console.log('로그 메시지:', message)

// 3. pxToRem 함수를 명시적, 암묵적으로 값을 반환하도록 모든 경우를 화살표 함수 표현식으로 작성하세요.
// 명시적 반환
// const pxToRem = (pxValue) => { return pxValue / 16 + 'rem' }

// 암묵적 반환
const pxToRem = (pxValue) => pxValue / 16 + 'rem'

// 4. percentage 함수를 명시적, 암묵적으로 값을 반환하도록 모든 경우를 화살표 함수 표현식으로 작성하세요.
// 명시적 반환
// const percentage = (partialValue, wholeValue) => {
//   return partialValue / wholeValue * 100 + '%'
// }

// 암묵적 반환
const percentage = (partialValue, wholeValue) =>  partialValue / wholeValue * 100 + '%'

// 화살표 함수 표현식에서 let이 아닌 const를 사용하는 이유는 혹시라도 나중에 함수가 아닌 값을 넣을 수도 있기 때문이다.