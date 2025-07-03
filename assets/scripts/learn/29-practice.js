// 이벤트 리스너를 DOM 요소에 추가하고 기능을 구현하는 연습을 진행하세요.

// 나중에 컴포넌트를 작성할 때 이벤트 리스너를 자주 사용하게 될 것입니다.

// 1. 요소에 클릭 이벤트 리스너를 작성하세요.
// 요소가 클릭될 때마다 콘솔 패널에 메시지가 출력되도록 합니다.
const clickableButton = document.querySelector('button')
clickableButton.addEventListener('click', () => {
  console.log('버튼을 클릭했습니다.')
})

// 2. 개발 도구에서 리스너의 존재를 확인해봅니다.
//getEventListeners(clickableButton)

// 3. 요소를 클릭하면 클래스 이름이 전환되도록 설정해봅니다.
clickableButton.addEventListener('click', () => {
  clickableButton.classList.toggle('isClicked')
})

// 4. 레거시 이벤트 모델로도 구현해봅니다.
document.querySelector('a').addEventListener('click', alertLog)
// 위에 alertLog에서 ()를 사용하지 않은 이유:
// alertLog()를 사용해서 함수를 실행하면 반환 값이 들어간다. = undefined(암묵적 반환 값)
// alertLog에 ()를 붙이지 않으면 함수를 참조한다. 함수가 실행된다. 이벤트 연결(binding events)

function alertLog() {
  console.log('click')
}
