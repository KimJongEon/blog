// import logo from './logo.svg';
/* eslint-disable */ // 터미널에 경고 메세지 안뜨게 해줌

import { useState } from 'react';
import './App.css';

function App() { // <- 이것도 컴포넌트

  let post = '강남 우동 맛집';
  // State 문법 : 바인딩 한 데이터를 변경 할 수 있음
  // state 쓰던 html 자동 재렌더링 됨
  // 자주 변경 될 데이터를 state를 이용해 바인딩 한다. 
  let [postTitle, setPostTitle] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬독학']);
  let [like, setLike] = useState(0); // set*** : state 변경 함수


  return (

    <div className="App">
      <div className="black-nav">
        <h4 style={{ color: 'yellow', fontSize: '1rem' }}>블로그</h4>
      </div>

      <button onClick={
        () => {
          // array, object 특징
          // ...을 넣으면 데이터를 저장
          // ...을 안넣으면 postTitle의 데이터가 위치한 주소를 저장한다.
          // let postTitleCopy = [postTitle]; // -> postTitle의 주소를 postTitleCopy에 저장
          let postTitleCopy = [...postTitle]; // array, object 를 수정할땐 ... 사용 (Deep copy)
          postTitleCopy[0] = '여자 코트 추천';

          if (postTitle[0] == '남자 코트 추천') {
            setPostTitle(postTitleCopy);
          } else {
            postTitleCopy[0] = '남자 코트 추천';
            setPostTitle(postTitleCopy);
          }
        }
      }>글 수정
      </button>

      <button onClick={
        () => {
          let sortCopy = [...postTitle];
          sortCopy.sort();
          console.log(sortCopy);

          setPostTitle(sortCopy);
        }
      }>글 정렬
      </button>
      <h1>git test1</h1>

      <div className="list">
        <h4>
          {postTitle[0]}
          <span onClick={() => { setLike(like + 1) }}>👍</span> {like}
        </h4>

        <p>2월 17일 발행</p>
      </div>

      <div className="list">
        <h4>{postTitle[1]}</h4>
        <p>2월 17일 발행
        </p>
      </div>

      <div className="list">
        <h4>{postTitle[2]}</h4>
        <p>2월 17일 발행
        </p>
      </div>

      <Modal></Modal>

      <Nav></Nav>
      <Footer></Footer>


    </div> // App End
  ); // return() End
}

/* modal 사용 : componnet 문법 */
// 1. function 만듦
// 2. return() 안에 html 담기
// 3. <함수명></함수명> 쓰기


// 컴포넌트을 왜 사용
// 1. 반복적인 html 축약할 때
// 2. 큰 페이지들을 컴포넌트로 만들고 사용
// 3. 자주 변경되는 html을 컴포넌트로 만들고 사용
function Modal() {
  return (
    <>
      <div className="modal">
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
    </>
  ) // return EnD
}

function Nav(){
  return(
    <>
      <div>Nav 입니다.</div>
    </>
  )
}

function Footer(){
  return(
    <>
      <p>제작 : 김종언</p>
    </>
  )
}

export default App;
