// --------------------------------------------
// 배열 메서드(Array's Methods)
// --------------------------------------------

const JS_학습_주제 = ['변수', '함수', '조건문', '객체', '배열', '비교 연산자', '부정 연산자']

// 배열 항목 위치(index) 찾기(find)
// let 함수_인덱스, 비교_연산자_인덱스

// 함수_인덱스 = JS_학습_주제.indexOf('함수') // 기대 값: 1 / 결과 값: 1
// console.log('함수 인덱스 =', 함수_인덱스)
// 함수_인덱스 = JS_학습_주제.indexOf('함 수') // 기대 값: -1 / 결과 값: -1
// console.log('함수 인덱스 =', 함수_인덱스)

// 비교_연산자_인덱스 = JS_학습_주제.indexOf('비교 연산자') // 기대 값: 5 / 결과 값: 5
// console.log('비교 연산자 =', 비교_연산자_인덱스)
// 비교_연산자_인덱스 = JS_학습_주제.indexOf('비교연산자') // 기대 값: -1 / 결과 값: -1
// console.log('비교 연산자 =', 비교_연산자_인덱스)


// --------------------------------------------

// indexOf() 메서드의 결과 값을 불리언 값으로 변경하려면?

const fruitBasket = ['패션후르츠', '애플망고', '워터멜론', '오렌지']

// indexOf() 메서드가 반환한 값이 -1보다 크면 true
// console.log(fruitBasket.indexOf('바나나') > -1) // false
// console.log(fruitBasket.indexOf('패션후르츠') > -1) // true
// console.log(fruitBasket.indexOf('애플망고') > -1) // true
// console.log(fruitBasket.indexOf('워터멜론') > -1) // true
// console.log(fruitBasket.indexOf('오렌지') > -1) // true

// 구문이 긴데? 재사용 가능한 함수로 작성해 볼까요?
// function hasItem(basket, fruit) {
//   return basket.indexOf(fruit) > -1
// }
// const hasItem = function(basket, fruit) {
//   return basket.indexOf(fruit) > -1
// }
const hasItem = (basket, fruit) =>
  basket.indexOf(fruit) > -1

console.log(hasItem(fruitBasket, '패션')) // 반환 값: false
console.log(hasItem(fruitBasket, '오렌지')) // 반환 값: true

// indexOf() 메서드 대신 includes() 메서드 활용
console.log(fruitBasket.includes('오렌지')) // true
console.log(fruitBasket.includes('수박')) // false

// 객체 타입(함수, 배열, 객체)을 포함한 배열의 항목 찾기
const 멋사14기_수강생 = [
  {이름: '홍민영'}, // 0
  {이름: '윤정화'}, // 1
  {이름: '허시온'}, // 2
]

console.log(멋사14기_수강생.indexOf({이름: '윤정화'})) // -1
console.log(멋사14기_수강생.findIndex(/* callback */(수강생) => {
  return 수강생.이름 === '윤정화'
})) // 1


// --------------------------------------------
// 배열에 항목 추가
// --------------------------------------------

// 1. 시작 위치에 새 항목 추가
{
  const arrayLength = 멋사14기_수강생.unshift({이름: '차지현'}) // 반환 값: 배열의 length = 4
  console.log(arrayLength)
}

{
  console.log(JS_학습_주제.unshift('디버깅', '린터', '배열 메서드'))
}

// 2. 끝 위치에 새 항목 추가
{
  const arrayLength = 멋사14기_수강생.push({이름: '정우진'}) // 반환 값: 배열의 length = 4
  console.log(arrayLength)
}

{
  console.log(JS_학습_주제.push('.indexOf()', '.findIndex()', '.at()', '.unshift()', '.push()'))
}

// 3. 중간 어딘가 새 항목 추가(나중에 진행)


// --------------------------------------------
// 배열에 항목 제거
// --------------------------------------------

const counts = [101, 201, 301, 501]

// 1. 시작 위치 항목 제거
{
  const removedFirstItem = counts.shift()
  console.log({removedFirstItem})
  console.log({counts})
}

