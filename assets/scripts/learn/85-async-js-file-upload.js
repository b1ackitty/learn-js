/* global axios */

// --------------------------------------------------------------------------
// 📌 파일(이미지) 업로드(ImgBB)
// --------------------------------------------------------------------------

// 멀티 이미지 업로드 기능 구현
;(() => {
  const IMGBB_API = 'https://api.imgbb.com/1/upload'
  const IMGBB_API_KEY = 'IMGBB_API_KEY'
  const IMGBB_EXPIRATION = 60 * 60 // 1시간 뒤 만료(삭제)

  const uploadForm = document.querySelector('[data-id="upload-form"]')
  const fileInput = uploadForm.querySelector('input[type="file"]')

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

    // 이미지 업로드 API 요청/응답
    const fileInput = form.image
    for (const file of fileInput.files) {
      // 이미지 포맷 파일이 아니면 건너뛰기
      if (!file.type.startsWith('image/')) continue
      // 오직 이미지 포맷 파일만 업로드(비동기 요청)
      fetchUploadImage(file)
        .then(({ data }) => {
          console.log(data)
        })
        .catch(console.error)
    }

    // formData 학습
    // learnFormData(form)

    // 폼 초기화
    deleteThumbnails()
    form.reset()
  })

  function fetchUploadImage(file) {
    console.log(file)

    axios.post(IMGBB_API, { 'image': file }, {
      params: {
        key: IMGBB_API_KEY,
        expiration: IMGBB_EXPIRATION
      },
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
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