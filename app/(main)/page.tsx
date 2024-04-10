// 폴더명에 ()를 넣으면 경로 설정시 폴더명을 무시한다
// app/(main)/page.tsx -> app/page.tsx 와 동일
import { API_URL } from "../../constant";
import Movie from "../../entities/movie";
import styles from "../../styles/home.module.css";

// 클라이언트 사이드 랜더링
// const [movies, setMovies] = useState([]);
// const [isLoading, setIsLoading] = useState(true);
// useEffect(() => {
//   getMovies();
// }, []);

// const getMovies = async () => {
//   const response = await fetch(
//     "https://nomad-movies.nomadcoders.workers.dev/movies"
//   ).then((response) => response.json());
//   setMovies(response);
//   setIsLoading(false);
// };

// metaData는 서버사이드 랜더링에서만 사용 가능
export const metaData = {
  title: "Main",
  description: "List of movies",
};

async function getMovies() {
  // 의도적으로 1초를 기다림, 1초동안 페이지가 뜨지 않고 데이터를 받아올때까지 기다린 이후 페이지가 뜨는 것을 확인할 수 있음
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(API_URL).then((response) => response.json());
  return response;
}

// SSR방식에선 Page에 async를 붙여주면 끝 useState, useEffect를 사용할 필요가 없다
// 기본적으로 Next.js는 캐싱을 하기 때문에 첫번째 호출시에만 데이터를 가져오고 이후부턴 새로고침을 해도 데이터를 가져오지 않는다
const Page = async () => {
  const movies = await getMovies();
  return (
    <div className={styles.container}>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          poster_path={movie.poster_path}
          title={movie.title}
        />
      ))}
    </div>
  );
};

export default Page;
