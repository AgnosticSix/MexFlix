import styles from "../pages/Pages.module.css";
import { Link } from "react-router-dom";

export function InfoPage(){
    return(
        <div classname={styles.container}>
            <div classname={styles.title2}>
                <h2>Sobre esta página</h2>
            </div>
            <div classname={styles.info}> 
                <p>Mundo de Películas es una página en donde puedes encontrar fácil y rápidamente información de tus películas favoritas, desde las más populares hasta los clásicos.</p>   

                <p>Nuestra información proviene de la página <Link to="https://www.themoviedb.org/">https://www.themoviedb.org/</Link></p>
            </div>
        </div>
    );
}