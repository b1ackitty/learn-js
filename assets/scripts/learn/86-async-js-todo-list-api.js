/* global axios */

// --------------------------------------------------------------------------
// 📌 Todo List API
// --------------------------------------------------------------------------

const TODOLIST_STORAGE_KEY = '@todolist'

const TODOLIST_ENDPOINT = 'https://todo-list-api-for-learning.onrender.com'

const TODOLIST_TESTER = {
  email: 'tester31@test.com',
  password: 'test123'
}

// 유틸리티 함수
function setToken(token) {
  localStorage.setItem(TODOLIST_STORAGE_KEY, JSON.stringify(token))
}

function getToken() {
  return JSON.parse(localStorage.getItem(TODOLIST_STORAGE_KEY) ?? '')
}

function baseHeader() {
  return { 'Content-Type': 'application/json' }
}

function authHeader() {
  return { 'Authorization': `Bearer ${getToken()}` }
}

// 회원가입
;(() => {
  register({ ...TODOLIST_TESTER })
    .then(({ data }) => {
      console.log(data)
    })
    .catch(console.error)

  function register({ email, password }) {
    return axios.post(`${TODOLIST_ENDPOINT}/register`, { email, password })
  }
})

// 생성된 사용자 조회
;(() => {
  axios.get(`${TODOLIST_ENDPOINT}/users/${TODOLIST_TESTER.email}`)
    .then(({ data }) => {
      console.log(data)
    })
    .catch(console.error)
})

// 로그인
;(() => {
  login(TODOLIST_TESTER.email, TODOLIST_TESTER.password)
    .then(({ data: { token } }) => {
      // 로그인에 성공하면 웹 스토리지에 토큰 저장
      setToken(token)
    })
    .catch(console.error)

  function login(email, password) {
    return axios.post(`${TODOLIST_ENDPOINT}/login`, { email, password })
  }
})

// 생성된 사용자 삭제
;(() => {
  axios.delete(`${TODOLIST_ENDPOINT}/users/${TODOLIST_TESTER.email}`)
    .then(({ data }) => {
      console.log(data)
    })
    .catch(console.error)
})

// 할 일 목록 조회
;(() => {
  axios.get(`${TODOLIST_ENDPOINT}/todos`, {
    headers: { ...baseHeader(), ...authHeader() }
  })
    .then(({ data }) => console.log(data))
    .catch(console.error)
})

// 할 일 생성
;(() => {
  // axios.post(url[, data[, config]])
  axios.post(
    // url
    `${TODOLIST_ENDPOINT}/todos`,
    // data
    { todo: 'API 서버 깨우기! (빨리 일어나라...)' },
    // config
    { headers: { ...baseHeader(), ...authHeader() } }
  )
    .then(({ data }) => console.log(data))
    .catch(console.error)
})

// 할 일 수정(부분)
;(() => {
  // 사용자가 체크박스를 눌렀을 때 서버에 부분 수정 요청
  const todoId = '...'
  axios.patch(
    // url
    `${TODOLIST_ENDPOINT}/todos/${todoId}`,
    // data
    { completed: true },
    // config
    { headers: { ...baseHeader(), ...authHeader() } }
  )
    .then(({ data }) => console.log(data))
    .catch(console.error)
})

// 할 일 삭제
;(() => {
  const todoId = '...'
  axios.delete(
    // url
    `${TODOLIST_ENDPOINT}/todos/${todoId}`,
    // data
    { completed: true },
    // config
    { headers: { ...baseHeader(), ...authHeader() } }
  )
    .then(({ data }) => console.log(data))
    .catch(console.error)
})