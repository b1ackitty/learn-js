/* eslint-disable no-undef */
;(() => {
  const tester = document.querySelector('h1')

  // 유틸리티 함수를 사용해서 요소 스타일 읽기
  const getTesterValue = getStyle(tester, 'content', '::before')
  console.log(getTesterValue)

  // 유틸리티 함수를 사용해서 요소 스타일 쓰기
  const resultElement = setStyle(tester, 'color', '#910038')
  console.log(tester === resultElement)

  // 유틸리티 함수 하나를 사용해 요소 스타일 쓰기/읽기(편의성 향상)
  // 1. 요소에 스타일 쓰기
  const styledElement = css(tester, 'font-weight', 100)
  console.log(styledElement)
  // 2. 요소의 스타일 읽기
  const styledFontWeightValue = css(styledElement, 'font-weight')
  console.log(styledFontWeightValue)

  // const result = css(tester, 'content', undefined, '::before')
  const result = css({
    element: tester,
    pseudoElement: '::before',
    propertyName: 'content',
  })
  console.log(result)
})()