import { useEffect, useState } from "react";
import { getMovieInfo } from "../utils/apiMovies";
import { MovieCard } from "./MovieCard";
import styles from "./MoviesGrid.module.css";
import { useQuery } from "../utils/useQuery";

export function MoviesGrid() {
  const [movies, setMovies] = useState([]);

  const query = useQuery();
  const search = query.get("search");

  useEffect(() => {
    const searchUrl = search
      ? "/search/movie?query=" + search
      : "/discover/movie";
    getMovieInfo(searchUrl).then((data) => {
      setMovies(data.results);
    });
  }, [search]);

  return (
    <ul className={styles.moviesGrid}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}