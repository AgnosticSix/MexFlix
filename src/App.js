import { Routes, Route } from "react-router-dom";
import { MovieDetails } from "./pages/MovieDetails";
import { MainPage } from "./pages/MainPage";
import { TitlePage } from "./pages/TitlePage";
import { MenuPage } from "./pages/MenuPage";
import { InfoPage } from "./pages/InfoPage";

function App() {
  return ( 
    <div>
      < TitlePage />  
      < MenuPage />  
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
        <Route path="/info" element={<InfoPage />} />
      </Routes>
    </div>
  );
}

export default App;