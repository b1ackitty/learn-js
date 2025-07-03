/* global byId */

;(() => {
  const para = byId('notice')
  
  // data-* 사용자(개발자) 정의 속성 쓰기
  para.dataset.category = 'frontend-web-development'
  para.dataset.userId = 'user-kkori'
  para.dataset.status = 'inactive'
  para.dataset.role = 'guest'
  
  // data-* 사용자(개발자) 정의 속성 읽기
  console.log(para.dataset.category)
  console.log(para.dataset.userId)
  console.log(para.dataset.status)
  console.log(para.dataset.role)
})

;(() => {
  const pElement = document.querySelector('#notice')

  // 속성 제거(remove attributes)
  // pElement.removeAttribute('id')
  // pElement.removeAttribute('class')
  // pElement.removeAttribute('data-role')
  // pElement.removeAttribute('data-category')
  // pElement.removeAttribute('data-user-id')
  // pElement.removeAttribute('data-status')

  const willRemoveAttributeNames = [
    'id',
    'class',
    'data-role',
    'data-category',
    'data-user-id',
    'data-status',
  ]
  
  willRemoveAttributeNames.forEach((attrName) => {
    pElement.removeAttribute(attrName)
  })
  
  // for (const attributeName of willRemoveAttributeNames) {
  //   pElement.removeAttribute(attributeName)
  // }
  
  // 위처럼 하나씩 나열하지 않아도 Array.from() 메서드를 사용해서 배열로 복사할 수 있다.
  ;(() => {
    console.log(pElement.attributes)
    console.log(Array.from(pElement.attributes))

    Array.from(pElement.attributes).forEach((attrObject) => {
      pElement.removeAttribute(attrObject.name)
    })
  })

  console.log(pElement.attributes)
})()