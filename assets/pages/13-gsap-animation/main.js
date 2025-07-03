/* global gsap, GSDevTools */

// GSAP - Getting Started
;(() => {

  // Web Animations API
  function playground() {
    const boxElements = document.querySelectorAll('.box')

    const keyframes = [
      { translate: '0 0' },
      { translate: '80vw 0' },
    ]
    
    const options = {
      duration: 1000,
      fill: 'forwards',
    }

    boxElements.forEach((element) => {
      const animation = element.animate(keyframes, options)
      animation.pause()
      // animation.play()
    })
  }

  // GSAP API
  // gsap.to(target, varObject)
  // gsap.to(selector, varObject)
  // gsap.to(htmlElement, varObject)
  // gsap.to(svgElement, varObject)
  // gsap.to(jsObject, varObject)
  function playgroundGSAP() {
    // Tween Animation

    // to(target, vars)
    // gsap.to('.box', { x: '90vw' })
    // gsap.to(['.box', '.term'], { x: '500' })
    // gsap.to('.box', {
    //   opacity: 0,
    //   xPercent: 100,
    //   // yPercent: 100,
    //   y: -200,
    //   duration: 3,
    //   rotation: 360,
    //   // transformOrigin: 'left bottom'
    //   // transformOrigin: '0% 50%'
    //   // transformOrigin: 'center center'
    //   transformOrigin: 'center right'
    // })

    // from(target, vars)
    // gsap.from('.box', { y: -200 })
    // gsap.from('.box', { xPercent: 50, y: -200, rotation: 360, scale: 4 })
    // gsap.from('.box', {
    //   opacity: 0,
    //   xPercent: 50,
    //   y: -200,
    //   rotation: 360,
    //   scale: 4,
    //   repeat: -1,
    //   delay: 1,
    //   repeatDelay: 1,
    //   yoyo: true,
    // })

    // fromTo(target, vars1, vars2)
    // gsap.fromTo('.box', { x: 400, y: -400 }, { x: 10, y: 50 })

    // set(target, vars)
    // gsap.set('.box', { x: 400, y: -200 })

    // targets
    // gsap.to('.box', { x: 200 })
    // gsap.to(document.querySelector('.box'), { x: 200 })
    // gsap.to(document.querySelectorAll('.box'), { x: 200 })
    // gsap.to(Array.from(document.querySelectorAll('.box')), { x: 200 })

    // vars
    // SVG 요소
    // gsap.to('.box', {
    //   x: '+=200',
    //   y: '-=50',
    //   duration: 3,
    //   backgroundColor: '#27c83f'
    // })

    // gsap.to(".svgBox", { 
    //   duration: 2,
    //   x: 100, // 트랜스폼 단축형 사용(px이 아닌, SVG 유닛 사용. SVG viewBox는 너비가 100 단위)
    //   xPercent: -100,
    //   // 타겟 SVG 속성
    //   attr: {
    //     fill: '#8d3dae',
    //     rx: 50, 
    //   },
    // })

    // JavaScript 객체
    const o = {
      num: 0,
      color: 'yellow'
    }

    const output = document.querySelector('output')
    
    const renderCount = () => {
      output.value = Math.round(o.num)
      output.style.setProperty('color', o.color)
    }

    // gsap.to(o, {
    //   num: 100,
    //   color: 'cyan',
    //   duration: 1,
    //   // repeat: 1,
    //   // yoyo: true,
    //   onUpdate: renderCount,
    //   onComplete: () => {
    //     // console.log('finished gsap animation')
    //     // gsap.set(output, { opacity: 0 })
    //   }
    // })

    // delay
    // repeatDelay
    // gsap.to('.box:first-of-type', { rotation: 360, duration: 1, repeat: 1, repeatDelay: 1 })
    // gsap.to('.box.yellow', { rotation: 360, duration: 1, delay: 1 })

    // Canvas Animation
    // const canvasElement = document.querySelector('.canvas')
    // const canvas = canvasElement.getContext('2d')
    // canvas.fillStyle = '#d0d0d0'

    // const position = { x: 0, y: 0 }

    // function draw() {
    //   canvas.clearRect(0, 0, 400, 400)
    //   canvas.fillRect(position.x, position.y, 100, 100);
    // }

    // gsap.to(position, { 
    //   x: 300, 
    //   y: 300, 
    //   duration: 1,
    //   ease: 'back.inOut(7)',
    //   onUpdate: draw 
    // })

    // Easing
    // none
    // power(1, 2, 3, 4).in
    // power(1, 2, 3, 4).out
    // power(1, 2, 3, 4).inOut
    gsap.to(o, {
      num: 100,
      color: 'cyan',
      duration: 4,
      // repeat: -1,
      // yoyo: true,
      // ease: 'power4.in',
      // ease: 'power4.out',
      // ease: 'power4.inOut',
      // ease: 'back.out(9)',
      // ease: 'bounce',
      ease: 'steps(7)',
      onUpdate: renderCount,
    })
  }

  setTimeout(() => {
    playground()
    playgroundGSAP()
  }, 500)
})

