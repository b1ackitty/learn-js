// 기본(원시, Primitives) 타입
// - 문자열(String) 유형
// - 숫자(Number) 유형
// - 불리언(논리형, Boolean) 유형 (참/거짓)
// - 널(Null) 유형
// - 언디파인드(Undefined) 유형
// - 심볼(Symbol) 유형
// - 아주 큰 정수(Bigint) 유형

// -----------------------------
// String
// -----------------------------

// "작은 따옴표로 묶인 텍스트 데이터";
// "큰 따옴표로 묶인 문자 값";

// 어포스트로피 이스케이프 처리
// It's my birthday today!
// console.log('It's my birthday today!') // ❌
// console.log("It's my birthday today!"); // ✅

// '나의 100m 달리기 최고 기록은 12\'26"이야.'
// "나의 100m 달리기 최고 기록은 12'26\"이야."

// 문자열 연결(String Concatenation)
// '나의 100m 달리기 최고 기록은 12\'26"이야.'
// '나의 100m 달리기 + 최고 기록은 12\'26"이야.'
// console.log("나의 100m 달리기" + "최고 기록은 12'26\"이야.");
// console.log("나의 100m 달리기" + " 최고 기록은 12'26\"이야.");
// console.log("나의 100m 달리기" + " " + "최고 기록은 12'26\"이야.");

// -----------------------------
// Number
// -----------------------------

// console.log(10000);
// console.log(-10.9843);
// console.log(0.49393);
// console.log("1,000,000"); // 문자
// console.log(1_000_000); // 숫자

// 산술 연산(숫자 간 가능)
// +, -, *, /, %

// 덧셈 (add):       +
// 뺄셈 (subtract):  -
// 곱셈 (multiply):  *
// 나눗셈 (divide):   /
// 나머지 (modulus):  %

// console.log(10000000 + 3999382);
// console.log(10000000 - 3999382);
// console.log(10000000 * 3999382);
// console.log(10000000 / 3999382);
// console.log(10000000 % 6);

// JavaScript 숫자(정수)의 안전 범위 표현
// console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991 약 9,000조
// console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991

// -----------------------------
// Boolean
// -----------------------------

// true // boolean
// 'true' // string

// false // boolean
// 'false' // string

// -----------------------------
// Undefined
// -----------------------------

// 선언된 변수의 기본 값으로 사용
// undefined
// console.log(undefined);

// -----------------------------
// Null
// -----------------------------

// null;
// console.log(null);

// -----------------------------
// Symbol
// -----------------------------

// console.log(Symbol());
// console.log(Symbol(2025));
// console.log(Symbol("고유식별자"));

// -----------------------------
// Bigint
// -----------------------------

console.log(BigInt(Number.MAX_SAFE_INTEGER + 10));
console.log(10000n);
