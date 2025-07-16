/* global axios, DOMPurify */

// --------------------------------------------------------------------------
// 📌 파일(이미지) 업로드(ImgBB)
// --------------------------------------------------------------------------

const IMGBB_API = 'https://api.imgbb.com/1/upload'
const IMGBB_API_KEY = 'IMGBB_API_KEY'
const IMGBB_EXPIRATION = 60 * 60 // 1시간 뒤 만료(삭제)
const STORAGE_KEY = '@imgbb'

// 멀티 이미지 업로드 기능 구현
;(() => {
  const uploadForm = document.querySelector('[data-id="upload-form"]')
  const fileInput = uploadForm.querySelector('input[type="file"]')

  renderImagesFromStorage()

  fileInput.addEventListener('change', (e) => {
    const fileInput = e.currentTarget
    createThumbnails(fileInput)
  })

  uploadForm.addEventListener('submit', (e) => {
    // 브라우저 기본 작동 방지
    e.preventDefault()

    // 이벤트가 연결된 대상: 폼 요소
    const form = e.currentTarget
    // console.log(form)
    
    // formData 학습
    // learnFormData(form)

    // 멀티 이미지 업로드 비동기 요청 Promise 수집을 할 배열 생성
    const multiUploader = [] 

    // 이미지 업로드 API 요청/응답
    for (const file of form.image.files) {
      // 이미지 포맷 파일이 아니면 건너뛰기
      if (!file.type.startsWith('image/')) continue

      // 오직 이미지 포맷 파일만 업로드(비동기 요청)
      multiUploader.push(fetchUploadImage(file))
      // fetchUploadImage(file)
      //   .then(({ data: { data: { url } } }) => {
      //     // 서버 측의 데이터베이스에 기억할 수 없는 상황이라면?
      //     // 클라이언트 측의 스토리지(Storage)에 기억
      //     const storage = JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? []
      //     // console.log(url)
      //     // console.log('가져왔을 때', storage.length)
      //     storage.push(url)
      //     // console.log('추가했을 때', storage.length)
      //     localStorage.setItem(STORAGE_KEY, JSON.stringify(storage))
      //   })
      //   .catch(console.error)
    }

    // 멀티 이미지 업로드 비동기 요청 수행
    // Promise.all([uploadPromise1, uploadPromise2, uploadPromise3, ...])
    console.log({multiUploader})

    Promise
      .all(multiUploader)
      .then((response) => {
        response.forEach(({ data: { data: { url } } }) => {
          console.log(url)
          // 웹 스토리지에 저장
        })
      })
      .catch(console.error)

    // 폼 초기화
    deleteThumbnails()
    form.reset()

    // 이미지 렌더링
    renderImagesFromStorage()
  })

  function fetchUploadImage(file) {
    return axios.post(
      /* url */
      IMGBB_API,
      /* data */
      { 'image': file },
      /* config */
      {
        params: {
          key: IMGBB_API_KEY,
          expiration: IMGBB_EXPIRATION,
        },
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    )
  }

  function createThumbnails(fileInput) {
    // 썸네일 컨테이너
    let container = uploadForm.querySelector('.thumbnails')

    // 단, uploadForm 요소 내부에 .thumbnails 요소가 없다면 생성
    if (!container) {
      container = document.createElement('div')
      container.classList.add('thumbnails')
    }

    // 썸네일 생성 화면에 표시를 위한 템플리 작성
    let template = ''
    const size = 45

    for (const file of fileInput.files) {
      // 파일로 이미지 URL 만들기 => URL.createObject(file)
      template += `<img src="${URL.createObjectURL(file)}" alt="" width="${size}" height="${size}" />`
    }

    // 컨테이너의 마지막 자식들로 템플릿을 사용해 HTML 요소 생성
    container.innerHTML = template

    // 파일 인풋 뒤에 컨테이너 추가(삽입)
    fileInput.after(container)
  }

  function deleteThumbnails() {
    uploadForm.querySelector('.thumbnails')?.remove()
  }

  // 웹 스토리지에 저장된 데이터를 불러와 화면에 렌더링
  function renderImagesFromStorage() {
    // 스토리지에서 데이터 읽기
    const imageArray = JSON.parse(localStorage.getItem(STORAGE_KEY))
    // console.log(imageArray)

    // DOM 컨테이너 요소 찾기
    const images = document.querySelector('.images')
    
    // 템플릿 리터럴 구성
    const imagesTemplate = imageArray?.reduce((template, imageURL) => {
      return template + `<img src="${imageURL}" alt="" width="100" height="100" />`
    }, '') ?? ''

    images.innerHTML = DOMPurify.sanitize(imagesTemplate)
  }

  // function learnFormData(form) {
  //   // 폼 요소의 데이터 가져오기 위해 폼 데이터 객체 생성
  //   const formData = new FormData()
  //   // console.log(formData)
    
  //   // 폼 컨트롤 요소 집합(elements)
  //   const [fileInput] = form.elements
  //   // console.log(fileInput.files)

  //   // 파일 인풋의 업로드할 파일들 루프(loop)
  //   for (const file of fileInput.files) {
  //     const [key] = file.name.split('.') // 'mdn.jpeg' --> [key = 'mdn', 'jpeg']
  //     // console.log(key)
  //     formData.append(key, file)
  //   }

  //   // formData -> JavaScript Object
  //   console.log(Object.fromEntries(formData))
  // }
})()