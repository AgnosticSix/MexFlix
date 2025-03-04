import styles from "./MovieDetails.module.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getMovieInfo } from "../utils/apiMovies";
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';

export function MovieOpt() {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const [valTitle, setValue] = useState(''); 
 
  
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
        <div className="card flex justify-content-center">
            <Card title="Info">
                <img
                className={`${styles.col} ${styles.movieImage}`}
                src={imageUrl}
                alt={movie.title}
                />
                <div className={`${styles.col} ${styles.movieDetails}`}>
                    <p>
                        <strong>Título: </strong> <InputText value={valTitle} onChange={(e) => setValue(e.target.value)} />
                    </p>        
                    <p>
                        <strong>Título original: </strong> <InputText name="or_title" value={movie.original_title} />
                    </p>
                    <p>
                        <strong>País de origen: </strong> <InputText name="country" value={movie.origin_country} />
                    </p>           
                    <p>
                        <strong>Géneros:</strong><InputText name="genres" value={movie.genres.map((genre) => genre.name).join(", ")} />
                       
                    </p>          
                    <p className={styles.description}>
                        <strong>Descripción: </strong> <InputTextarea name="overview" value={movie.overview} rows={5} cols={30} />
                    </p>     
                </div>
            </Card>
        </div>
    );
}