// GSAP - Stagger
;(() => {
  function animate() {
    // gsap.from('.blue', { y: 100, opacity: 0, duration: 1 })
    // gsap.from('.yellow', { y: 100, opacity: 0, duration: 1, delay: 0.5 })
    // gsap.from('.green', { y: 100, opacity: 0, duration: 1, delay: 1 })

    gsap.from('.box', {
      y: 100,
      opacity: 0,
      stagger: 0.1,
      ease: 'power4.in'
    })

    // 이멘트 위임(Event Delegation)
    const boxContainer = document.querySelector('main')

    boxContainer.addEventListener('click', (e) => {
      if (e.target.matches('.box')) {
        gsap.to('.box', {
          y: -100,
          opacity: 0,
          scale: 1.2,
          repeat: 1,
          stagger: {
            each: 0.3,
            repeat: 2,
            yoyo: true,
          },
          // stagger: (index, target, list) => {
          //   // console.log(index, target)
          //   // return index * 0.2 // 0, 0.2, 0.4
          //   // return index * 0.4 // 0, 0.4, 0.8

          //   // if (index === list.length - 1) {
          //   if (target.matches('.green')) {
          //     return 1
          //   } else {
          //     return index * 0.1
          //   }
          // },
          ease: 'power4.out',

          // Callbacks
          onStart: () => { console.log('start') },
          onUpdate: () => { console.log('update') },
          onComplete: () => { console.log('complete') }
        })
      }
    })

    // 루프문 사용
    // const boxes = document.querySelectorAll('.box')

    // for (const box of boxes) {
    //   box.addEventListener('click', () => {
    //     gsap.to('.box', {
    //       y: -100,
    //       opacity: 0,
    //       scale: 1.2,
    //       stagger: 0.1,
    //       ease: 'power4.out'
    //     })
    //   })
    // }
  }

  setTimeout(animate, 500)
})

// GSAP - Timeline - 한계 확인
;(() => {
  function animate() {
    gsap.to('.box', {
      rotation: 360,
      duration: 1,
      stagger: (index) => {
        if (index === 0) {
          return 2
        } else {
          return 0.1
        }
      }
    })
  }

  setTimeout(animate, 500)
})

// GSAP - Timeline
;(() => {
  function animate() {
    // const tween = gsap.to('.box:first-of-type', {})
    // console.log(tween)

    // GSAP의 타임라인 인스턴스 생성
    const tl = gsap.timeline({
      repeat: -1,
      repeatDelay: 1,
      yoyo: true,
      defaults: { opacity: 0, duration: 0.4, ease: 'back.out(4)' }
    })
    
    tl
      // add tween
      .from('.blue', { y: 200 })
      .from('.purple', { y: 200 }, 0)
      .from('.yellow', { y: -200 }, '-=0.3')
      .from('.pink', { y: -200 }, '<')
      .from('.green', { y: 200 }, '+=0.1')

      // .from('.blue', { y: 200, opacity: 0, duration: 0.2, ease: 'back.out' })
      // .from('.green', { y: 200, opacity: 0, duration: 0.2, ease: 'back.out' })
      // .from('.yellow', { y: 200, opacity: 0, duration: 0.2, ease: 'back.out' })
      // .from('.pink', { y: 200, opacity: 0, duration: 0.2, ease: 'back.out' })
      // .from('.purple', { y: 200, opacity: 0, duration: 0.2, ease: 'back.out' })
      // .to('.purple', { y: 200, opacity: 0, duration: 0.2, ease: 'back.in' })
      // .to('.pink', { y: 200, opacity: 0, duration: 0.2, ease: 'back.in' })
      // .to('.yellow', { y: 200, opacity: 0, duration: 0.2, ease: 'back.in' })
      // .to('.green', { y: 200, opacity: 0, duration: 0.2, ease: 'back.in' })
      // .to('.blue', { y: 200, opacity: 0, duration: 0.2, ease: 'back.in' })
  }

  setTimeout(animate, 500)
})

