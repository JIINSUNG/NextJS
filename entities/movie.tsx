"use client";
import Link from "next/link";
import styles from "../styles/movie.module.css";
import { useRouter } from "next/navigation";

interface IMovieProps {
  title: string;
  id: number;
  poster_path: string;
}

const Movie = ({ title, id, poster_path }: IMovieProps) => {
  const router = useRouter();
  const onClick = () => {
    router.push(`/movie/${id}`);
  };
  return (
    <div key={id} className={styles.movie}>
      <img src={poster_path} alt={title} onClick={onClick} />
      <Link prefetch href={`/movie/${id}`} className={styles.Link}>
        {title}
      </Link>
      {/* prefetch option을 설정하면 페이지들을 미리 로드함 클릭하기도 전에! +*/}
    </div>
  );
};

export default Movie;
