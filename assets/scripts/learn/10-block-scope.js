// -------------------------------------
// 전역
// -------------------------------------

// 전역 (Global Scope)
let scope = '전역'
// var scope = '전역'
// let scope = 'Scope'

// -------------------------------------
// 블록
// -------------------------------------

{
  // 블록 (Block Scope)
  let scope = '지역'

  {
    // 중첩된 블록 (Nested Block Scope)
    let scope = '중첩된 지역'

    console.log(scope) // '중첩된 지역'
  }

  console.log(2, scope) // '지역'
}

console.log(3, scope) // '전역'

// 영역 밖에서 안으로 접근할 수 없다.