// GSAP - Callbacks & Control
;(() => {
  function animate() {
    const tl = gsap.timeline({
      repeat: -1,
      repeatDelay: 1,
      yoyo: true,
      defaults: { opacity: 0, duration: 0.4, ease: 'back.out(4)' },
      // 타임라인 콜백 설정
      onStart: () => {
        console.log('start')
      },
      onUpdate: () => {
        console.log('updating...')
      },
      onRepeat: () => {
        console.log('repeat')
      },
      onComplete: () => {
        console.log('completed')
      },
      onReverseComplete: () => {
        console.log('reverse completed')
      },
    })
    
    tl
      .from('.blue', { y: 200 })
      .from('.purple', { y: 200 }, 0)
      .from('.yellow', { y: -200 }, '-=0.3')
      .from('.pink', { y: -200 }, '<')
      .from('.green', { y: 200 }, '+=0.1')

    // 타임라인 인스턴스 제어
    // pause()
    // play()
    // resume()
    // restart()
    // timeScale(ratio)
    tl.pause()

    // 이벤트 위임
    // 타임라인 컨트롤(재생, 일시정지, 재개, 역재생, 재시작, 2배속, 0.5배속)
    document.querySelector('header').addEventListener('click', (e) => {
      const button = e.target.closest('button')

      if (button.matches('[data-control="play"]')) {
        // console.log('play')
        tl.play()
      }
      if (button.matches('[data-control="pause"]')) {
        // console.log('pause')
        tl.pause()
      }
      if (button.matches('[data-control="resume"]')) {
        // console.log('resume')
        tl.resume()
      }
      if (button.matches('[data-control="reverse"]')) {
        // console.log('reverse')
        tl.reverse()
      }
      if (button.matches('[data-control="restart"]')) {
        // console.log('restart')
        tl.restart()
      }
      if (button.matches('[data-control="timeScale-2"]')) {
        tl.timeScale(2).play()
      }
      if (button.matches('[data-control="timeScale-0.5"]')) {
        tl.timeScale(0.5).play()
      }
    })

    const tween = gsap.from('button', { y: 200, opacity: 0.1 })

    tween.pause()
    tween.play()
  }

  function tweenAnimate() {
    const greenTween = gsap.to('.green', {
      scale: 1.3,
      rotation: 270,
      skewX: 30,
      duration: 1.5,
      ease: 'back.inOut(2)',
      repeat: 4,
      yoyo: true,
      repeatDelay: 1,
      onStart: () => { console.log('start tween') },
      onRepeat: () => {
        greenTween.timeScale(2).play()
      },
      onComplete: () => { console.log('complete tween') },
    })

    greenTween.pause()

    document.querySelector('.purple').addEventListener('click', () => {
      greenTween.timeScale(0.4).play()
    })
  }

  setTimeout(() => {
    animate()
    tweenAnimate()
  }, 500)
})

// GSAP - Animation Debugging (with GSDevTools)
;(() => {
  // GSAP Plugin - GSDevTools
  // 플러그인 등록(register plugin)
  gsap.registerPlugin(GSDevTools)
  
  // 타임라인 애니메이션 생성
  const tl = gsap.timeline({
    id: '박스 로테이션 타임라인 애니메이션',
    repeat: 2,
    yoyo: true,
    defaults: {
      x: -200,
      duration: 0.3,
      opacity: 0,
      rotation: 270,
    }
  })
    .from('.blue', {  })
    .from('.yellow', {  })
    .from('.green', {  })
    .from('.pink', {  })
    .from('.purple', {  }, 0.84)

  // tl.pause()

  // GSDevTools 인스턴스 생성
  GSDevTools.create({
    animation: tl,
    persist: false,
    loop: false,
    timeScale: 0.5,
    visibility: 'auto',
  })
})()