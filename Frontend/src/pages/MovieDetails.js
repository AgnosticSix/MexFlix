import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getMovieInfo } from "../utils/apiMovies";
import styles from "./MovieDetails.module.css";

export function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  //Traer información de la película
  useEffect(() => {
    getMovieInfo("/movie/" + movieId + "?language=es-MX").then((data) => {
      setMovie(data);
    });
  }, [movieId]);

  if (!movie)  {
    return null;
  }  

  const imageUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
  return (
    <div className={styles.detailsContainer}>
      <img
        className={`${styles.col} ${styles.movieImage}`}
        src={imageUrl}
        alt={movie.title}
      />
      <div className={`${styles.col} ${styles.movieDetails}`}>
        <p>
          <strong>Título: </strong> {movie.original_title}
        </p>        
        <p>
          <strong>Título original: </strong> {movie.original_title}
        </p>
        <p>
          <strong>País de origen: </strong> {movie.origin_country}
        </p>           
        <p>
          <strong>Géneros:</strong>{" "}
          {movie.genres.map((genre) => genre.name).join(", ")}
        </p>          
        <p className={styles.description}>
          <strong>Descripción: </strong> {movie.overview}
        </p>     
      </div>
    </div>
  );
}