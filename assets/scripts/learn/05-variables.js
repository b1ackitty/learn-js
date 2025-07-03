// 변수(Variables)

// -------------------------
// 의미 없는 코드
// -------------------------
// console.log(31);
// console.log(4 + 27);

// -------------------------
// 의미 있는 코드
// -------------------------
// 처음_가진_사과의_개수 = 4;
// 추가로_구매한_사과의_개수 = 27;
// 총_사과_개수 = 처음_가진_사과의_개수 + 추가로_구매한_사과의_개수;

// 변수 선언 및 값 할당(대입)
// let 처음_가진_사과의_개수 = 4;
// console.log("처음 가진 사과의 개수 =", 처음_가진_사과의_개수); //4
// let initialApples = 4;
// console.log("initialApples =", initialApples);

// let 추가로_구매한_사과의_개수 = 27;
// console.log("추가로 구매한 사과의 개수 =", 추가로_구매한_사과의_개수); //27
// let addBuyApples = 27;
// console.log("boughtApples =", boughtApples);

// let 총_사과_개수 = 처음_가진_사과의_개수 + 추가로_구매한_사과의_개수;
// console.log("총 사과 개수 =", 총_사과_개수);

// 잘못된 변수 이름
// let initial apples [❌]
// let 4apples = 4 [❌]
// let return = '회귀' [❌]
// let dark-impact = '다크 임팩트' [❌]
// let $4people = "4명의 친구들";
// console.log($4people);

// 변수 선언 (값 할당 없이)
// let addBuyApples; // 기본 값 = undefined
// console.log("addBuyApples =", addBuyApples);

// 선언된 변수에 값 할당
// addBuyApples = 27;
// console.log("addBuyApples =", addBuyApples);

// ----------------------------
// let 변수 vs. var 변수

// 블록 스코프(block scope)
// {
//   var myName;
//   console.log(1, myName);

//   myName = "kkori";
//   console.log(2, myName);
// }

// myName = "k";
// console.log(3, myName);

// 블록 스코프(block scope) 안에서 선언한 let 변수는 스코프 밖에서 적용되지 않는다.
// {
//   let myName2;
//   console.log(1, myName2);

//   myName2 = "kkori";
//   console.log(2, myName2);
// }

//여기서는 myName2 앞에 암묵적으로 var가 붙는다.
// myName2 = "k";
// console.log(3, myName2);

// ----------------------------
// let 변수 vs. const 변수(상수)
// - 변수 = 시간의 흐름에 따라 값이 변경됨
// - 상수 = 처음 선언 시, 할당된 값이 이후 변경되지 않음
