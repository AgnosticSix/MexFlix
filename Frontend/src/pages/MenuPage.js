import styles from "../pages/Pages.module.css";
import { Link } from "react-router-dom";

export function MenuPage(){
    return(
        <div>
            <header classname={styles.headMenu}>
                <nav>
                    <ul>          
                        <li><Link to="/">Página principal</Link></li>
                        <li><Link to="info">Información</Link></li>
                    </ul>
                </nav>
            </header>                      
        </div>
    );
}