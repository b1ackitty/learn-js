// --------------------------------------------------------------------------
// ✅ 컬러 포멧 변경 함수 작성
// --------------------------------------------------------------------------
// - [✅] setHexColor(red, green, blue) : #hexcode 반환
// - [✅] setRgbColor(red, green, blue) : rgb() 문자열 반환
// --------------------------------------------------------------------------

// 예) setHexColor(255, 255, 255) // 결과값: '#ffffff'
const setHexColor = (red, green, blue) => {
  return '#' + red.toString(16) + green.toString(16) + blue.toString(16)
}
console.log(setHexColor(255, 255, 255) === '#ffffff')

// 예) setRgbColor('ff', 'ff', 'ff') // 결과값: 'rgb(255, 255, 255)'
function setRgbColor(red, green, blue) {
  return 'rgb(' + parseInt(red, 16) + ', ' + parseInt(green, 16) + ', ' + parseInt(blue, 16) + ')'
}
console.log(setRgbColor('ff', 'ff', 'ff') === 'rgb(255, 255, 255)')
