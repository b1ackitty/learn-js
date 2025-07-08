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
})

// --------------------------------------------------------------------------
// 📌 실습
// --------------------------------------------------------------------------

// 1. 대출 가능 도서 필터링 함수
//   도서 목록에서 대출 가능한 책만 걸러내는 함수를 작성합니다.
//   - 함수의 목적을 이해하기 쉽게 적절한 이름 작성
//   - 함수가 단 하나의 기능만 가지도록 구성
//   - JSDoc 주석 추가 (목적, 매개변수, 반환값)
;(() => {
  const books = [
    { id: 'book-isbn-3', title: '자바스크립트 입문', isBorrow: true },
    { id: 'book-isbn-7', title: '리액트 마스터', isBorrow: false },
    { id: 'book-isbn-12', title: '프론트엔드 개론', isBorrow: true },
  ]

  const borrowableBooks = filterBorrowableBooks(books)
  console.log(borrowableBooks)

  /**
   * 도서 목록에서 대출 가능한 책만 걸러내는 기능
   * 
   * @param {{id: string; title: string; isBorrow: boolean}[]} books 도서 목록
   * @returns {{id: string; title: string; isBorrow: boolean}[]} 대출 가능한 책 목록
   */
  function filterBorrowableBooks(books) {
    return books.filter(({ isBorrow }) => isBorrow)
  }
})

// 2. 이메일 주소 목록 추출 함수
//   사용자 목록에서 이메일 주소만 포함하는 목록을 추출하는 함수를 작성하세요.
//   - 함수의 목적을 이해하기 쉽게 적절한 이름 작성
//   - 함수가 단 하나의 기능만 가지도록 구성
//   - JSDoc 주석 추가 (목적, 매개변수, 반환값)
;(() => {
  const students = [
    { id: 1, name: '김지훈', email: 'jihun.kim@example.com', isPresent: true },
    { id: 2, name: '박아름', email: 'areum.park@example.com', isPresent: false },
    { id: 3, name: '이민수', email: 'minsu.lee@example.com', isPresent: true },
    { id: 4, name: '최수빈', email: 'subin.choi@example.com', isPresent: true },
    { id: 5, name: '정하늘', email: 'haneul.jung@example.com', isPresent: false },
    { id: 6, name: '윤다현', email: 'dahyun.yoon@example.com', isPresent: true },
    { id: 7, name: '한지민', email: 'jimin.han@example.com', isPresent: false },
    { id: 8, name: '오세영', email: 'seyoung.oh@example.com', isPresent: true },
    { id: 9, name: '서윤호', email: 'yunho.seo@example.com', isPresent: true },
    { id: 10, name: '배예진', email: 'yejin.bae@example.com', isPresent: false },
  ]

  console.log(getEmails(students))

  /**
   * 사용자 목록에서 이메일 주소만 포함하는 목록을 추출하는 기능
   * 
   * @param {{ id: number; name: string; email: string; isPresent: boolean }[]} userList 사용자 목록(email 속성 포함 필수)
   * @returns {string[]} 이메일 주소만 포함하는 목록
   */
  function getEmails(userList) {
    return userList.map(({ email }) => email)
  }
})

// 3. 상품 가격 할인 목록 반환 함수
//   10% 할인율을 적용한 상품 할인 가격 목록(새 배열)을 반환하는 함수를 작성하세요.
//   - 함수의 목적을 이해하기 쉽게 적절한 이름 작성
//   - 함수가 단 하나의 기능만 가지도록 구성
//   - JSDoc 주석 추가 (목적, 매개변수, 반환값)
;(() => {
  const products = [
    { id: 1, name: '파운데이션', stock: 5, price: 32000 },
    { id: 2, name: '블러셔', stock: 0, price: 17000 },
    { id: 3, name: '아이섀도우', stock: 12, price: 22000 },
    { id: 4, name: '립스틱', stock: 3, price: 15000 },
    { id: 5, name: '브러시 세트', stock: 7, price: 28000 },
    { id: 6, name: '아이라이너', stock: 4, price: 13000 },
    { id: 7, name: '마스카라', stock: 2, price: 16000 },
    { id: 8, name: '컨실러', stock: 6, price: 21000 },
    { id: 9, name: '하이라이터', stock: 0, price: 18000 },
    { id: 10, name: '쿠션 팩트', stock: 8, price: 35000 },
  ]

  console.log(calculate10DiscountPriceList(products))
  console.log(products)

  /**
   * 상품의 10% 할인된 가격을 계산한 목록을 반환하는 기능
   * 
   * @param {{ id: number; name: string; stock: number; price: number }[]} product 상품 목록(price 필수 포함)
   * @returns {number[]} 10% 할인율을 적용한 상품 할인 가격 목록(새 배열)
   */
  function calculate10DiscountPriceList(product) {
    return product.map(({ price }) => price - (price * 0.1))
  }
})

// 4. 재고있는 상품 목록 반환 함수
//   재고가 있는 상품만 반환하는 함수를 작성하세요.
//   - 함수의 목적을 이해하기 쉽게 적절한 이름 작성
//   - 함수가 단 하나의 기능만 가지도록 구성
//   - JSDoc 주석 추가 (목적, 매개변수, 반환값)
;(() => {
  const products = [
    { id: 1, name: '파운데이션', stock: 5, price: 32000 },
    { id: 2, name: '블러셔', stock: 0, price: 17000 },
    { id: 3, name: '아이섀도우', stock: 12, price: 22000 },
    { id: 4, name: '립스틱', stock: 3, price: 15000 },
    { id: 5, name: '브러시 세트', stock: 0, price: 28000 },
    { id: 6, name: '아이라이너', stock: 4, price: 13000 },
    { id: 7, name: '마스카라', stock: 2, price: 16000 },
    { id: 8, name: '컨실러', stock: 0, price: 21000 },
    { id: 9, name: '하이라이터', stock: 0, price: 18000 },
    { id: 10, name: '쿠션 팩트', stock: 1, price: 35000 },
  ]

  console.log(filterInStockProducts(products))

  /**
   * 재고가 있는 상품만 필터링하는 기능
   * 
   * @param {{ id: number; name: string; stock: number; price: number }} product 상품 목록(stock 필수 포함)
   * @returns {{ id: number; name: string; stock: number; price: number }} 제고가 있는 상품 목록
   */
  function filterInStockProducts(product) {
    return product.filter(({ stock }) => stock > 0)
  }
})

// 5. 장바구니 상품 총 금액 계산 함수
//   장바구니에 포함된 상품의 총 금액을 계산하는 함수를 작성하세요.
//   - 함수의 목적을 이해하기 쉽게 적절한 이름 작성
//   - 함수가 단 하나의 기능만 가지도록 구성
//   - JSDoc 주석 추가 (목적, 매개변수, 반환값)
;(() => {
  const cart = [
    { id: 2, name: '블러셔', quantity: 1, price: 17000 },
    { id: 6, name: '아이라이너', quantity: 2, price: 13000 },
    { id: 7, name: '마스카라', quantity: 1, price: 16000 },
    { id: 10, name: '쿠션 팩트', quantity: 3, price: 35000 },
  ]

  console.log(getTotalPrice(cart))

  /**
   * 장바구니에 포함된 상품의 총 금액을 계산하는 기능
   * 
   * @param {{ id: number; name: string; quantity: number; price: number }} cart 장바구니에 포함된 상품 목록(price 필수 포함)
   * @returns {Number} 장바구니 상품 총 금액
   */
  function getTotalPrice(cart) {
    return cart
              .map(({ price }) => price)
              .reduce((total, price) => total += price)
  }
})()