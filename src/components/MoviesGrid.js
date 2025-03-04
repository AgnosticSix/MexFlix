import { useEffect, useState } from "react";
import { getMovieInfo } from "../utils/apiMovies";
import { MovieCard } from "./MovieCard";
import styles from "./MoviesGrid.module.css";
import { useQuery } from "../utils/useQuery";
import { Paginator } from 'primereact/paginator';

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

  const [first, setFirst] = useState(0);

  const onPageChange = (event) => {
      setFirst(event.first);
  };

  return (
    <div>       
        <div className={styles.card}>
            {movies.slice(first, first + 1).map((movie) => (<MovieCard key={movie.id} movie={movie} />))}
        </div>   
        <Paginator 
          className={styles.pages}
          first={first} 
          rows={1} 
          totalRecords={movies.length} 
          onPageChange={onPageChange} 
          template="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink" />  
    </div>
  );
}