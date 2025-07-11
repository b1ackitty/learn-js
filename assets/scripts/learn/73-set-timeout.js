// --------------------------------------------------------------------------
// 📌 타이머 API: setTimeout(callback, delay, ...params)
// --------------------------------------------------------------------------

;(() => {
  function callTheAvengers(label, ...heros) {
    console.group(label)
    // heros.forEach((hero, index, heros) => console.log(hero, index, heros))
    // heros.forEach(console.log)
    heros.forEach((hero) => console.log(hero))
    console.groupEnd()
  }

  // 일반 함수 호출
  // callTheAvengers('아이언맨', '토르', '헐크', '스파이더맨')

  // 타이머 API 활용
  const DELAY = 1500 // 1500ms = 1.5s

  // 히어로 배열
  const heros = ['아이언맨', '토르', '헐크', '스파이더맨']

  // 방법 1.
  const timeoutId1 = setTimeout(() => {
    callTheAvengers('timeoutId1', ...heros)
  }, DELAY)

  // 방법 2.
  // setTimeout(callback, delay, ...params)
  const timeoutId2 = setTimeout(callTheAvengers, DELAY * 2, 'timeoutId2', ...heros.toReversed())

  // 반환값(timeoutId)
  const timeoutId3 = setTimeout(callTheAvengers, DELAY * 3, 'timeoutId3', '비전')

  console.log({ timeoutId1, timeoutId2, timeoutId3 })

  // 설정된 타임아웃을 해제(clearTimeout)
  clearTimeout(timeoutId2)
  console.log('timeoutId2 타이머 해제')
})

// 리커전(Recursion, 재귀: 자신을 다시 호출)
;(() => {
  let count = 10

  countDown()

  function countDown() {
    const timeoutId = setTimeout(() => {
      console.log(count)

      // 재귀 호출을 중단하기 위한 조건 설정
      if (!count) {
        console.log('타임아웃 해제')
        clearTimeout(timeoutId)
        return
      }

      count -= 1
      // countDown 함수 자신을 다시 호출할 수 있다면?
      // console.log(countDown) // 함수 안에서 함수 자신에 접근 가능
      // 자신(함수)을 다시 호출하는 것도 가능
      countDown()
    }, 1000)
  }

  // setTimeout(() => {
  //   countDown()
  // }, 1000)

  // 반복문으로 카운트 다운
  // for (let i = count; i > 0; i--) {
  //   countDown()
  // }
})

// 쓰로틀링(Throttling)
// 특정 함수의 실행 빈도를 제한하는 방법
// 스크롤 이벤트나, 창크기 조절 같은 빈번한 이벤트 처리에 유용함
;(() => {
  // throttle 함수 작성
  function throttle(callback, delay = 400/* 0.4s */) {
    // 조건 처리를 위한 지역 변수
    let timeout = null

    // 함수 내부에서 다른 함수 반환
    // 이벤트 리스너로 추가되는 함수
    return function(...arg) {
      // console.log(args) // [arg1, arg2, ..., argN]
      if (!timeout) {
        timeout = setTimeout(() => {
          // throttle 함수 실행 과정에서 전달된 콜백 함수 실행
          callback(...arg) // callback(arg1, arg2, ..., argN)
          // timeout 초기화
          timeout = null
        }, delay)
      }
    }
  }

  // 스크롤 이벤트(Scroll Event) ----------------------------------------------------------
  // 쓰로틀 사용 전
  // window - 브라우저 환경에서의 전역 객체
  // global - Node.js 환경에서의 전역 객체
  // globalThis - 환경 통합적인 전역 객체
  
  // 스크롤 할 때마다 콜백 실행
  let noThrottleCount = 0
  function handleScrollNoThrottle() {
    console.log(`noThrottleCount = ${noThrottleCount++}`, 'color: red')
  }
  globalThis.addEventListener('scroll', handleScrollNoThrottle)
  
  // 쓰로틀 조정으로 0.5초 간격으로 콜백 실행
  let throttleCount = 0
  const handleScrollThrottle = throttle(() => {
    console.log(`throttleCount = ${throttleCount}`, 'color: blue')
  }, 500)
  globalThis.addEventListener('scroll', handleScrollThrottle)

  // 리사이즈 이벤트(Resize Event) -------------------------------------------------------
  globalThis.addEventListener('resize', () => {
    console.log(`%c${globalThis.innerWidth}`, 'color: hotpink')
  })

  globalThis.addEventListener('resize', throttle(() => {
    console.log('throttle', globalThis.innerWidth)
  }))
})

// 디바운싱(Debouncing)
// 연속된 이벤트를 그룹화하여 마지막 이벤트 발생 후, 일정 시간이 지나면 한 번만 처리하는 기법
// 검색 입력이나 자동 저장과 같은 기능에 유용
;(() => {
  function debounce(callback, delay = 300) {
    // 디바운싱을 위한 정리 함수
    let cleanupId // undefined

    // 이벤트 리스너
    return function eventListener(...args/* 이벤트 객체 */) {
      // 클린업(정리) - 이벤트 리스너가 호출될 때마다 정리
      clearTimeout(cleanupId)

      // 클린업 = 타임아웃 ID(임의 정수)
      cleanupId = setTimeout(() => {
        // 이벤트 객체를 사용자가 전달한 콜백 함수에 전개해서 다시 전달
        callback(...args)
      }, delay)
    }
  }

  const searchInput = document.querySelector('input')

  let inputCount = 0
  searchInput.addEventListener('input', () => {
    console.log('일반 이벤트 리스너에서 검색어 입력 횟수 =', inputCount++)
  })

  let debounceInputCount = 0
  searchInput.addEventListener('input', debounce(() => {
    console.log(`%c디바운싱: 검색 입력 횟수 = ${debounceInputCount++}`, 'padding: 0.4px; background-color: black; color: white;')
  }, 600))
})()