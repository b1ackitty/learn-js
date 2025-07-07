// --------------------------------------------------------------------------
// 📌 객체 속성 순환
// --------------------------------------------------------------------------

// for ... in 문
;(() => {
  const cssMap = {
    'display': 'grid',
    'font-size': '48px',
    'margin-block-end': '40px',
    'gap': '12px',
  }

  for (const key in cssMap) {
    let value = cssMap[key]
    console.log({ key, value })
  }
})

// for ... of 문
// Object.entries()
;(() => {
  const cssMap = {
    'display': 'grid',
    'font-size': '48px',
    'margin-block-end': '40px',
    'gap': '12px',
  }

  // for (const key of cssMap) {
  //   console.log(key) // Uncaught TypeError: cssMap is not iterable
  // }
  
  // console.log(Array.from(cssMap)) ❌
  // console.log(Object.entries(cssMap)) // [[key, value], [key, value], ...]

  const objectEntriesResult = [
    ['display', 'grid'],
    ['font-size', '48px'],
    ['margin-block-end', '40px'],
    ['gap', '12px'],
  ]

  console.log(objectEntriesResult)
  
  // 객체 -> 배열 변경
  // 구조 분해 할당

  // for (const keyValue/* [key, value] */ of Object.entries(cssMap)/* [[key, value], [key, value], ...] */) {
  //   console.log(keyValue[0]) // key
  //   console.log(keyValue[1]) // value
  // }

  for (const [key, value] of Object.entries(cssMap)) {
    console.log(key)
    console.log(value)
  }
})

// Object.keys()
// Object.values()
;(() => {
  const cssMap = {
    'display': 'grid',
    'font-size': '48px',
    'margin-block-end': '40px',
    'gap': '12px',
  }

  // 객체 -> 배열
  // console.log(Object.keys(cssMap))
  // console.log(Object.values(cssMap))
  // console.log(Object.entries(cssMap))

  // 객체를 순환하여 속성 및 값 확인
  // 객체 -> 배열 -> for ... of 문
  // for (const [key, value] of Object.entries(cssMap)) {
  //   console.log({ key, value })
  // }

  // for (const key of Object.keys(cssMap)) {
  //   console.log(key)
  // }

  // for (const value of Object.values(cssMap)) {
  //   console.log(value)
  // }

  // forEach() 메서드 사용하여 순환
  Object.entries(cssMap).forEach(([key, value]) => {
    console.log(key, value)
  })
  Object.keys(cssMap).forEach((key) => {
    console.log(key)
  })
  Object.values(cssMap).forEach((value) => {
    console.log(value)
  })
})()