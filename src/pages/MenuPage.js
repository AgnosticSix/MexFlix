import styles from "../pages/Pages.module.css";
import { Link } from "react-router-dom";
import { Button } from 'primereact/button';

export function MenuPage(){
    return(
        <div>
            <header classname={styles.headMenu}>
                <div>
                    <Button variant="contained" href="#contained-buttons">
                        <Link to="/">Página principal</Link>
                    </Button>                   
                </div>                        
            </header>                      
        </div>
    );
}