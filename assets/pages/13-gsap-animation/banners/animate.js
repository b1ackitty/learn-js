/* global gsap, GSDevTools */

;(() => {
  // const banner = document.querySelector('.banner')
  // const bannerMain = banner.querySelector('.banner__main')

  const tlMain = gsap.timeline({
    id: '배너 메인 영역',
    defaults: {
      duration: 0.3,
      opacity: 0,
      y: 10,
      ease: 'power1.in',
    }
  })
    .from('.banner__title', {  })
    .from('.banner__description', {  }, 0.2)
    .from('.banner__link', {  }, 0.4)

  tlMain.play()

  const tlItems = gsap.timeline({
    id: '배너 아이템',
    defaults: {
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
    },
  })
    .from('#earth', { y: -6, duration: 1, }, 0.4)
    .from('#controller', { y: -7, duration: 1.2, }, 0)
    .from('#basketball', { y: -15, duration: 0.6, }, 0.1)
    .from('#book_1_', { y: -13, duration: 1.1, }, 0.3)
    .from('#pencil', { y: 8, duration: 0.9, }, 0)
    .from('#ball', { y: -11, duration: 1.3, }, 0.2)
    .from('#paint', { y: -10, duration: 0.8, }, 0.7)

  tlItems.play()
})

;(() => {
  // 타임라인 인스턴스 생성
  const tl = gsap.timeline({
    id: 'banner animation'
  })

  console.log(tl)

  // gsap GSDevTools 플러그인 등록
  gsap.registerPlugin(GSDevTools)

  // GSDevTools 인스턴스 생성
  GSDevTools.create({ animation: tl })
})

// 배너 애니메이션을 GSAP 애니메이션 라이브러리로 구현해보세요.
;(() => {

  // 애니메이션
  const tl = gsap.timeline({
    id: 'banner animation',
    defaults: { opacity: 0, ease: 'back.out(1.4)' },
  })

  tl
    .from('.banner', { ease: 'linear', autoAlpha: 0, })
    .from('.banner__title :first-child', { x: 80, duration: 1 })
    .from('.banner__title :last-child', { x: -80, duration: 1 }, '<')
    .from('.banner__description', { y: 30 }, '-=0.5') 
    .from('.banner__link', { y: 40, }, '-=0.4')
    .from('#items > g', { scale: 0, transformOrigin: 'center', stagger: 0.1 }, '-=0.2')

  // 플러그인
  gsap.registerPlugin(GSDevTools)
  GSDevTools.create({ animation: tl, loop: true, id: 'main' })

  // 이벤트 핸들링
  document.querySelector('.banner')
  .addEventListener('click', () => {
      alert('devtools kill!!!!')
      // 개발 도구 GSDevTools 인스턴스 제거
      GSDevTools.getById('main').kill()
    })

})()

// CSS 리디어 그래디언트에 트랜지션 설정하는 방법
// custom properties + linear-gradient() + transition
;(() => {

  [
    { name: '--banner-link-begin', value: '#ff905c' },
    { name: '--banner-link-end', value: '#ed027c' },
  ].forEach((propertyDefinition) => {
    CSS.registerProperty({
      name: propertyDefinition.name,
      inherits: false,
      syntax: '<color>',
      initialValue: propertyDefinition.value,
    })
  })

})()