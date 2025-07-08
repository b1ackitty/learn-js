// --------------------------------------------------------------------------
// 📌 명확한 목적에 맞는 함수 설계
// --------------------------------------------------------------------------

// 필터(filter) 기능을 가진 함수 구현
;(() => {
  function filter(array, callback) {
    // 선언적 코드
    // 배열 객체의 filter() 메서드 활용? --> 명령형 코드로 작성해 보자
    
    // 명령형 코드
    const filteredArray = []

    for (let index = 0, l = array.length; index < l; index++) {
      const item = array[index]
      if (callback(item, index, array)) filteredArray.push(item)
    }

    return filteredArray
  }
  
  const numbers = [2, 9, 21, 34]
  
  const result = filter(numbers, (n) => n > 5 && n < 30)
  console.log(result) // [9, 21]
})

// 매핑(mapping) 기능을 가진 함수 구현
;(() => {
  function map(likeArray, callback) {
    // 명령형 코드
    // 배열의 map() 메서드와 유사한 기능 구현
    // 배열 순환 후, 항목별 변형 후 새 배열로 반환(결과)
    const mappedArray = []

    for (let i = 0, l = likeArray.length; i < l; i++) {
      const item = likeArray[i]
      const mutatedItem = callback(item, i, likeArray)
      mappedArray.push(mutatedItem)
    }

    return mappedArray
  }
  
  const numbers = [2, 9, 21, 34]
  
  const result = map(numbers, (n) => n ** 2)
  console.log(result) // [4, 81, 441, 1156]
})

// 적절한 함수 이름과 이해하기 쉬운 주석 작성
;(() => {
  // JSDoc 마크업 언어 사용 -------------------------------------------------------------------

  /**
   * 함수의 목적
   * 함수의 매개변수
   * 함수의 반환 값
   */

  /**
   * 집합에서 특정 항목을 걸러주는 기능
   * 
   * @param {Array} array 걸러내야 할 원본 집합(배열)
   * @param {Function} callback 집합을 순환할 때마다 실행되는 콜백 함수
   * @returns {Array} 특정 항목을 걸러낸 새 배열
   */
  function filter(array, callback) {
    const filteredArray = []

    for (let index = 0, l = array.length; index < l; index++) {
      const item = array[index]
      if (callback(item, index, array)) filteredArray.push(item)
    }

    return filteredArray
  }

  /**
   * 집합의 모든 항목을 변형하는 기능
   * 
   * @param {Array} likeArray 변형할 항목을 포함하는 원본 집합(배열)
   * @param {Function} callback 집합을 순환할 때마다 실행되는 콜백 함수
   * @returns {Array} 변형한 모든 항목을 포함하는 새 배열
   */
  function map(likeArray, callback) {
    const mappedArray = []

    for (let i = 0, l = likeArray.length; i < l; i++) {
      const item = likeArray[i]
      const mutatedItem = callback(item, i, likeArray)
      mappedArray.push(mutatedItem)
    }

    return mappedArray
  }

  const filteredArray = filter([2, 3, 4, 5], (n) => n > 3 && n < 5)
  console.log(filteredArray)

  const mappedArray = map(['one', 'two'], (item, index) => `${index}-${item}`)
  console.log(mappedArray)
})()