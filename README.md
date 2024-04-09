# Next.js 연습용 프로젝트 
# 1. Next vs React

## Next와 React는 뭐가 다를까?

- React는 라이브러리 이지만 Next는 프레임워크 이다.
    - 라이브러리는 사용의 주체가 개발자 이지만, 프레임워크는 개발자가 규칙을 따르며 만들어야 한다.
    - 프레임워크는 주도하고, 개발자는 따라야 함.
    - 올바른　방법으로　올바른　위치에　파일을　넣어야　한다．

# 1. Next.js setup 하는 방법

## 1. 수동 설치 방법

- 폴더 생성 후 이동
- vsc 열기
- npm init -y, license MIT로 변경
- npm i react@latest next@latest reat-dom
- script 변경

```bash
scripts : {
"dev" : "next dev"
}
```

- app폴더 안에 page 만들기
    - NextJS는 실행시 app폴더 안의 page파일을 찾아보며 동작
- Next.js는 경로를 명시해줄 필요없이 파일시스템을 통해 알아서 url을 표현

# 2. Next.js 시작하기

### Root Page

- app/page.tsx 에 적힌 페이지로 /에 해당하게 됨
- 만약 about-us 페이지를 만들고 싶다면?
    - app/ 폴더 내에 about-us 폴더를 만들고 안에 UI를 제공 (page.tsx)
        - 반드시 해당 디렉토리 안에 꼭 생성 필요
        - page를 만들지 않으면 경로가 노출되지 않음
        - 직접적인 page.tsx파일이 없는 폴더는 실제 페이지 없이 경로의 일부분이 될 뿐
        - 참고로 page파일을 만드지 않는 이상 실제 경로에 포함되지도 랜더링 되지도 않기 때문에
        - 다른 파일을 만들어도 된다 (컴포넌트 같은것 만들어서 써도 되는것

### not-found.tsx

- app폴더에 작성하는 404 페이지에 띄워줄 페이지

```bash
app/not-found.tsx

export default NotFound(){
	// not found page ui
	
}

```

### Navigation bar

```bash
export default function Navigate() {
const path = usePathname(); # client에서만 동작

retrun (
<nav>
<ul><li><Link href="/">Home</Link>
# path 이름을 이용해 현재 경로를 표시할수도 있다.
{path==="/" ? "★" : ""}

<li><li><Link href="/about-us">About</Link><li></ul> // Next에선 페이지간 이동시 Link를 사용해야 함
</nav>
)
}
```

## Next.js가 애플리케이션을 렌더링 하는 방법.

- SSR과 CSR
    - CSR 방식은 브라우저가 JS파일을 모두 다운로드 후 랜더링 하는 방식이라 깜빡임이 생겨 사용자 경험에 별로 좋지 않다
    - 특히 자바스크립트를 비활성화 시켜놨다면?
        - 페이지를 띄울수 조차 없어짐
    - javascript가 다운되기전엔 html 내용이 아무것도 없다는 뜻
        - 검색엔진이 사이트 내용을 분석하기 어렵다는 뜻이기도 함
    - CSR은 모든 랜더링이 클라이언트 측에서 일어나게 됨
    - Next.js에선 기본이 SSR임, 모든 페이지의 내용들이 브라우저 코드에 존재함
        - 이미 화면에 표시할 HTML을 갖고 있기 때문
    - 반드시 기억해야 할 것!
        - next.js application의 모든 page안의 컴포넌트들은 next.js가 그것들을 **우선 server side에서 render한다는것**
        - 즉, /about-us에 접속한다면 사용자에게 어떠한 html을 보여주기 전 backend에서 application을 render한 후 만들어진 html을 가지고 브라우저의 request에 대한 response로 제공
        - 위 과정은 client components이든, server components이든 모든 상황에 대해 일어남
    - **use client** 한다 하더라도 기본적으로 SSR이 된다! 달라지는건 없다.
        - 오해하면 안됨!
