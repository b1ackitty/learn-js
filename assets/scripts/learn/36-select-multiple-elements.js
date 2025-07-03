// --------------------------------------------------------
// 여러 요소 선택
// --------------------------------------------------------

;(() => {
  // <nav>의 모든 <a> 요소를 찾아보자
  // NodeList 객체는 배열과 유사해 보이지만, 배열 객체는 아니다.
  const navLinks = document.querySelectorAll('nav a')
  // console.log(navLinks)
  // console.log(navLinks.forEach)

  // 배열의 능력인 메서드를 모두 사용할 수 없다.
  // console.log(navLinks.findIndex)
  // console.log(navLinks.reduce)
  // console.log(navLinks.toReversed)
  // console.log(navLinks.filter)

  // 너 배열 타입이니?
  // Array.isArray(value) true or false
  console.log(Array.isArray(navLinks)) // NodeList (false)

  // const array = Array.from(likeArrayObject)
  // 유사 배열 -> 배열 변경
  const navLinksArray = Array.from(navLinks)
  console.log(Array.isArray(navLinksArray)) // Array (true)
  console.dir(navLinksArray)

  // 유사배열을 배열로 바꾸면 배열의 능력인 메서드를 모두 사용할 수 있다!
  // console.log(navLinksArray.findIndex)
  // console.log(navLinksArray.reduce)
  // console.log(navLinksArray.toReversed)
  // console.log(navLinksArray.filter)
})

// JavaScript 객체
// - Object
// - Array
// - Function
// - Map
// - Set
// - ...

// Web Browser (JavaScript 실행 환경)
// - window 객체
// - document 객체
// - screen 객체
// - location 객체
// - history 객체
// - NodeLisst 객체
// - HTMLCollection 객체

// Node.js 런타임 (JavaScript 실행 환경)
// - Global

;(() => {
  const paragraphs = document.querySelectorAll('.life-tips p')
  console.log(paragraphs.length)
  console.log(paragraphs.item(paragraphs.length - 1))

  const paragraphsArray = Array.from(paragraphs)
  console.log(paragraphsArray.at(-1))
})


;(() => {
  const lifeTips = document.querySelector('.life-tips')
  // console.log(lifeTips)

  // Document.querySelectorAll(selectors)
  // Element.querySelectorAll(selectors)
  const paragraphs = lifeTips.querySelectorAll('p')
  // console.log(paragraphs)

  // const firstParagraphElement = paragraphs.item(0)
  // console.log(firstParagraphElement)
  // const secondParagraphElement = paragraphs.item(1)
  // console.log(secondParagraphElement)
  // const lastParagraphElement = paragraphs.item(paragraphs.length - 1)
  // console.log(lastParagraphElement)

  // Loop(반복, 순환)
  // - while
  // let i = 0, l = paragraphs.length
  // while (i < l) {
  //   const paragraphElement = paragraphs.item(i)
  //   console.log(paragraphElement)
  //   ++i
  // }

  // - do ... while

  // - for
  // for (let i = 0, l = paragraphs.length; i < l; ++i) {
  //   const paragraphElement = paragraphs.item(i)
  //   console.log(paragraphElement)
  // }

  // - for ... of
  // for (const paragraphElement of paragraphs)
  //   console.log(paragraphElement)

  //  - NodeList.forEach((value, key, parent) => {...})
  paragraphs.forEach((paragraph) => {
    console.log(paragraph)
  })
})

;(() => {
  const lifeTips = document.querySelector('.life-tips')
  const paragraphs = lifeTips.querySelectorAll('p')
  
  const PRIMARY_KEY = 'color-primary'

  // Loop (반복, 순환)
  // - while
  let i = 0, l = paragraphs.length
  while (i < l) {
    const paragraphElement = paragraphs.item(i)
    paragraphElement.classList.add(PRIMARY_KEY)
    ++i
  }

  // - do...while

  // - for
  for (let i = 0, l = paragraphs.length; i < l; ++i) {
    const paragraphElement = paragraphs.item(i)
    // console.log(paragraphElement)
    if (paragraphElement.classList.contains(PRIMARY_KEY)) {
      paragraphElement.classList.remove(PRIMARY_KEY)
    }
  }

  // - for...of
  for (const paragraphElement of paragraphs) {
    // console.log(paragraphElement)
    if (!paragraphElement.classList.contains(PRIMARY_KEY)) {
      paragraphElement.classList.add(PRIMARY_KEY)
    }
  }

  // - NodeList.forEach((value, key, parent) => {...})
  paragraphs.forEach((p) => {
    if (p.classList.contains(PRIMARY_KEY)) {
      p.classList.remove(PRIMARY_KEY)
    }
  })
})

;(() => {
  const paras = document.querySelectorAll('.life-tips p')

  console.log(paras[0] === paras.item(0))
  console.log(paras[1] === paras.item(1))
  console.log(paras[2] === paras.item(2))
})

// HTMLCollection vs. NodeList
;(() => {
  console.group('DOM 업데이트 전')
  // HTMLCollection(Live)
  const paras = document.getElementsByTagName('p')
  console.log('HTMLCollection(라이브 컬렉션: 살아있는 집합) =', paras.length)

  const paraClasses = document.getElementsByClassName('para')
  console.log('HTMLCollection(라이브 컬렉션: 살아있는 집합) =', paraClasses.length)

  // NodeList(Static)
  const paragraphs = document.querySelectorAll('p')
  console.log('NodeList(스태틱 컬렉션: 고정된 집합) =', paragraphs.length)
  console.groupEnd

  // Update DOM
  document.querySelector('.life-tips').innerHTML += '<p class="para">씻지 않은 채소는 그대로 보관하시는 것이 좋습니다.</p>'

  console.group('DOM 업데이트 후')
  console.log('HTMLCollection(라이브 컬렉션: 살아있는 집합) =', paras.length)
  console.log('HTMLCollection(라이브 컬렉션: 살아있는 집합) =', paraClasses.length)
  console.log('NodeList(스태틱 컬렉션: 고정된 집합) =', paragraphs.length)
  console.groupEnd
})

// 실습
;(() => {
  const starWars = document.querySelector('#star-wars')

  // 1. 좋은 사람(Good Guy)을 모두 선택하세요.
  const goodGuys = starWars.querySelectorAll('[data-type="good-guy"]')
  // console.log(goodGuys)
  
  // 2. 좋은 사람(Good Guy) 모두에게 `excellent` 클래스 이름을 추가하세요.
  goodGuys.forEach((goodGuy) => {
    goodGuy.classList.add('excellent')
  })

  // 3. 빌런(Villain)을 모두 선택하세요.
  const villains = starWars.querySelectorAll('[data-type="villain"]')
  // console.log(villains)

  // 4. 빌런 모두에게 `naughty` 클래스 이름을 추가하세요.
  for (const villain of villains) {
    villain.classList.add('naughty')
  }

  // 5. 모든 캐릭터(Character)를 선택하세요.
  const characters = starWars.querySelectorAll('.character')
  console.log(characters)

  // 6. 모든 캐릭터에 `star-wars` 클래스 이름을 추가하세요.
  // for (let i = 0, l = characters.length; i < l; i++) {
  //   const character = characters[i]
  //   character.classList.add('star-wars')
  // }
  characters.forEach((c) => {
    c.classList.add('star-wars')
  })
})()