// --------------------------------------------------------------------------
// 📌 구조 분해 할당(Desctructuring Assignment)
// --------------------------------------------------------------------------
// - 구조 분해 -> 지역 변수 할당

// 객체 구조 분해 할당
;(() => {
  const jeemin = {
    name: '박지민',
    age: 27,
  }
  
  // let name = jeemin.name
  // let age = jeemin.age

  // 구조 분해 할당 구문(2015+)
  let { name, age } = jeemin // { name, age }
  
  console.log(name) // '박지민'
  console.log(age) // 27

})

// 배열 구조 분해 할당
;(() => {
  const names = ['박현아', '최하송', '김주성']

  // console.log(names) // [0, 1, 2]

  // let firstName = names.at(0)
  // let secondName = names.at(1)
  // let lastName = names.at(-1)

  // 구조 분해  할당 구문
  let [fName, sName, lName] = names // [0, 1, 2]
  // let [, sName] = names // 일부만 꺼내고 싶을 때 인덱스가 중요하기 때문에 , 기호 추가
  // let [, , lName] = names // 일부만 꺼내고 싶을 때 인덱스가 중요하기 때문에 , 기호 추가

  console.log({ fName, sName, lName })
})

// 속성 할당 변수 이름 설정
;(() => {
  const jeemin = {
    name: '박지민',
    age: 27,
  }

  let { age: myAge, name: nickname } = jeemin

  // let myAge = age
  // let nickname = name

  console.log(nickname)
  console.log(myAge)
})

// 함수 인수 구조 분해 할당
;(() => {
  function getSectionTemplate(section) {
    // 객체 구조 분해 할당 구문 사용
    let { headline, description: desc } = section

    return `
      <section>
        <h2>${headline}</h2>
        <p>${desc}</p>
      </section>
    `
  }

  const sectionInfo = {
    headline: '구조 분해 할당(객체형)',
    description: `
      배열 또는 객체 타입의 데이터는 구조 분해가 가능하므로,
      구조를 분해해 지역 변수로 할당할 수 있다.
    `
  }

  const template = getSectionTemplate(sectionInfo/* { headline, description } */)

  console.log(template)
})

// 함수 매개변수 구조 분해 할당
;(() => {
  // 매개변수 영역에서 구조 분해 할당 가능
  function getSectionTemplate({ headline, description: desc }) {
    // 함수 몸체(Function Body)
    // let { headline, description: desc } = section

    return `
      <section>
        <h2>${headline}</h2>
        <p>${desc}</p>
      </section>
    `
  }

  const sectionInfo = {
    headline: '구조 분해 할당(객체형)',
    description: `
      배열 또는 객체 타입의 데이터는 구조 분해가 가능하므로,
      구조를 분해해 지역 변수로 할당할 수 있다.
    `
  }

  const template = getSectionTemplate(sectionInfo/* { headline, description } */)

  console.log(template)
})

// 배열 타입 함수 매개변수 구조 분해 할당
;(() => {
  function rgbToHex([redValue, greenValue, blueValue]) {
    // 배열 구조 분해 할당
    // let [redValue, greenValue, blueValue] = rgb // [0, 1, 2]

    redValue = redValue.toString(16)
    greenValue = greenValue.toString(16)
    blueValue = blueValue.toString(16)

    return `#${redValue}${greenValue}${blueValue}`
    // return `#${rgb[0].toString(16)}${rgb[1].toString(16)}${rgb[2].toString(16)}`
  }

  const colorHexCode = rgbToHex([255, 120, 120])

  console.log(colorHexCode)
})

// 구조 분해 할당된 변수의 기본 값 설정
;(() => {
  // 배열 구조 분해 할당 기본 값 설정 예
  const emojiList = [
    '😎'
  ]

  const [firstEmoji, secondEmoji = '🥲'] = emojiList

  console.log(firstEmoji)
  console.log(secondEmoji)

  // 객체 구조 분해 할당 기본 값 설정 예
  const course = { name: 'JavaScript 펀더멘탈' }
  const { name, price = 30_000, instructor = '야무' } = course
  // if (price === undefined) price = 30_000
  // if (instructor === undefined) instructor = '야무'

  console.log(name)
  console.log(price)
  console.log(instructor)
})()