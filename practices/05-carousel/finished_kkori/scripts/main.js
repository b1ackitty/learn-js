// - 로딩되면 이전 버튼은 처음에 감춰져야 합니다.
// - 다음 탐색 버튼을 누르면 콘텐츠가 전환되어 다음 콘텐츠가 표시됩니다.
// - 표시된 콘텐츠가 처음이 아닌 경우, 이전 버튼이 표시되어야 합니다.
// - 마지막 콘텐츠가 표시되면 다음 버튼은 감춰져야 합니다.
// - 이전 탐색 버튼을 누르면 콘텐츠가 전환되어 이전 콘텐츠가 표시됩니다.
// - 표시된 콘텐츠가 마지막이 아닌 경우, 다음 버튼이 표시되어야 합니다.
// - 처음 콘텐츠가 표시되면 이전 버튼은 감춰져야 합니다.
// - 인디케이터를 클릭하면 해당 순서의 콘텐츠가 표시되어야 합니다.
// - 표시된 콘텐츠에 따라 이전/다음 버튼이 감춰지거나 표시되어야 합니다.
// - 이전 활성 인디케이터와 클릭한 인디케이터는 활성 상태가 서로 전환되어야 합니다.

{
  const carousel = document.querySelector('.carousel')
  const previousButton = carousel.querySelectorAll('.carousel__button').item(0)
  const nextButton = carousel.querySelectorAll('.carousel__button').item(1)
  const indicators = carousel.querySelectorAll('.carousel__indicator')
  const carouselContents = carousel.querySelector('.carousel__contents')
  const SELECTED_CLASSNAME = 'is-selected'
  
  let selectedIndex = 0
  
  function removeSelectedClassname(object) {
    for (const element of object) {
      element.classList.remove(SELECTED_CLASSNAME)
    }
  }
  
  function setContentsTabindex(object) {
    for (const element of object) {
      element.firstElementChild.setAttribute('tabindex', '-1')
    }
  }
  
  function carouselActive() {
    const selectedIndicator = indicators.item(selectedIndex)
    if (selectedIndex === 0) {
      previousButton.setAttribute('hidden', '')
      nextButton.removeAttribute('hidden')
      carouselContents.style.setProperty('transform', 'translateX(0px)')
      removeSelectedClassname(indicators)
      selectedIndicator.classList.add(SELECTED_CLASSNAME)
      setContentsTabindex(carouselContents.children)
      carouselContents.children.item(selectedIndex).firstElementChild.removeAttribute('tabindex')
    } else if (selectedIndex === 1) {
      previousButton.removeAttribute('hidden')
      nextButton.removeAttribute('hidden')
      carouselContents.style.setProperty('transform', 'translateX(-800px)')
      removeSelectedClassname(indicators)
      selectedIndicator.classList.add(SELECTED_CLASSNAME)
      setContentsTabindex(carouselContents.children)
      carouselContents.children.item(selectedIndex).firstElementChild.removeAttribute('tabindex')
    } else {
      previousButton.removeAttribute('hidden')
      nextButton.setAttribute('hidden', '')
      carouselContents.style.setProperty('transform', 'translateX(-1600px)')
      removeSelectedClassname(indicators)
      selectedIndicator.classList.add(SELECTED_CLASSNAME)
      setContentsTabindex(carouselContents.children)
      carouselContents.children.item(selectedIndex).firstElementChild.removeAttribute('tabindex')
    }
  }
  
  carouselActive()
  
  nextButton.addEventListener('click', () => {
    selectedIndex += 1
    carouselActive()
  })
  
  previousButton.addEventListener('click', () => {
    selectedIndex -= 1
    carouselActive()
  })
  
  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
      selectedIndex = index
      carouselActive()
    })
  })
}