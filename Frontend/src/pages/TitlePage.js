import styles from "../pages/Pages.module.css";

export function TitlePage() {
    return(
        <header>
            <hr></hr>
                <h1 className={styles.title}>EL MUNDO DE LAS PELÍCULAS</h1>
                <p><h3  className={styles.title2}>La información de tus películas favoritas fácil y rápido</h3></p>
            <hr></hr>            
        </header>  
    );    
}