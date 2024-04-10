// 에러가 발생했을때 보여줄 페이지, api에 에러가 발생했더라도 페이지가 아예 고장나버리면 안된다.
// 에러 컴포넌트에는 반드시 'use client'를 붙여줘야한다
"use client";

const Error = () => {
  return <div>에러가 발생했습니다.</div>;
};

export default Error;
