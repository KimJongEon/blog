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
  let [postContent, setPostContent] = useState(['여기 코트 좋아요', '우동 맛집이네요', '열심히 해봅시다.']);
  let [postDate, setPostDate] = useState(['2022-04-11', '2022-05-06', '2022-07-19']);


  let [like, setLike] = useState([0, 0, 0]); // set*** : state 변경 함수
  let [modal, setModal] = useState(false); //modal창이 안보이는 상태(기본) : false
  let [postIDX, setPostIDX] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{ color: 'yellow', fontSize: '1rem' }}>블로그</h4>
      </div>

      {/* 글 수정 버튼 */}
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

      {/* 글 정렬 버튼 */}
      <button onClick={
        () => {
          let sortCopy = [...postTitle];
          sortCopy.sort();
          console.log(sortCopy);

          setPostTitle(sortCopy);
        }
      }>글 정렬
      </button>


      {/* 비슷한 html 반복생성하려면 map() 쓰면 된다. */}
      {
        postTitle.map(function (a, i) { // a는 postTitle에 들어있는 값, i는 반복문 돌 때 마다 0부터 1씩 증가하는 정수
          return (
            <div className="list" key={i}>
              <h4 onClick={ ()=>{setModal(true); setPostIDX(i); } } >{postTitle[i]}
                <span onClick={() => {
                    let likeCopy = { ...like };
                    likeCopy[i] = likeCopy[i] + 1;
                    setLike(likeCopy)
                  }}>👍</span>{like[i]}
              </h4>
              <p>{postContent[i]}</p>
              <p>{postDate[i]}</p>
            </div>
          )
          // return console.log(a, i)
          
        })
        
      }

      {/* 동적 UI */}
      {
        //html 안에선 if문 대신 삼항연산자 사용
        // 조건식 ? 참일 때 실행할 코드 : 거짓일 때 실행할 코드
        modal == true ?
        <Modal
        postTitle={postTitle}
        postContent={postContent}
        postDate={postDate}
        postIDX={postIDX}
        setPostTitle={setPostTitle}
        color={"yellow"}/>
        : null // false일때 null
      }

      <Nav></Nav>
      <Footer></Footer>


    </div > // App End
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

// 동적 UI 만들기
// 1. html css로 미리 디자인 완성
// 2. UI의 현재 상태를 state로 저장
// 3. state에 따라 UI가 어떻게 보일지 작성

function Modal(props) {
  return (
    <>
      <div className="modal" style={{background : props.color}}>
        <h4>{props.postTitle[props.postIDX]}</h4>
        <p>{props.postContent[props.postIDX]}</p>
        <p>{props.postDate[props.postIDX]}</p>

        <button onClick={ ()=>{ 
          let postTitleCopy = [...props.postTitle];
          postTitleCopy[props.postIDX] = '여자 코트 추천';
          props.setPostTitle(postTitleCopy) }}>글 수정</button>
      </div>
    </>
  ) // return EnD
}



// 내가 만들어 본 컴포넌트
function Nav() {
  return (
    <>
      <div>Nav 입니다.</div>
    </>
  )
}

function Footer() {
  return (
    <>
      <p>제작 : 김종언</p>
    </>
  )
}




export default App;
