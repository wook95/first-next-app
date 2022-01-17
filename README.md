## NEXTjs practice

노마드코더 `NextJS 시작하기`를 보고 공부

### 1. 프레임워크와 라이브러리

- **라이브러리**는 자유도가 높다.  
  원하는건 모두 다 할 수 있다.  
  대신 다 내 맘대로 할 수 있기에 라이브러리에서 정해놓은 정석이 없어 혼란스러울수도 있음.  
  (cra)

- **프레임워크**는 특정한 규칙을 따라야 함.  
   많은 부분들을 규칙들이 해주기 때문에 로직에만 집중할수 있도록 도와줌.  
  규칙은 수정할 수 없음.  
   내가 게스트가 되어서 코드를 작성해야함.

### 2. page

1. pages폴더 안에 있는 리액트 컴포넌트를 **export default** 하면, **파일이름**을 url로 쓴다. (리액트에서는 라우팅을 했어야 했는데 . . !)

2. 기본적용 404페이지가 있다.

3. 예외사항
   - index는 기본 / 로 예약되어 있다.
   - jsx 문법을 쓸 경우 react를 import 하지 않아도 된다.

### 3. static pre rendering

- cra는 csr(client side rendering)이다.  
  브라우저가 유저가 보는 모든 UI를 만든다.  
  모든것은 html 소스코드 안에 들어있지 않다.  
  하나의 div. 빈 html.  
  react가 모든것을 렌더링하고 렌더링 한 것을 유저들이 보게된다.  
  사용하는 유저가 리액트를 통해 자바스크립트로 UI를 랜더링.  
  3g같은 느린 연결의 경우 브라우저가 리액트 코드를 가져오는 동안 유저는 빈 화면만 보고 있어야 한다.

- next의 경우 미리 랜더링시켜논 html이 있다.  
   백엔드에서 앱 초기의 상태로 미리 랜더링(pre-rendering) 시켜 페이지를 만든다.  
   렌더링 끝난 후 html이 된다.
  자바스크립트와 react가 없어도 html을 볼 수 있고,  
   시간이 지나 react가 로딩이 되면 csr의 리액트 앱과 같이 정상 동작한다. (hydration)  
   유저가 웹사이트에 가면, 초기상태의 component로 미리 생성된 htm페이지르 보고, 상호작용이 일어나면 react가 받아서 동작한다.  
  유저가 코드를 받아 react를ㅈ동작시키기 전에 html이 있으므로 SEO에 좋다. (웹사이트에 빈 html이 아니라 무언가가 있으니깐)  
  멋진점 : 로딩되면 react에 연결이 되면서 동작한다. (hydration)

### 4. 라우팅

- `<a href='/'>Home</a>`를 쓴다면 eslint error가 발생한다.  
  이유는 브라우저가 전체 페이지를 새로고침하기 때문.  
  (react에서도 Link 태그를 썼던 이유와도 동일)

- Link 태그를 next/link에서 임포트해서 쓴다.
  사용시 Link에 href만 전달해 주고 그 안에 a태그를 네스팅해서 쓴다.
  Link태그에 className이나 style들을 부여할 수 없기 때문.

- useRouter훅을 이용해 pathname등을 활용한 동적 스타일링이 가능하다.

### 5. 스타일

1. css modules
   css 파일명을 `이름.module.css` 라고 지어준다.  
   항상 해왔던 것처럼 className을 컴포넌트에서 바꿔주면 되는데,  
   css파일을 임포트 해오고, `임포트한이름.클래스`를 className에 넣어준다