{
  console.log(멋사14기_수강생) // length: 5

  // 여러 항목을 맨 앞에서 순차적으로 제거
  const cha = 멋사14기_수강생.shift()
  const hong = 멋사14기_수강생.shift()
  console.log('🪐', cha) // 첫 번째 항목
  console.log('🪐', hong) // 두 번째 항목
  console.log('🪐', 멋사14기_수강생) // 남은 수강생 목록(집합)
}

// 2. 끝 위치 항목 제거
{
  console.log(멋사14기_수강생) // length: 3

  const jung = 멋사14기_수강생.pop()
  const heo = 멋사14기_수강생.pop()

  console.log(jung)
  console.log(heo)

  console.log(멋사14기_수강생)
}

// 3. 중간 어딘가 위치 항목 제거(나중에 진행)

// 실습
const numbers = [9, 10, 3, 4, 7, 8]
// 추가 및 제거 방법을 사용해 아래 결과를 만들어 보세요.
// [1, 2, 3, 4, 5, 6]
console.log(numbers)
numbers.shift()
numbers.shift()
numbers.unshift(1, 2)
numbers.pop()
numbers.pop()
numbers.push(5, 6)
console.log(numbers)


// --------------------------------------------
// 배열 중간 위치 어딘가에 새 항목 추가 또는 삭제
// --------------------------------------------

// 배열의 .splice() 메서드: 추가/삭제/교체

// 중간에 포함된 항목 제거
// 배열.splice(시작 인덱스, 삭제할 개수)
// const removedItems = numbers.splice(2, 2)
// console.log(removedItems) // [3, 4]
// console.log(numbers) // [1, 2, 5, 6]

// 중간에 새 항목 추가
// console.log(numbers) // [1, 2, 3, 4, 5, 6]
// numbers.splice(3, 0, 100) // []
// numbers.splice(3, 0, 100, 101, 102) // []
// console.log(numbers) // [1, 2, 3, 100, 101, 102, 4, 5, 6]

// 중간에 포함된 항목을 삭제하고, 새 항목을 추가


// --------------------------------------------
// .slice() 배열 복사
// --------------------------------------------

// 배열의 원소를 잘라(slice)서 새 배열 반환
// .slice(startIndex, endIndex) -> 시작 인덱스부터 끝 이전 인덱스까지 포함한 새 배열 반환
// 배열 복제
// .slice() -> 통째로 모두 잘라서 새 배열 반환

// 실습
{
  const people = [
    '세종대왕',
    '이순신',
    '김구',
    '유관순',
    '장영실',
    '신사임당',
  ]

  // 1. people 배열에서 '이순신' 항목의 인덱스를 확인합니다.
  const 이순신_인덱스 = people.indexOf('이순신')
  console.log(이순신_인덱스)

  // 2. people 배열 시작 위치에 '정약용', '지석영'을 추가합니다. 
  //    a. `unshift()` 활용
  // people.unshift('정약용', '지석영')

  //    b. `splice()` 활용
  // people.splice(0, 0, '정약용', '지석영')
  // console.log(people)

  // 3. people 배열 끝 위치에 '김유신', '을지문덕'을 추가합니다. 
  //    a. `push()` 활용
  // people.push('김유신', '을지문덕')

  //    b. `splice()` 활용
  // people.splice(people.length, 0, '김유신', '을지문덕')
  // console.log(people)

  // 4. people 배열 시작 위치에서 '세종대왕', '이순신'을 제거합니다.
  //    a. `shift()` 활용
  // people.shift()
  // people.shift()

  //    b. `splice()` 활용
  // people.splice(0, 2)
  // console.log(people)

  // 5. people 배열 끝 위치에서 '장영실', '신사임당'을 제거합니다.
  //    a. `pop()` 활용
  // people.pop()
  // people.pop()

  //    b. `splice()` 활용
  // people.splice(people.length - 2, 2)
  // console.log(people)

  // 6. peopele을 복제한 새로운 배열 생성
  // const newPeople = people.slice()
  //    a. people에서 '이순신', '김구'로 구성된 새로운 집합을 생성
  const newPeople = people.slice(1, 3)

  console.log(people)
  console.log(newPeople)
}