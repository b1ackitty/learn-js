/* eslint-disable no-unused-vars */
// --------------------------------------------------------------------------
// 📌 attr 유틸리티 함수 작성 및 활용
// --------------------------------------------------------------------------

// 속성 읽기 기능(함수)
function getAttr(element, attributeName) {
  return element.getAttribute(attributeName)
}

// 속성 쓰기 기능(함수)
function setAttr(element, attributeName, attributeValue) {
  element.setAttribute(attributeName, attributeValue)
  return element
}

// 유틸리티 함수 설계
// attr(element, attributeName, ?attributeValue): element | string
function attr(element, attributeName, attributeValue) {
  // 설정 값이 있는 경우
  // 0, '' 고려해서 null 또는 undefined가 아닌 경우만 처리
  // 속성 쓰기
  if (attributeValue !== null && attributeValue !== undefined) {
    return setAttr(element, attributeName, attributeValue)
  }
  // 설정 값이 없는 경우
  // 속성 읽기
  else {
    return getAttr(element, attributeName)
  }
}

// 속성 쓰기 사용법
// const changedElement = attr(element, attributeName, attributeValue)

// 속성 읽기 사용법
// const attributeValue = attr(element, attributeName)