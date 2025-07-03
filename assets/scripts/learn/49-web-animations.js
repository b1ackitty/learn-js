// --------------------------------------------------------------------------
// 📌 웹 애니메이션
// --------------------------------------------------------------------------
// 1. CSS Transitions
// 2. CSS Animations
// 3. JavaScript Animations
// --------------------------------------------------------------------------


;(() => {
  const ballElement = document.querySelector('.ball')
  // const TRANSITION_CLASSNAME = 'is-transition'

  // Mouse Click Event + className toggling
  ballElement.addEventListener('click', (e) => {
    // style 속성을 사용해 속성의 상태 변경
    // 트랜지션 트리거
    e.currentTarget.style.setProperty('--fill', '#e54d26')
    e.currentTarget.style.setProperty('--size', '100px')

    // e.currentTarget.classList.toggle(TRANSITION_CLASSNAME)
  })

  // Mouse Enter/Leave Events
  // ballElement.addEventListener('mouseenter', (e) => {
  //   e.currentTarget.classList.add(TRANSITION_CLASSNAME)
  // })

  // ballElement.addEventListener('mouseleave', (e) => {
  //   e.currentTarget.classList.remove(TRANSITION_CLASSNAME)
  // })
})

// 웹 애니메이션 API
;(() => {
  // 웹 애니메이션 API를 적용해 
  // 볼을 클릭하면 
  // 스케일 조정되도록 애니메이션합니다.
  // 다시 볼을 클릭하면 
  // 애니메이션이 일시정지 되도록 만들어 봅니다.

  const ballElement = document.querySelector('.ball')
  let isAnimating = false

  const ballAnimation = ballElement.animate(
    // 키프레임(keyframes)
    [
      { scale: '1', offset: 0 },
      { scale: '1.2', offset: 0.17 },
      { scale: '0.7', offset: 0.25 },
      { scale: '1.5', offset: 0.52 },
      { scale: '0.5', offset: 0.74 },
      { scale: '1', offset: 1 },
    ], 
    // 옵션(options)
    {
      duration: 3000,
      iterations: Infinity,
      easing: 'cubic-bezier(0.68, -0.55, 0.27, 1.55)',
    }
  )

  ballAnimation.pause()

  ballElement.addEventListener('click', () => {
    if (!isAnimating) {
      ballAnimation.play()
    } else {
      ballAnimation.pause()
    }

    isAnimating = !isAnimating
  })
})()