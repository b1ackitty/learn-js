// --------------------------------------------------------------------------
// 📌 DOM에 요소(노드) 추가
// --------------------------------------------------------------------------

// 요소 동적 생성(dinamicly creating element nodes)
;(() => {
  // 동적 생성된 요소들을 마운트(내부에 삽입)할 부모 요소
  const mountElement = document.querySelector('.mount')
  
  // <section>
  const sectionElement = document.createElement('section')
  // 생성된 요소에 클래스 이름 설정(추가)
  sectionElement.classList.add('sectioning-content')
  // 커스텀 속성 설정(추가)
  sectionElement.dataset.category = 'sports'
  // 텍스트 콘텐츠 추가
  sectionElement.textContent = '스포츠는 역시 멋사!'
  // HTML 콘텐츠 추가(덮어쓰기)
  sectionElement.innerHTML = `<h2>${sectionElement.textContent}</h2>`

  // DOM에 추가(삽입)
  // 요소를 부모 요소의 마지막 자식으로 추가(append child)
  mountElement.appendChild(sectionElement)

  // <table>
  const tableElement = document.createElement('table')
  // 생성된 요소에 클래스 이름 설정(추가)
  tableElement.classList.add('zebra-table')
  // 커스텀 속성 설정(추가)
  tableElement.setAttribute('data-presentation', 'true')
  // 표 제목 텍스트 콘텐츠 추가
  tableElement.textContent = '얼룩말 사육 표'
  // 표 제목 HTML 콘텐츠 추가(덮어쓰기)
  tableElement.innerHTML = `<caption>${tableElement.textContent}</caption>`

  // DOM에 추가(삽입)
  // 요소를 부모 요소의 마지막 자식으로 추가(append child)
  mountElement.appendChild(tableElement)
})()