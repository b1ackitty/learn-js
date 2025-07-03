// --------------------------------------------------------------
// BOM (브라우저 객체 모델)
// --------------------------------------------------------------

// 브라우저 윈도우 객체
// console.log(window) // Window {} === html

// 모니터 스크린 객체
// console.log(window.screen) // Screen {} === html body
// console.log(screen) // Screen {} === body

// 로케이션 객체
// console.log(location) // Location {}
// console.log(location.hostname)

// 히스토리 객체
// console.log(history) // History {}

// 도큐먼트 객체
// console.log(document) // Document{}

// --------------------------------------------------------------
// DOM (문서 객체 모델)
// --------------------------------------------------------------

console.dir(document) // 브라우저 객체 중 도큐먼트 객체
console.log(document.compatMode) // 웹 표준 호환 모드인지 확인
console.log(document.activeElement) // 초점(focus)이 적용된 요소 확인
