// # 실습

// 1. `const` 키워드를 사용해 값이 변하지 않는 상수를 선언해봅니다.
//     1. "하루는 24시간"
const HOURS_IN_DAY = 24;
console.log("hours in day =", HOURS_IN_DAY);

//     2. "물의 어는 점은 섭씨 0도"
const FREEZING_POINT_CELSIUS = 0;
console.log("freezing point celsius =", FREEZING_POINT_CELSIUS);

//     3. "삼각형 내각의 합은 180도"
const TRIANGLE_ANGLE_SUM = 180;
console.log("trangle angle sum =", TRIANGLE_ANGLE_SUM);

//     4. "지구의 중력 가속도는 9.8 m/s²"
const EARTH_GRAVITY = 9.8;
console.log("gravity acceleration =", EARTH_GRAVITY);

// 2. 다음 내용을 코드로 작성해 결과 값을 콘솔 패널에 출력해보세요.
//     1. `let` 키워드를 사용해 `sum` 변수를 선언하고 값을 `0`으로 설정합니다.
let sum = 0;
console.log("sum =", sum);

//     2. `num1`, `num2` 변수를 선언하고, 각각 `300`, `50`으로 값을 설정합니다.
// [1]
// let num1 = 300;
// let num2 = 50;

// [2]
// let num1 = 300, num2 = 50

// [3]
let num1, num2;

num1 = 300;
num2 = 50;

console.log("num1 =", num1);
console.log("num2 =", num2);

//     3. `num1`, `num2`의 합을 `sum` 변수에 할당합니다.
sum = num1 + num2;
console.log("sum =", sum);

// 3. 사람 이름, 나이, 오늘의 기온, 장바구니 상품 갯수, 집 주소, 현재 시간,
// 로그인 상태, 피자 가격, 학생 수 등에 걸맞는 변수 이름을 정하고 적절한 값을 설정합니다.
let myName = "Jieun";
console.log("myName =", myName);

let myAge = 32;
console.log("myAge =", myAge);

let todayTemperature = 24;
console.log("todayTemperature =", todayTemperature);

let cartItemCount = 3;
console.log("cartItemCount =", cartItemCount);

let myAddress = "서울시";
console.log("myAddress =", myAddress);

let currentTime = "2:22";
console.log("currentTime =", currentTime);

let isLoggedIn = true;
console.log("isLoggedIn =", isLoggedIn);

let pizzaPrice = 18000;
console.log("pizzaPrice =", pizzaPrice);

let studentCount = 43;
console.log("studentCount =", studentCount);
