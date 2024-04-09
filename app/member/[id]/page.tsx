import React from "react";

export const metadata = {
  title: "member 페이지",
  description: "member id를 표시해주는 페이지",
  icons: "https://picsum.photos/200",
};

const Page = ({ params }) => {
  return (
    <div>
      이 페이지는 member의 id를 표시해주는 페이지입니다. {decodeURI(params.id)}
      {/* decoeURI -> 한글 깨지는 문제 해결 */}
    </div>
  );
};

export default Page;
