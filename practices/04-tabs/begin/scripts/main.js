// 다시 시도!
;(() => {
  const tabsContainer = document.querySelector('.tabs__container')
  const tabs = tabsContainer.querySelectorAll('.tab')
  const tabContents = tabsContainer.querySelectorAll('.tab__content')
  const SELECTED_CLASSNAME = 'is-selected'

  let selectedIndex = -1

  for (let i = tabs.length - 1; i >= 0; i--) {
    const tab = tabs.item(i)
    if (tab.classList.contains(SELECTED_CLASSNAME)) {
      selectedIndex = i
      break
    }
  }

  for (const tab of tabs) {
    tab.addEventListener('click', () => {
      if (selectedIndex > -1) {
        // tabs.forEach((tab), () => {
        //   tab.classList.remove(SELECTED_CLASSNAME)
        // })
        // tabContents.forEach((tabContent), () => {
        //   tabContent.classList.remove(SELECTED_CLASSNAME)
        // })
  
        tabs.item(selectedIndex).classList.add(SELECTED_CLASSNAME)
        tabContents.item(selectedIndex).classList.add(SELECTED_CLASSNAME)
      }
    })
  }
})


;(() => {
  // --------------------------------------------------------------------------  
  // 1. 제어 대상, 선택된 인덱스 찾기

  // 제어 대상 찾기
  const tabsContainer = document.querySelector('.tabs__container')
  const tabs = tabsContainer.querySelectorAll('.tab')
  const tabContents = tabsContainer.querySelectorAll('.tab__content')
  const SELECTED_CLASSNAME = 'is-selected'

  // 선택된 인덱스 찾기
  // for 문 + break
  let selectedIndex = -1 // Array indexOf() -1 --> 못 찾았으면 -1 반환

  for (let i = 0, l = tabs.length; i < l; i++) {
    const tab = tabs.item(i)
    if(tab.classList.contains(SELECTED_CLASSNAME)) {
      selectedIndex = i
      break
    }
  }

  // --------------------------------------------------------------------------
  // 2. 모든 탭에 이벤트 리스너 추가

  // for ... of 문
  ;(() => {
    for(const tab of tabs) {
      tab.addEventListener('click', () => {
        console.log(tab)
      })
    }
  })

  // forEach() 활용
  ;(() => {
    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        console.log(tab)
      })
    })
  })

  // --------------------------------------------------------------------------
  // 3. 이전 선택된 대상 비활성화
  ;(() => {
    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {

        // 선택된 탭, 탭 콘텐츠가 존재할 경우에만 조건 블록 실행
        if(selectedIndex > -1) {
          // 이전 활성 상태의 탭 요소에 활성 상태 클래스 이름 제거
          const selectedTab = tabs.item(selectedIndex)
          selectedTab.classList.remove(SELECTED_CLASSNAME)
  
          // 이전 활성 상태의 탭 콘텐츠 요소에서 활성 상태 클래스 이름 제거
          const selectedTabContent = tabContents.item(selectedIndex)
          selectedTabContent.classList.remove(SELECTED_CLASSNAME)
        }
      })
    })
  })

  // --------------------------------------------------------------------------
  // 4. 현재 선택된 대상(탭, 탭 콘텐츠) 활성화
  ;(() => {
    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        if(selectedIndex > -1) {
          const selectedTab = tabs.item(selectedIndex)
          selectedTab.classList.remove(SELECTED_CLASSNAME)
          const selectedTabContent = tabContents.item(selectedIndex)
          selectedTabContent.classList.remove(SELECTED_CLASSNAME)
        }

        // 현재 활성 상태의 인덱스
        let activeIndex

        // for 문과 break 조합으로 선택된 인덱스 찾기
        for (let i = 0, l = tabs.length; i < l; i+=1) {
          const compareTab = tabs.item(i)
          if (compareTab === tab) {
            activeIndex = i
            break
          }
        }

        // 현재 활성 상태 인덱스에 해당되는 탭 요소에 활성 상태 클래스 이름 추가
        const activeTab = tabs.item(activeIndex)
        activeTab.classList.add(SELECTED_CLASSNAME)
        // 현재 활성 상태 인덱스에 해당되는 탭 콘텐츠 요소에 활성 상태 클래스 이름 추가
        const activeTabContent = tabContents.item(activeIndex)
        activeTabContent.classList.add(SELECTED_CLASSNAME)

        // 선택된 인덱스 값 업데이트(변경)
        selectedIndex = activeIndex
      })
    })
  })()
})
