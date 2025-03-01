import { MoviesGrid } from "../components/MoviesGrid";
import { Search } from "../components/Search";

export function MainPage() {
  return (
    <div>
      <Search />
      <MoviesGrid />
    </div>
  );
}