2. styles JSX
컴포넌트 안에서 style태그를 열어주고 `jsx` 어트리뷰트를 준다.
중괄호를 열고 백틱을 쓴다.
그 안에 스타일을 설정하면 된다.
컴포넌트 안에서 스타일을 설정했듯, 컴포넌트 기준이다.
더 상위의 컴포넌트, 페이지에서 전체적으로 적용되기 원하는 스타일의 경우 `global` 어트리뷰트를 `jsx`와 같이 설정해준다.  
 만약 페이지 기준이 아닌, global style이 필요할 경우, `_app.js`를 활용한다.  
 `_app.js`는 페이지가 렌더링 되기 전에 렌더링 해서 전체스타일, 모든 페이지에서 사용되는 컴포넌트를 넣기에 편리하다.  
 \_app.js는 두개의 props를 받는데 Component와 pageProps이다.
<br/>
<br/>
<hr/>
<br/>

## 연습 프로젝트

### 1. layout pattern

리액트가 제공하는 children prop: 하나의 컴포넌트를 또 다른 컴포넌트 안에 넣을 수 있다.  
 `<컴포넌트> children으로 들어간다 </컴포넌트>`  
너무 큰 \_app.js 컴포넌트 대신 children을 이용해 분리시켜준다.
<br><br>

### 2. 컴포넌트

- `<Head?> <title>타이틀</title> </Head>` 을 통해 메타데이터를 설정해 줄 수 있다.
- `<img />`대신 Image 컴포넌트 사용
  <br><br>

### 3. redirects, rewrites

- redirects는 주소창에 특정 url이 전달되었을때, 특정 url로 이동시킨다. (next.config참고)
- next.config변경시 서버를 재시작 해야 적용이 된다.
- rewrites도 동일하게 특정 url을 특정 url로 이동시키지만 주소창에 있는 글자가 바뀌지 않는 특징이 있다. 이를 활용해 개발자도구, 소스코드에서 api key를 감출 수 있다.
  <br><br>

### 4. `getServerSideProps()`를 통해 어디까지 서버에서 렌더링 해줄 지 정할 수 있다.

앱의 초기 상태를 미리 백엔드에서 렌더링 하면, 리액트에서 받아오는 데이터들은 미리 렌더링 되지 않는다.  
 SEO를 고려해 이를 먼저 렌더링 해줄 수 있다. (index.js의 getServerSideProps 참고)
<br><br>

### 5. 동적 라우팅

**/로 나눠진 url을 만들고 싶다면**, pages안에 폴더를 만들어주면 된다.  
 /movies/all을 원하면 `pages/movies/all.js`를 만들고  
 /movies는 `pages/movies/index.js`와 같이 만들어주면 된다.

**/movies/:id**와 같이 여러개의 url을 받고 싶을때,
`pages/movies/[id].js`와 같이 만들어주면 url에 변수르 넣어줄 수 있다.
<br><br>

### 6. url에서 url로 state 넘겨주기 (숨기기도 가능)

`router.push()`에서 url을 스트링으로 전달할 수도 있지만, 객체로 보내줄 수도 있다. push는 3가지 인수를 받는데, url,as,option으로 as와 option은 선택적이다. 여기서 as로 마스킹이 가능하다.

```javascript
//스트링으로 보내기
router.push(`/movies/${id}`);

//객체로 보내기
router.push(
  {
    pathname: `movies/${id}`,
    query: {
      title,
    },
  },
  `/movies/${id}` //as에 해당하는 내용
);
```

query로 넘긴 title은 클릭으로 페이지에 접근했을때만 title이 넘겨져서 url을 그대로 새로고침하면 title이 없는 문제가 발생한다.
<br><br>

### 7. catch all

movies/monsters/client/abc 와 같이 movies 뒤에 /가 아무리 많이 나와도 다 받을수 있도록 하는 방법이 있다!  
[id].js -> [...id].js로 바꿔주면, id를 /를 기준으로 파싱해 배열로 받는다.

이것을 이용해
url에 영화이름을 넣어 SEO에 좋은 방식으로 바꾸어보았다.

```javascript
//전
router.push(
  {
    pathname: `movies/${id}`,
    query: {
      title,
    },
  },
  `/movies/${id}`
);
//후
router.push(`/movies/${title}/${id}`);
```
