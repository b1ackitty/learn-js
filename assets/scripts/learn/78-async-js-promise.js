/* global DOMPurify */

// --------------------------------------------------------------------------
// 📌 Promise
// --------------------------------------------------------------------------

;(() => {
  // 판매 가능한 케이크
  const salableCakes = [
    '스트로베리 초코 생크림',
    '아이스 망고',
    '블랙 포레스트',
    '초코 무스',
  ]
  // Promise란?
  // - JavaScript의 비동기 처리를 담당하는 객체
  // - 미래에 어떤 값을 반환할 것이라는 "약속"하는 객체
  // - 웹 브라우저 또는 Node.js 런타임 환경에서 모두 지원
  // - 초기 또는 보류(pending), 이행(fulfilled), 거절(rejected) 상태

  // 약속이 이행 또는 거절되기 전 상태
  // const promise = buyCake('블랙 포레스트') // Promise <pending>
  const promise = buyCake('오리지널 생크림')

  // 약속이 이행(해결)된 상태
  // fulfilled | resolved
  // promise.then(() => {
  //   // 약속대로 블랙 포레스트 케이크를 사왔다.
  // })

  // 약속이 거절된 상태
  // rejected
  // promise.catch(() => {
  //   // 약속이 지켜지지 않아 블랙 포레스트 케이크를 사오지 않았다.
  // })

  // 메서드 체이닝
  promise
    // onFulfilled
    .then((celebrateMessage) => console.log(celebrateMessage))
    // onRejected
    .catch((consolationMessage) => console.error(consolationMessage))

    // .then(onFulfilled, onRejected)
    // promise
    //   .then(
    //     // fulfilled
    //     (celebrateMessage) => console.log(celebrateMessage),
    //     // rejected
    //     (consolationMessage) => console.error(consolationMessage)
    //   )

  function buyCake(cakeName) {
    // 약속한 대로 케이크를 살 수 있나?
    const existCake = salableCakes.find((name) => name === cakeName)

    // Promise 객체를 생성해서 반환
    const promise = new Promise((resolve, reject) => {
      // if (existCake) {
      //   resolve(`${cakeName} 케이크를 구매할 수 있었습니다. 🎂😁`)
      // } else {
      //   reject(new Error(`${cakeName} 케이크 재고가 없다네요. 아쉽게도 구매할 수 없었습니다. 😢⁉️`))
      // }

      // 비동기 처리
      // setTimeout 사용해 특정 시간 뒤에 resolve 또는 reject 함수 실행
      // 지연 시간
      const delayTime = Math.round(Math.random() * 5000)
      console.log(`지연 시간 = ${delayTime/1000}초`)

      setTimeout(() => {
        existCake
          ? resolve(`${cakeName} 케이크를 구매할 수 있었습니다. 🎂😁`)
          : reject(new Error(`${cakeName} 케이크 재고가 없다네요. 아쉽게도 구매할 수 없었습니다. 😢⁉️`))
      }, delayTime)
    })

    return promise
  }
})

;(() => {
  // 77번 파일에서 복사함
  const reposList = document.querySelector('.repos-list')
  const promise = fetch('https://api.github.com/users/yamoo9/repos')
  
  promise
    .then((response) => {
      if (!response.ok) {
        // 오류를 생성해서 전달(던져라!)
        throw new Error('알 수 없는 오류가 발생했습니다! ❌')
      }
      return response.json()
    })
    .then(messageTheData)
    .then(generateTemplate)
    .then(updataDOM)
    .catch(catchError)
    .finally(runFinally)

  function messageTheData(data) {
    return data.map(
      ({ git_url, description, owner: { avatar_url, login } }) => {
        return {
          url: git_url,
          description,
          avatar: avatar_url,
          account: login,
        }
      },
    )
  }

  function generateTemplate(data) {
    return data
      ?.map?.(({ url, description, avatar, account }) => {
        const linkContent = url.replace('git://', '').replace('.git', '')
        const linkHref = `https://${linkContent}`
        return `
          <li>
            <h3>${account}</h3>
            <img src="${avatar}" alt="" height="80" width="80" />
            <a href="${linkHref}">${linkContent}</a>
            <p>${description}</p>
          </li>
        `
      })
      .join('')
  }

  function updataDOM(template) {
    reposList.innerHTML = DOMPurify.sanitize(template)
  }

  function catchError(error) {
    console.error(error.message)
  }

  function runFinally() {
    alert('데이터 요청/응답 성공 또는 실패와 상관 없이 항상 최종적으로 이 코드는 실행됩니다.')
  }
})()