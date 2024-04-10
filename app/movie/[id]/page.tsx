import React, { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../entities/movie-info";
import MovieVideos from "../../../entities/movie-videos";

interface IParams {
  params: {
    id: string;
  };
}

export const generateMetadata = async ({ params: { id } }: IParams) => {
  // 동적인 제목을 가진 page를 위한 메타데이터 생성
  const movie = await getMovie(id);
  return {
    title: movie.title,
  };
};

// const getMovie = async (id: string) => {
//   console.log(`Fetching movies : ${Date.now()}`);
//   await new Promise((resolve) => setTimeout(resolve, 2000));
//   const response = await fetch(`${API_URL}/${id}`);
//   return response.json();
// };

// const getVideos = async (id: string) => {
//   console.log(`Fetching vieos : ${Date.now()}`);
//   await new Promise((resolve) => setTimeout(resolve, 2000));
//   const response = await fetch(`${API_URL}/${id}/videos`);
//   return response.json();
// };

const Page = async ({ params: { id } }: { params: { id: string } }) => {
  // console.log("start fetching");
  // 순차 처리를 하면 시간이 오래걸림으로 병렬처리를 해준다
  // Promise.all을 사용하면 병렬처리를 할 수 있다, 즉 여러개의 데이터를 동시에 가져올 수 있다
  // const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);

  // 위 방식도 좋지만, 결국은 movie와 video가 모두 끝나야 페이지가 나온다는 단점이 있음.
  // 컴포넌트를 나눠서 처리하면 먼저 fetch가 끝나는 컴포넌트 먼저 보여줄 수 있다
  // 만약 Loading 화면을 보여주려면 Suspense를 사용

  return (
    <div>
      <Suspense fallback={<h2>Loading movie info...</h2>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h2>Loading movie videos...</h2>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
};

export default Page;
