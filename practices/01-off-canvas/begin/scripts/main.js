// Off Canvas 기능 구현

// 1. 버튼에 이벤트 리스너 추가
const body = document.body
const siteContainer = document.querySelector('.site-container')
const toggleOffsiteButton = siteContainer.querySelector('button')
const OPEN_CLASSNAME = 'offsite-is-open'

toggleOffsiteButton.addEventListener('click', () => {
  // 2. 버튼을 클릭하면 화면을 오른쪽으로 밀어준다.
  //    <body> 요소에 offsite-is-open 클래스 이름을 추가한다.
  // if (!body.classList.contains(OPEN_CLASSNAME)) {
  //   body.classList.add(OPEN_CLASSNAME)
  // }
  // // 3. 버튼을 다시 클릭하면 화면을 왼쪽으로 밀어넣는다.
  // else {
  //   body.classList.remove(OPEN_CLASSNAME)
  // }

  // 2 + 3 = 버튼을 클릭할 때마다 화면을 오른쪽 또는 왼쪽으로 이동시키는 토글을 진행한다.
  body.classList.toggle(OPEN_CLASSNAME)
})



