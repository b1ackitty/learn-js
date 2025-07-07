{
  const tabContainer = document.querySelector('.tabs__container')
  const tabs = [...tabContainer.querySelectorAll('.tab')]
  const tabContents = [...tabContainer.querySelectorAll('.tab__content')]
  const SELECTED_CLASSNAME = 'is-selected'

  
  // 배열의 메서드: 매칭되는 요소를 찾아서 인덱스를 반환해라
  // findIndex()

  // 배열의 유용한 기능
  // 배열 순환 for 문, forEach() 메서드 사용
  // findIndex(), find(), filter(), map(), reduce()
  // 화살표 함수 표현식 암묵적 반환 사용하면 상단으로 이동
  const getSelectedIndex = () =>
    tabs.findIndex((tab) => tab.classList.contains(SELECTED_CLASSNAME))

  const getSelectIndex = (button) =>
    tabs.findIndex((tab) => tab === button)

  let selectedIndex = getSelectedIndex()

  tabContainer.addEventListener('click', ({ target }) => {
    const button = target.closest('.tabs button')

    if (!button) return

    if (selectedIndex > -1) {
      tabs.at(selectedIndex).classList.remove(SELECTED_CLASSNAME)
      tabContents.at(selectedIndex).classList.remove(SELECTED_CLASSNAME)
    }

    const index = getSelectIndex(button)

    tabs.at(index).classList.add(SELECTED_CLASSNAME)
    tabContents.at(index).classList.add(SELECTED_CLASSNAME)

    selectedIndex = index
  })
}
