/* eslint-disable no-unused-vars */
// --------------------------------------------------------------------------
// 📌 유틸리티 함수 만들기
// --------------------------------------------------------------------------

// --------------------------------------------------------------------------
// getStyle(element, propertyName, ?pseudoElement): propertyValue
function getStyle(element, propertyName, pseudoElement) {
  const elementStyles = getComputedStyle(element, pseudoElement)
  const propertyValue = elementStyles.getPropertyValue(propertyName)
  return propertyValue
}

// --------------------------------------------------------------------------
// setStyle(element, propertyName, propertyValue): element
function setStyle(element, propertyName, propertyValue) {
  element.style.setProperty(propertyName, propertyValue)
  return element
}

// --------------------------------------------------------------------------
// css(element, propertyName, ?propertyValue, ?pseudoElement): element
function css(element, propertyName, propertyValue, pseudoElement) {
  // 속성 값이 전달됐을 때: 스타일 쓰기
  if (propertyValue) {
    return setStyle(element, propertyName, propertyValue)
  }
  // 속성 값이 전달되지 않았을 때: 스타일 읽기
  else {
    return getStyle(element, propertyName, pseudoElement)
  }
}
