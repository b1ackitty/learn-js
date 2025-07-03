// --------------------------------------------------------------------------
// 📌 논리 연산자 식
//     && "그리고(AND)"
//     || "또는(OR)"
// --------------------------------------------------------------------------

;(() => {
  let isLightGreen = false
  let noCarsAround = true

  if (isLightGreen || noCarsAround) {
    // 신호등 불빛이 초록불이거나, 주변에 차가 없다면? 건너라.
    walk()
  } else {
    // 그렇지 않다면? 멈춰라.
    stop()
  }
  
  function walk() {
    console.log('건너라.')
  }

  function stop() {
    console.log('멈춰라.')
  }
})

// && 논리 연산자(AND)
;(() => {
  let x, y

  x = '엑스' // truthy
  y = NaN // falsey
  // eslint-disable-next-line no-undef
  z = Math.random() > 0.5

  // && 연산자는 첫 번째 Falsey(거짓으로 평가되는) 값을 찾는다.
  // console.log(x && y) // NaN
  // console.log(x && z && y) // z가 true면 NaN, z가 false면 false
  // console.log(y && x) // NaN
  // console.log(x && z) // z가 true면 true, z가 false면 false

  // 논리 연산자 사용한 식
  let result1 = x && play()  // x가 참이면? play() 함수 실행 (이유: && 연산자는 첫번째 거짓으로 평가되는 값을 찾으니까)
  let result2 = y && study() // y가 참이면? study() 함수 실행 (반대로 말하면 y가 거짓이면 함수 실행은 없다.)

  console.log('1', result1) // 1 우리는 다같이 논다.
  console.log('2', result2) // NaN

  function study() {
    return '우리는 함께 공부한다.'
  }

  function play() {
    return '우리는 다같이 논다.'
  }
})

// || 논리 연산자(OR)
;(() => {
  const user = {
    name: '지훈',
    email: 'yamoo9@naver.com',
    isSignedIn: false,
  }

  // ---------------------------------------
  // 조건문(if ... else 문)
  if (!user.isSignedIn) signIn()
  else signOut()

  // ---------------------------------------
  // 조건식(3항 연산자 표현식)
  !user.isSignedIn ? signIn() : signOut()

  // ---------------------------------------
  // 논리 연산자 식(&&, ||)
  // || 연산자는 첫 번째 Truthy 값을 찾는다. (&& 연산자의 반대)
  user.isSignedIn || signIn()
  // && 연산자는 첫 번째 Falsey 값을 찾는다. (|| 연산자의 반대)
  user.isSignedIn && signOut()

  function signIn() {
    console.log('로그인합니다.')
  }

  function signOut() {
    console.log('로그아웃합니다.')
  }
})

// 실습 1
;(() => {
  // 영화 관람 가능 여부 확인
  // 다음 조건을 모두 만족해야 영화관에 입장할 수 있습니다.
  // - 18세 이상
  // - 신분증 필수
  function canWatchMovie(person) {
    // 논리 연산자
    // 논리곱(&&): 첫 번째 거짓으로 평가되는 값을 찾아 반환
    // 논리합(||): 첫 번째 참으로 평가되는 값을 찾아 반환
    
    // (참인 값) && '관람 허용' -> '관람 허용'
    // (거짓인 값) && '관람 허용' -> false
    // return (person.age > 17 && person.idCard) && '관람 허용'

    if (person.age > 17 && person.idCard) return '관람 허용'
    else return '관람 불가'
  }
  
  const results = [
    canWatchMovie({ age: 21, idCard: true }),
    canWatchMovie({ age: 15, idCard: false }),
  ]
  
  console.log(results) // ['관람 허용', '관람 불가']
})

// 실습 2
;(() => {
  // 우산 챙겨야 할 지 결정
  // 다음 중 하나라도 만족하면 우산을 가져갑니다.
  // - 비가 온다.
  // - 일기예보에 비 소식이 있다.
  function needUmbrella(condition) {
    if (condition.isRaining || condition.forecastRain) return true
    else return false
  }
  
  const results = [
    needUmbrella({ isRaining: false, forecastRain: true }),
    needUmbrella({ isRaining: false, forecastRain: false }),
  ]
  
  console.log(results) // [true, false]
})()