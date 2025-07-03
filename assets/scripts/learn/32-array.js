// --------------------------------------------
// 배열(Array) 객체
// --------------------------------------------

// 배열 리터럴(값)로 배열 만들기(배열 객체 생성)
const 장바구니 = ['대파', '계란', '두부', '시금치', '양파', '케찹']
//              [  0,     1,      2,      3,      4,      5  ]

console.log('장바구니 =', 장바구니)

const 장바구니_항목_개수 = 장바구니.length

console.log('장바구니 항목 개수 =', 장바구니_항목_개수)

// 리터럴 방식 말고, 정석적인 방법으로 배열 객체 생성
// const numbers = new Array('one', 'two', 'three', 'four', 'five')

// new 키워드를 쓰지 않아도 결과는 동일하다.
const numbersEn = Array('one', 'two', 'three', 'four', 'five')

console.log(numbersEn, numbersEn.length)

// new Array()를 사용해 배열 객체를 생성할 때 발생할 수 있는 문제점
// const messageList = ['hello', 'good morning'] // 2
// console.log(messageList)

// const numbers = new Array(1, 2, 3) // [1, 2, 3]
// console.log(numbers)

const onlyOneNumberListLiteral = [99]
console.log(onlyOneNumberListLiteral) // [99]
console.log(onlyOneNumberListLiteral.length) // 1

const onlyOneNumberList = new Array(99)
console.log(onlyOneNumberList) // 기대 값: [99] / 결과 값: [empty × 99]
console.log(onlyOneNumberList.length) // 99

// 배열은 객체다.
// 객체의 조건은 속성:값을 가진다.

// 배열의 인덱스(index)는 숫자 타입이다.
// [
//   0: 값1,
//   1: 값2,
//   2: 값3,
//   3: 값4
// ]

// 객체['속성명'] -> 값
// 배열객체[인덱스(숫자)] -> 값

// 배열객체.속성
// 배열객체.메서드()

// 대괄호에 인덱스를 전달해 배열 항목 가져오기
let firstCartItem = 장바구니[0]
let secondFromTheLastCartItem = 장바구니[장바구니.length - 2]
let lastCartItem = 장바구니[장바구니.length - 1]
console.log(firstCartItem, secondFromTheLastCartItem, lastCartItem)

// .at() 메서드에 인덱스를 전달해 배열 항목 가져오기
let firstCartItem2 = 장바구니.at(0)
let secondFromTheLastCartItem2 = 장바구니.at(-2)
let lastCartItem2 = 장바구니.at(-1)
console.log(firstCartItem2, secondFromTheLastCartItem2, lastCartItem2)

// 배열 원소(항목) 값 읽기
console.log(장바구니[2])
console.log(장바구니.at(2))

// 배열 원소 값 수정
장바구니[2] = '순두부'
console.log('수정된 장바구니 =', 장바구니)

// 실습
// 배열에 대해 이해할 수 있는 연습을 진행합니다.

// 1. 빈 배열을 생성합니다.
const emptyArray = []
console.log(emptyArray)

// 2. 3개의 항목을 포함하는 배열을 작성합니다.
const threeArray = [1, 2, 3]
console.log(threeArray)

// 3. instructors 배열에서 "야무" 항목을 가져와 yamoo9 변수에 할당합니다.
//    instructors 배열에서 "슬비" 항목 값을 "김데리사"로 변경합니다.
const instructors = ['야무', '슬비']
let yamoo9 = instructors[0]
instructors[1] = '김데레사'
console.log(yamoo9, instructors)