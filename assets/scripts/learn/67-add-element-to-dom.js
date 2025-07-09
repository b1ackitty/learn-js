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
})

// 라면 레시피
;(() => {
  const ol = document.querySelector('.remen-cooking-recipe')

  // <li> 요소를 생성한 다음 "맛있게 먹습니다!" 텍스트 콘텐츠 추가
  const listItem = document.createElement('li')
  listItem.textContent = '맛있게 먹습니다!'
  // 생성된 <li> 요소를 ol 참조 요소 내무 마지막 자식으로 삽입
  ol.appendChild(listItem)
})

// 요소 위치 변경(appendChild 활용)
;(() => {
  const button = document.querySelector('button')
  const section = button.nextElementSibling
  const [likeFruitsList, dislikeFruitsList] = section.children //HTMLCollection

  button.addEventListener('click', () => {
    // 좋아하는 과일 목록의 첫번째 항목을
    const firstFruit = likeFruitsList.firstElementChild
    if (!firstFruit) return
    // 좋아하지 않는 과일 목록의 마지막 항목으로 위치 이동
    dislikeFruitsList.appendChild(firstFruit)
  })
})

// 특정 요소 앞에 생성된 요소 삽입
;(() => {
  const ramenCookingRecipe = document.querySelector('.ramen-cooking-recipe')
  // const targetRecipe = ramenCookingRecipe.children[2]
  const [,,targetRecipe] = ramenCookingRecipe.children
  // console.log(targetRecipe)
  
  // 동적으로 생성한 삽입 요소
  // <li>면을 넣고 3~4분간 끓입니다.</li>
  const insertRecipe = document.createElement('li')
  insertRecipe.textContent = '면을 넣고 3~4분간 끓입니다.'
  // console.log(insertRecipe)

  // 동적 생성된 요소를 목표 요소 앞에 삽입
  // targetRecipe.parentElement === ramenCookingRecipe
  // targetRecipe.parentElement.insertBefore(삽입노드, 목표노드)
  targetRecipe.parentElement.insertBefore(insertRecipe, targetRecipe)
})

// 문서에 존재하는 요소를 목표 노드 앞에 추가
;(() => {
  const ramenCookingRecipe = document.querySelector('.ramen-cooking-recipe')
  
  // 삽입할 요소 찾기
  const insertRecipe = ramenCookingRecipe.firstElementChild
  
  // 대상(목표) 요소 찾기
  const targetRecipe = ramenCookingRecipe.lastElementChild

  // 삽입할 요소를 대상 앞에 삽입
  ramenCookingRecipe.insertBefore(insertRecipe, targetRecipe)
})()